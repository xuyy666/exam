import Cookie from 'js-cookie';
const key = 'authorization'; //authorization
// 设置cookie

// 存cookie,过期时间为十个小时  控制时间
export function setToken(val){ // export 抛出  使用需要解构
    let date = new Date();
    console.log('============',date)
    let expires = date.getTime() + 10*60*60*1000;// 设置毫秒数
    date.setTime(expires)//  设置现在的时间
    Cookie.set(key,val,{expires:date})
}

// 读取cookie
export function getToken() {
    return Cookie.get(key);
}

// 删除cookie
export function removeToken() {
    Cookie.remove(key);
}