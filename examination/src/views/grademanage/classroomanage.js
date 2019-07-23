import React, { useState, useEffect } from 'react'; // eslint-disable-line
import { connect } from 'dva';
import { Table, Button, Form, Input, Modal } from 'antd';
import styles from './classroomanage.scss';
// const {confirm} = Modal;
function ClassrooManage(props) {
  useEffect(() => {
    props.addClass()
  }, []);

  const { addRoom } = props;
  // console.log(addRoom)
  console.log(props);
  const { getFieldDecorator } = props.form;
  const [mask,setMask] = useState(false);
  const addRooms =()=>{
    setMask(true)
  }
  const clickdel =()=>{
    setMask(false)
  }
  // const clickMask =()=>{
  //   setMask(false)
  // }

  let handleSubmit = e => {
    console.log(1111)
    e.preventDefault();
     props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form:1111111111 ', values);// {room_text: "90"}
          props.addcls({room_text:values.roomnum})
        // if(values){
        //   props.addcls({room_text:values.roomnum})
        // } 
      
      }
      setMask(false)
    });
  };


  //  点击删除 执行此函数
  function deletes(text){
    console.log(text);
    // props.removeClas()
    Modal.confirm({
      title: '确定要删除此教室吗?',
      okText: '确认',
      cancelText: '取消',
      onOk() {
        // alert(9)
        props.removeClas({room_id:text.room_id})
      },
      onCancel() {
  
      },
    });
  }
  // const deletes = (text) => { // text.room_id
  //   console.log(text);
  //   props.removeClas()
  //   // addRoom.filter(item => item.id !== id)
  //     confirm({
  //         title="Modal"
  //         visible={visible}
  //         onOk={hideModal}
  //         onCancel={hideModal}
  //         okText="确认"
  //         cancelText="取消"
  //   })
  // }
  
  const columns = [
    {
      title: '教室号',
      dataIndex: 'room_text',
      key: '1'
    },
    {
      title: '操作',
      dataIndex: '',
      key: '2',
      render: (text) => {
        // console.log(text);
        return <span onClick={() => deletes(text)}>删除</span>
      }
    }
  ];

  const pageSizeOptions = {
    pageSize: 30
  }
  return (
    <div className={styles.classroom}>
      <h2>教室管理</h2>
      <Form onSubmit={handleSubmit} className={styles.classwrap}>
        <Button type="primary" onClick={addRooms} style={{ height: "40px", lineHeight: "22px", padding: '0px 40px', background: 'linear-gradient(-90deg,#4e75ff,#0139fd)' }} className={styles.topbtn}>
          <span style={{ marginRight: "10px", fontWeight: '800', fontSize: "18px" }}>+</span> 添加教室
          </Button>
          <Table rowKey="room_id" columns={columns} dataSource={addRoom} pagination={pageSizeOptions}/>
          {/* onClick={clickMask} */}
          { mask && <div className={styles.mask}>
             <div className={styles.maskcontent}>
                <div className={styles.maskcontop}>
                  <h3>添加班级</h3>
                  <p className={styles.del} onClick={clickdel}>X</p>
                </div>
                <div className={styles.content}>
                   <Form.Item label="教室号">  
                    { getFieldDecorator('roomnum', {
                      rules: [
                        {
                          required: true,
                          message: '请输入班级名称!',
                        }
                      ],
                    })(<Input placeholder="教室名" />)}
                  </Form.Item>
                </div>
                <div className={styles.contentbom}>
                  <Form.Item className={styles.footerbtn}>
                      <Button>取消</Button>
                      <Button type="primary" htmlType="submit" className={styles.btn}>提交</Button>
                  </Form.Item>
                </div>
             </div>
          </div>}
 
      </Form>
    </div>
  )
}

ClassrooManage.propTypes = {

};

const mapState = (state) => {
  console.log('222222222222222222', state)
  return {
    ...state.grade
  }
}

const mapDispatch = (dispatch) => ({
  // 获取全部教室
  addClass(payload) {
    dispatch({
      type: "grade/addClassroom",
      payload
    })
  },
  //  添加教室
  addcls(payload){
    dispatch({
      type:"grade/addClass",
      payload
    })
  },
 //  删除教室
  removeClas(payload){
    console.log(payload)
    dispatch({
      type:"grade/removeClass",
      payload
   })
 }
})
export default connect(mapState, mapDispatch)(Form.create()(ClassrooManage));