import { getPaperList, paperDetails } from '@/services/index.js' // 获取试卷列表接口

export default {
    // 命名空间
    namespace: 'getTestList', 
  
   // 模块的管理
    state: {
        getPaperLists:[],
        papeDetail:[]
    },
  
  // 异步操作
    effects: { //generator
      *getPaperList({ }, { call, put }) {  // eslint-disable-line
        // console.log('payload...', payload, type)
        let data = yield call(getPaperList);
        console.log('22data getPaperList...', data); 
       
        // 调用同步的reduce的
        yield put({
          type: "getPaList",// type是reducers里方法
          payload: data
        })
      },
      // 试卷详情
      *paperDetails({ payload }, { call, put }) {  // eslint-disable-line
        console.log('payload...0-=======', payload)
        let data = yield call(paperDetails,payload);
        console.log('paperDetails...', data);
       
        // 调用同步的reduce的
        yield put({
          type: "paperDetail",// type是reducers里方法
          payload: data.data
        })
      },
    },
   
  // 同步操作
    reducers: { // 相当于派发
        getPaList(state, action) {
          return { ...state,getPaperLists:action.payload };
        },
        paperDetail(state, action) {
            return { ...state,papeDetail:action.payload };
        },
    },
  
  };
  