import request from '../utils/request';
//services 后台的get请求
export function questionclassifiyAdd(params){  //  请求
  console.log(params)
  return request.get('/exam/insertQuestionsType',{params:params});
}