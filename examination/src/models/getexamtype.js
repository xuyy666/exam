import {examType} from '@/services/index.js'

export default {
    // 命名空间
    namespace: 'examType',
  
   // 模块的管理
    state: {
        examTypes:[]
    },
  
  //  // 订阅
  //   subscriptions: {
  //     setup({ dispatch, history }) {  // eslint-disable-line
        
  //     },
  //   },
  
  // 异步操作
    effects: {//generator
      *examType({ payload }, { call, put }) {  // eslint-disable-line
        // console.log('payload...', payload, type)
        let data = yield call(examType,payload);
        // console.log('22data getAllExamTypes...', data); // token只是一个字段
       
        // 调用同步的reduce的
        yield put({
          type: "getAllExamTypes",// type是reducers里方法
          payload: data
        })
      },
    },
   
  // 同步操作
    reducers: { // 相当于派发
        getAllExamTypes(state, action) {
        return { ...state,examTypes:action.payload };
      },
    },
  
  };
  