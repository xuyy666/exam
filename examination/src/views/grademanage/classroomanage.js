import React from 'react'; // useState
import { connect } from 'dva';

function Classroomanage(){
  return (
      <div>
          教室管理
      </div>
  )
}

Classroomanage.propTypes = {

};
export default connect()(Classroomanage);