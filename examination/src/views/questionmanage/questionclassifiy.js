import React from 'react'; // useState
import { connect } from 'dva';
import { Table } from 'antd';
import './questionclassifiy.scss'
const columns = [
  {
    title: '类型ID',
    dataIndex: 'name',
    width: 300
  },
  {
    title: '类型名称',
    dataIndex: 'age',
    width: 200
  },
  {
    title: '操作',
  
  },
];
function Question(){
  const data = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    
  });
}
  return (
      <div className="questionclassifiyPage">
         
          <div className="head">
             <h1>试题分类</h1>
          </div>
          <div className="sec">
            <p><button>+添加类型</button></p>
          <Table columns={columns} dataSource={data} pagination={{ pageSize: 80 }} scroll={{ y: 240 }}/>,
);
          </div>
         
      </div>
  )
}

Question.propTypes = {

};
const mapState = (state) => {
  console.log(state)
  return { ...state.questionclassifiy }
}
const mapDispatchToProps = (dispatch) => {
  return {
    login: payload => {
      dispatch({
        type: "questionclassifiy/questionclassifiy",//  前面的是login//命名空间 namespace: 'login',   后面的login的方法// 异步操作 effects:{ *login({ payload , type },{call,put}){}
        payload
      })
    }
  }
}

export default connect(mapState, mapDispatchToProps)(Question);
