import {addexam,upExam} from '@/services/index.js';
export default {
  // 命名空间
  namespace: 'AddExam',

  // 模块的管理
  state: {
    exam_info:{}
  },

  // 异步操作
  effects: { //generator
    *addexam({ payload }, { call, put }) {  // eslint-disable-line
      // console.log('payload...', payload, type)
      let data = yield call(addexam, payload);
      if (data.code === 0) {
        return
    }
    yield put({
        type: 'upadd_exam_info',
        payload: data.data
    });
    },
    //更新试卷
    *upExam({ payload }, { call, put }) {  // eslint-disable-line
      let data = yield call(upExam,payload)
      console.log(data)
  },
  },

  // 同步操作
  reducers: { // 相当于派发
    // 添加试题接口
    upadd_exam_info(state, action) {
      return { ...state, exam_info:action.payload };
  },
  },
};
