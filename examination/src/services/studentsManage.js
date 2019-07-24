import request from '../utils/request';

//  班级管理 --- 学生管理 xyy
// 姓名        学号       班级  教室   密码       操作
// 范丹丹	162711000970			Fdd1006!	删除
// 获取全部教室号

// /manger/student 获取所有已经分班的学生的接口 
export function haveClassrooms(){ //Have a placement
    return request.get('/manger/student');
}

// /manger/student/new  获取所有没有分班的学生接口
export function notClassroom(){
    return request.get('/manger/student/new')
}

// /manger/student/:id=>student_id  删除学生接口
export function deleteStudent(params){
    console.log(params)
    return request.delete(`/manger/student/${params}`)
}

// 删除学生接口
// 简要描述：
// 删除学生接口
// 请求URL：
// /manger/student/:id=>student_id
// 请求方式：
// DELETE
// 参数：
// params:{id:学生的学号}
// 返回示例
//   {"msg":"删除成功","code":1}









// // /manger/grade  获取已经分配教室的班级的接口
// export function addClassrooms(){
//     return request.get('/manger/grade');
// }

// // manger/student  获取所有已经分班的学生的接口
// export function studentInfo(){
//     return request.get('/manger/student')
// }

// // /manger/student/:id=>student_id  删除学生接口
// export function deleteStudent(params){
//     console.log(params)
//     return request.delete(`/manger/student/${params.student_id}`)
// }