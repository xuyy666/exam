 import {getAuthority} from '@/services/index.js';
 import allAuthority from '@/router/config'
 //import { routerRedux } from 'dva/router';
export default {
    // 命名空间
    namespace: 'authority',
  
    // 模块的管理
    state: {
        isAuthority:[],
        myView:[],
        forbidden:[]
    },
  
    // 异步操作
    effects: { //generator
        // getAuthority
        *getAuthority({ payload }, { call, put }) {
            let Authority = yield call(getAuthority);
            console.log(Authority)
            yield put({
              type: "updategetAuthority",// type是reducers里方法
               payload: Authority.data // 相当于里面的执行
            })
          },
      
    },
  
    // 同步操作
    reducers: { // 相当于派发
      // 添加试题接口
      updategetAuthority(state, action) {
        let myView=[],forbidden=[]
        allAuthority.routes.forEach(item=>{
          let obj={
            name:item.name,
            children:[]
          }
          item.children.forEach(value=>{
            if(action.payload.findIndex(item=>item.view_id===value.view_id)!==-1){
              obj.children.push(value)
            }else{
             forbidden.push(value)
            }
          })
          myView.push(obj)
       })
        return { ...state,myView,forbidden};
      },
    },
  };
  