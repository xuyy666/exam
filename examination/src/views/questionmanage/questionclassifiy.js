import React from 'react'; // useState
import { connect } from 'dva';

function Question(){
  return (
      <div>
          试题分类
      </div>
  )
}

Question.propTypes = {

};
export default connect()(Question);