import request from '../utils/request';

// 班级管理 - 学生管理
// 姓名        学号       班级  教室   密码       操作
// 范丹丹	162711000970			Fdd1006!	删除
// 获取全部教室号
export function getAllClass(){ // 没用
    return request.get('/manger/room');  
}

// /manger/grade  获取已经分配教室的班级的接口
export function addClassrooms(){
    return request.get('/manger/grade');
}

// manger/student  获取所有已经分班的学生的接口
export function studentInfo(){
    return request.get('/manger/student')
}

// /manger/student/:id=>student_id  删除学生接口
export function deleteStudent(params){
    console.log(params)
    return request.delete(`/manger/student/${params.student_id}`)
}
