import { gradeMenage, graderoom, examSubject, Addgrade, deletegrade, newgrade,addRoom,delRoom } from '@/services/grademenage'

export default {
    // 命名空间
    namespace: 'grade',

    // 模块的管理
    state: {
        isgradeMenage: [],
        isgraderoom: [],
        isexamSubject: [],
        isAddgrade: {},
        isdeletegrade: [],
       
        isAdd: [],
        isDel: []
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
        *Addgrade({ payload }, { call, put }) {
            let data = yield call(Addgrade, payload);
            yield put({
                type: "updataAddgrade",// type是reducers里方法
                payload: data.data
            })
            // 传参
            yield put({
                type: "updataGraderoom",// type是reducers里方法
                payload: data.data
            })
        },
        // 删除班级接口
        *deletegrade({ payload }, { call, put }) {
            let data = yield call(deletegrade, payload);
            if (data.code == 0) {
                return
            }
        },
        // 更新班级信息
        *newgrade({ payload }, { call, put }) {
            let data = yield call(newgrade, payload);
            yield put({
                type: "updatanewgrade",// type是reducers里方法
                payload: data.data
            })
        },
        //添加教室
        *addRoom({ payload }, { call, put }) {
            let data = yield call(addRoom, payload);
            yield put({
                type: "updataaddRoom",// type是reducers里方法
                payload: data.data
            })
        },
        //删除教室
        *delRoom({ payload }, { call, put }) { 
            let data = yield call(delRoom, payload);
            yield put({
                type: "updatadelRoom",// type是reducers里方法
                payload: data.data
            })
        }

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
        updataaddRoom(state, action) {
            return { ...state, isAdd: action.payload };
        },
        updatadelRoom(state, action) {
            return { ...state, isDel: action.payload };
        },


    },

};