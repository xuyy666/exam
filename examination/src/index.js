import dva from 'dva';
// 引入全局样式
import './index.css';
// 引入andt样式
import 'antd/dist/antd.css';

// 1. Initialize
const app = dva();

// 2. Plugins
// app.use({});


// 3. Model
app.model(require('./models/login').default);
app.model(require('./models/questionclassifiy').default);//试题分类
app.model(require('./models/lookquestion').default);// 试题分类 添加试题类型
// app.model(require('./models/lookquestion').default);

app.model(require('./models/addquestion').default)  // 添加试题
app.model(require('./models/getexamtype').default)  // 获取所有的考试类型
app.model(require('./models/getallcourses').default) // 获取所有的课程


// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
