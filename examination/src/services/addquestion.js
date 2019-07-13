import request from '../utils/request';


export function addQuestion(params){ // 添加试题接口
  console.log('======',params)
  return request.post('/exam/questions',params) 
}

//获取当前用户信息
export function addUser() { 
  return request.get('/user/userInfo')
}

