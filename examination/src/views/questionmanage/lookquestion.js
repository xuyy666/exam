import React, { useState, useEffect } from 'react'; // useState
import { connect } from 'dva';
import { Button, Select, Tag, Form } from 'antd';
// import './lookquestion.scss'
import styles from './lookquestion.scss'  
function Question(props) {
  const { Option } = Select;
  useEffect(() => {
    //  console.log(props)
    props.lookquestion()
    props.lookquestionExam()
    props.lookquestionMenu()
    props.lookquestionDetail()
  }, [])


  console.log('=================', props)
  let { isLookquestion } = props.look
  let { isLookquestionExam } = props.look
  let { isLookquestionMenu } = props.look
  let { isLookquestionDetail } = props.look;
 //从form中校验
 const { getFieldDecorator } = props.form;
  // const [addstyle, setstyle] = useState(-1); // -1 undefined  null  tab切换
  // const [addAll, setAll] = useState(false); // 点击All
  // const [one, setone] = useState([]); // 点击自个的时候 取反
  // const click = (index) => {
  //   console.log(index)
  //   setstyle(index)
  //   setone(one);
  //   // setstyle(-1)
  // }
  // 点击All
  // const all = () => { //  多选
  //   setAll(!addAll)
  //   setstyle(-1)   // 消除点击谁的样式
  //   console.log(999);
  // }

  // const handleChange = (item, checked) => {
  //   const nextSelectedTags = checked ? [{ ...one, item }] : one.filter(t => t !== item);
  //   console.log('You are interested in: ', nextSelectedTags);
  //   setone({ one: nextSelectedTags });
  // }

  //  进入试题详情
  const QuestionsDetail = (questions_id) => {
    // props.history.push({ pathname: `/index/itemdetails/${item.questions_id }`, state: { data: item } })
    // props.history.push({pathname:`/index/itemdetails/${questions_id}`})
    // props.history.push(`/index/itemdetails/${questions_id}`)

    // query
    props.history.push({ pathname:`/index/itemdetails/?id=${questions_id}` })

  }

  const { CheckableTag } = Tag;
  const [selectedTags, changeselectedTags] = useState([])
  const [subjectID, changeSubjectID] = useState('');

   // 选择分类
   let handleChange = (tag, checked) => {
    if (tag === "All") {
      isLookquestion()//获取所有试题
    } else {
      let subID = props.look.isLookquestion.find(item => item.subject_text === tag.subject_text).subject_id
      changeselectedTags([tag])
      changeSubjectID(subID)
    }
  }

//处理表单提交
let handleSubmit = () => {
  props.form.validateFields((err, values) => {
    if (!err) {
      if (values.exam_id !== '') {
        let examID = isLookquestion.find(item => item.exam_name === values.exam_id).exam_id;
        values.exam_id = examID
      }

      let obj = {
        ...values,
        subject_id: subjectID
      }
      for (let i in obj) {
        if (obj[i] === "") {
          delete obj[i]
        }
      }
      props.look.isLookquestion(obj)
    }
  });
};

  return (
    <div className="lookquestion">
      <div className="lookquestionAll">
        <h2>查看试题</h2>
        <div className="loopBox">
          {/* <div className="classType"> */}
            {/* <h4>课程类型：</h4> */}
          <Form onSubmit={handleSubmit} className={styles.forms}>
            <div className="classType">
                <h6 style={{ marginRight: 8, display: 'inline' }}>课程类型:</h6>
                <CheckableTag onChange={checked => handleChange('All', checked)}>All</CheckableTag>
                { isLookquestion && isLookquestion.map(tag => (
                  <CheckableTag
                    key={tag.subject_id}
                    checked={selectedTags.indexOf(tag) > -1}
                    onChange={checked => handleChange(tag, checked)}
                  >
                    {tag.subject_text}
                  </CheckableTag>
                ))}
              </div>

            <div className="warp">
                <Form.Item className={styles.select}> 
                   <span> 考试类型:</span>
                  {getFieldDecorator('examtype', {
                     initialValue: "周考一"
                  })( <Select>
                      {
                        isLookquestionMenu.map((item) => (
                          <Option key={item.exam_id} value={item.exam_id}>
                            {item.exam_name}
                          </Option>
                        ))
                      }
                </Select>)}
                </Form.Item>
                <Form.Item className={styles.select}>
                    <span> 题目类型:</span>
                  { getFieldDecorator('questionType', {
                      initialValue: "简答题"
                  })(<Select>
                    {
                      isLookquestionExam.map((item) => (
                        <Option key={item.questions_type_id} value={item.questions_type_id}>
                            {item.questions_type_text}
                        </Option>
                      ))
                    }
                </Select>)}
                </Form.Item>

                <div>
                    <Button
                      type="primary"
                      icon="search"
                      htmlType="submit"
                    >
                      查询
                    </Button>
                </div>
              </div>
         </Form>
            

              {/* <Tag onClick={all} className={addAll ? 'active' : ""}>All</Tag>
              {
                isLookquestion && isLookquestion.map((item, index) => {
                  return <Tag onClick={() => click(index)}
                    className={addAll || addstyle === index ? "active" : ""}
                    key={index} checked={one.indexOf(item) > -1}
                    onChange={checked => handleChange(item, checked)}
                  >{item.subject_text}</Tag>
                })
              } */}

          {/* </div> */}
          

          {/* <div className="examType">
            <div className="p">
              考试类型:
             <Select defaultValue="周考一" >
                {
                  isLookquestionMenu.map((item) => (
                    <Option key={item.exam_id} value={item.exam_id}>
                      {item.exam_name}
                    </Option>
                  ))
                }
              </Select>
              题目类型:
               <Select defaultValue="简答题">
                {
                  isLookquestionExam.map((item) => (
                    <Option key={item.questions_type_id} value={item.questions_type_id}>
                      {item.questions_type_text}
                    </Option>
                  ))
                }
              </Select>
              <Button
                  type="primary"
                  icon="search"
                  htmlType="submit"
                >
                  查询
            </Button>
            </div>
          </div> */}
        </div>
      </div>

      <div className="loopSec">
        <ul>
          {
            isLookquestionDetail.map((item, index) => (
              <div key={item.questions_id}>
                <li onClick={() => QuestionsDetail(item.questions_id)}>
                  <div>
                    <h4>{item.title}</h4>
                    <p>
                      <Button type="primary" style={{ background: '#7ecef4', color: '#2aafee' }}
                      >{item.subject_text}</Button>
                      <Button type="primary" style={{ background: '#b57ef4', color: '#612aee' }}>{item.questions_type_text}</Button>
                      <Button type="primary" style={{ background: '#f4d17e', color: '#ee862a' }}>{item.exam_name}</Button>
                    </p>
                    <p>
                      {item.user_name}发布
                    </p>
                  </div>
                </li>
                <div className="bianji">编辑</div>
              </div>
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

export default connect(mapState, mapDispatchToProps)(Form.create()(Question));

// import React, { useEffect } from 'react'; // useState
// import { connect } from 'dva';
// import { Button, Select} from 'antd';
// import './lookquestion.scss'
// const { Option } = Select;
// function Question(props) {
//   useEffect(() => {
//     //  console.log(props)
//     props.lookquestion()
//     props.lookquestionExam()
//     props.lookquestionMenu()
//     props.lookquestionDetail()
//   }, [])
//   let { isLookquestion } = props.look
//   let { isLookquestionExam } = props.look
//   let { isLookquestionMenu } = props.look
//   let { isLookquestionDetail } = props.look

//   let  classType=(props)=>{
//     console.log(props)
//       }

//   let  detailQuestion=(props)=>{
//      console.log(props)
//   }
//   return (
//     <div className="lookquestion">
//       <div className="lookquestionAll">
//         <h2> 查看试题</h2>
//         <div className="loopBox">
//           <div className="classType">
//             <h2> 课程类型：</h2>
//             {
//               isLookquestion.map((item) => (
//                 <span key={item.subject_id} onClick={classType(item.subject_id)}>{item.subject_text}</span>
//               ))
//             }
//           </div>
//           <div className="examType">
//             <div className="p">
//               考试类型:
//              <Select defaultValue="简答题">
//                 {
//                   isLookquestionMenu.map((item) => (
//                     <Option key={item.exam_id}>
//                       {item.exam_name}
//                     </Option>
//                   ))
//                 }
//               </Select>
//               课程类型:
//                <Select defaultValue="组件化">
//                 {
//                   isLookquestionExam.map((item) => (
//                     <Option key={item.questions_type_id}>
//                       {item.questions_type_text}
//                     </Option>
//                   ))
//                 }
//               </Select>
//               <Button className="btn">查询</Button>
//             </div>
//           </div>
//         </div>
//         <div className="loopSec">
//           <ul>
//             {
//               isLookquestionDetail.map((item, index) => (
//                 <li key={index}>
//                   <div onClick={detailQuestion}>
//                     <h4>{item.title}</h4>
//                     <p>
//                       <Button type="primary" style={{ background: '#7ecef4', color: '#2aafee' }}>{item.subject_text}</Button>
//                       <Button type="primary" style={{ background: '#b57ef4', color: '#612aee' }}>{item.questions_type_text}</Button>
//                       <Button type="primary" style={{ background: '#f4d17e', color: '#ee862a' }}>{item.exam_name}</Button>
//                     </p>
//                     <p>
//                       {item.user_name}发布
//                 </p>
//                   </div>
//                   <div className="bianji">编辑</div>
//                 </li>
//               ))
//             }
//           </ul>
//         </div>
//       </div>
//     </div>
//   )
// }

// Question.propTypes = {

// };

// const mapState = (state) => {
//   console.log(state)
//   return {
//     ...state,
//     ...state.isLookquestion,
//     ...state.isLookquestionExam,
//     ...state.isLookquestionMenu,
//     ...state.isLookquestionDetail,
//     // ...state.isQuestionclassifiy
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     lookquestion: payload => {
//       dispatch({
//         type: "look/lookquestion",//  前面的是login//命名空间 namespace: 'login',   后面的login的方法// 异步操作 effects:{ *login({ payload , type },{call,put}){}
//       })
//     },
//     lookquestionExam: payload => {
//       dispatch({
//         type: "look/lookquestionExam",//  前面的是login//命名空间 namespace: 'login',   后面的login的方法// 异步操作 effects:{ *login({ payload , type },{call,put}){}
//       })
//     },
//     lookquestionMenu: payload => {
//       dispatch({
//         type: "look/lookquestionMenu",//  前面的是login//命名空间 namespace: 'login',   后面的login的方法// 异步操作 effects:{ *login({ payload , type },{call,put}){}
//       })
//     },
//     lookquestionDetail: payload => {
//       dispatch({
//         type: "look/lookquestionDetail",//  前面的是login//命名空间 namespace: 'login',   后面的login的方法// 异步操作 effects:{ *login({ payload , type },{call,put}){}
//       })
//     }
//   }
// }

// export default connect(mapState, mapDispatchToProps)(Question);

// // const mapState = (state)=>{
// //   return {}
// // }
// // const mapDispatch=(dispatch)=>({

// // })
// // export default connect(mapState,mapDispatch)(Question);

