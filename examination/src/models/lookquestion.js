
import { lookquestion } from '../services/index.js'
import { lookquestionExam } from '../services/index.js'
import { lookquestionMenu } from '../services/index.js'
import { lookquestionDetail } from '../services/index.js'
import { createExam } from '../services/index.js'
import {questionDetail} from '../services/index.js'; // 试题详情页的异步请求
export default {
  // 命名空间
  namespace: 'look',
  // 模块的管理
  state: {
    isLookquestion: [],
    isLookquestionExam: [],
    isLookquestionMenu: [],
    isLookquestionDetail: [],
    questionsDetail:[],
    iscreateExam:[]
  },
  // 异步操作
  //课程类型
  effects: {  // generator
    *lookquestion({ payload }, { call, put }) {
      let data = yield call(lookquestion);
      // console.log('data...',data) 
      yield put({
        type: "updateLookquestion",// type是reducers里方法
        payload: data.data // 相当于里面的执行
      })
    },

    //考试类型
    *lookquestionExam({ payload }, { call, put }) {
      let data = yield call(lookquestionExam);
      console.log('data...', data)
      yield put({
        type: "updateLookquestionExam",// type是reducers里方法
        payload: data.data // 相当于里面的执行
      })
    },

    //题目类型
    *lookquestionMenu({ payload }, { call, put }) {
      let data = yield call(lookquestionMenu);
      console.log('data...', data)
      yield put({
        type: "updateLookquestionMenu",// type是reducers里方法
        payload: data.data // 相当于里面的执行
      })
    },

    *lookquestionDetail({ payload }, { call, put }) {
      let data = yield call(lookquestionDetail);
      console.log('data...', data)
      // 调用同步的reduce的改变登录状态
      yield put({
        type: "updateLookquestionDetail",// type是reducers里方法
        payload: data.data // 相当于里面的执行
      })
    },
     // 试题详情页的异步请求
    *questionDetail({ payload }, { call, put }){
      console.log(payload,"123123")
       let data = yield call(questionDetail,payload);
       console.log('questionDetail111',data);
       yield put({
         type:"questionDetails",
         payload:data.data
       }) 
     },
     *createExam({ payload }, { call, put }){
       let data = yield call(createExam,payload);
       yield put({
         type:"updataCreateExam",
         payload:data.data
       }) 
     },
     
  },

  // 同步操作
  reducers: { // 相当于派发
    updateLookquestion(state, action) {
      return { ...state, isLookquestion: action.payload };
    },

    updateLookquestionExam(state, action) {
      return { ...state, isLookquestionExam: action.payload };
    },

    updateLookquestionMenu(state, action) {
      return { ...state, isLookquestionMenu: action.payload };
    },

    updateLookquestionDetail(state, action) {
      return { ...state, isLookquestionDetail: action.payload };
    },
    //创建试卷接口
    updataCreateExam(state, action) {
      return { ...state, iscreateExam: action.payload };
    },
    // 试题详情页的异步请求
    questionDetails(state,action){
      return { ...state,questionsDetail:action.payload }
    }

  },
};
