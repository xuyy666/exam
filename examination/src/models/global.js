
export default {
  // 命名空间
  namespace: 'global',

  // 模块的状态
  state: {
    locale:navigator.language.indexOf('zh')!==-1?'zh':'en'
  },

  
  
  // 同步操作
  reducers: { // 相当于派发
    updataLocale(state, action) {
      return { ...state, locale: action.payload };
    },
  },

};


// else{
//   // 1.1.2 有登录态，请求用户信息,请求用户权限
//   dispatch({
//     type: 'getUserInfo'
//   })
// }
