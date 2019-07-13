import { addQuestion } from '@/services/index.js'  // 获取当前用户信息
import { addUser } from '@/services/index.js'  //  添加试题接口
export default {
  // 命名空间
  namespace: 'addQuestion',

  // 模块的管理
  state: {
    addQu: -1,
    userInfo: {}
  },

  // 异步操作
  effects: {//generator
    *addQuestion({ payload }, { call, put }) {  // eslint-disable-line
      // console.log('payload...', payload, type)
      let data = yield call(addQuestion, payload);

      // 调用同步的reduce的
      if (data.code===1) {
        yield put({
          type: "addQuestions",// type是reducers里方法
          payload: data
        })
      } else {

      }
    },
    *addUser({ payload }, { call, put }) {
      let data = yield call(addUser);
      console.log('addUser......', data); // token只是一个字段

      // 调用同步的reduce的
      yield put({
        type: "addUsers",// type是reducers里方法
        payload: data.data
      })
    }
  },

  // 同步操作
  reducers: { // 相当于派发
    // 添加试题接口
    addQuestions(state, action) {
      return { ...state, addQu: action.payload };
    },
    // 获取当前用户信息
    addUsers(state, action) {
      return { ...state, userInfo: action.payload }
    }
  },
};
