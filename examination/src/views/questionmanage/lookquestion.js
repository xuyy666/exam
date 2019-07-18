import React, { useState, useEffect } from 'react'; // useState
import { connect } from 'dva';
import { Button, Select, Tag, Form } from 'antd';
import styles from './lookquestion.scss'

function Question(props) {
  const { Option } = Select;
  useEffect(() => {
    props.lookquestion()
    props.lookquestionExam()
    props.lookquestionMenu()
    props.lookquestionDetail()
  }, [])

  const { isLookquestion } = props.look
  const { isLookquestionExam } = props.look
  const { isLookquestionMenu } = props.look
  const { isLookquestionDetail } = props.look;

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
  // const [selectedTags]  = useState();
  // const handleChange = (item, checked) => {
  //   const nextSelectedTags = checked ? [{ ...one, item }] : one.filter(t => t !== item);
  //   console.log('You are interested in: ', nextSelectedTags);
  //   setone({ one: nextSelectedTags });
  // }


  // // 进入试题详情
  const QuestionsDetail = (questions_id) => {
    // props.history.push({ pathname: `/index/itemdetails/${item.questions_id }`, state: { data: item } })
    // props.history.push({pathname:`/index/itemdetails/${questions_id}`})
    // props.history.push(`/index/itemdetails/${questions_id}`)

    // query
    props.history.push({ pathname: `/index/itemdetails/?id=${questions_id}` })

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

  //   //获取考试类型
  // const onMenu=(index)=>{
  //     console.log(props.look.isLookquestionMenu[index].exam_name)
  //   }

  //   //获取课程类型
  //   const onExam=(index)=>{
  //     console.log(props.look.isLookquestionExam[index].questions_type_text)
  //   }


  const Edit = (item, index) => {
    props.history.push({ pathname:`/index/edititem/?id=${item.user_id}`, state: { data: item } })
  }

  return (
    <div className="lookquestion">
      <div className="lookquestionAll">
        <h2>查看试题</h2>
        <div className="loopBox">
          {/* <div className="classType"> */}
          {/* <h4>课程类型：</h4> */}
          <Form onSubmit={handleSubmit} className={styles.forms}>
            <div className={styles.classType}>
              <h6 style={{ marginRight: 8, display: 'inline' }}> 课程类型: </h6>
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
                <span>考试类型:</span>
                {getFieldDecorator('examtype', {
                  initialValue: "周考一"
                })(<Select>
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
                {getFieldDecorator('questionType', {
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
        </div>
      </div>

      {/* <div className={styles.loopSec}> */}
      <div className="loopSec">
        <ul>
          {
            isLookquestionDetail.map((item, index) => (
              <div key={item.questions_id} className="items">
                <li onClick={() => QuestionsDetail(item.questions_id)}>
                  <div className="secLi">
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
                <div className="bianji" onClick={() => Edit(item, index)}>编辑</div>
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
        type: "look/lookquestion"
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




