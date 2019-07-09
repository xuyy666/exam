import {login} from '../services/index.js'

export default {
    // 命名空间
    namespace: 'login',
   // 模块的管理
    state: {
      isLogin:false
    },
  
  //  // 订阅
  //   subscriptions: {
  //     setup({ dispatch, history }) {  // eslint-disable-line
  //     },
  //   },
  
  // 异步操作
    effects: {  // generator
      *login({ payload , type },{call,put}){
          console.log('payload...',payload,type)
          let data = yield call(login,payload);
          console.log('data...',data) 

          // 调用同步的reduce的改变登录状态
          yield put({
              type:"updateLogin",// type是reducers里方法
              payload: data.code == 1  // 相当于里面的执行
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
        return { ...state,isLogin:action.payload };
      },
    },
  
  };
  