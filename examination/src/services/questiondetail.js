import request from '../utils/request';
//services 后台的get请求
export function questionDetail(params){
    console.log(params,"45645645611111")
    return request.get('/exam/questions/condition',params);  
}


// export function questionDetail(params){
//     console.log(params,"456456456")
//   return request.get('/exam/questions/condition',{
//       params:{
//           questinos_id:params
//         }
//     });  
// }

// axios.get('/user', {  //params参数必写 , 如果没有参数传{}也可以
//     params: { 
//        id: 12345，
//        name: user
//     }
// })

//  return request.get(`/exam/questions/condition`,{params});  