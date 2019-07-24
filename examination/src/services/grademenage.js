import request from '../utils/request';

//班级管理
//获取已经分配教室的班级
export function gradeMenage(params) {
  return request.get('/manger/grade', params);
}

//获取全部教室
// export function graderoom() {
//   return request.get('/manger/room');
// }

//获取课程类型
export function examSubject() {
  return request.get('/exam/subject');
}
//添加班级接口
export function Addgrade(params) {
  return request.post('/manger/grade', params);
}

//删除班级接口
export function deletegrade() {
  return request.delete('/manger/grade/delete');
}
//更新班级信息
export function newgrade(params) {
    return request.put('/manger/grade/update',params);
  }
  
//添加教室
export function addRoom(params){
  return request.post('/manger/room',params)
}



// 班级管理  xyy
// 班级管理-添加全部教室接口  /manger/room  
export function addClassroom(params){
  return request.get('/manger/room',params);
}
// 添加教室接口
export function addClass(params){
  return request.post('/manger/room',params);
}

// 删除教室接口
export function removeClass(params){
  // console.log('hjhjhjhjhjhj',params)  //  传递id
  return request.delete('/manger/room/delete',{data:params})
}





//删除教室
export function delRoom(data){
  return request.delete('/manger/room/delete',{data})
}
