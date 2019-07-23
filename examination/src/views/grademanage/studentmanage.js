import React, { useEffect } from 'react'; // useState
import { connect } from 'dva';
import { Layout, Form, Input, Select, Button, Table, message } from 'antd';
import styles from './studentmanage.scss'
const { Content } = Layout;


function Studentmanage(props) {
  const columns = [
    {
      title: '姓名',
      dataIndex: 'student_name'
    },
    {
      title: '学号',
      dataIndex: 'student_id'
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
      dataIndex: 'student_pwd'
    },
    {
      title: '操作',
      render: (text) => {
        // console.log(text);
        return <span onClick={() => removeStudent(text.student_id)}>删除</span>
      }
    }
  ];

  const { Option } = Select;
  const { addRoom, students } = props;
  // addRoom 教室号 addRooms 获取已经分配教室的班级的接口
  console.log(props);
  console.log(students)

  useEffect(() => {
    props.addAllClass(); // 获取全部的教室
    props.haveClassroom(); // 获取已经分配教室的班级的接口 
    props.notHaveClassroom()// 获取所有没有分班的学生接口
  }, [])

  // 提交
  let handleSubmit = e => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);

      }
    });
  };

  // 删除学生
  let removeStudent = (id) => {
    console.log(id)
    props.removeStudents(id); // 删除学生接口
  }
  useEffect(() => {
    if (props.delStudent === 1) {  // if(props.delStudent.code === 1){}
        message.success('删除成功');
        props.record(); // 从 -1的状态到1 执行这个状态  之后就不执行  写这个方法让其执行多次
    }
    props.haveClassroom(); // 获取已经分配教室的班级的接口 
    props.notHaveClassroom()// 获取所有没有分班的学生接口
  },[props.delStudent]) // 没有删除为-1(初始状态为-1)  删除学生状态为 1

  const { getFieldDecorator } = props.form;
  //  重置
  const handleReset = () => {
    props.form.resetFields();
    // resetFields()
  }

  let pagination = () => {

  }
  // let loading = () => {  // loading={loading}

  // }
  let handleTableChange = () => {

  }

  return (
    <Layout className={styles.studentman} style={{ padding: '0 24px 24px' }}>
      <h2 style={{ padding: '20px 0' }}>学生管理</h2>
      <Form onSubmit={handleSubmit} className={styles.forms}>
        <Form.Item className={styles.item}>
          { getFieldDecorator('studentname', {
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
          { getFieldDecorator('grade_id', {

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
          dataSource={students}
          pagination={pagination}
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
  haveClassroom() {  // 获取已经分配教室的班级的接口 
    dispatch({
      type: "studentsMan/haveClassroom"
    })
  },
  notHaveClassroom() { // 获取所有没有分班的学生接口
    dispatch({
      type: "studentsMan/notClassroom"
    })
  },
  // 删除学生接口
  removeStudents(payload) {
    dispatch({
      type: "studentsMan/delete_student",
      payload
    })
  },
  // 同步执行这个状态
  record(){
    dispatch({
      type: "studentsMan/record",
    })
  }
})
export default connect(mapState, mapDispatch)(Form.create()(Studentmanage));