import {getAllCourses} from '@/services/index.js'
import {getAllQuestype} from '@/services/index.js'
export default {
    // 命名空间
    namespace: 'getallcourse',

   // 模块的管理
    state: {
        getAllCours:[],// 获取所有课程类型
        getAllQuestions:[] // 获取所有的试题类型  getAllQuestions
    },
  
  // 异步操作
    effects: { //generator   // 获取所有的课程
      *getAllCourses({ payload }, { call, put }) {  // eslint-disable-line
        // console.log('payload...', payload, type)
        let data1 = yield call(getAllCourses,payload);
        
        // console.log('22data getAllCourse...', data1); // token只是一个字段
       
        // 调用同步的reduce的
        yield put({
          type: "allCourse",// type是reducers里方法
          payload: data1.data
        })
      },

     *getAllQuestype({payload},{call,put}){
        let data2 = yield call(getAllQuestype,payload);
        // console.log('`````````````````````',data2)
        yield put({
            type:"getAllQuest",
            payload:data2.data
        })
     }

    },
   
  // 同步操作
    reducers: { // 相当于派发
      allCourse(state, action) {
           return { ...state,getAllCours:action.payload };
      },
      getAllQuest(state,action){
          return {...state,getAllQuestions:action.payload}
      }
    },
  
  };
  