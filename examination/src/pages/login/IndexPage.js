import React,{useEffect,useState} from 'react';
import { connect } from 'dva';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import './IndexPage.scss';

function IndexPage(props) {
  console.log('props...',props)
  // 模拟componentDidMount
  useEffect(()=>{
    console.log('执行useEffect')
    props.login({user_name:"chenmanjie",user_pwd:"Chenmanjie123!"});

  },[])

  // const { getFieldDecorator } = this.props.form;
  return (
    <div className="login">
      <Form className="login-form">
        <Form.Item>
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="请输入用户名"
            />
        </Form.Item>
        <Form.Item>
        
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="请输入密码"
            />

        </Form.Item>
        <Form.Item>
              <Checkbox>记住密码</Checkbox>
            <a className="login-form-forgot" href="">
              忘记密码
            </a>
            <Button type="primary" htmlType="submit" className="login-form-button">
              登录
            </Button>
            {/* Or <a href="">register now!</a> */}
          </Form.Item>
      </Form>
  </div>
  );
}

IndexPage.propTypes = {

};
const mapState =(state)=>{
  return {...state.login}
}
const mapDispatchToProps = (dispatch)=>{
  return {
      login:payload=>{
        dispatch({
          type:"login/login",//  前面的是login//命名空间 namespace: 'login',   后面的login的方法// 异步操作 effects:{ *login({ payload , type },{call,put}){}
          payload
        })
      }
  }
}

export default connect(mapState,mapDispatchToProps)(IndexPage);


/* <div className={styles.normal}>
      <h1 className={styles.title}>Yay! Welcome to dva!</h1>
      <div className={styles.welcome} />
      <ul className={styles.list}>
        <li>To get started, edit <code>src/index.js</code> and save to reload.</li>
        <li><a href="https://github.com/dvajs/dva-docs/blob/master/v1/en-us/getting-started.md">Getting Started</a></li>
      </ul>
    </div> */
