import request from '../utils/request';
//services 后台的get请求
//查看试题 机器人归位 获取所有数据
export function lookquestionDetail() {
  return request.get('/exam/questions/new');
}