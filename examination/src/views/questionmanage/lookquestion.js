import React,{useEffect} from 'react'; // useState
import { connect } from 'dva';
import {Button,Select} from 'antd';
import './lookquestion.scss'
const { Option } = Select;
function Question(props){
  useEffect(()=>{
    //  console.log(props)
     props.lookquestion()
     props.lookquestionExam()
  },[])
console.log(props)
  let {isLookquestion}=props.look
  let {isLookquestionExam}=props.look
   console.log(isLookquestionExam)
  return (
      <div className="lookquestion">
        <h1> 查看试题</h1>
         <div className="loopBox">
           <div className="classType">
             <h1> 课程类型：</h1>
              {
                isLookquestion.map((item,index)=>(
                 <span key={index}>{item.subject_text}</span>
                ))
              }
           </div>
           <div className="examType">
             <div className="p">考试类型:  
             <Select defaultValue="组件化">
                {
                    isLookquestionExam.map((item,index)=>(
                      <Option key={index}>
                         {item.questions_type_text}
                      </Option>   
                    ))
                }
              </Select>
               考试类型:
               <Select defaultValue="组件化">
                {
                    isLookquestionExam.map((item,index)=>(
                      <Option key={index}>
                         {item.questions_type_text}
                      </Option>   
                    ))
                }
              </Select>
                <Button className="btn">查询</Button>
                </div>
           </div>
         </div>
         <div className="loopSec"></div>
      </div>
  )
}

Question.propTypes = {

};
const mapState = (state) => {
  console.log(state)
  return {
    ...state,
    ...state.isLookquestion,
    ...state.isLookquestionExam,
    // ...state.isQuestionclassifiy
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    lookquestion: payload => {
      dispatch({
        type: "look/lookquestion",//  前面的是login//命名空间 namespace: 'login',   后面的login的方法// 异步操作 effects:{ *login({ payload , type },{call,put}){}
      })
    },
    lookquestionExam: payload => {
      dispatch({
        type: "look/lookquestionExam",//  前面的是login//命名空间 namespace: 'login',   后面的login的方法// 异步操作 effects:{ *login({ payload , type },{call,put}){}
      })
    }
  }
}

export default connect(mapState, mapDispatchToProps)(Question);
