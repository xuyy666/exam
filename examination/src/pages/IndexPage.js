import React from 'react';
import { connect } from 'dva';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import { Route, NavLink } from 'dva/router';
import styles from './IndexPage.scss';
import Addquestion from '../views/questionmanage/addquestion'
import usersmanage from '../views/usersmanage';
import exammanage from '../views/exammanage';
import grademanage from '../views/grademanage';
import markingmanage from '../views/markingmanage';

const { Header, Content, Footer, Sider } = Layout;
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
          <div>
            {/* <li>试题管理</li>
            <li><NavLink to="/index/addquestion">添加试题</NavLink></li> */}

            {/* <li><NavLink to="/index/usersmanage">用户管理</NavLink></li>
             <li><NavLink to="/index/exammanage">考试管理</NavLink></li>
             <li><NavLink to="/index/grademanage">班级管理</NavLink></li>
             <li><NavLink to="/index/markingmanage">阅卷管理</NavLink></li> */}
          </div>

          <Layout style={{ minHeight: '100vh' }}>
            <Sider collapsible>
              <div className="logo" />
              <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                <SubMenu
                  key="sub1"
                  title={
                    <span>
                      <Icon type="user" />
                      <NavLink to="/index/addquestion">User</NavLink>
                    </span>
                  }
                >
                  <Menu.Item key="3">Tom</Menu.Item>
                  <Menu.Item key="4">Bill</Menu.Item>
                  <Menu.Item key="5">Alex</Menu.Item>
                </SubMenu>
                <SubMenu
                  key="sub2"
                  title={
                    <span>
                      <Icon type="team" />
                      <span>Team</span>
                    </span>
                  }
                >
                  <Menu.Item key="6">Team 1</Menu.Item>
                  <Menu.Item key="8">Team 2</Menu.Item>
                </SubMenu>
                <SubMenu
                  key="sub3"
                  title={
                    <span>
                      <Icon type="team" />
                      <span>Team</span>
                    </span>
                  }
                >
                  <Menu.Item key="9">Team 1</Menu.Item>
                  <Menu.Item key="10">Team 2</Menu.Item>
                </SubMenu>
              </Menu>
            </Sider>
            {/* <Layout>
              <Header style={{ background: '#fff', padding: 0 }} />
              <Content style={{ margin: '0 16px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                  <Breadcrumb.Item>User</Breadcrumb.Item>
                  <Breadcrumb.Item>Bill</Breadcrumb.Item>
                </Breadcrumb>
                <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>Bill is a cat.</div>
              </Content>
              <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout> */}
          </Layout>
        </div>
        <div className={styles.right}>
          <div>
            <Route path="/index/addquestion" component={Addquestion} />
            <Route path="/index/usersmanage" component={usersmanage} />
            <Route path="/index/exammanage" component={exammanage} />
            <Route path="/index/grademanage" component={grademanage} />
            <Route path="/index/markingmanage" component={markingmanage} />
          </div>
        </div>
      </div>
    </div>
  );
}

IndexPage.propTypes = {

};

export default connect()(IndexPage);
