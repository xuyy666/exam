import {gradeMenage,graderoom, examSubject, Addgrade, deletegrade, newgrade} from '@/services/grademenage'

export default {
    // 命名空间
    namespace: 'grade',

    // 模块的管理
    state: {
         isgradeMenage: [],
         isgraderoom: [],
        isexamSubject:[],
         isAddgrade:{},
         isdeletegrade: [],
        // isnewgrade:[]
    },

    // 异步操作
    effects: { //generator  

        //获取已经分配教室的班级
        *gradeMenage({ payload }, { call, put }) {  // eslint-disable-line
            let data = yield call(gradeMenage, payload);
            yield put({
                type: "updataGradeMenage",// type是reducers里方法
                payload: data.data
            })
        },
        // 获取全部教室
        *graderoom({ payload }, { call, put }) {  // eslint-disable-line
            let data = yield call(graderoom, payload);
            yield put({
                type: "updataGraderoom",// type是reducers里方法
                payload: data.data
            })
        },
        //获取课程类型
        *examSubject({ payload }, { call, put }) {  // eslint-disable-line
            let data = yield call(examSubject, payload);
            yield put({
                type: "updataexamSubject",// type是reducers里方法
                payload: data.data
            })
        },

        //添加班级接口
        *Addgrade({ payload }, { call, put }) {  // eslint-disable-line
            let data = yield call(Addgrade, payload);
            yield put({
                type: "updataAddgrade",// type是reducers里方法
                payload: data.data
            })
        },
        // 删除班级接口
        *deletegrade({ payload }, { call, put }) {  // eslint-disable-line
            let data = yield call(deletegrade, payload);
            yield put({
                type: "updatadeletegrade",// type是reducers里方法
                payload: data.data
            })
        },
        //更新班级信息
        // *newgrade({ payload }, { call, put }) {  // eslint-disable-line
        //     let data = yield call(newgrade, payload);
        //     yield put({
        //         type: "updatanewgrade",// type是reducers里方法
        //         payload: data.data
        //     })
       // }
    },



    // 同步操作
    reducers: { // 相当于派发
        updataGradeMenage(state, action) {
            return { ...state, isgradeMenage: action.payload };
        },
        updataGraderoom(state, action) {
            return { ...state, isgraderoom: action.payload };
        },
        updataexamSubject(state, action) {
            return { ...state, isexamSubject: action.payload };
        },
        updataAddgrade(state, action) {
            return { ...state, isAddgrade: action.payload };
        },
        // updatadeletegrade(state, action) {
        //     return { ...state, isdeletegrade: action.payload };
        // },
        // updatanewgrade(state, action) {
        //     return { ...state, isnewgrade: action.payload };
        // },
    },

};