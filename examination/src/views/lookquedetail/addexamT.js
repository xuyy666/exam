import React, { useEffect,useState } from 'react';
import { connect } from 'dva';
import styles from './addexamT.scss'
import { Button,Drawer } from 'antd';


function addexamT(props) {
  console.log(props)
 
    useEffect(() => {
      props.addExam(props.location.params)
      props.upExam()
  }, [])
  console.log(props)

  let { addExam } = props.AddExam
  let { upExam } = props.AddExam
  
  let {question, exam_exam_id } = props.exam_info;
  let toExamList = () => {
    let arr =addExam&&addExam.map(item => {
      // console.log(item)
      return item.questions_id
    })
    upExam({ question_ids: `"${JSON.stringify(arr)}"`, "exam_exam_id": exam_exam_id })
    props.history.push({ pathname: './examlist' })
  }
  const [visible,change_visible]=useState(false)
   let showDrawer = () => {
      change_visible(true)
    };

   let onClose = () => {
    change_visible(false)
    };
  return (
    <div className={styles.AddExam}>
      <h2>创建试卷</h2>
      <div className={styles.create_exam}>
        <div className={styles.create_title}>
          <h4><Button style={{height:50}} onClick={()=>{showDrawer()}}>添加试题</Button><p></p><span></span></h4>
          <p>考试时间：1小时30分钟 监考人：刘于 开始考试时间：2018.9.10 10:00 阅卷人：刘于</p>
        </div>
        <ul className={styles.cont_list}>
          {
            question && question.map((item, index) => {
              return (
                <li key={item.questions_id}>
                  <p><span>{index + 1}、{item.title}</span><em>删除</em></p>
                  <pre>
                    <code>
                      {item.questions_stem}
                    </code>
                  </pre>
                </li>
              )
            })
          }
        </ul>
        <Button type="primary" className="login-form-button" style={{ width: 200, height: 50, fontSize: 25 }} onClick={() => { toExamList() }}>
          创建试卷
            </Button>
            <Drawer
              title="添加试题"
              placement="right"
              closable={false}
              onClose={onClose}
              visible={visible}
              width="1000"
            >
           
          </Drawer>
      </div>
    </div>
  );
}

addexamT.propTypes = {

};
const mapToProps = state => {
  console.log(state)
  return { ...state, ...state.AddExam }
}
const mapDispatchToProps = (dispatch) => {
  return {
    //添加考试
    addExam: payload => {
      dispatch({
        type: "AddExam/addExam",
        payload
      })
    },
    //更新试卷
    upExam: payload => {
      dispatch({
        type: "AddExam/upExam",
        payload
      })
    },
  }
}

export default connect(mapToProps, mapDispatchToProps)(addexamT);
