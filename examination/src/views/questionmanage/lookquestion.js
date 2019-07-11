import React from 'react'; // useState
import { connect } from 'dva';
import { Cascader,Button } from 'antd';
import './lookquestion.scss'
const options = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
  },
];
function Question(){
  
    function onChange(value, selectedOptions) {
      console.log(value, selectedOptions);
    }
  
    function filter(inputValue, path) {
      return path.some(option => option.label.toLowerCase().indexOf(inputValue.toLowerCase()) > -1);
    }
  return (
      <div className="lookquestion">
        <h1> 查看试题</h1>
         <div className="loopBox">
           <div className="classType"></div>
           <div className="examType">
             <p>考试类型: <Cascader
                  options={options}
                  onChange={onChange}
                  placeholder="Please select"
                  showSearch={{ filter }}
                />
               考试类型: <Cascader
                  options={options}
                  onChange={onChange}
                  placeholder="Please select"
                  showSearch={{ filter }}
                />
                <Button className="btn">查询</Button>
                </p>
           </div>
         </div>
         <div className="loopSec"></div>
      </div>
  )
}

Question.propTypes = {

};
export default connect()(Question);