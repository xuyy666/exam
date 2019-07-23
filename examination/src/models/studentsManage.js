import { getAllClass, addClassrooms, studentInfo, deleteStudent } from '@/services/index.js';
export default {
    // 命名空间
    namespace: 'studentsMan',

    // 模块的管理
    state: {
        getAllcla: [], // 没用
        addRooms: [], // 获取已经分配教室的班级的接口
        studentInfos: [],
        delStudent:[]
    },

    // 异步操作
    effects: { //generator  // 获取全部教室
        *getAllClass({ payload }, { call, put }) {  // eslint-disable-line
            // console.log('payload...', payload, type)
            let data = yield call(getAllClass, payload);
            yield put({
                type: 'getAllCls',
                payload: data.data
            });
        },
        *addClassrooms({ payload }, { call, put }) {  // eslint-disable-line
            // console.log('payload...', payload, type)
            let data = yield call(addClassrooms, payload);
            console.log('addClassrooms999999999999999999',data)
            yield put({
                type: 'addClaroms',
                payload: data.data
            });
        },
        *studentInfo({ payload }, { call, put }) {  // eslint-disable-line
            // console.log('payload...', payload, type)
            let data = yield call(studentInfo, payload);
            // console.log(data)
            yield put({
                type: 'stuInfo',
                payload: data.data
            });
        },
        *delete_student({ payload }, { call, put }) {  // eslint-disable-line
            // console.log('payload...', payload, type)
            let data = yield call(deleteStudent, payload);
            // console.log(data)
            yield put({
                type: 'delStus',
                payload: data.data
            });
        },
    },

    // 同步操作
    reducers: {  // 获取全部教室
        getAllCls(state, action) {
            return { ...state, getAllcla: action.payload };
        },
        addClaroms(state, action) {
            return { ...state, addRooms: action.payload };
        },
        stuInfo(state, action) {
            return { ...state, studentInfos: action.payload };
        },
        delStus(state, action) {
            return { ...state, delStudent: action.payload };
        },
    },
};
