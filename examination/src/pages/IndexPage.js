import React, { useState, useEffect } from 'react';
import { connect } from 'dva';
import { Layout, Menu, Icon, Dropdown, Modal } from 'antd'; //Breadcrumb
import { Route, NavLink } from 'dva/router';
import styles from './IndexPage.scss';
import Addquestion from '../views/questionmanage/addquestion'//试题管理 添加试题
import Questionclassifiy from '../views/questionmanage/questionclassifiy'//试题管理 试题分类
import Lookquestion from '../views/questionmanage/lookquestion'//试题管理 添加试题
import Addusers from '../views/usersmanage/addusers'; // 用户管理 添加用户
import Usershow from '../views/usersmanage/usershow'; // 用户管理 用户展示
import Addexam from '../views/exammanage/addexam';  // 考试管理 添加考试
import Examlist from '../views/exammanage/examlist'; // 考试管理 考试列表
import Grademanage from '../views/grademanage/grademanage'; // 班级管理 班级管理
import Classroomanage from '../views/grademanage/classroomanage'; // 班级管理 教室管理
import Studentmanage from '../views/grademanage/studentmanage'; // 班级管理 学生管理
import Awaitingapp from '../views/markingmanage/awaitingapp'; // 阅卷管理 待批班级
import Itemdetails from '../views/lookquedetail/questionsdetail'//试题详情
import Edititem from '../views/lookquedetail/edititem' //编辑详情
import PaperDetail from '../views/paperdetail/paperdetail.js'
import { injectIntl } from 'react-intl';
import axios from 'axios';
// const { Header, Content, Footer, Sider } = Layout;
const { Sider } = Layout;
const { SubMenu } = Menu;
function IndexPage(props) {
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
    // console.log(key)
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
  // 点击头像
  const uploadPhoto = (e) => {
    console.log(e)
    // let form = new FormData();
    // form.append(e.target.files[0]);
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

      <div className={styles.header}>
        <div className={styles.leftheader}>
          <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551624718911&di=4a7004f8d71bd8da84d4eadf1b59e689&imgtype=0&src=http%3A%2F%2Fimg105.job1001.com%2Fupload%2Falbum%2F2014-10-15%2F1413365052_95IE3msH.jpg" alt="" />
        </div>
        {/* <div > */}

        <Dropdown overlay={menu} className={styles.rightheader}>
          <a href="#" className='ant-dropdown-link'>
            <img src="https://cdn.nlark.com/yuque/0/2019/png/anonymous/1547609339813-e4e49227-157c-452d-be7e-408ca8654ffe.png?x-oss-process=image/resize,m_fill,w_48,h_48/format,png" alt="" />
            <span>chenmanjie</span>
          </a>
          {/* <Button className={styles.btn}></Button> */}
        </Dropdown>
        {/* </div> */}
      </div>

      <div className={styles.content}>
        <div className={styles.left}>
          <Layout style={{ minHeight: '100vh' }}>
            <Sider>
              <div className="logo" />
              <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                <SubMenu
                  key="sub1"
                  title={
                    <span>
                      <Icon type="laptop" />
                      <span>{props.intl.formatMessage({ id: 'router.questions' })}</span>
                    </span>
                  }
                >
                  <Menu.Item key="3"><NavLink to="/index/addquestion">{props.intl.formatMessage({ id: 'router.questions.add' })}</NavLink></Menu.Item>
                  <Menu.Item key="4"><NavLink to="/index/questionclassifiy">{props.intl.formatMessage({ id: 'router.questions.type' })}</NavLink></Menu.Item>
                  <Menu.Item key="5"><NavLink to="/index/lookquestion">{props.intl.formatMessage({ id: 'router.questions.classify' })}</NavLink></Menu.Item>
                </SubMenu>
                <SubMenu
                  key="sub2"
                  title={
                    <span>
                      <Icon type="user" />
                      <span>{props.intl.formatMessage({ id: 'router.user' })}</span>
                    </span>
                  }
                >
                  <Menu.Item key="6"><NavLink to="/index/addusers">{props.intl.formatMessage({ id: 'router.user.add' })}</NavLink></Menu.Item>
                  <Menu.Item key="8"><NavLink to="/index/usershow">{props.intl.formatMessage({ id: 'router.user.show' })}</NavLink></Menu.Item>
                </SubMenu>
                <SubMenu
                  key="sub3"
                  title={
                    <span>
                      <Icon type="upload" />
                      <span>{props.intl.formatMessage({ id: 'router.exam' })}</span>
                    </span>
                  }
                >
                  <Menu.Item key="9"><NavLink to="/index/addexam">{props.intl.formatMessage({ id: 'router.exam.add' })}</NavLink></Menu.Item>
                  <Menu.Item key="10"><NavLink to="/index/examlist">{props.intl.formatMessage({ id: 'router.exam.list' })}</NavLink></Menu.Item>
                </SubMenu>
                <SubMenu
                  key="sub4"
                  title={
                    <span>
                      <Icon type="file" />
                      <span>{props.intl.formatMessage({ id: 'router.class' })}</span>
                    </span>
                  }
                >
                  <Menu.Item key="11"><NavLink to="/index/grademanage">{props.intl.formatMessage({ id: 'router.class.classi' })}</NavLink></Menu.Item>
                  <Menu.Item key="12"><NavLink to="/index/classroomanage">{props.intl.formatMessage({ id: 'router.class.room' })}</NavLink></Menu.Item>
                  <Menu.Item key="13"><NavLink to="/index/studentmanage">{props.intl.formatMessage({ id: 'router.class.study' })}</NavLink></Menu.Item>
                </SubMenu>
                <SubMenu
                  key="sub5"
                  title={
                    <span>
                      <Icon type="shop" />
                      <span>{props.intl.formatMessage({ id: 'router.juan' })}</span>
                    </span>
                  }
                >
                  <Menu.Item key="14"><NavLink to="/index/awaitingapp">{props.intl.formatMessage({ id: 'router.juan.not' })}</NavLink></Menu.Item>
                </SubMenu>
              </Menu>
            </Sider>
          </Layout>
        </div>
        <div className={styles.right}>
          <div>
            <Route path="/index/addquestion" component={Addquestion} />
            <Route path="/index/questionclassifiy" component={Questionclassifiy} />
            <Route path="/index/lookquestion" component={Lookquestion} />
            <Route path="/index/addusers" component={Addusers} />
            <Route path="/index/usershow" component={Usershow} />
            <Route path="/index/addexam" component={Addexam} />
            <Route path="/index/examlist" component={Examlist} />
            <Route path="/index/grademanage" component={Grademanage} />
            <Route path="/index/classroomanage" component={Classroomanage} />
            <Route path="/index/studentmanage" component={Studentmanage} />
            <Route path="/index/awaitingapp" component={Awaitingapp} />
            <Route path="/index/itemdetails/:id" component={Itemdetails} />
            <Route path="/index/edititem/:id" component={Edititem} />
            <Route path="/index/paperdetail/:id" component={PaperDetail} />
          </div>
        </div>
      </div>
    </div>
  );
}

IndexPage.propTypes = {

};

const mapState = (state) => {
  console.log(state)
  return {
    ...state,
    ...state.login,
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
      // dispatch({  //  getUserInfo
      //   type: 'login/getUserInfo',
      //   payload
      // })
    },
    // 上传图片
    uploadPics: payload => { //  上传图片 改变头像
      dispatch({
        type: "login/uploadPictures",
        payload
      })
    }
  }
}
export default injectIntl(connect(mapState, mapDispatchToProps)(IndexPage));

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