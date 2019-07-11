import React from 'react'; // useState
import { connect } from 'dva';
import { Cascader, Button } from 'antd';
import './addusers.scss'
const options = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
  },
]
function Addusers() {
  function onChange(value, selectedOptions) {
    console.log(value, selectedOptions);
  }

  function filter(inputValue, path) {
    return path.some(option => option.label.toLowerCase().indexOf(inputValue.toLowerCase()) > -1);
  }
  return (
    <div className="addPage">
      <p>添加用户</p>
      <div className="addBox">
        <ul>
          <li>
            <div className="fristLi">
              <p><button>添加用户</button><button>更新用户</button></p>
              <p><input type="text" placeholder="请输入用户名" /></p>
              <p><input type="password" placeholder="请输入密码" /></p>
              <p>
                <Cascader
                  options={options}
                  onChange={onChange}
                  placeholder="Please select"
                  showSearch={{ filter }}
                />,
                     </p>
              <p>
                <Button type="primary">确定</Button>
                <Button>重置</Button>
              </p>
            </div>
          </li>
          <li>
            <div className="secLi">
              <p><button>添加身份</button></p>
              <p><input type="text" placeholder="请输入身份名称" /></p>
              <p>
                <Button type="primary">确定</Button>
                <Button>重置</Button>
              </p>
            </div>
          </li>
          <li>
            <div className="thirdLi">
              <p><button>添加api接口权限</button></p>
              <p><input type="text" placeholder="请输入api接口权限名称" /></p>
              <p><input type="text" placeholder="请输入api接口权限url" /></p>
              <p><input type="text" placeholder="请输入api接口权限方法" /></p>
              <p>
                <Button type="primary">primary</Button>
                <Button>重置</Button>
              </p>
            </div>
          </li>
          <li>
            <div className="foreLi">
              <p><button>添加视图接口权限</button></p>
              <p><input type="text" placeholder="请选择以右视图" /></p>
              <p>
                <Button type="primary">primary</Button>
                <Button>重置</Button>
              </p>
            </div>
          </li>
          <li>
            <div className="fiveLi">
              <p><button>给身份设置api接口权限</button></p>
              <p>
                <Cascader
                  options={options}
                  onChange={onChange}
                  placeholder="Please select"
                  showSearch={{ filter }}
                />,
                     </p>
              <p>
                <Cascader
                  options={options}
                  onChange={onChange}
                  placeholder="Please select"
                  showSearch={{ filter }}
                />,
                     </p>
              <p>
                <Button type="primary">primary</Button>
                <Button>重置</Button>
              </p>
            </div>
          </li>
          <li>
            <div className="sixLi">
              <p><button>给身份设置视图权限</button></p>
              <p>
                <Cascader
                  options={options}
                  onChange={onChange}
                  placeholder="Please select"
                  showSearch={{ filter }}
                />,
                     </p>
              <p>
                <Cascader
                  options={options}
                  onChange={onChange}
                  placeholder="Please select"
                  showSearch={{ filter }}
                />,
                     </p>
              <p>
                <Button type="primary">primary</Button>
                <Button>重置</Button>
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

Addusers.propTypes = {

};
export default connect()(Addusers);