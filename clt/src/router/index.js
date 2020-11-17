//引入一些模块
import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect, HashRouter} from "react-router-dom";
//引入需要用到的页面组件 
import LoginCM from "../components/login/login"; // 登录
import MainCM from "../components/main"; // 主页
import HeadCM from "../components/common/head";// 头部
import ContentCM from "../components/common/content";// 主题
import MessageCM from "../components/common/message";
import CaseCM from "../components/case/case";// 案件
import RepayCM from "../components/repay/repayList";// 还款
import BiPortCM from "../components/bi-repot/bi-report";// 报表
import UserCM from "../components/user/user"; // 用户列表
import { Provider, connect } from "react-redux";
import store from "../redux/store";

// 初级用法
// function router(){
// return (
// <HashRouter history={hashHistory}>
//     <Route path="/" render={
//       ()=> (
//       <Redirect to="/login"/>)}>
//     </Route>
//     <Route path="/login" component={LoginCM} />
//     <Route path="/index" component={MainCM} />
// </HashRouter>);
// }

// 嵌套路由
class RouterList extends Component {
  render() {
    return (    
      <Provider store = {store}>
        <div>
          <div>
            <HeadCM store = {store} />
            <div>
              <div className="my-body">
                <ContentCM  />
                <section className="my-content">{this.props.children}</section>
              </div>
            </div>
          </div>
        </div>
      </Provider>
    );
  }
}
const RouterLists = (
  <HashRouter>
    <div className="appWrap">
      <RouterList>
       <Switch>
          <Route exact path="/login" component={LoginCM} />
        </Switch>
        <Switch>
          <Route path="/index" component={MainCM} />
          <Route path="/message" component={MessageCM} />
          <Route path="/case" component={CaseCM} />
          <Route path="/repay" component={RepayCM} />
          <Route path="/bi-report" component={BiPortCM} />
          <Route path="/user" component={UserCM} />
          <Redirect path="/" exact replace to="/index" />
        </Switch>
      </RouterList>
    </div>
  </HashRouter>
);
export default RouterLists;
