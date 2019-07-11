import {lookquestion} from '../services/index.js'
import {lookquestionExam} from '../services/index.js'
export default {
    // 命名空间
    namespace: 'look',
   // 模块的管理
    state: {
      isLookquestion:[],
      isLookquestionExam:[]
    },
  
 
  
  // 异步操作
  //课程类型
    effects: {  // generator
      *lookquestion({},{call,put}){
          let data = yield call(lookquestion);
          // console.log('data...',data) 
          // 调用同步的reduce的改变登录状态
          yield put({
              type:"updateLookquestion",// type是reducers里方法
              payload: data.data // 相当于里面的执行
          })
      },

     //考试类型
      *lookquestionExam({},{call,put}){
        let data = yield call(lookquestionExam);
        console.log('data...',data) 
        // 调用同步的reduce的改变登录状态
        yield put({
            type:"updateLookquestionExam",// type是reducers里方法
            payload: data.data // 相当于里面的执行
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
      updateLookquestion(state, action) {
        return { ...state,isLookquestion:action.payload };
      },


      updateLookquestionExam(state, action) {
        return { ...state,isLookquestionExam:action.payload };
      },
    },
  
  };
  