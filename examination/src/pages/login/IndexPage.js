import React, { useEffect } from 'react'; // useState
import { connect } from 'dva';
import { Form, Icon, Input, Button, Checkbox, message } from 'antd';
import styles from './IndexPage.scss';
//  登录页面 
function LoginPage(props) {
  console.log('props...', props)
  // 模拟componentDidMount
  // useEffect(() => {
  //   console.log('执行useEffect')
  //   props.login({ user_name: "chenmanjie", user_pwd: "Chenmanjie123!" });
  // }, [])

  //判断是否登录成功
  useEffect(() => {
    console.log(props.isLogin); // -1
    if (props.isLogin === 1) {
       message.success('登录成功');
      let path = '/index';
      if (props.location.search) { // ?redirect=%2F
         path = decodeURIComponent(props.location.search.split('=')[1]);
        // path = decodeURIComponent(props.location.search.slice(1).split('=')[1]);
      }
      console.log('path...', path)
      props.history.push(path)
      // props.history.push('/index')
    } else if (props.isLogin === 0) {
      message.success('用户名或密码错误');
    }

    // props.info()  //  },)  //   },[props.isLogin]) 正确的
  },[props.isLogin])

  // 点击登录页面
  // let login = () => {
  //   console.log(props);
  //   props.history.push('/index')
  // }

  // 处理表单提交    // 相当于点击登录页面
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
    <div className={styles.login}>
      {/* <p className={styles.title}>登录页面</p> */}
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
              {
                pattern: /^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?\d)(?=.*?[!#@*&.])[a-zA-Z\d!#@*&.]*$/
                , message: 'Please input your correct username!'
              },
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
          <Button type="primary" htmlType="submit" className="login-form-button">
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
      console.log(11111111111111111)
      dispatch({
        type: "login/login",//  前面的是login//命名空间 namespace: 'login',   后面的login的方法// 异步操作 effects:{ *login({ payload , type },{call,put}){}
        payload
      })
    },
    // 20:05 注释的
    // info: payload => {
    //   dispatch({
    //     type: "login/getUserInfo",
    //   })
    // }
  }
}

export default connect(mapState, mapDispatchToProps)(Form.create()(LoginPage));
// onClick={login}
//  /^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?\d)(?=.*?[!#@*&.])[a-zA-Z\d!#@*&.]*$/
// /^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?\d)(?=.*?[#@*&.])[a-zA-Z\d#@*&.]*$/

