import React, { useState, useEffect } from 'react';
import { connect } from 'dva';
import { Layout, Menu, Dropdown, Modal,Spin} from 'antd'; //Breadcrumb
import { Route, Switch,Redirect } from 'dva/router';
import MenuList from '@/components/Menu';
import styles from './IndexPage.scss';
import { injectIntl } from 'react-intl';
import axios from 'axios';
// const { Header, Content, Footer, Sider } = Layout;
const { Sider,Content, } = Layout;
// const { SubMenu } = Menu;
function IndexPage(props) {

  // if (!props.myView.length){
  //   return null;
  // }

  console.log('~~~~~~~~~~~~~~~~~~~~~~~~', props)
  // console.log('********************',props.userInfo)
  const [adddialog, visitydialog] = useState(false); // 点击个中心显示弹框
  let { user_name, avatar, user_id } = props.userInfo;

  console.log(user_name, avatar, user_id)
  const [useravatar, setavatar] = useState('');


  //  visitydialog(true)
  //  点击个人中心
  const click = (e) => {
    // console.log(e);
    const key = e.key * 1;
    console.log(key)
    switch (key) {
      case 0:
        visitydialog(true)
        break;
      // case 1:
      //   break;
      default:
        break;
    }
  }
    // let form = new FormData();
    // form.append(e.target.files[0]);

  // 点击头像
  const uploadPhoto = (e) => {
    console.log(e)
    let reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = function () {
      axios.post('http://123.206.55.50:11000/upload_base64', { base64: this.result }).then(res => {
        console.log(res)
        if (res.data.code === 1) {
          console.log('///////////////', res.data.data.path)
          setavatar(res.data.data.path);
        }
      });
    }
  }

  useEffect(() => {
     props.getUserInfo() // 用户信息
     props.uploadPics() // 更改头像
    //  props.authority()
     console.log(props)
  }, [])

  //  点击确定和取消
  const hideModal = (c) => {
    console.log(c)
    console.log(useravatar)
    if (c === 'a') { //确定
      console.log(699);
      if (useravatar === "") {
        return
      }
      // props.getUserInfo({ user_id: user_id, avatar: useravatar }) // 用户信息
      visitydialog(false);
    } else {
      visitydialog(false);
    }
  }

  let menu = (
    <Menu onClick={click}>
      <Menu.Item key="0">
        <a target="_blank">
          个人中心
       </a>
      </Menu.Item>
      <Menu.Item key="1">
        <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
          我的班级
      </a>
      </Menu.Item>
      <Menu.Item key="2">
        <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
          设置
      </a>
      </Menu.Item>
      <Menu.Item key="3">
        <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
          退出登录
      </a>
      </Menu.Item>
    </Menu>
  )
  return (
    <div className={styles.wrap}>
      <Modal
        className="modals"
        title="个人中心"
        visible={adddialog}
        onOk={() => hideModal('a')}
        onCancel={() => hideModal('b')}
        okText="确认"
        cancelText="取消"
      >
        <div className={styles.avatar}>
          <p>
            <span></span> 上传图片
            <img src="https://cdn.nlark.com/yuque/0/2019/png/anonymous/1547609339813-e4e49227-157c-452d-be7e-408ca8654ffe.png?x-oss-process=image/resize,m_fill,w_48,h_48/format,png" alt="" />
            <input type="file" onChange={(e) => uploadPhoto(e)}
              style={{ width: 60, height: 40, opacity: 0, zIndex: 2 }} />
          </p>
        </div>
        <div className={styles.user}>用户名:<span>chenmanjie</span></div>
        <div>身份权限</div>
      </Modal>
       {props.global?<div className={styles.loading}><Spin/></div>: null}
      <div className={styles.header}>
        <div className={styles.leftheader}>
          <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551624718911&di=4a7004f8d71bd8da84d4eadf1b59e689&imgtype=0&src=http%3A%2F%2Fimg105.job1001.com%2Fupload%2Falbum%2F2014-10-15%2F1413365052_95IE3msH.jpg" alt="" />
          <button onClick={()=>props.changeLocale(props.intl.locale==='en'?'zh':'en')}>{props.intl.locale==='en'?'中文':'英文'}</button>
        </div>

        <Dropdown overlay={menu} className={styles.rightheader}>
          <a href="javascript" className='ant-dropdown-link'>
            <img src="https://cdn.nlark.com/yuque/0/2019/png/anonymous/1547609339813-e4e49227-157c-452d-be7e-408ca8654ffe.png?x-oss-process=image/resize,m_fill,w_48,h_48/format,png" alt="" />
            <span>chenmanjie</span>
          </a>
        </Dropdown>

      </div>

      <div className={styles.content}>
        <div className={styles.left}>
          <Layout style={{ minHeight: '100vh' }}>
             {/* 侧边栏 */}
            <Sider>
              {/* <div className="logo" /> */}
              <MenuList />
             </Sider>
          </Layout>
        </div>
        <div className={styles.right}>
          <Content>
          <Switch>
          <Redirect from="/index" exact to="/index/addQuestions"/>
          {/* 配置用户拥有的路由 */}
          {
            props.myView.map(item=>{
              return item.children.map(value=>{
                return <Route key={value.name} path={value.path} component={value.component}></Route>
              })
            })
          }

          {/* 配置用户禁止访问的路由 */}
          {
            // console.log("185...",props.forbiddenView)
            props.forbiddenView.map(item=>{
              return <Redirect key={item.path} from={item.path} to="/403"></Redirect>
            })
          }

          {/* 配置不存在的路由 */}
          {/* <Redirect to="/404" ></Redirect> */}
        </Switch>
          </Content>
        </div>
      </div>
   </div>
  );
}

const mapStateToProps = (state) => {
  console.log("1111",state)
  return {
    ...state.login,
    myView: state.login.myView,
    forbiddenView: state.login.forbiddenView
    // ...state.login
  }
}

const mapDispatchToProps = dispatch => {
  return {
    changeLocale: payload => {
      dispatch({
        type: 'global/updataLocale',
        payload
      })
    },
    // 获取用户信息
    getUserInfo: payload => {
      dispatch({  //  getUserInfo
        type: 'login/getUserInfo',
        payload
      })
    },
    // 上传图片
    uploadPics: payload => { //  上传图片 改变头像
      dispatch({
        type: "login/uploadPictures",
        payload
      })
    },
    // authority:()=>{
    //   dispatch({
    //     type:"login/authority"

    //   })
    // }
  }
}

export default injectIntl(connect(mapStateToProps, mapDispatchToProps)(IndexPage));

//北京八维研修学院

/* <div className={styles.modal}>
    <Modal
      className="modals"
      visible={adddialog}
      onOk={()=>hideModal('a')}
      onCancel={()=>hideModal('b')}
      okText="确认"
      cancelText="取消"
    >
      <span onClick={clickimg}>
          <img src="https://cdn.nlark.com/yuque/0/2019/png/anonymous/1547609339813-e4e49227-157c-452d-be7e-408ca8654ffe.png?x-oss-process=image/resize,m_fill,w_48,h_48/format,png" alt="" />
      </span>
      <span>chenmanjie</span>
    </Modal>
 </div>
  const [adddialog,visitydialog] = useState(false)
  const click =()=>{
     visitydialog(true)
  }

 */


// {adddialog && <div className={styles.mask}>
// <div className={styles.content}>
//  <span onClick={clickimg}>
//      <img src="https://cdn.nlark.com/yuque/0/2019/png/anonymous/1547609339813-e4e49227-157c-452d-be7e-408ca8654ffe.png?x-oss-process=image/resize,m_fill,w_48,h_48/format,png" alt="" />
//   </span>
//   <span>chenmanjie</span>
// </div> 

// </div>}

// { avatar ? <img src={avatar} alt="" /> :<img src="https://cdn.nlark.com/yuque/0/2019/png/anonymous/1547609339813-e4e49227-157c-452d-be7e-408ca8654ffe.png?x-oss-process=image/resize,m_fill,w_48,h_48/format,png" alt="" />}
// <span>chenmanjie</span>