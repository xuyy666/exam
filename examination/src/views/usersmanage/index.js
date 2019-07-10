import React from 'react'; // useState
import { connect } from 'dva';

function Question(){
  return (
      <div>
          用户管理
      </div>
  )
}

Question.propTypes = {

};
export default connect()(Question);