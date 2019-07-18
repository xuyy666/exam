import request from '../utils/request';


export function getPaperList(){  //获取试卷列表接口
   return request.get('/exam/exam') 
}

export function paperDetails(params){ // 获取试卷详情（教师端）接口
    console.log('services----------66666',params)
    
    return request.get(`/exam/exam/${params}`) //  /exam/exam/w5tcy-g2dts
    // return request.get('/exam/exam/hto-6al7ef') 
}
