import React, { useState, useEffect } from 'react'; // useState
import { connect } from 'dva';
import styles from './addquestion.scss';
import { Form, Input, Select, Button, Modal, message } from 'antd';//notification
import Editor from 'for-editor'// 实现markdown效果
function Addquestion(props) {
    //实现 markdown 效果
    // const [content, setvalue] = useState(undefined);
    // // const [title, setvalue1] = useState(1);// 初始值 为1 当change事件改变的时候变为2
    // const change = (value) => { // 传入什么值写什么值  或者改变后的值
    //     setvalue(value)
    //     // setvalue1(2)
    // }

    //调用数据
    useEffect(() => {
        props.getAllQuest();//  没用
        props.getexamType(); // 获取所有的考试类型
        props.getAllCourses() // 获取所有的课程
        props.getAllQuestype(); // 获取所有的试题类型
        props.addUser();     // 获取当前用户信息
    }, [])

    // console.log('-----------------',props.userInfo)
    function handleChange(value) {
        console.log(`selected ${value}`);
    }

    const { data, getAllCours, getAllQuestions, userInfo } = props;
    console.log('================', userInfo.user_id)
    //getAllCourses
    const { Option } = Select;

    //  添加用户信息  设置用户信息
    let [addInfor, setAddInfor] = useState({}); // userInfor
    // form 提交功能
    let handleSubmit = e => {
        e.preventDefault();
        props.form.validateFieldsAndScroll((err, values) => {
            if (!err) { // 没有错误的时候传参
                console.log('Received values of form: ', values);
                // if(){ // 如果有参数 传参

                // }else{ // 没有参数的话，报错误弹框

                // }
                setAddInfor({
                    "questions_type_id": values.questionTypes,// questionTypes
                    "questions_stem": values.iptvalue,  //
                    "subject_id": values.courseType,
                    "exam_id": values.examType,
                    "user_id": userInfo.user_id,  // 用户id
                    "questions_answer": values.answer, // 题目答案
                    "title": values.markdown, // 试题的标题
                })
            } else {
                message.openNotificationWithIcon('error')
            }
        });
    };

    const { getFieldDecorator } = props.form;

    // 创建state,控制弹框的显示隐藏   第一个参数showModal设置默认隐藏    第二个参数updateModal改变显示隐藏
    let [showModal, updateModal] = useState(false);
    //点击提交按钮
    let clickSubmit = () => {
        updateModal(true); //  true 相当于showModal

    }
   
    // 点击弹框的确定
    let okChange = () => {
        updateModal(false);
        props.addquestion(addInfor); // 点击提交的弹框上确定传到用户信息
        success()
    }
    // 点击弹框的取消
    let cancelChange = () => {
        updateModal(false)
    }
    // 点击确定 添加试题成功的弹框
    let success=()=>{
        Modal.success({
            title: '试题添加成功'
        });
    }

    // const openNotificationWithIcon = type => {
    //     notification[type]({
    //       message: '请求错误：402',
    //       description:'http://127.0.0.1:7001',
    //     });
    //   };
    console.log(props);



    // 受控组件
    // const [val,setval] = useState('');
    // let change=(e)=>{
    //     setval(e.target.value)
    // }

    //   受控组件2
    //   const [val,setval] = useState('');
    //   <input type="text" value={val} onChange={(e)=>{setval(e.target.value) />
    return (
        <div className={styles.addquestion}>
            <div className={styles.addquestionwrap}>
                <h2>添加试题</h2>
                {/* <input type="text" value={val} onChange={(e)=>change(e)} /> */}
                <Form className={styles.forms} onSubmit={handleSubmit} >
                    <Form.Item className={styles.title}>
                        <h3>题目信息</h3>
                        <p>题干</p>
                        { getFieldDecorator('iptvalue',{
                            rules: [
                                {
                                  required: true,
                                  message: 'Please input your E-mail!',
                                },
                              ],
                        })(<Input placeholder="请输入题目标题,不超过20个字" className={styles.input} />)
                        }
                    </Form.Item>

                    <Form.Item className={styles.marked}>
                        <h3>题目主题</h3>
                        { getFieldDecorator('markdown')(<Editor style={{ height: "260px", margin: "0 10px" }}></Editor>)
                        }
                    </Form.Item>

                    <div className={styles.types}>
                        <Form.Item className={styles.select}>
                            <h4>请选择考试类型:</h4>
                            {getFieldDecorator('examType',{
                                initialValue:"周考1"
                            })(<Select style={{ width: 200 }} onChange={handleChange}>
                                {
                                    data && data.map((item, index) => <Option value={item.exam_id} key={item.exam_id}>{item.exam_name}</Option>
                                    )
                                }
                            </Select>)
                            }
                        </Form.Item>

                        <Form.Item className={styles.select}>
                            <h4>请选择课程类型:</h4>
                            { getFieldDecorator('courseType',{
                                initialValue:"javaScript上"
                            })(<Select style={{ width: 200 }} onChange={handleChange}>
                                {
                                    getAllCours && getAllCours.map((item, index) => <Option value={item.subject_id} key={item.subject_id}>{item.subject_text}</Option>
                                    )
                                }
                            </Select>)
                            }
                        </Form.Item>

                        <Form.Item>
                            <h4>请选择题目类型:</h4>
                            {getFieldDecorator('questionTypes',{
                                initialValue:"简答题"
                            })(<Select style={{ width: 200 }} onChange={handleChange}>
                                {
                                    getAllQuestions.map((item, index) => <Option key={item.questions_type_id} value={item.questions_type_id}>{item.questions_type_text}</Option>
                                    )
                                }
                            </Select>)
                            }
                        </Form.Item>

                    </div>
                    <Form.Item className={styles.marked}>
                        <h3>答案信息</h3>

                        {getFieldDecorator('answer')(<Editor style={{ height: "260px", margin: "0 10px" }}></Editor>)
                        }
                    </Form.Item>
                    <Form.Item className={styles.submit}>
                       <Button type="primary" htmlType="submit" className={styles.btn} onClick={clickSubmit}>
                            提交
                       </Button>
                    </Form.Item>
                </Form>

                <Modal
                    title="你确定要添加这道试题吗"
                    visible={showModal}
                    onCancel={cancelChange}
                    onOk={okChange}
                    okText="确认"
                    cancelText="取消"
                >
                    <p>真的要添加吗</p>
                </Modal>
                (<div>
                    {/* <Button onClick={success}><span>我知道了</span></Button> */}
                    {/* <Button onClick={() => openNotificationWithIcon('error')}>Error</Button> */}
                </div>,mountNode)

            </div>
        </div>
    )
}


Addquestion.propTypes = {

};

const mapState = (state) => {
    console.log(state)
    return { //  ...state.getAllQuestions,
        ...state,
        ...state.examType.examTypes,
        ...state.getallcourse,  // 2
        ...state.addQuestion, // 拿到用户userInfor  // ...state.addUser
    }
}
const mapDispatch = (dispatch) => ({
    addquestion(payload) { // 添加试题接口
        console.log(payload)
        dispatch({
            type: "addQuestion/addQuestion",
            payload
        })
    },
    // 获取当前用户信息
    addUser(payload) {
        dispatch({
            type: "addQuestion/addUser",
            payload
        })
    },
    getAllQuest(payload) {
        dispatch({  // 获取所有的考试试题  没用
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
    getAllCourses(payload) {
        dispatch({   // 获取所有的课程
            type: "getallcourse/getAllCourses",
            payload
        })
    },
    getAllQuestype(payload) {
        dispatch({  // 获取所有的试题类型
            type: "getallcourse/getAllQuestype",
            payload
        })
    }
})
export default connect(mapState, mapDispatch)(Form.create()(Addquestion));



// onClick={()=>clickSubmit(true)}
 // state ={
 //  this.setState({})
 // }
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


/* <div className={styles.addquestion}>
<h2>添加试题</h2>
<div className={styles.addquestionwrap}>
    <div className={styles.title}>
        <h3>题目信息</h3>
        <p>题干</p>
        <p>题干{title}</p>

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
            <Select defaultValue="简答题" style={{ width: 200 }} onChange={handleChange}>
                {
                    getAllQuestions.map((item,index)=><Option key={item.questions_type_id} value={item.questions_type_text}>{item.questions_type_text}</Option>
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
        <Button type="primary" className={styles.btn} onClick={clicksubmit}>
            提交
        </Button>
    </div>

</div>
</div> */

        // <div className={styles.addquestion}>
        //     <h2>添加试题</h2>
        //     <div className={styles.addquestionwrap}>
        //         <div className={styles.title}>
        //             <h3>题目信息</h3>
        //             <p>题干</p>
        //             {/* <p>题干{title}</p> */}

        //             <Input placeholder="请输入题目标题,不超过20个字" className={styles.input} />
        //         </div>

        //         <div className={styles.marked}>
        //             <h3>题目主题</h3>
        //             <Editor value={content} onChange={change} style={{ height: "260px", margin: "0 10px" }}></Editor>
        //         </div>

        //         <div className={styles.types}>
        //            <div className={styles.select}>
        //                <h4>请选择考试类型:</h4>
        //                 <Select defaultValue="周考一" style={{ width: 200 }} onChange={handleChange}>
        //                     {
        //                         data && data.map((item,index)=><Option value={item.exam_name} key={item.exam_id}>{item.exam_name}</Option>    
        //                        )
        //                     }
        //                 </Select>
        //           </div> 
        //           <div className={styles.select}>
        //                <h4>请选择课程类型:</h4>
        //                 <Select defaultValue="javaScript上" style={{ width: 200 }} onChange={handleChange}>
        //                     {
        //                          getAllCours && getAllCours.map((item,index)=><Option value={item.subject_text} key={item.subject_id}>{item.subject_text}</Option>    
        //                        )
        //                     }
        //                 </Select>
        //           </div> 
        //           <div className={styles.select}>
        //                <h4>请选择题目类型:</h4>
        //                 <Select defaultValue="简答题" style={{ width: 200 }} onChange={handleChange}>
        //                     {
        //                         getAllQuestions.map((item,index)=><Option key={item.questions_type_id} value={item.questions_type_text}>{item.questions_type_text}</Option>    
        //                        )
        //                     }
        //                 </Select>
        //           </div> 
        //         </div>
        //         <div className={styles.marked}>
        //             <h3>答案信息</h3>
        //             <Editor value={content} onChange={change} style={{ height: "260px", margin: "0 10px" }}></Editor>
        //         </div>

        //         <div className={styles.submit}>
        //             <Button type="primary" className={styles.btn} onClick={clicksubmit}>
        //                 提交
        //             </Button>
        //         </div>

        //     </div>
        // </div>
