import { questionclassifiy } from '../services/index.js'
import { questionclassifiyAdd } from '../services/index.js' //考试分类 添加试题
export default {
  // 命名空间
  namespace: 'question',
  // 模块的管理
  state: {
    isQuestionclassifiy: [],
    isQuestionclassifiyAdd: [],
  },
  // 异步操作
  effects: {  // generator
    *questionclassifiy({ payload }, { call, put }) {
      console.log(payload)
      let data = yield call(questionclassifiy);
      console.log('data...', data)
      // 调用同步的reduce的改变登录状态
      yield put({
        type: "updateQuestionclassifiy",// type是reducers里方法
        payload: data.data // 相当于里面的执行
      })
    },
    *questionclassifiyAdd({ payload }, { call, put }) {
      let data = yield call(questionclassifiyAdd, payload);
      console.log('data...', data)
      // 调用同步的reduce的改变登录状态
      if (data.code == 1) {
        yield questionclassifiy()
      }
    }
  },
  reducers: { // 相当于派发
    updateQuestionclassifiy(state, action) {
      return { ...state, isQuestionclassifiy: action.payload };
    },
    updateQuestionclassifiyAdd(state, action) {
      return { ...state, isQuestionclassifiyAdd: action.payload };
    },
  },
};
