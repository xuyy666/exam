import React from 'react'; // useState
import { connect } from 'dva';

function Grademanage(){
  return (
      <div>
          班级管理
      </div>
  )
}

Grademanage.propTypes = {

};
export default connect()(Grademanage);