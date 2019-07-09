
export default {
  // 命名空间
  namespace: 'example',

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
  effects: {//generator
    *login({payload},{call,put}){

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
    save(state, action) {
      return { ...state,isLogin:action.payload };
    },
  },

};
