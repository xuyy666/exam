import React from 'react';
import { Router, Route, Switch ,Redirect} from 'dva/router';
import IndexPage from './pages/IndexPage';
import LoginPage from './pages/login/IndexPage'// 登录页
//import Detailquestion from '../views/questionmanage/detailquestion'//试题详情
function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/index" component={IndexPage} />
        <Route path="/login" component={LoginPage} />

        {/* <Route path="/detailquestion" component={Detailquestion} /> */}
        {/* <Redirect from="/" to="/index" /> */}
        <Redirect from="/" to="/index" />

      </Switch>
    </Router>
  );
}

export default RouterConfig;
