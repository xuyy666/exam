import React, { useState, useEffect } from 'react'; // useState
import { connect } from 'dva';
import { Table, Button, Form, Modal, Input, Divider,Select } from 'antd'; //Breadcrumb
import styles from './grademanage.scss';
const {Option}=Select
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
          <a href="javascript:;" onClick={() => edit(text)}>修改</a>
          <Divider type="vertical" />
          <a href="javascript:;" onClick={() => deletes(text)}>删除</a>
        </div>,
      key: "action"
    }
  ]
  let [showModal, updateModal] = useState(false)
  useEffect(() => {
    console.log(props)
    props.gradeMenage()
    props.graderoom()
    props.examSubject()
    // props.Addgrade(), 
    //props.deletegrade()
    //props.newgrade()
  }, [])


   let {isgraderoom}=props.grade
  let {isexamSubject}=props.grade

  console.log(props)
//表单提交

  const { getFieldDecorator } = props.form;
  const handleOk =e => {
    props.form.validateFields((err, values) => {
        console.log(values)
        let obj={
            grade_name:values.grade_name,
            room_text:values.room_text,
            subject_text:values.subject_text
        }
        props.Addgrade(obj)
        updateModal(false)
    });
  }
  const edit = () => {
    
  }
  const deletes = () => {
    console.log(this)
    
  }
 
 
  return (
    <div className={styles.gradePage}>
         
      <Modal
        visible={showModal}
        title="添加班级"
        onCancel={() => updateModal(false)}
        onOk={handleOk}
      >
            
      <Form> 
      <Form.Item>
          <p>班级名</p>
          {getFieldDecorator('grade_name', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input
             placeholder="Password"
            />,
          )}
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
          })}
              <Select defaultValue="教室号"
              style={{width:300}} >
                {
              isgraderoom&&isgraderoom.map((item)=>(     
                <Option key={item.room_id}>{item.room_text}</Option>
              ))
                }
              </Select>
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
          })}
               <Select defaultValue="课程名"
              style={{width:300}} >
                {
              isexamSubject&&isexamSubject.map((item)=>(     
                <Option key={item.subject_id}>{item.subject_text}</Option>
              ))
                }
              </Select>
        </Form.Item>
        </Form>
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
     ...state.isgraderoom,
     ...state.isexamSubject,
     ...state.isAddgrade,
    //  ...state.isdeletegrade,
   
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    gradeMenage: payload => {
      dispatch({
        type: 'grade/gradeMenage',
        
      })
    },
      graderoom: payload => {
        dispatch({
            type: 'grade/graderoom',
        })
     },
    examSubject: payload => {
      dispatch({
          type: 'grade/examSubject',

      })
    },
    Addgrade: payload => {
      dispatch({
          type: 'grade/Addgrade',
          payload
      })
    },
    deletegrade: payload => {
      dispatch({
          type: 'grade/deletegrade',
          payload
      })
    },
    // newgrade: payload => {
    //   dispatch({
    //       type: 'grade/newgrade',
    //       payload
    //   })
    // },
  
        addRoom: payload => {
            dispatch({
                type: 'grade/addRoom',
                payload
            })
          },
          delRoom: payload => {
            dispatch({
                type: 'grade/delRoom',
                payload
            })
          },
  }
}

export default connect(mapState, mapDispatchToProps)(Form.create()(Grademanage));
