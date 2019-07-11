import request from '../utils/request';


export function getAllQuestype(){
  return request.get('/exam/getQuestionsType',) // 获取所有的试题类型
}