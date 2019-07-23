import request from '../utils/request';

export function getAuthority(){
  return request.get('/user/view_authority') // 添加视图权限
}