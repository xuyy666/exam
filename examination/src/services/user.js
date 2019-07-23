import request from '../utils/request';

export function getUserInfo() {  // 获取当前用户信息
  return request.get('/user/userInfo');
}

//  上传图片
export function uploadPictures(form){
  return request.post('http://123.206.55.50:11000/upload',form)
}
//获取视图权限
export function getViewAuthority(){
  return request.get("/user/view_authority")
}

