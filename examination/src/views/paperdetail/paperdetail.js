import React,{useEffect} from 'react';
import { connect } from 'dva';

import styles from './paperdetail.scss'; //
function PaperDetail(props) {
   
    useEffect(()=>{
        if(props.match.params.id){
            let id = props.match.params.id;
            console.log('10------------id',id)
            props.papersDetail(id);
        }
         
    },[]);

    const {papeDetail} = props;
    console.log(papeDetail,"==========")
    return (
        <div className={styles.paperdetail}>
            <h2>试卷详情</h2>
            <div className={styles.pdetailwrap}>
                <div className={styles.left}>
                    <div className={styles.top}>
                        {
                           papeDetail.questions && papeDetail.questions.map((item,index)=>(
                             <div key={item.questions_id} className={styles.questionitem}>
                               <h4>{index+1}:{item.title}</h4>
                               <div className={styles.markdown}>
                                  <p>{item.questions_stem}</p>
                                   <pre>
                                       <code>
                                          {item.questions_answer}
                                       </code>
                                   </pre>
                               </div>
                             </div>
                           ))
                        }
                    </div>

                    {/* <div>
                       {
                           papeDetail.questions && papeDetail.questions.map((item,index)=>(
                             <div key={item.questions_id}>
                               <h4>{index+1}:{item.title}</h4>
                               <div className={styles.markdown}>
                                  <p>{item.questions_stem}</p>
                                   <pre>
                                       <code>
                                          {item.questions_answer}
                                       </code>
                                   </pre>
                               </div>
                             </div>
                           ))
                        }
                    </div> */}
                </div>
                <div className={styles.right}>
                    right
                        {/* <div>{item.questions_answer}</div> */}
                    {/* exam_id questions_id questions_type_id subject_id user_id */}
                </div>
            </div>
        </div>
    )
}

PaperDetail.propTypes = {

};
const mapState =(state)=>{
    return {
       ...state.getTestList
    }
}
const mapDispatch = (dispatch)=>({
    papersDetail(payload){
        console.log('42---------id',payload)
        dispatch({
            type:"getTestList/paperDetails",
            payload
        })
    }
})

export default connect(mapState,mapDispatch)(PaperDetail);