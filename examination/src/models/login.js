import { login } from '@/services/index.js'
import { setToken, getToken } from '@/utils/index'
import { routerRedux } from 'dva/router';
export default {
  // 命名空间
  namespace: 'login',

  // 模块的状态
  state: {
    isLogin: -1
  },

  // 订阅
  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
      return history.listen(({ pathname }) => {
        // console.log('pathname...', pathname);
        // 1.判断去的页面是否是登陆页面
        if (pathname.indexOf('/login') === -1) {
          // 1.1 判断是否有登陆态
          if (!getToken()){
            // 1.1.1没有登陆态，利用redux做路由跳转
            dispatch(routerRedux.replace({
              pathname: `/login`,
              search: `?redirect=${encodeURIComponent(pathname)}`
            }))
          }
        // 1.2用户没有登录态
        }else{
          // 1.2.1去登陆页面，如果已登陆跳回首页
          if (getToken()){
             // 利用redux做路由跳转
             dispatch(routerRedux.replace({
              pathname: `/index`,
            }))
          }

        }
      });
    },
  },

  // 异步操作
  effects: {  // generator
    *login({ payload, type }, { call, put }) {
      console.log('payload...', payload, type)
      let data = yield call(login, payload);
      console.log('22data...', data);// token只是一个字段
      if (data.code === 1) {
        //设置cookie值
        setToken(data.token)
      }
      // 调用同步的reduce的改变登录状态
      yield put({
        type: "updateLogin",// type是reducers里方法
        payload: data.code === 1  // 相当于里面的执行
      })
    }

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
  },

};


// else{
//   // 1.1.2 有登录态，请求用户信息,请求用户权限
//   dispatch({
//     type: 'getUserInfo'
//   })
// }
