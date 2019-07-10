import React from 'react'; // useState
import { connect } from 'dva';

function Addusers(){
  return (
      <div>
          添加用户
      </div>
  )
}

Addusers.propTypes = {

};
export default connect()(Addusers);