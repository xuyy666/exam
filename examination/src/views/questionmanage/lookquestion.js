import React from 'react'; // useState
import { connect } from 'dva';

function Question(){
  return (
      <div>
          查看试题
      </div>
  )
}

Question.propTypes = {

};
export default connect()(Question);