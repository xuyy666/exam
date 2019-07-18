import React, { useState, useEffect } from 'react'; // useState
import { connect } from 'dva';
import styles from './examlist.scss'
import { Button, Select, Form, Tabs, Radio, Table } from 'antd';
import moment from 'moment'
function Examlist(props) {
  const { TabPane } = Tabs;
  // tab
  // const [addstyle,setstyle] = useState(false);

  let handleSubmit = () => {

  }
  let handleChange = () => {

  }
  let onChange = () => {

  }
  //调用数据
  useEffect(() => {
    props.getexamType(); // 获取所有的考试类型
    props.getAllCourses() // 获取所有的课程
    props.getPapeList()
  }, [])

  const { data, getAllCours, exam } = props;
  const { getFieldDecorator } = props.form;
  const { Option } = Select;
  // console.log('----------------------', exam)
  const columns = [
    {
      title: '试卷信息',
      dataIndex: '',
      key: '1',
      render: (text) => {
        // console.log('==========  ', text); // 9999999 11  测试2019.03.28
        let time = moment(text.start_time - text.end_time)
        return (
          <div>
            <h5>{text.title}</h5>
            <p style={{ fontSize: "12px" }}>
              <span style={{ marginRight: '10px' }}>考试时间:{time.hours()}:{time.minutes()}:{time.second()}</span>
              <span>{text.number}道题</span>
              <span>作弊{text.status}分</span>
            </p>
          </div>
        )
      }
    },
    {
      title: '班级',
      dataIndex: '',
      key: '2',
      render: text => {
        return (
          <div>
            <p>考试班级</p>
            <p style={{ fontSize: "12px" }}>{text.grade_name.join(' ')}</p>
          </div>
        )
      }
    },
    {
      title: '创建人',
      key: '3',
      dataIndex: 'user_name',
    },
    {
      title: '开始时间',
      key: '4',
      dataIndex: 'start_time',
      render:text=>{
         return <span style={{fontSize:"12px"}}>{new Date(text*1).toLocaleString()}</span>
      }
    },
    {
      title: '结束时间',
      key: '5',
      dataIndex: 'end_time',
      render:text=>{
        // console.log('69996999966999699',text) // 1564053625352
        return <span style={{fontSize:"12px"}}>{new Date(text*1).toLocaleString()}</span>
      }
    },
    {
      title: '操作',
      dataIndex: '',
      key: '6',
      render: (text) => {
        console.log('**************',text.exam_exam_id)
        return (
          <span>
            <span style={{ cursor: "pointer" }} onClick={() => {
              //  props.history.push({ pathname:`/index/paperdetail/${text.exam_exam_id}`})
               props.history.push(`/index/paperdetail/${text.exam_exam_id}`)
            }}>详情</span>

            {/* <a href="javascript:;" onClick={() => { props.history.push(`/index/paperdetail/${text.exam_exam_id}`) }}>详情</a> */}
          </span>
        )
      }
    }
  ];
  
  // <a
  //     href="javascript:;"
  //     onClick={() => this.save(form, record.key)}
  //     style={{ marginRight: 8 }}
  //   ></a>

  return (
    <div className={styles.examlist}>
      <h2>试卷列表</h2>
      <div className={styles.examlistwrap}>
        <div className={styles.examtopper}>
          <Form onSubmit={handleSubmit} className={styles.examtop}>
            <Form.Item className={styles.select}>
              <span>考试类型:</span>
              {getFieldDecorator('examType', {
                initialValue: "周考1"
              })(<Select style={{ width: 200 }} onChange={handleChange}>
                {
                  data && data.map((item, index) => <Option value={item.exam_id} key={item.exam_id}>{item.exam_name}</Option>
                  )
                }
              </Select>)
              }
            </Form.Item>
            <Form.Item className={styles.select}>
              <span>课程:</span>
              {getFieldDecorator('courseType', {
                initialValue: "javaScript上"
              })(<Select style={{ width: 200 }} onChange={handleChange}>
                {
                  getAllCours && getAllCours.map((item, index) => <Option value={item.subject_id} key={item.subject_id}>{item.subject_text}</Option>
                  )
                }
              </Select>)
              }
            </Form.Item>
            <Form.Item className={styles.btn}>
              <div>
                <Button
                  type="primary"
                  icon="search"
                  htmlType="submit"
                  className={styles.btns}
                >
                  查询
                </Button>
              </div>
            </Form.Item>
          </Form>
        </div>

        <div className={styles.examlistbottom}>
          <div className={styles.examlisthead}>
            <p>试题列表</p>
            <Radio.Group onChange={onChange}>
              <Radio.Button value="small" style={{ color: "#1890ff", borderRadius: "none" }}>全部</Radio.Button>
              <Radio.Button value="default" style={{ color: "#1890ff" }}>进行中</Radio.Button>
              <Radio.Button value="large" style={{ color: "#1890ff" }}>已结束</Radio.Button>
            </Radio.Group>
          </div>
          <Table
            columns={columns}
            dataSource={exam}
            rowKey="exam_exam_id"
            pagination={false}
          />
        </div>

      </div>
    </div>
  )
}

Examlist.propTypes = {

};
const mapState = (state) => {
  // console.log(state)
  return { //  ...state.getAllQuestions,
    ...state.examType.examTypes,
    ...state.getallcourse,  // 2
    ...state.getTestList.getPaperLists
  }
}
const mapDispatch = (dispatch) => ({
  getexamType(payload) {
    dispatch({  // 获取所有的考试类型
      type: "examType/examType",
      payload
    })
  },
  getAllCourses() {
    dispatch({   // 获取所有的课程
      type: "getallcourse/getAllCourses"
    })
  },
  getPapeList() {
    dispatch({   // 获取试卷列表
      type: "getTestList/getPaperList"
    })
  }
})
export default connect(mapState, mapDispatch)(Form.create()(Examlist));