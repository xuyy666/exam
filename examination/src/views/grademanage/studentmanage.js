import React from 'react'; // useState
import { connect } from 'dva';

function Studentmanage(){
  return (
      <div>
          学生管理
      </div>
  )
}

Studentmanage.propTypes = {

};
export default connect()(Studentmanage);