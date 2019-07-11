import request from '../utils/request';
//services 后台的post请求
export function getAllCourses() {
  return request.get('/exam/subject');
}