import request from '../utils/request';


export function examType(){// 回调函数
  return request.get('/exam/examType')  // 获取所有的考试类型
}