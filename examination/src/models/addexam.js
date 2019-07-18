import {addexam} from '@/server/index.js';
export default {
  // 命名空间
  namespace: 'exam',

  // 模块的管理
  state: {
     addExam:''
  },

  // 异步操作
  effects: { //generator
    *addexam({ payload }, { call, put }) {  // eslint-disable-line
      // console.log('payload...', payload, type)
      let data = yield call(addexam, payload);
      yield put({
        type: 'upExams',
        payload: data.data
    });
    }
  },

  // 同步操作
  reducers: { // 相当于派发
    // 添加试题接口
   upExams(state, action) {
      return { ...state, addexam: action.payload };
    },
  },
};
