import {questionclassifiy} from '../services/index.js'

export default {
    // 命名空间
    namespace: 'questionclassifiy',
   // 模块的管理
    state: {
      isQuestionclassifiy:false
    },
  
 
  
  // 异步操作
    effects: {  // generator
      *questionclassifiy({ },{call,put}){
          let data = yield call(questionclassifiy);
          console.log('data...',data) 

          // 调用同步的reduce的改变登录状态
          yield put({
              type:"updateQuestionclassifiy",// type是reducers里方法
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
        updateQuestionclassifiy(state, action) {
        return { ...state,isQuestionclassifiy:action.payload };
      },
    },
  
  };
  