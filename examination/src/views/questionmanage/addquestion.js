import React, { useState, useEffect } from 'react'; // useState
import { connect } from 'dva';
import styles from './addquestion.scss';
import { Input, Select,Button } from 'antd';
import Editor from 'for-editor'
function Addquestion(props) {
    
    // state ={
    //  this.setState({})
    // }
    const [content, setvalue] = useState(undefined);
    // const [title, setvalue1] = useState(1);// 初始值 为1 当change事件改变的时候变为2
    const change = (value) => { // 传入什么值写什么值  或者改变后的值
        setvalue(value)
        // setvalue1(2)
    }

    //调用数据
    useEffect(() => {
        // props.addquestion()
        props.getAllQuest();
        props.getexamType(); // 获取所有的考试类型
        props.getAllCourses() // 获取所有的课程
    }, [])
    function handleChange(value) {
        console.log(`selected ${value}`);
    }
    const { data, getAllCours } = props;
    // const getAllCours= props.getAllCours.data;

    //getAllCourses
    console.log('===========', data)
    console.log('--------',getAllCours)
    // console.log(getAllCours)
    const { Option } = Select;
    console.log(props)
    // const { size } = state;
    return (
        <div className={styles.addquestion}>
            <h2>添加试题</h2>
            <div className={styles.addquestionwrap}>
                <div className={styles.title}>
                    <h3>题目信息</h3>
                    <p>题干</p>
                    {/* <p>题干{title}</p> */}
                    
                    <Input placeholder="请输入题目标题,不超过20个字" className={styles.input} />
                </div>

                <div className={styles.marked}>
                    <h3>题目主题</h3>
                    <Editor value={content} onChange={change} style={{ height: "260px", margin: "0 10px" }}></Editor>
                </div>

                <div className={styles.types}>
                   <div className={styles.select}>
                       <h4>请选择考试类型:</h4>
                        <Select defaultValue="周考一" style={{ width: 200 }} onChange={handleChange}>
                            {
                                data && data.map((item,index)=><Option value={item.exam_name} key={item.exam_id}>{item.exam_name}</Option>    
                               )
                            }
                        </Select>
                  </div> 
                  <div className={styles.select}>
                       <h4>请选择课程类型:</h4>
                        <Select defaultValue="javaScript上" style={{ width: 200 }} onChange={handleChange}>
                            {
                                getAllCours && getAllCours.map((item,index)=><Option value={item.subject_text} key={item.subject_id}>{item.subject_text}</Option>    
                               )
                            }
                        </Select>
                  </div> 
                  <div className={styles.select}>
                       <h4>请选择题目类型:</h4>
                        <Select defaultValue="" style={{ width: 200 }} onChange={handleChange}>
                            {
                                data && data.map((item,index)=><Option value={item.exam_name} key={item.exam_id}>{item.exam_name}</Option>    
                               )
                            }
                        </Select>
                  </div> 
                </div>
                <div className={styles.marked}>
                    <h3>答案信息</h3>
                    <Editor value={content} onChange={change} style={{ height: "260px", margin: "0 10px" }}></Editor>
                </div>

                <div className={styles.submit}>
                    <Button type="primary" className={styles.btn}>
                        提交
                    </Button>
                </div>
                
            </div>
        </div>
    )
}



Addquestion.propTypes = {

};
const mapState = (state) => {
    console.log(state)
    return {
        ...state.getAllQuestions,
        ...state.examType.examTypes,
        ...state.getallcourse
    }
}
const mapDispatch = (dispatch) => ({
    addquestion(payload) {
        console.log(payload)
        dispatch({
            type: "addQuestion/addQuestion",
            payload
        })
    },
    getAllQuest(payload) {
        dispatch({  // 获取所有的考试试题
            type: "getAllQuestions/getAllQuestions",
            payload
        })
    },
    getexamType(payload) {
        dispatch({  // 获取所有的考试类型
            type: "examType/examType",
            payload
        })
    },
    getAllCourses(payload){
        dispatch({   //
            type:"getallcourse/getAllCourses",
            payload
        })
    }
})
export default connect(mapState, mapDispatch)(Addquestion);

/* <div className="ant-form-item-control-wrapper">
<div className="ant-form-item-control">
    <span className="ant-form-item-children">
        <div className="for-container">
            <div className="for-controlbar">
                <ul>
                    <li title="上一步 (ctrl+z)"><i className="foricon for-undo"></i></li><li title="下一步 (ctrl+y)"><i className="foricon for-redo"></i></li><li data-type="h1" title="一级标题">H1</li><li data-type="h2" title="二级标题">H2</li><li data-type="h3" title="三级标题">H3</li><li data-type="h4" title="四级标题">H4</li><li data-type="image" title="图片"><i className="foricon for-image"></i></li><li data-type="link" title="超链接"><i className="foricon for-link"></i></li><li data-type="code" title="代码块"><i className="foricon for-code"></i></li><li data-type="code" title="保存 (ctrl+s)"><i className="foricon for-save"></i></li></ul><ul><li className=""><i className="foricon for-expand"></i></li><li className=""><i className="foricon for-eye"></i></li></ul></div><div className="for-editor"><div className="for-panel"><div className="for-editor-wrapper"><div className="for-editor-block"><ul className="for-line-num"><li>1</li></ul><div className="for-editor-content"><pre> </pre><textarea placeholder="请输入内容..."></textarea></div></div></div></div><div className="for-panel for-preview-hidden"><div className="for-preview for-markdown-preview">
                    </div>
                    </div>
            </div>
        </div>
    </span>
</div>
</div> */
