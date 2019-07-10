import React from 'react'; // useState
import { connect } from 'dva';

function Examlist(){
  return (
      <div>
          试卷列表
      </div>
  )
}

Examlist.propTypes = {

};
export default connect()(Examlist);