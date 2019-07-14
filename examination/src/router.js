import React from 'react';
import { Router, Route, Switch ,Redirect} from 'dva/router';
import IndexPage from './pages/IndexPage'; // 首页
import LoginPage from './pages/login/IndexPage'// 登录页
// import QuestionDetail from './pages/lookquedetail/questionsdetail.js'; // 试题详情                                      // 试题详情
function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/index" component={IndexPage} />
        <Route path="/login" component={LoginPage} />
        {/* <Route path="/questiondetail/:id" component={QuestionDetail} /> */}
        <Redirect from="/" to="/index" />

      </Switch>
    </Router>
  );
}

export default RouterConfig;
