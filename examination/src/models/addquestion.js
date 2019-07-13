import {addQuestion} from '@/services/index.js'
import {addUser} from '@/services/index.js'
export default {
    // 命名空间
    namespace: 'addQuestion',
  
   // 模块的管理
    state: {
      addQu:-1,
      id:""
    },
  
  // 异步操作
    effects: {//generator
      *addQuestion({ payload }, { call, put }) {  // eslint-disable-line
        // console.log('payload...', payload, type)
        let data = yield call(addQuestion,payload);
        console.log('addQuestionsdata...', data); // token只是一个字段
       
        // 调用同步的reduce的
        if(data.code){
          yield put({
            type: "addQuestions",// type是reducers里方法
            payload: data
          })
        }else{

        }
       
      },
      *addUser({payload},{ call, put }){
        let data = yield call(addUser,payload);
        console.log('addUser......', data); // token只是一个字段
       
        // 调用同步的reduce的
          yield put({
            type: "addUsers",// type是reducers里方法
            payload: data
          })
      }
    },
   
  // 同步操作
    reducers: { // 相当于派发
        // 添加试题接口
       addQuestions(state, action) {
        return { ...state,addQu:action.payload };
      },
      // 获取当前用户信息
      addUsers(state,action){
        return {...state,id:action.payload}
      }
    },
  };
  