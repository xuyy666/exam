import { AddUsers , AddRankID , UpUser ,getView_authority,getApi_authority , AddRank ,  setIdentityApi, setIdentityView,addAuthorityApi } from "@/services/AddUser"
export default {
    namespace: 'AddUser',

    state: {
        rankid:[],//选择身份id
        View_authority:[],//视图权限信息
        Api_authority:[],//api接口权限数据
        success:[],//成功  或者  失败,
        update_User:0,
        setIdentityApiInfo: {},//给身份设置api接口权限
        setIdentityViewInfo: {},//给身份设定视图权限
        addAuthorityApiInfo:{}//添加api接口权限
    },

    subscriptions: {
        setup({ dispatch, history }) {  // eslint-disable-line
        },
    },

    effects: {
        //添加用户
        *AddUser({ payload }, { call, put }) {  // eslint-disable-line
            // console.log(payload);
            let data = yield call(AddUsers, payload)
            console.log(data)
            if(data.code === 0) {
                return 
            }
        },
        //选择身份id
        *SelectRankId({ payload }, { call, put }) {  // eslint-disable-line
            let data = yield call(AddRankID, payload)
            yield put({
                type: 'upSelectRank',
                payload: data.data
            });
        },
        //更新用户
        *UpdateUser({ payload }, { call, put }) {
            let data = yield call(UpUser, payload)
            console.log(data)
            yield put({
                type: 'ChangeUser',
                payload: data.code
            });
        },
        //添加身份
        *AddTheRank({ payload }, { call, put }) {
            let data = yield call(AddRank,payload)
            console.log(data)
            if(data.code === 0) {
                return
            }
            yield put({
                type: 'AddRankThe',
                payload: data.code
            });
        },
        //获取视图权限信息
        *getView_authority({ payload }, { call, put }) {  // eslint-disable-line
            //数据信息
            let data = yield call(getView_authority, payload)
            if (data === 0) {
                return
            }
            yield put({
                type: "UpView_authority",
                payload: data.data
            })
        },
        //获取api接口权限数据
        *getApi_authority({ payload }, { call, put }) {  // eslint-disable-line
            //数据信息
            let data = yield call(getApi_authority, payload)
            if (data === 0) {
                return
            }
            yield put({
                type: "UpApi_authority",
                payload: data.data
            })
        },
        //给身份设置api接口权限
        *setIdentityApi({ payload }, { call, put }) {
            let data = yield call(setIdentityApi, payload)
            if (data.code === 0) {
                return
            }
            yield put({
                type: "UpsetIdentityApiInfo",
                payload: data
            })
        },
        //给身份设定视图权限
        *setIdentityView({ payload }, { call, put }) {
            let data = yield call(setIdentityView, payload)
            if (data.code === 0) {
                return
            }
            yield put({
                type: "UpsetIdentityView",
                payload: data
            })
        },
        //添加api接口权限
        *addAuthorityApi({ payload }, { call, put }) {
            let data = yield call(addAuthorityApi, payload)
            console.log(data)
            if (data.code === 0) {
                return
            }
            yield put({
                type: "UpaddAuthorityApi",
                payload: data
            })
        }
        
    },

    reducers: {
        upAddUser(state, action) {
            return { ...state, ...action.payload };
        },
        //选择身份id
        upSelectRank(state, action) {
            return { ...state, rankid: action.payload }
        },
        //更新用户
        ChangeUser(state,action) {
            return {...state,update_User:action.payload}
        },
        //添加身份
        AddRankThe(state,action) {
            return {...state,success:action.payload}
        },
        UpView_authority(state, action) {
            return { ...state, View_authority: action.payload }
        },
        UpApi_authority(state, action) {
            return { ...state, Api_authority: action.payload }
        },
        //给身份设置api接口权限
        UpsetIdentityApiInfo(state, action) {
            return { ...state, setIdentityApiInfo: action.payload }
        },
        //给身份设定视图权限
        UpsetIdentityView(state, action) {
            return { ...state, setIdentityViewInfo: action.payload }
        },
        //添加api接口权限
        UpaddAuthorityApi(state, action) {
            return { ...state, addAuthorityApiInfo: action.payload }
        },
    },
};