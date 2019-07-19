import request from '../utils/request';


export function listUser(){ // 用户展示的接口 展示用户数据
   return request.get('/user/user') 
}


export function identityData(){ // 展示身份数据
   return request.get('/user/identity') 
}


export function apiPortLimits(){ // 展示api接口权限数据
   return request.get('/user/api_authority')
}


export function showIdentityApi(){ // 展示身份和api权限关系  身份和api接口关系
   return request.get('/user/identity_api_authority_relation')
}


export function getsViewData(){ //  添加视图权限 /user/setIdentityView
   return request.get('/user/view_authority')
}


//   /user/identity_view_authority_relation
export function identityAndView(){  // 展示身份和视图权限关系
   return request.get('/user/identity_view_authority_relation')
}

// getpaperlist 

