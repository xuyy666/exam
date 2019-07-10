import React, { useEffect } from 'react'; // useState
import { connect } from 'dva';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import styles from './IndexPage.scss';

function LoginPage(props) {
  console.log('props...', props)
  // 模拟componentDidMount
  useEffect(() => {
    console.log('执行useEffect')
    props.login({ user_name: "chenmanjie", user_pwd: "Chenmanjie123!" });

  }, [])

  let login =()=>{
    console.log(props);
    props.history.push('/index')
  }

  // 处理表单提交
  let handleSubmit = () => {
    props.form.validateFields((err, values) => {
      console.log(values)
      if (!err) {
        props.login({ user_name: values.username, user_pwd: values.password });
        console.log('Received values of form: ', values);
      }
    });
  }
  // 从from的高阶组价中拿到效验组件
  const { getFieldDecorator } = props.form;
  return (
    <div className="login">
      <p className={styles.title}>登录页面</p>
      <Form onSubmit={handleSubmit} className="login-form">
        <Form.Item>
          {getFieldDecorator('username', {
            validateTrigger: "onBlur",
            rules: [
              { required: true, message: 'Please input your username!' },
              { min: 6, max: 15, message: 'Please input your correct username!' },
            ],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="请输入用户名"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            validateTrigger: "onBlur",
            rules: [
              { required: true, message: 'Please input your username!' },
              { pattern: /^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?\d)(?=.*?[#@*&.])[a-zA-Z\d#@*&.]*$/, message: 'Please input your correct username!' },
            ],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="请输入密码"
            />
          )}
        </Form.Item>
        <Form.Item>
          <Checkbox>记住密码</Checkbox>
          <a className="login-form-forgot" href="">
            忘记密码
            </a>
          <Button type="primary" htmlType="submit" className="login-form-button" onClick={login}>
               登录
          </Button>
          
        </Form.Item>
      </Form>
    </div>
  );
}

LoginPage.propTypes = {

};

const mapState = (state) => {
  return { ...state.login }
}
const mapDispatchToProps = (dispatch) => {
  return {
    login: payload => {
      dispatch({
        type: "login/login",//  前面的是login//命名空间 namespace: 'login',   后面的login的方法// 异步操作 effects:{ *login({ payload , type },{call,put}){}
        payload
      })
    }
  }
}

export default connect(mapState, mapDispatchToProps)(Form.create()(LoginPage));


/* <div className={styles.normal}>
      <h1 className={styles.title}>Yay! Welcome to dva!</h1>
      <div className={styles.welcome} />
      <ul className={styles.list}>
        <li>To get started, edit <code>src/index.js</code> and save to reload.</li>
        <li><a href="https://github.com/dvajs/dva-docs/blob/master/v1/en-us/getting-started.md">Getting Started</a></li>
      </ul>
    </div> */
