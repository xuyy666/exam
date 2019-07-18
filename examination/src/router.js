import React from 'react';
import { Router, Route, Switch ,Redirect} from 'dva/router';
import IndexPage from './pages/IndexPage'; // 首页
import LoginPage from './pages/login/IndexPage'// 登录页
// import QuestionDetail from './pages/lookquedetail/questionsdetail.js'; // 试题详情                                      // 试题详情

import {connect} from 'dva';
//引入国际化
import {IntlProvider, addLocaleData} from 'react-intl';
import en from 'react-intl/locale-data/en';
import zh from 'react-intl/locale-data/zh';
import zhCN from '@/lang/zh-CN.js';
import enUS from '@/lang/en-US.js';
const localMap = {
  en: enUS,
  zh: zhCN
}
addLocaleData([...en, ...zh]);

const mapStateToProps = state=>{
  return {
    locale: state.global.locale
  }
}
 const RouterView=connect(mapStateToProps)((props)=>{
   return <IntlProvider locale={props.locale} messages={localMap[props.locale]}>
    <Router history={props.history}>
   <Switch>
     <Route path="/index" component={IndexPage} />
     <Route path="/login" component={LoginPage} />
     {/* <Route path="/questiondetail/:id" component={QuestionDetail} /> */}
     <Redirect from="/" to="/index" />

   </Switch>
 </Router>
 </IntlProvider>
 })

function RouterConfig({ history }) {
  return (
    <RouterView history={history}></RouterView> 
  );
}

export default RouterConfig;
