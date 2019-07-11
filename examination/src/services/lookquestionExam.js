import request from '../utils/request';
//services 后台的get请求
export function lookquestionExam() {
  return request.get('/exam/getQuestionsType');
}