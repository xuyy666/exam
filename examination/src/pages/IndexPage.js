import React, { useState, useEffect } from 'react';
import { connect } from 'dva';
import { Layout, Menu, Icon,Redirect } from 'antd'; //Breadcrumb
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
import {injectIntl} from 'react-intl';
// const { Header, Content, Footer, Sider } = Layout;
// const { Sider } = Layout;
// const { SubMenu } = Menu;
function IndexPage(props) {
  console.log(props)

 
  return (
    // <div className={styles.wrap}>
    //   <div className={styles.header}>
    //     {/* <div> */}
    //     <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551624718911&di=4a7004f8d71bd8da84d4eadf1b59e689&imgtype=0&src=http%3A%2F%2Fimg105.job1001.com%2Fupload%2Falbum%2F2014-10-15%2F1413365052_95IE3msH.jpg" alt="" />
    //     {/* </div> */}
    //     <div>
    //       <button onClick={()=>changeLocale(props.intl.locale='en'?'英文':'中文')}>{props.intl.locale='en'?'英文':'中文'}</button>
    //       <span>头像</span>
    //       <span>用户名</span>
    //     </div>
    //   </div>
    //    <div className={styles.content}>
    //     <div className={styles.left}>
    //       <Layout style={{ minHeight: '100vh' }}>
    //         <Sider>
    //           <div className="logo" />
    //           <Menu theme="dark"  
    //           defaultOpenKeys={['1']}
    //             defaultSelectedKeys={['1']} 
    //             mode="inline">
    //             {
    //               props.myView.map(item=>(
    //                 <SubMenu
    //               key={item.path}
    //               title={
    //                 <span>
    //                   <Icon type="laptop" />
    //                   <span>{props.intl.formatMessage({id:item.name})}</span>
    //                 </span>
    //               }
    //             >
    //               {
    //                 item.children.map(value=>(
    //                   <Menu.Item key={value.path}><NavLink to={value.path}>{props.intl.formatMessage({id:value.name})}</NavLink></Menu.Item>
    //                 ))
    //               }
                  
    //             </SubMenu>
    //               ))
    //             }
            
    //           </Menu>
    //         </Sider>
    //       </Layout>
    //     </div>
    //     <div className={styles.right}>
    //       <div>
    //         <Redirect from="/" exact to="/index" />
    //         <Route path="/index/addquestion" component={Addquestion} />
    //         <Route path="/index/questionclassifiy" component={Questionclassifiy} />
    //         <Route path="/index/lookquestion" component={Lookquestion} />
    //         <Route path="/index/addusers" component={Addusers} />
    //         <Route path="/index/usershow" component={Usershow} />
    //         <Route path="/index/addexam" component={Addexam} />
    //         <Route path="/index/examlist" component={Examlist} />
    //         <Route path="/index/grademanage" component={Grademanage} />
    //         <Route path="/index/classroomanage" component={Classroomanage} />
    //         <Route path="/index/studentmanage" component={Studentmanage} />
    //         <Route path="/index/awaitingapp" component={Awaitingapp} />
    //         <Route path="/index/itemdetails/:id" component={Itemdetails} />
    //         <Route path="/index/edititem/:id" component={Edititem} />


    //         <Route path="/403" render={props=>{
    //           return <p>你无权访问当前页面</p>
    //         }}></Route>
    //         <Route path="/404" render={props=>{
    //           return <p>当前页面不存在</p>
    //         }}></Route>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  <div></div>
  );
}

IndexPage.propTypes = {

};
const mapStateToProps = state=>{
  console.log(state)
  return {
    myView: state.login.myView
  }
}
  const mapDispatchToProps=dispatch=>{
    return{
      changeLocale:payload=>{
        dispatch({
          type:'global/updataLocale',
          payload
        })
      },
    }
  }
export default injectIntl(connect(mapStateToProps,mapDispatchToProps)(IndexPage));

//北京八维研修学院

