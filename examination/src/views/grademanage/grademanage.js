
import React, { useState, useEffect } from 'react'; // useState
import { connect } from 'dva';
import { Table, Button, Form, Modal, Input, Divider } from 'antd'; //Breadcrumb
import styles from './grademanage.scss';
// import styles from './questionclassifiy.scss'
function Grademanage(props) {
  const columns = [
    {
      title: '班级名',
      dataIndex: 'grade_name',
      key: "name"
    },
    {
      title: '课程名',
      dataIndex: 'subject_text',
      key: "text"
    },
    {
      title: '教室号',
      dataIndex: 'room_text',
      key: "room"
    },
    {
      title: '操作',
      dataIndex: '',
      render: text =>
        <div>
          {/* <a href="javascript:void();" onClick={() => edit(text)}>修改</a> */}
          <Divider type="vertical" />
          {/* <a href="javascript:void();" onClick={() => deletes(text)}>删除</a> */}
        </div>,
      key: "action"
    }
  ]
  let [showModal, updateModal] = useState(false)
  useEffect(() => {
    console.log(props)
    props.gradeMenage()
    // props.graderoom()
    // props.examSubject(), 
    // props.Addgrade(), 
     //props.deletegrade()
     //props.newgrade()
  }, [])

  console.log(props)

  const { getFieldDecorator } = props.form;
  const handleSubmit = () => {
    props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }
  // const edit = (text) => {
  //   console.log(text)
  // }
  // const deletes = (text) => {
  //   console.log(text)
  // }
  return (
    <div className={styles.gradePage}>
      <Modal
        visible={showModal}
        title="添加班级"
        onCancel={() => updateModal(false)}
        onOk={() => handleSubmit()}
      >
        {/* 班级名 */}
        <Form.Item label="班级名">
          {getFieldDecorator('grade', {
            rules: [
              {
                required: true,
                message: 'Please input your grade',
              },
            ],
          })(<Input className="input" placeholder="Please input your grade" />)}
        </Form.Item>
        {/* 教室号 */}
        <Form.Item label="教室号">
          {getFieldDecorator('class', {
            rules: [
              {
                required: true,
                message: 'Please input your class',
              },
            ],
          })(<Input className="input" placeholder="Please input your class" />)}
        </Form.Item>
        {/* 课程名 */}
        <Form.Item label="课程名">
          {getFieldDecorator('menu', {
            rules: [
              {
                required: true,
                message: 'Please input your menu',
              },
            ],
          })(<Input className="input" placeholder="Please input your menu" />)}
        </Form.Item>
      </Modal>

      <div className={styles.head}>
        <h1>班级管理</h1>
      </div>
      <div className={styles.sec}>

        <p><Button onClick={() => { updateModal(true) }}>+添加类型</Button></p>
        <Table rowKey="grade_id" columns={columns} dataSource={props.grade.isgradeMenage} />
      </div>
    </div>
  )
}


Grademanage.propTypes = {

};
const mapState = (state) => {
  console.log(state)
  return {
    ...state,
    ...state.grade,
    // ...state.isdeletegrade
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    gradeMenage: payload => {
      dispatch({
        type: 'grade/gradeMenage',
        payload
      })
    },
    //   graderoom: payload => {
    //     dispatch({
    //         type: 'grade/graderoom',
    //     })
    //  },
    // examSubject: payload => {
    //   dispatch({
    //       type: 'grade/examSubject',

    //   })
    // },
    // Addgrade: payload => {
    //   dispatch({
    //       type: 'grade/Addgrade',
    //       payload
    //   })
    // },
    // deletegrade: payload => {
    //   dispatch({
    //       type: 'grade/deletegrade',
    //       payload
    //   })
    // },
    // newgrade: payload => {
    //   dispatch({
    //       type: 'grade/newgrade',
    //       payload
    //   })
    // },
  }
}

export default connect(mapState, mapDispatchToProps)(Form.create()(Grademanage));
