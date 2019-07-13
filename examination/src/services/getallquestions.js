import request from '../utils/request';


export function getAllQuestion(){
  return request.get('/exam/questions/new') // 获取所有的试题
}