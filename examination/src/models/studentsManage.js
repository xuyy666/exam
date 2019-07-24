import { haveClassrooms, notClassroom, deleteStudent } from '@/services/index.js';
export default {
    // 命名空间
    namespace: 'studentsMan',

    // 模块的管理
    state: {
        // 获取已经分配教室的班级的接口 // 获取所有没有分班的学生接口
        students: [],
        // 删除学生接口
        delStudent: -1  //  没有删除学生
    },

    // 异步操作
    effects: { //generator  // 获取所有已经分班的学生的接口
        *haveClassroom({ payload }, { call, put }) {  // eslint-disable-line
            // console.log('payload...', payload, type)
            let data = yield call(haveClassrooms);
            console.log('haveClassroom999999999999999999', data)
            if (data.code === 1) {
                yield put({
                    type: 'haveClass',
                    payload: data.data
                });
            }
        },
        *notClassroom({ payload }, { call, put }) {  // eslint-disable-line
            // console.log('payload...', payload, type)
            let data = yield call(notClassroom, payload);
            console.log('-=-==-=-=-=-=-=-=', data);
            if (data.code === 1) {
                yield put({
                    type: 'notClas',
                    payload: data.data
                });
            }
        },
        // 删除学生接口
        *delete_student({ payload }, { call, put }) {  // eslint-disable-line
            // console.log('payload...', payload, type)
            let data = yield call(deleteStudent, payload);
            console.log('remove_students',data)
            if (data.code === 1) {
                yield put({
                    type: 'delStus',
                    payload: data.code  // 派发的状态的code为1
                });
            }
        },
    },

    // 同步操作
    reducers: {  // 获取已经分配教室的班级的接口
        haveClass(state, action) {
            return { ...state, students: state.students.concat(action.payload) };
        },
        //获取所有没有分班的学生接口
        notClas(state, action) {
            return { ...state, students: state.students.concat(action.payload) };
        },
        delStus(state, action) {  // 删除学生接口
            return { ...state, delStudent: action.payload };
        },
        record(state){ // 同步执行之后回到初始状态（-1） 因为concat具有拼接的作用 就得清空一下拼接后的东西
            return { ...state, delStudent:-1,students:[]};
        }
    },
};
