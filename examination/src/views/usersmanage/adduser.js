import React, { useState, useEffect } from 'react';
import { connect } from 'dva';
import './addusers.scss'
import { Form, Icon, Input, Button, message, Select, Radio } from 'antd';
function AddUser(props) {
    if (props.update_User === 1) {
        message.success('更新成功')
    }
    //表单验证
    const { getFieldDecorator } = props.form;
    //切换
    function callback(key) {
        console.log(key);
    }
    //点击切换换内容
    let [flag, changeBtn] = useState('user')
    let handleBtnChange = (e) => {
        changeBtn(e.target.value)
    }
    //处理表单提交
    let handleSubmit = () => {
        props.form.validateFields((err, values) => {
            if (!err) {
                if (flag === 'user') {
                    props.AddUser({ user_name: values.username, user_pwd: values.password })
                } else if (flag === 'update') {
                    console.log(values.user_id)
                    props.UpdateUser({ user_id: values.user_id, user_name: values.username, user_pwd: values.password })
                }
            }
        });
    };
    useEffect(() => {
        // console.log(props)
        props.SelectRankId()
        //更新用户
        //    props.UpdateUser()

    }, [])
    // console.log(props)
    const { Option } = Select
    return (
        <div className="addUser">
            <div>
                <Radio.Group value={flag} onChange={handleBtnChange}>
                    <Radio.Button value="user">添加用户</Radio.Button>
                    <Radio.Button value="update">更新用户</Radio.Button>
                </Radio.Group>
            </div>
            <div>
                <div>
                    <Form onSubmit={handleSubmit}>
                        <div>
                            {flag === 'update' ? <Form.Item>
                                {getFieldDecorator('user_id', {
                                    initialValue: "请选择身份ID"
                                })(
                                    <Select style={{ width: 200 }}>
                                        {
                                            props.rankid.length > 0 ? props.rankid.map((item, index) => {
                                                return <Option value={item.user_id} key={item.user_id} >{item.user_name}</Option>
                                            }) : null
                                        }
                                    </Select>,
                                )}
                            </Form.Item> : null}
                            <Form.Item>
                                {getFieldDecorator('username', {
                                    validateFirst: "onBlur",
                                    rules: [
                                        { required: true, message: 'Please input your username!' },

                                    ],
                                })(
                                    <Input
                                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        placeholder="Username"
                                    />,
                                )}
                            </Form.Item>
                            <Form.Item>
                                {getFieldDecorator('password', {
                                    validateFirst: 'onBlur',
                                    rules: [
                                        { required: true, message: 'Please input your Password!' },
                                        { pattern: /^(?![^a-zA-Z]+$)(?!\D+$)/, message: '不符' }
                                    ],
                                })(
                                    <Input
                                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        type="password"
                                        placeholder="Password"
                                    />,
                                )}
                            </Form.Item>
                            <Form.Item>
                                {getFieldDecorator('questions_type_id', {
                                    initialValue: "请选择身份ID"
                                })(
                                    <Select style={{ width: 200 }}>
                                        {
                                            props.rankid.length > 0 ? props.rankid.map((item, index) => {
                                                return <Option value={item.identity_id} key={item.identity_id} >{item.identity_text}</Option>
                                            }) : null
                                        }
                                    </Select>,
                                )}
                            </Form.Item>
                        </div>
                        <div>
                            <Button style={{ width: 120, marginRight: 20 }} htmlType="submit" type="button">
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

AddUser.propTypes = {
};
let mapStateProps = (state) => {
    return {
        ...state,
        ...state.AddUser,
        ...state.SelectRankId,
        ...state.UpdateUser
    }
}
let mapDispatchProps = (dispatch) => {
    return {
        //添加用户
        AddUser(payload) {
            dispatch({
                type: 'AddUser/AddUser',
                payload
            })
        },
        //选择身份id
        SelectRankId() {
            dispatch({
                type: 'AddUser/SelectRankId',
            })
        },
        //更新用户
        UpdateUser(payload) {
            console.log(payload)
            dispatch({
                type: 'AddUser/UpdateUser',
                payload
            })
        },


    }
}
export default connect(mapStateProps, mapDispatchProps)(Form.create()(AddUser));
