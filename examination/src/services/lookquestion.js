import request from '../utils/request';
//services 后台的get请求
export function lookquestion() {
  return request.get('/exam/subject');
}