
import React, { useEffect,useState } from 'react';
import { connect } from 'dva';
import style from './classroomanage.scss'
import { Button, Modal, Form, Input, Radio, Table, Divider, Tag, message, Select } from 'antd';
import {injectIntl} from 'react-intl';

function Classroomanage(props) {
    const { Column, ColumnGroup } = Table;
    const { getFieldDecorator } = props.form;
    const { Option } = Select;
    const { confirm } = Modal;
    useEffect(() => {
        props.graderoom()//获取所有教室
    }, [])
     //点击添加教室的按钮
     let showModal = () => {
        changeVisible(true);
    };
    //改变的弹框的显示隐藏
    const [visible, changeVisible] = useState(false);
    //点击弹框的取消按钮
    let handleCancel = () => {
        changeVisible(false);
    };
    //表单提交
    let handleOk = () => {
        props.form.validateFields((err, values) => {
            if (!err) {
                props.addClassroom(values)
                changeVisible(false);
            }
        });
    };
    function showConfirm(data) {
        confirm({
          title: '删除',
          content: '确定删除吗？',
          onOk() {
            props.delClassroom({room_id:data.room_id})
          },
          onCancel() {
          },
        });
    }
    return (
        <div className={style.question_box}>
            <header className={style.question_header}>
                <h2>教师管理</h2>
            </header>
            <section className={style.question_main}>
                <div className={style.question_main_Add}>
                    <div>
                        <Button type="primary" onClick={()=>{showModal()}} style={{ width: 200, height: 50, background: '#446DFF', fontSize: 18 }} >
                            + 添加教室
                        </Button>
                        <Modal
                            visible={visible}
                            title="添加教室"
                            onCancel={() => handleCancel(false)}
                            onOk={() => handleOk()}
                        >
                            <Form onSubmit={handleOk}>
                                <Form.Item label="班级名：">
                                    {getFieldDecorator('room_text', {
                                        rules: [{ required: true, message: '请输入试题类型!' }],
                                    })(
                                        <Input
                                            placeholder="班级名："
                                        />,
                                    )}
                                </Form.Item>
                            </Form>
                        </Modal>
                    </div>
                </div>
                <div className={style.question_main_list}>
                    <Table dataSource={props.room} rowKey="room_id" style={{ fontSize: 25 }}>
                        <Column title="教室号" dataIndex="room_text" rowKey="room_id" />
                        <Column
                            title="操作"
                            key="action"
                            render={(text, record) => (
                                <span>
                                    <a href="javascript:;" onClick={() => {showConfirm(text)}}>删除</a>
                                </span>
                            )}
                        />
                    </Table>
                </div>
            </section>
        </div>
    );
}

Classroomanage.propTypes = {
};
const mapToProps = state => {
    return { ...state, ...state.ClassManage }
}
const mapDispatchToProps = (dispatch) => {
    return {
        //获取所有教室
        graderoom: () => {
            dispatch({
                type: 'grade/graderoom'
            })
        },
        //添加教室
        addroom:payload=>{
            dispatch({
                type:'grade/addroom',
                payload
            })
        },
        //删除教室
        delroom:payload=>{
            dispatch({
                type:'grade/delroom',
                payload
            })
        }
    }
}
export default injectIntl(connect(mapToProps, mapDispatchToProps)(Form.create()(Classroomanage)));
