import {addQuestion} from '@/services/index.js'

export default {
    // 命名空间
    namespace: 'addQuestion',
  
   // 模块的管理
    state: {
      addQuestion:[]
    },
  
  //  // 订阅
  //   subscriptions: {
  //     setup({ dispatch, history }) {  // eslint-disable-line
        
  //     },
  //   },
  
  // 异步操作
    effects: {//generator
      *addQuestion({ payload }, { call, put }) {  // eslint-disable-line
        // console.log('payload...', payload, type)
        let data = yield call(addQuestion,payload);
        console.log('22data...', data); // token只是一个字段
       
        // 调用同步的reduce的
        yield put({
          type: "addQuestions",// type是reducers里方法
          payload: data.data
        })
      },
    },
   
  // 同步操作
    reducers: { // 相当于派发
       addQuestions(state, action) {
        return { ...state,addQuestion:action.payload };
      },
    },
  
  };
  