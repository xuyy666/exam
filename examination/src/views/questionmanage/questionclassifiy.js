import React, { useEffect } from 'react'; // useState
import { connect } from 'dva';
import { Form, Input } from 'antd';
import './questionclassifiy.scss'
// import styles from './questionclassifiy.scss'

function Question(props) {
  useEffect(() => {
    props.questionclassifiy()
  }, [])
  // console.log(props.question.isQuestionclassifiy)
  let { isQuestionclassifiy } = props.question
  const { getFieldDecorator } = props.form;
  return (
    <div className="questionclassifiyPage">
      <div className="mark">
        <Form.Item className="questionclassifiyShow">
          {getFieldDecorator('username', {
            rules: [
              {
                required: true,
                message: 'Please input your name',
              },
            ],
          })(<Input className="input" placeholder="Please input your name" />)}
          <button onClick={handlesubmit} className="btn">提交</button>
        </Form.Item>
      </div>
      <div className="head">
        <h1>试题分类</h1>
      </div>
      <div className="sec">
        <p><button onClick={handleBtn}>+添加类型</button></p>
        <div className="secbox">
          <ul>
            <p><span>类型ID</span><span>类型名称</span><span>操作</span></p>
            {
              isQuestionclassifiy.map((item, index) => (
                <li key={index}><span>{item.questions_type_id}</span><span>{item.questions_type_text}</span></li>
              ))
            }
          </ul>
        </div>
      </div>
    </div>
  )
}

let handleBtn = () => {
  let mark = document.body.querySelector('.mark')
  mark.style.display = 'block'
}
let handlesubmit = () => {
  let mark = document.body.querySelector('.mark')
  mark.style.display = 'none'
}
Question.propTypes = {

};
const mapState = (state) => {
  // console.log(state.question.isQuestionclassifiy.data)
  return {
    ...state,
    ...state.isQuestionclassifiy
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    questionclassifiy: payload => {
      dispatch({
        type: "question/questionclassifiy",//  前面的是login//命名空间 namespace: 'login',   后面的login的方法// 异步操作 effects:{ *login({ payload , type },{call,put}){}
      })
    }
  }
}

export default connect(mapState, mapDispatchToProps)(Form.create()(Question));
