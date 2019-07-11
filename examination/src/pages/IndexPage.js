import React from 'react';
import { connect } from 'dva';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
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
// const { Header, Content, Footer, Sider } = Layout;
const { Sider } = Layout;
const { SubMenu } = Menu;
function IndexPage() {
  // state = {
  //   collapsed: false,
  // };

  // onCollapse = collapsed => {
  //   console.log(collapsed);
  //   this.setState({ collapsed });
  // };
  return (
    <div className={styles.wrap}>
      <div className={styles.header}>
        <div>北京八维研修学院</div>
        <div>头像</div>
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
                      <span>试题管理</span>
                    </span>
                  }
                >
                  <Menu.Item key="3"><NavLink to="/index/addquestion">添加试题</NavLink></Menu.Item>
                  <Menu.Item key="4"><NavLink to="/index/questionclassifiy">试题分类</NavLink></Menu.Item>
                  <Menu.Item key="5"><NavLink to="/index/lookquestion">查看试卷</NavLink></Menu.Item>
                </SubMenu>
                <SubMenu
                  key="sub2"
                  title={
                    <span>
                      <Icon type="user" />
                      <span>用户管理</span>
                    </span>
                  }
                >
                  <Menu.Item key="6"><NavLink to="/index/addusers">添加用户</NavLink></Menu.Item>
                  <Menu.Item key="8"><NavLink to="/index/usershow">用户展示</NavLink></Menu.Item>
                </SubMenu>
                <SubMenu
                  key="sub3"
                  title={
                    <span>
                      <Icon type="upload" />
                      <span>考试管理</span>
                    </span>
                  }
                >
                  <Menu.Item key="9"><NavLink to="/index/addexam">添加考试</NavLink></Menu.Item>
                  <Menu.Item key="10"><NavLink to="/index/examlist">试卷列表</NavLink></Menu.Item>
                </SubMenu>
                <SubMenu
                  key="sub4"
                  title={
                    <span>
                      <Icon type="file" />
                      <span>班级管理</span>
                    </span>
                  }
                >
                  <Menu.Item key="9"><NavLink to="/index/grademanage">班级管理</NavLink></Menu.Item>
                  <Menu.Item key="10"><NavLink to="/index/classroomanage">教室管理</NavLink></Menu.Item>
                  <Menu.Item key="11"><NavLink to="/index/studentmanage">学生管理</NavLink></Menu.Item>
                </SubMenu>
                <SubMenu
                  key="sub5"
                  title={
                    <span>
                      <Icon type="shop" />
                      <span>阅卷管理</span>
                    </span>
                  }
                >
                  <Menu.Item key="12"><NavLink to="/index/awaitingapp">待批班级</NavLink></Menu.Item>
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
          </div>
        </div>
      </div>
    </div>
  );
}

IndexPage.propTypes = {

};

export default connect()(IndexPage);
