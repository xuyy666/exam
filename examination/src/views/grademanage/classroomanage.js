import React from 'react'; // useState
import { connect } from 'dva';
import styles from './classroomanage.scss'
function ClassrooManage(){
  return (
      <div className={styles.classroom}>
        <h2>教室管理</h2>
          <div className={styles.classwrap}>
              
          </div>
      </div>
  )
}

ClassrooManage.propTypes = {

};

const mapState = (state)=>{
  return{

  }
}
const mapDispatch =(dispatch)=>({
    
})
export default connect(mapState,mapDispatch)(ClassrooManage);