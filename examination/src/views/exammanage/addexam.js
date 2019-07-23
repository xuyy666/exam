import React, { useEffect } from 'react'; // useState
import { connect } from 'dva';
import styles from './addexam.scss'
import { Form, Input, Button, Select, InputNumber, DatePicker } from 'antd';
import locale from 'antd/lib/date-picker/locale/zh_CN';
const { Option } = Select;
// const { RangePicker } = DatePicker;

function Addexam(props) {
    console.log(props, '7777777777777')

    useEffect(() => {
        props.lookquestionExam()
        props.lookquestionMenu()
        // props.createExam()
    }, [])

    let { isLookquestionExam } = props.look
    let { isLookquestionMenu } = props.look
    //   let {iscreateExam}=props.look
    // 题目数量

    let handleSubmit = e => {
        e.preventDefault();
        props.form.validateFields((err, values) => {
            if (!err) {
                values.start_time = +values.start_time;
                values.end_time = +values.end_time
                values.number = values.number * 1
                // console.log(values)
                props.history.push({ pathname: './addexamT', params: values })
            }
        });
    }
    const { getFieldDecorator } = props.form;
    return (
        <div className={styles.AddExam}>
            <h2>班级管理</h2>
            <div className={styles.addexam_cont}>
                <Form onSubmit={handleSubmit} className="login-form">
                    <div>
                        <Form.Item label="试卷名称：">
                            {getFieldDecorator('title', {

                            })(
                                <Input
                                    style={{ width: '40%', height: 50 }}
                                />,
                            )}
                        </Form.Item>
                    </div>
                    <div>
                        <Form.Item label="选择考试类型：">
                            {getFieldDecorator('exam_id', {

                            })(
                                <Select defaultValue="考试类型" style={{ width: 120 }}>
                                    {
                                        isLookquestionExam && isLookquestionExam.map(item => (
                                            <Option value={item.questions_type_id} key={item.questions_type_id}>{item.questions_type_text}</Option>
                                        ))
                                    }
                                </Select>
                            )}
                        </Form.Item>
                    </div>
                    <div>
                        <Form.Item label="选择课程：：">
                            {getFieldDecorator('subject_id', {

                            })(
                                <Select defaultValue="选择课程" style={{ width: 120 }}>
                                    {
                                        isLookquestionMenu && isLookquestionMenu.map(item => (
                                            <Option value={item.exam_id} key={item.exam_id}>{item.exam_name}</Option>
                                        ))
                                    }
                                </Select>
                            )}
                        </Form.Item>
                    </div>
                    <div>
                        <Form.Item label="设置题量：">
                            {getFieldDecorator('number', {
                                initialValue: 4
                            })(
                                <InputNumber min={3} max={10} style={{ width: 120 }} />,
                            )}
                        </Form.Item>
                    </div>
                    <div>
                        <Form.Item label="考试时间：：">
                            <Form.Item style={{ display: 'inline-block' }}>
                                {getFieldDecorator('start_time', {
                                    rules: [{ required: true, message: '请选择开始时间!' }],
                                })(
                                    <DatePicker placeholder="开始时间"
                                        format="YYYY-MM-DD HH:mm"
                                        showTime={{ format: 'HH:mm' }}
                                        locale={locale}
                                    />
                                )}
                            </Form.Item>
                            <span style={{ display: 'inline-block', width: '24px', textAlign: 'center' }}>-</span>
                            <Form.Item style={{ display: 'inline-block' }}>
                                {getFieldDecorator('end_time', {
                                    rules: [{ required: true, message: '请选择结束时间!' }],
                                })(
                                    <DatePicker placeholder="结束时间"
                                        format="YYYY-MM-DD HH:mm"
                                        showTime={{ format: 'HH:mm' }}
                                        locale={locale}
                                    />
                                )}
                            </Form.Item>
                        </Form.Item>

                    </div>
                    <Button type="primary" htmlType="submit" className="login-form-button" style={{ width: 200, height: 50, fontSize: 25 }}>
                        创建试卷
            </Button>
                </Form>
            </div>
        </div>

    )
}

Addexam.propTypes = {

};
const mapState = (state) => {
    console.log(state, '33333333333333')
    return {
        ...state,
        ...state.isLookquestionExam,
        ...state.isLookquestionMenu,
        //...state.iscreateExam
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        //获取考试类型
        lookquestionExam: payload => {
            dispatch({
                type: "look/lookquestionExam",
            })
        },
        //获取课程类型
        lookquestionMenu: payload => {
            dispatch({
                type: "look/lookquestionMenu",
            })
        },
        //添加考试
        // createExam: payload => {
        //   dispatch({
        //     type: "look/createExam",
        //     payload
        //   })
        // },

    }
}


export default connect(mapState, mapDispatchToProps)(Form.create()(Addexam));