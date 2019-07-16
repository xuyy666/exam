import React from 'react'; // useState
import { connect } from 'dva';
import styles from  './usershow.scss'
import { Form, Tabs } from 'antd';
function Usershow(props){


  const { TabPane } = Tabs;
  let callback=()=>{
    
  }
  return (
      <div className={styles.usershow}>
           <h2>用户展示</h2>
        <div className={styles.usershowwrap}>  
          <Tabs onChange={callback} type="card">
            <TabPane tab="用户数据" key="1">
                <h2>用户数据</h2> 
            </TabPane>
            <TabPane tab="身份数据" key="2">
                身份数据
            </TabPane>
            <TabPane tab="api接口数据" key="3">
                api接口数据
            </TabPane>
            <TabPane tab="身份和api接口关系" key="4">
                 身份和api接口关系
            </TabPane>
            <TabPane tab="视图接口权限" key="5">
                视图接口权限
            </TabPane>
            <TabPane tab="身份和视图权限" key="6">
               身份和视图权限
            </TabPane>
          </Tabs> 
  
      </div>
      </div>
  )
}

Usershow.propTypes = {

};
export default connect()(Form.create()(Usershow));