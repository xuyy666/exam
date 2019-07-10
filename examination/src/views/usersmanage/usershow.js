import React from 'react'; // useState
import { connect } from 'dva';

function Usershow(){
  return (
      <div>
          用户展示
      </div>
  )
}

Usershow.propTypes = {

};
export default connect()(Usershow);