import React from 'react';
import { connect } from 'dva';

function QuestionsDetail(props){
    console.log(props)
    console.log(props.location.state);
    // let {data} = props.location.state;
    return (
        <div className="itemdetails">
            <h2>试题详情</h2>
            
        </div>
    )

}

QuestionsDetail.propTypes = {

};

export default connect()(QuestionsDetail)