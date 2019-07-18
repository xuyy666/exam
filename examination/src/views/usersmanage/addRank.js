import React, { useEffect } from 'react';
import { connect } from 'dva';
import './addusers.scss'
import { Form, Icon, Input, Button, message, Radio } from 'antd';
function addRank(props) {
    //表单验证
    const { getFieldDecorator } = props.form;
    //切换
    // function callback(key) {
    //   console.log(key);
    // }
    //处理表单提交
    let handleSubmit = () => {
        props.form.validateFields((err, values) => {
            if (!err) {
                console.log(values)
                props.AddTheRank({ identity_text: values.identity_text })
            }
        });
    };
    useEffect(() => {
        if (props.success === 1) {
            message.success('添加成功')
        }
    })
    return (
        <div className="addRank">
            <div>
                <Radio.Group value='rank'>
                    <Radio.Button value="rank">添加身份</Radio.Button>
                </Radio.Group>
            </div>
            <div>
                <div>
                    <Form onSubmit={handleSubmit}>
                        <div>
                            <Form.Item>
                                {getFieldDecorator('identity_text', {
                                    validateFirst: "onBlur",
                                    rules: [
                                        { required: true, message: 'Please input your username!' },
                                        { min: 3, max: 15, message: "6到15位组成" }
                                    ],
                                })(
                                    <Input
                                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        placeholder="请输入身份名称"
                                    />
                                )}
                            </Form.Item>
                        </div>
                        <div className="AddUser_user_Btn">
                            <Button style={{ width: 120, marginRight: 20 }} htmlType="submit" type="button" className='ant-btn ant-btn-primary AddUser-btn'>
                                确定
                    </Button>
                            <Button>重置</Button>
                        </div>
                    </Form>
                </div>
            </div>
        </div>

    );
}

addRank.propTypes = {
};
let mapStateProps = (state) => {
    return {
        ...state,
        ...state.AddTheRank
    }
}
let mapDispatchProps = (dispatch) => {
    return {
        AddTheRank(payload) {
            dispatch({
                type: "AddUser/AddTheRank",
                payload
            })
        }
    }
}
export default connect(mapStateProps, mapDispatchProps)(Form.create()(addRank));
