import React from 'react'; // useState
import { connect } from 'dva';
import './usershow.scss'
function Usershow(){
  return (
      <div className="usershow">
          用户展示
      </div>
  )
}

Usershow.propTypes = {

};
export default connect()(Usershow);