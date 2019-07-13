import { questionclassifiy } from '../services/index.js'

export default {
  // 命名空间
  namespace: 'question',
  
  // 模块的管理
  state: {
    isQuestionclassifiy: [],
  },



  // 异步操作
  effects: {  // generator
    *questionclassifiy({ payload }, { call, put }) {
      let data = yield call(questionclassifiy,payload);
      // console.log('data...',data) 
      // 调用同步的reduce的改变登录状态
      yield put({
        type: "updateQuestionclassifiy",// type是reducers里方法
        payload: data.data // 相当于里面的执行
      })
    }


  },

  // 同步操作
  reducers: { // 相当于派发
    updateQuestionclassifiy(state, action) {
      return { ...state, isQuestionclassifiy: action.payload };
    },
  },

};
