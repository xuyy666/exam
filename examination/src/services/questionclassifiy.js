import request from '../utils/request';
//services 后台的post请求
export function questionclassifiy() {
  return request.get('/exam/getQuestionsType');
}