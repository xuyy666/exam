import dva from 'dva';
// 引入全局样式
import './index.css';

// 引入andt样式
import 'antd/dist/antd.css';
import createLoading from 'dva-loading';
// import {createLogger} from 'redux-logger'
// 1. Initialize
const app = dva(createLoading());
app.use({
    // onAction:createLogger(),
    // onError:(e)=>{
    //     massage.error(e.message)
    // }
})

// 2. Plugins
// app.use({});

// 3. Model
app.model(require('./models/login').default);//登录页
app.model(require('./models/questionclassifiy').default);//试题分类
app.model(require('./models/lookquestion').default);// 试题分类 添加试题类型 创建考试

app.model(require('./models/addquestion').default)  // 添加试题接口
app.model(require('./models/getexamtype').default)  // 获取所有的考试类型
app.model(require('./models/getallcourses').default) // 获取所有的课程
app.model(require('./models/listuser.js').default) // 获取用户的接口
app.model(require('./models/getpaperlist.js').default) //获取试卷列表接口

app.model(require('./models/AddUser').default);//添加用户

app.model(require('./models/grademenage').default);//添加班级
app.model(require('./models/global.js').default);//国际化
// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
