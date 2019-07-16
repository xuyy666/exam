import React from 'react'; // useState
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

  const onChanges=(value, dateString)=>{
    console.log('Selected Time: ', value);
    console.log('Formatted Selected Time: ', dateString);
  }
  
  const onOk=(value)=>{
    console.log('onOk: ', value);
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
                {getFieldDecorator('examtype', {
                  rules: [
                    {
                      required: true,
                      message: '请输入选择考试类型',
                    },
                  ],
                })( <Select
        
                  style={{ width: 200 }}
                  placeholder="examtype"
                >
                  <Option value="tom">Tom</Option>
                </Select>)}
              </Form.Item>
       
        {/* 选择课程 */}
     
              <Form.Item label="选择课程">
                {getFieldDecorator('classify', {
                     rules: [
                      {
                        required: true,
                        message: '请输入选择课程',
                      },
                    ],
                })( <Select
                  style={{ width: 200 }}
                  placeholder="classify"
                >
                  <Option value="tom">Tom</Option>
                </Select>)}
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
              <RangePicker
                showTime={{ format: 'HH:mm' }}
                format="YYYY-MM-DD HH:mm"
                placeholder={['Start Time', 'End Time']}
                onChange={()=>onChanges()} 
                onOk={()=>onOk()}
              />
        </Form>

            </div>
          
          </div>
      </div>
  )
}

Addexam.propTypes = {

};
export default connect()(Form.create()(Addexam));