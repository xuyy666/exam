import { editQuestion } from "../services/edititem"
export default {

    namespace: 'editQuestion',

    state: {
        addInfo:0
    },

    subscriptions: {
        setup({ dispatch, history }) {  // eslint-disable-line
        },
    },

    effects: {
        *editQuestion({ payload }, { call, put }) {  // eslint-disable-line
            // console.log(payload);
            let data = yield call(editQuestion,payload)
            // console.log(data)
            if (data.code === 0) {
                return
            }
            yield put({
                type: 'upQuestion',
                payload: data.code
            });
        },
    },

    reducers: {
        upQuestion(state, action) {
            return { ...state, editQuest:action.payload };
        },
    },

};
