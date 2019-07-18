import React, { useEffect } from 'react'; // useState
import { connect } from 'dva';
import styles from './usershow.scss'
import { Tabs, Table } from 'antd';
const columns = [
    {
        title: '用户名',
        key: 'name',
        dataIndex: 'user_name',
    },
    {
        title: '密码',
        key: 'password',
        dataIndex: 'user_pwd',
    }
];
const col = [
    {
        title: "身份名称",
        dataIndex: 'identity_text',
    }
];

const cols = [
    {
        title: "api权限名称",
        dataIndex: 'api_authority_text',
    },
    {
        title: "api权限url",
        dataIndex: 'api_authority_url',
    },
    {
        title: "api权限方法",
        dataIndex: 'api_authority_method',
    }
];

const column = [
    {
        title: "身份名称",
        dataIndex: 'identity_text'
    },
    {
        title: "api权限名称",
        dataIndex: 'api_authority_text'
    },
    {
        title: "api权限url",
        dataIndex: 'api_authority_url'
    },
    {
        title: "api权限方法",
        dataIndex: "api_authority_method"
    }
];

const colu = [
    {
        title: "视图权限名称",
        dataIndex: 'view_authority_text'
    },
    {
        title: "视图id",
        dataIndex: 'view_id'
    }
];

const colums = [
    {
        title: "身份",
        dataIndex: 'identity_text'
    },
    {
        title: "视图名称",
        dataIndex: 'view_authority_text'
    },
    {
        title: "视图id",
        dataIndex: 'view_id'
    }
];

function Usershow(props) {
    const { TabPane } = Tabs;

    // 调用请求
    useEffect(() => {
        props.showUserData();
        props.identityData();
        props.apiPorts();
        props.showIdentityApi();
        props.getViewData();
        props.identityAndView()

    }, [])
    const { listUsers, identityDatas, apiPort, showIdentity, getsViewDatas, identityAndViews } = props;
    //   console.log('////////////',getsViewData)
    console.log('==========', props);
    return (
        <div className={styles.usershow}>
            <h2>用户展示</h2>
            <div className={styles.usershowwrap}>
                <Tabs type="card">
                    <TabPane tab="用户数据" key="1">
                        <h1>用户数据</h1>
                        <Table columns={columns}
                            rowKey="user_id"
                            dataSource={listUsers}
                        />
                    </TabPane>
                    <TabPane tab="身份数据" key="2">
                        <h1>身份数据</h1>
                        <Table columns={col}
                            rowKey="identity_id"
                            dataSource={identityDatas}
                        />
                    </TabPane>
                    <TabPane tab="api接口权限" key="3">
                        <h1>api接口权限</h1>
                        <Table columns={cols}
                            rowKey="api_authority_id"
                            dataSource={apiPort}
                        />
                    </TabPane>
                    <TabPane tab="身份和api接口关系" key="4">
                        <h1>身份和api接口关系</h1>
                        <Table columns={column}
                            rowKey="identity_api_authority_relation_id"
                            dataSource={showIdentity}
                        />
                    </TabPane>
                    <TabPane tab="视图接口权限" key="5">
                        <h1>视图接口权限</h1>
                        <Table columns={colu}
                            rowKey="view_authority_id"
                            dataSource={getsViewDatas}
                        />
                    </TabPane>
                    <TabPane tab="身份和视图权限" key="6">
                        <h1>身份和视图权限</h1>
                        <Table columns={colums}
                            rowKey="identity_view_authority_relation_id"
                            dataSource={identityAndViews}
                        />
                    </TabPane>
                </Tabs>
            </div>
        </div>
    )
}

Usershow.propTypes = {

};

const mapState = state => {
    // console.log('-=-=-=-=-=-=',state)
    return {
        ...state.users

    }
}

const mapDispatch = dispatch => ({
    showUserData() { // 展示数据
        dispatch({
            type: "users/listUser"
        })
    },
    identityData() { // 身份数据
        dispatch({
            type: "users/identityData"
        })
    },
    apiPorts() { // 展示api接口权限数据
        dispatch({
            type: "users/apiPortLimits"
        })
    },
    showIdentityApi() { // 展示身份和api权限关系
        dispatch({  //showIdentityApi
            type: "users/showIdentityApi"
        })
    },
    getViewData() {  // 添加视图权限
        dispatch({
            type: "users/getsViewData"
        })
    },
    identityAndView() {  // 展示身份和视图权限关系
        dispatch({
            type: "users/identityAndView"
        })
    },

})

export default connect(mapState, mapDispatch)(Usershow);

/* <Table columns={columns}
                rowKey="user_id"
                dataSource={listUsers}
                pagination={listUsers}
                loading={this.state.loading}
                onChange={this.handleTableChange}
                />*/