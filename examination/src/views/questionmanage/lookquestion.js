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
     props.lookquestionMenu()
     props.lookquestionDetail()
  },[])
console.log(props)
  let {isLookquestion}=props.look
  let {isLookquestionExam}=props.look
  let {isLookquestionMenu}=props.look
  let {isLookquestionDetail}=props.look
  //  console.log(isLookquestionExam)
  //  function handleChange(value) {
  //   console.log(`selected ${value}`);
  // }
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
             <div className="p">
               考试类型:  
             <Select defaultValue="简答题">
                {
                    isLookquestionMenu.map((item)=>(
                      <Option key={item.exam_id}>
                         {item.exam_name}
                      </Option>   
                    ))
                }
              </Select>
               考试类型:
               <Select defaultValue="组件化">
                {
                    isLookquestionExam.map((item)=>(
                      <Option key={item.questions_type_id}>
                         {item.questions_type_text}
                      </Option>   
                    ))
                }
              </Select>
                <Button className="btn">查询</Button>
                </div>
           </div>
         </div>
         <div className="loopSec">
          <ul>
            <li>
              <h4>机器人归为</h4>
              <p>
                 <Button type="primary" style={{background:'#7ecef4',color:'#2aafee'}}>Primary</Button>
                 <Button type="primary" style={{background:'#b57ef4',color:'#612aee'}}>Primary</Button>
                 <Button type="primary" style={{background:'#f4d17e',color:'#ee862a'}}>Primary</Button>
              </p>
            </li>
          </ul>
         </div>
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
    ...state.isLookquestionMenu,
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
    },
    lookquestionMenu: payload => {
      dispatch({
        type: "look/lookquestionMenu",//  前面的是login//命名空间 namespace: 'login',   后面的login的方法// 异步操作 effects:{ *login({ payload , type },{call,put}){}
      })
    },
    lookquestionDetail: payload => {
      dispatch({
        type: "look/lookquestionDetail",//  前面的是login//命名空间 namespace: 'login',   后面的login的方法// 异步操作 effects:{ *login({ payload , type },{call,put}){}
      })
    }
  }
}

export default connect(mapState, mapDispatchToProps)(Question);

// const mapState = (state)=>{
//   return {}
// }
// const mapDispatch=(dispatch)=>({

// })
// export default connect(mapState,mapDispatch)(Question);

