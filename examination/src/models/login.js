import { login, getUserInfo, uploadPictures ,getAuth} from '@/services/index.js'
import { setToken, getToken } from '@/utils/index'
import { routerRedux } from 'dva/router';
export default {
  // 命名空间
  namespace: 'login',

  // 模块的状态
  state: {
    isLogin: -1,
    userInfo: {}, // 设置用户信息为空对象
    uploadPicture:""
  },

  // 订阅
  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
      return history.listen(({ pathname }) => {
        // console.log('pathname...', pathname);
        // 1.判断去的页面是否是登陆页面
        if (pathname.indexOf('/login') === -1) {
          // 1.1 判断是否有登陆态
          if (!getToken()) {
            // 1.1.1没有登陆态，利用redux做路由跳转
            dispatch(routerRedux.replace({
              pathname: `/login`,
              search: `?redirect=${encodeURIComponent(pathname)}`
            }))
          }
          // 1.2用户没有登录态
        } else {
          // 1.2.1去登陆页面，如果已登陆跳回首页
          if (getToken()) {
            // 利用redux做路由跳转
            dispatch(routerRedux.replace({
              pathname: `/index`, // pathname:`/index`
            }))
          }
        }

        // 获取用户信息
        if(getToken()){
            dispatch({
              type: "getUserInfo"
            })
          }
        
      });
    },
  },

  // 异步操作
  effects: {  // generator
    *login({ payload, type }, { call, put }) {
      console.log('payload...', payload, type)
      let data = yield call(login, payload);
      console.log('22data...11111', data);// token只是一个字段
      if (data.code === 1) {
        //设置cookie值
         setToken(data.token)
      }
      // 调用同步的reduce的改变登录状态
      yield put({
        type: "updateLogin",// type是reducers里方法
        payload: data.code  // 相当于里面的执行  payload: data.code === 1 
      })
    },
    // 获取用户信息
    *getUserInfo({ payload }, { call, put, select }) {
      console.log("hdjsdhjdskhfsjkhfkjs")
      let userInfo = yield select(state=>state.login.userInfo);
      console.log('userInfo.......', userInfo)
      if(Object.keys(userInfo).length){
        return 
      }
      let data = yield getUserInfo();  // ===
      // let data = yield call(getUserInfo);// ===
      console.log('````````````````````', data);
      yield put({
        type: "updateUserInfo",
        payload: data.data
      })
      let auth= yield call(getAuth);
      console.log(auth,"111111111111")
    },
    *uploadPictures({ payload }, { call, put }) {
      let data = yield call(uploadPictures,payload);
      yield put({
        type: "uploadPic",
        payload: data
      })

    },

    // *fetch({ payload }, { call, put }) {  // eslint-disable-line
    //   // let data = yield xhr();
    //   yield put({ type: 'save' });
    // },
  },
  // {
  //   type:"fetch",
  //   payload:
  // }

  // 同步操作
  reducers: { // 相当于派发
    updateLogin(state, action) {
      return { ...state, isLogin: action.payload };
    },
    updateUserInfo(state, action) {  // 获取用户信息
      return { ...state, userInfo: action.payload };
    },
    uploadPic(state, action) {  // 上传图片
      return { ...state, uploadPicture: action.payload };
    },
  },

};


// else{
//   // 1.1.2 有登录态，请求用户信息,请求用户权限
//   dispatch({
//     type: 'getUserInfo'
//   })
// }
