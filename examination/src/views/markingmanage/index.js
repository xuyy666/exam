import React from 'react'; // useState
import { connect } from 'dva';

function Question(){
  return (
      <div>
          阅卷管理
      </div>
  )
}

Question.propTypes = {

};
export default connect()(Question);