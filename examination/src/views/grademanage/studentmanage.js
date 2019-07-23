import React, { useState, useEffect } from 'react'; // useState
import { connect } from 'dva';
import { Layout, Form, Input, Select, Button, Table } from 'antd';
import styles from './studentmanage.scss'
const { Content } = Layout;
const columns = [
  {
    title: '姓名',
    // dataIndex: 'name'
  },
  {
    title: '学号',
    // dataIndex: 'gender'
  },
  {
    title: '班级',
    // dataIndex: 'email'
  },
  {
    title: '教室',
    dataIndex: 'room_text'
  },
  {
    title: '密码',
    // dataIndex: 'gender'
  },
  {
    title: '操作',
    // dataIndex: 'email'
  }
];

function Studentmanage(props) {
  const { getFieldDecorator } = props.form;
  const { Option } = Select;


  // const { addRoom, addRooms } = props;
  // addRoom 教室号 addRooms 获取已经分配教室的班级的接口
  const { 
     addAllClass,
     addClassRoom,
     studentInfo,
     addRoom, 
     addRooms,
     allStudent:reduxStudent
     } = props; 
   const [allStudent,updateStudent] = useState([]);
   console.log('22222222222222222222222222222',allStudent)
  // console.log(addRoom,addRooms)
  console.log(props);

  useEffect(()=>{
    updateStudent(reduxStudent)
  },[reduxStudent])

  useEffect(() => {
    addAllClass();
    addClassRoom(); // 获取已经分配教室的班级的接口
    studentInfo(); // 获取所有已经分班的学生的接口
    // props.removeStudent(); // 删除学生接口
  }, [])

  let handleSubmit = e => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);

      }
    });
  };

  let handleReset = () => {
    props.from.resetFields()
    // console.log('9999999999999999999999999999999',props.from)
  }
  let pagination = () => {

  }
  // let loading = () => {

  // }
  let handleTableChange = () => {

  }


  return (
    <Layout className={styles.studentman} style={{ padding: '0 24px 24px' }}>
      <h2 style={{ padding: '20px 0' }}>学生管理</h2>
      <Form onSubmit={handleSubmit} className={styles.forms}>
        <Form.Item className={styles.item}>
          {getFieldDecorator('studentname', {
            rules: [
              {
                required: true,
                message: '请输入学生姓名',
              },
            ],
          })(<Input placeholder="输入学生姓名" />)}
        </Form.Item>
        <Form.Item className={styles.item}>
          {getFieldDecorator('room_id', {

          })(<Select
            style={{ width: '180px', height: "32px" }}
            placeholder="请输入教室号">
            {
              addRoom && addRoom.map(item => (
                <Option value={item.room_text} key={item.room_id}>{item.room_text}</Option>
              ))
            }

          </Select>)}
        </Form.Item>
        <Form.Item className={styles.item}>
          {getFieldDecorator('grade_id', {

          })(<Input placeholder="班级名" />)}
        </Form.Item>
        <Form.Item className={styles.item}>
          <Button type="primary" style={{ width: '111px', height: "32px" }}>搜索</Button>
          <Button type="primary" style={{ width: '111px', height: "32px" }} 
           onClick={handleReset}>重置</Button>
        </Form.Item>
      </Form>
      <Content>
        <Table
          columns={columns}
          rowKey="student_id"
          dataSource={allStudent}
          pagination={pagination}
          // loading={loading}
          onChange={handleTableChange}
        />
      </Content>
    </Layout>
  )
}

Studentmanage.propTypes = {

};
const mapState = (state) => {
  return {
    ...state.grade,
    ...state.studentsMan
  }
}
const mapDispatch = (dispatch) => ({
  addAllClass() { // 获取全部教室号
    dispatch({
      type: "grade/addClassroom"
    })
  },
  addClassRoom(){ // 获取已经分配教室的班级的接口
    dispatch({
      type: "studentsMan/addClassrooms"
    })
  },
  // 获取所有已经分班的学生的接口
  studentInfo(){
    dispatch({
      type: "studentsMan/studentInfo"
    })
  },
  //  删除学生接口
  removeStudent(payload){
    dispatch({
      type: "studentsMan/deleteStudent",
      payload
    })
  }
})
export default connect(mapState, mapDispatch)(Form.create()(Studentmanage));