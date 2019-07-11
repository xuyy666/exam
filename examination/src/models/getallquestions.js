import {getAllQuestions} from '@/services/index.js'

export default {
    // 命名空间
    namespace: 'getAllQuestions',
  
   // 模块的管理
    state: {
        getAllQuestions:[]
    },
  
  //  // 订阅
  //   subscriptions: {
  //     setup({ dispatch, history }) {  // eslint-disable-line
        
  //     },
  //   },
  
  // 异步操作
    effects: {//generator
      *getAllQuestions({ payload }, { call, put }) {  // eslint-disable-line
        // console.log('payload...', payload, type)
        let data = yield call(getAllQuestions,payload);
        console.log('22data...', data); // token只是一个字段
       
        // 调用同步的reduce的
        yield put({
          type: "getAll",// type是reducers里方法
          payload: data
        })
      },
    },
   
  // 同步操作
    reducers: { // 相当于派发
        getAll(state, action) {
        return { ...state,getAllQuestions:action.payload };
      },
    },
  
  };
  