import React,{useEffect} from 'react';
import { connect } from 'dva';
import { Tag } from 'antd';
import styles from './questionsdetail.scss'
function QuestionsDetail(props) {
    useEffect(()=>{// get 方式对接口传参
        // props.questionsdetail({questinos_id:props.match.params.id});
        props.questionsdetail({questinos_id:props.match.params.id.slice(1).split('=')[1]})//获取试题信息
        console.log(props.questionsdetail({questinos_id:props.match.params.id.slice(1).split('=')[1]}))
    },[]);
    
    const questionsDetail = props;
    console.log(questionsDetail)
    const {user_name,questions_type_text,subject_text,exam_name,title,questions_stem,questions_answer} = questionsDetail && { ...questionsDetail[0] } // [{}]
   // console.log(questions_id)


    // console.log(props)
    console.log('id//////',props.match.params.id)
    console.log('===========~~~~~~~~~~~~~~~~~~~~',props.location.state);
    // props.getCheckQuestion({'questions_id':props.match.params.id.slice(1).split('=')[1]})//获取试题信息
    return (
        <div className={styles.itemdetails}>
            <h2>试题详情</h2>
            <div className={styles.detailBox}>
                <div className={styles.leftDetail}>
                    出题人: <span>{user_name}</span>
                    <p>题目信息</p>
                    <Tag color="cyan">{questions_type_text}</Tag>
                    <Tag color="geekblue">{subject_text}</Tag>
                    <Tag color="orange">{exam_name}</Tag>
                    <p>{title}</p>
                    <p>{questions_stem}</p>
                </div>
                <div className={styles.rightDetail}>
                        <p>答案信息</p>
                         <p>
                             {questions_answer}
                         </p>
                </div>
            </div>

        </div>
    )

}

QuestionsDetail.propTypes = {

};

const mapState = (state)=>{
    console.log('909009090',state)
    return {
        ...state.look.questionsDetail
    }
}
const mapDispatch = (dispatch)=>({
    questionsdetail(payload){
       dispatch({
           type:"look/questionDetail",
           payload
       })
    }
})


export default connect(mapState,mapDispatch)(QuestionsDetail);
// pbllengraws   voyage 