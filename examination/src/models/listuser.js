import { listUser, identityData, apiPortLimits, showIdentityApi, getsViewData, identityAndView} from '@/services/index.js'
// get方式请求  没有参数
export default {
    // 命名空间
    namespace: 'users',

    // 模块的管理
    state: {
        listUsers: [],
        identityDatas: [],
        apiPort: [],
        showIdentity: [],
        getsViewDatas:[],
        identityAndViews:[]
    },
    // 异步操作
    effects: { //generator
        *listUser({ }, { call, put }) {  // eslint-disable-line
            let data = yield call(listUser);
            // 调用同步的reduce的
            yield put({
                type: "listUsershow",// type是reducers里方法
                payload: data.data
            })
        }, // 身份接口
        *identityData({ payload }, { call, put }) {
            let data = yield call(identityData, payload);
            yield put({
                type: "identData",
                payload: data.data
            })
        }, //  展示api接口权限数据
        *apiPortLimits({ payload }, { call, put }) {
            let data = yield call(apiPortLimits, payload);
            yield put({
                type: "apiPortLimit",
                payload: data.data
            })
        },
        *showIdentityApi({ payload }, { call, put }) {
            let data = yield call(showIdentityApi);
            // console.log( data);
            yield put({
                type: "showIdentityApis",
                payload: data.data
            })
        },
        *getsViewData({ payload }, { call, put }) {
            let data = yield call(getsViewData);
            console.log('9090909090909090909090', data);
            yield put({
                type: "getDatas",
                payload: data.data
            })
        },
        *identityAndView({ payload }, { call, put }) {
            let data = yield call(identityAndView);
            // console.log('66666666666666666666', data);
            yield put({
                type: "identityView",
                payload: data.data
            })
        },
    },

    // 同步操作
    reducers: { // 相当于派发
        listUsershow(state, action) {
            return { ...state, listUsers: action.payload };
        },
        identData(state, action) {
            return { ...state, identityDatas: action.payload }
        },
        // 展示api接口权限数据
        apiPortLimit(state, action) {
            return { ...state, apiPort: action.payload }
        },
        showIdentityApis(state, action) {
            return { ...state, showIdentity: action.payload }
        },
        getDatas(state, action) {
            return { ...state, getsViewDatas: action.payload }
        },
        identityView(state, action){
            return { ...state, identityAndViews: action.payload }
        }
    },
};
