import request from '../utils/request';
//services 后台的get请求

//班级管理

   //获取已经分配教室的班级
export function gradeMenage(params) {
  return request.get('/manger/grade',params);
}

 //获取全部教室
 export function graderoom() {
    return request.get('/manger/room');
  }

 //获取课程类型

 export function examSubject() {
    return request.get('/exam/subject');
  }
 //添加班级接口
 export function Addgrade(params) {
    return request.post('/manger/grade',params);
  }

  //删除班级接口
  export function deletegrade() {
    return request.delete('/manger/grade/delete');
  }
//更新班级信息
export function newgrade(params) {
    return request.put('/manger/grade/update',params);
  }