import React,{useEffect}from 'react'; // useState
import { connect } from 'dva';
import styles from './addexam.scss'
import {
  Form,
  Input,
  Button,
  Select,
  InputNumber,
  DatePicker 
} from 'antd';

const { Option } = Select;
const { RangePicker } = DatePicker;


function Addexam(props){
  console.log(props)

  useEffect(()=>{
     props.lookquestionExam()
     props.lookquestionMenu()
  },[])

  console.log(props)

  let {isLookquestionExam}=props.look
  let {isLookquestionMenu}=props.look
  // 题目数量
 let onChange=(value)=>{
    console.log('changed', value);
  }


  let handleSubmit =()=> {
     props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }
  const { getFieldDecorator } = props.form;
  return (
      <div className={styles.AddExam}>
       <h2>添加考试</h2>
          
          <div className={styles.AddBox}>
            <div className={styles.Addborder}>
              {/* 试卷名称 */}
            <Form onSubmit={handleSubmit} className={styles.form}>
              <Form.Item label="试卷名称">
                {getFieldDecorator('examname', {
                   rules: [
                    {
                      required: true,
                      message: '请输入选择考试名称',
                    },
                  ],    
                })(<Input placeholder="examname" style={{width:'300px'}}/>)}
              </Form.Item>
       

        {/* 选择考试类型*/}
       
              <Form.Item label="选择考试类型">
             <Select defaultValue="周考一"
                  style={{ width: 200 }}
                >
                   {
                    isLookquestionMenu.map((item,index)=>(
                      <Option key={item.exam_id} >{item.exam_name}</Option>
                    ))
                  }
                 
                </Select>
              </Form.Item>
       
        {/* 选择课程 */}
     
              <Form.Item label="选择课程">
               <Select defaultValue="简答题"
                  style={{ width: 200 }}
                >
                   {
                    isLookquestionExam.map((item,index)=>(
                      <Option key={item.questions_type_id}>{item.questions_type_text}</Option>
                    ))
                  }
                </Select>
              </Form.Item>
        {/* 设置题量 */}
              <Form.Item label="选择课程">
                {getFieldDecorator('classMany', {
                  rules: [
                    {
                      required: true,
                      message: '请输入选择课数',
                    },
                  ],
                })( <InputNumber min={1} max={10}  onChange={onChange} />)}
              </Form.Item>

           {/* 考试时间 */}
           <Form.Item label="考试时间">
              <RangePicker
                showTime={{ format: 'HH:mm' }}
                format="YYYY-MM-DD HH:mm"
                placeholder={['Start Time', 'End Time']}
                onChange={onChanges} 
                onOk={onOk}
              />
              </Form.Item>

              <Button type="primary" style={{width:"200px"}}>创建试卷</Button>
        </Form>
            </div>
          
          </div>
      </div>
  )

  function onChanges(value, dateString) {
    console.log('Selected Time: ', value);
    console.log('Formatted Selected Time: ', dateString);
  }
  
  function onOk(value) {
    console.log('onOk: ', value);
  }
}

Addexam.propTypes = {

};
const mapState = (state) => {
  console.log(state)
  return {
    ...state,
    ...state.isLookquestionExam,
    ...state.isLookquestionMenu,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
   //获取考试类型
    lookquestionExam: payload => {
      dispatch({
        type: "look/lookquestionExam",
      })
    },
     //获取课程类型
    lookquestionMenu: payload => {
      dispatch({
        type: "look/lookquestionMenu",
      })
    },
   
  }
}


export default connect(mapState,mapDispatchToProps)(Form.create()(Addexam));