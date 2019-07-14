import React from 'react';
import { connect } from 'dva';
import styles from './questionsdetail.scss';

function QuestionsDetail(props){
    console.log(props)
    console.log(props.location.state);
    // let {data} = props.location.state;
    return (
        <div className={styles.itemdetails}>
            <h2>试题详情</h2>
            
        </div>
    )

}

QuestionsDetail.propTypes = {

};

export default connect()(QuestionsDetail)