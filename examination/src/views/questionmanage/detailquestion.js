import React from 'react'; // useState
import { connect } from 'dva';
import './detailquestion.scss';
function Classroomanage(){
  return (
      <div className="detailquestion">
          <h2>试题详情</h2>
          <div className="detailBox">
            <div className="leftDetail"></div>
            <div className="rightDetail"></div>
          </div>
      </div>
  )
}

Classroomanage.propTypes = {

};
export default connect()(Classroomanage);