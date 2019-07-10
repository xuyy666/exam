import React from 'react'; // useState
import { connect } from 'dva';

function Addexam(){
  return (
      <div>
          添加考试
      </div>
  )
}

Addexam.propTypes = {

};
export default connect()(Addexam);