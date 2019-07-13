import React, { useState, useEffect } from 'react'; // useState
import { connect } from 'dva';
import { Table, Input, Button, Form, Modal, message } from 'antd';
import './questionclassifiy.scss'
// import styles from './questionclassifiy.scss'


function Question(props) {
  const columns = [
    {
      title: '类型ID',
      dataIndex: 'questions_type_id',
      key: "id"
    },
    {
      title: '类型名称',
      dataIndex: 'questions_type_text',
      key: "text"
    }, {
      title: '操作',
      dataIndex: '',
      key: "action"
    }
  ]
  let [showModal, updateModal] = useState(false)
  useEffect(() => {
    console.log(props)
    props.questionclassifiy()

  }, [])

  let handlesubmit=()=>{

  }
  let handleBtn =()=>{

  }

  const { getFieldDecorator } = props.form;
  function handleSubmit() {
    props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        props.questionclassifiyAdd({
          text: values.type,
          sort: props.question.isQuestionclassifiy.length + 1
        })
        updateModal(false)
      } else {
        message.error(err.types.errors[0].message)
      }
    });
  }
  return (
    <div className="questionclassifiyPage">
      <Modal
        visible={showModal}
        title="请填入试题类型"
        onCancel={() => updateModal(false)}
        onOk={() => handleSubmit()}
       >
        <Form.Item>
          {getFieldDecorator('type', {

            rules: [
              {
                required: true,
                message: 'Please input your name',
              },
            ],
          })(<Input className="input" placeholder="Please input your name" />)}
          <button onClick={handlesubmit} className="btn">提交</button>
        </Form.Item>   
      </Modal>

      <div className="head">
        <h1>试题分类</h1>
      </div>
      <div className="sec">

        <p><button onClick={handleBtn}>+添加类型</button></p>
        <div className="secbox">
         
        </div>

        <p><Button onClick={() => { updateModal(true) }}>+添加类型</Button></p>
        <Table rowKey="questions_type_id" columns={columns} dataSource={props.question.isQuestionclassifiy} />

      </div>
    </div>
  )
}


Question.propTypes = {

};
const mapState = (state) => {

  // console.log(state.question.isQuestionclassifiy.data)

  console.log(state)

  return {
    ...state,
    // ...state.isQuestionclassifiy,
    // ...state.isQuestionclassifiyAdd
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    questionclassifiy: payload => {
      dispatch({
        type: "question/questionclassifiy",//  前面的是login//命名空间 namespace: 'login',   后面的login的方法// 异步操作 effects:{ *login({ payload , type },{call,put}){}
      })
    },
    questionclassifiyAdd: payload => {
      console.log(payload)
      dispatch({
        type: "question/questionclassifiyAdd",//  前面的是login//命名空间 namespace: 'login',   后面的login的方法// 异步操作 effects:{ *login({ payload , type },{call,put}){}
        payload
      })
    }
  }
}

export default connect(mapState, mapDispatchToProps)(Form.create()(Question));
