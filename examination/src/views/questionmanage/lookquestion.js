import React, { useState, useEffect } from 'react'; // useState
import { connect } from 'dva';
import { Button, Select, Tag} from 'antd';
import './lookquestion.scss'
const { Option } = Select;

function Question(props) {
  useEffect(() => {
    //  console.log(props)
    props.lookquestion()
    props.lookquestionExam()
    props.lookquestionMenu()
    props.lookquestionDetail()
  }, [])

  console.log('=================',props)
  let { isLookquestion } = props.look
  let { isLookquestionExam } = props.look
  let { isLookquestionMenu } = props.look
  let { isLookquestionDetail } = props.look;

  const [addstyle,setstyle] = useState(-1); // -1 undefined  null  tab切换
  const [addAll,setAll] = useState(false); // 点击All
  const [one,setone] = useState([]); // 点击自个的时候 取反
  const click =(index)=>{
      console.log(index)
      setstyle(index)
      setone(one);
      // setstyle(-1)
  }
  const all=()=>{ //  多选
    setAll(!addAll)
    setstyle(-1)   // 消除点击谁的样式
    console.log(999);
  }
  // const [selectedTags]  = useState();
  const handleChange=(item,checked)=>{
    const nextSelectedTags = checked ? [{...one, item}] : one.filter(t => t !== item);
    console.log('You are interested in: ', nextSelectedTags);
    setone({ one: nextSelectedTags });
  }

  // 点击查询
  const search =()=>{
      alert(9)
  }

  //  进入试题详情
  const QuestionsDetail=(item)=>{
     console.log('==========',props)
     console.log(item);
     props.history.push({pathname:`/index/itemdetails/${item.questions_id}`,state:{data:item}})
  }

  return (
    <div className="lookquestion">
      <div className="lookquestionAll">
        <h2> 查看试题</h2>
        <div className="loopBox">
          <div className="classType">
            <h4>课程类型：</h4>
              <Tag onClick={all} className={addAll ? 'active' : ""}>All</Tag>
              {
                isLookquestion && isLookquestion.map((item,index)=>{
                  return <Tag onClick={()=>click(index)}
                  className={addAll || addstyle===index ? "active" :""}
                  key={index} checked={one.indexOf(item) > -1}
                  onChange={checked =>handleChange(item, checked)}
                  >{item.subject_text}</Tag>
                })
              }
            </div>
            <div className="examType">
            <div className="p">
              考试类型:
             <Select defaultValue="简答题" >
                {
                  isLookquestionMenu.map((item) => (
                    <Option key={item.exam_id}>
                      {item.exam_name}
                    </Option>
                  ))
                }
              </Select>
              考试类型:
               <Select defaultValue="组件化">
                {
                  isLookquestionExam.map((item) => (
                    <Option key={item.questions_type_id}>
                      {item.questions_type_text}
                    </Option>
                  ))
                }
              </Select>
              <Button className="btn" onClick={()=>search()}>查询</Button>
            </div>
          </div>
          </div>
          
        </div>
        <div className="loopSec">
          <ul>
            {
              isLookquestionDetail.map((item, index) => (
                <li key={item.questions_id}>
                  <div>
                    <h4>{item.title}</h4>
                    <p>
                      <Button type="primary" style={{ background: '#7ecef4', color: '#2aafee' }} 
                      onClick={()=>QuestionsDetail(item)}>{item.subject_text}</Button>
                      <Button type="primary" style={{ background: '#b57ef4', color: '#612aee' }}>{item.questions_type_text}</Button>
                      <Button type="primary" style={{ background: '#f4d17e', color: '#ee862a' }}>{item.exam_name}</Button>
                    </p>
                    <p>
                      {item.user_name}发布
                    </p>
                  </div>
                  <div className="bianji">编辑</div>
                </li>
              ))
            }
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
    ...state.isLookquestionDetail,
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
        type: "look/lookquestionExam",
      })
    },
    lookquestionMenu: payload => {
      dispatch({
        type: "look/lookquestionMenu",
      })
    },
    lookquestionDetail: payload => {
      dispatch({
        type: "look/lookquestionDetail",
      })
    }
  }
}

export default connect(mapState, mapDispatchToProps)(Question);



