import request from '../utils/request';
//services 后台的post请求
export function login(params) {
  return request.post('/user/login',params);
}