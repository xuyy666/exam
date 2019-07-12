import request from '../utils/request';
//services 后台的get请求
//查看试题 考试类型
export function lookquestionMenu() {
  return request.get('/exam/examType');
}