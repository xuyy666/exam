import React from 'react'; // useState
import { connect } from 'dva';

function Awaitingapp(){
  return (
      <div>
          待批班级
      </div>
  )
}

Awaitingapp.propTypes = {

};
export default connect()(Awaitingapp);