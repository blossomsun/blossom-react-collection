//引入一些模块
import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect, HashRouter, withRouter } from "react-router-dom"; // 引入需要用到的页面组件
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
import PrivateRoute from '../components/PrivateRoute'
// import Index from '../routes/Index/index'
 

// 嵌套路由
let isloggedin = localStorage.getItem('token')? true: false

class RouterList extends Component {
  constructor (props){
    super   (props)
  }
  render(e) {
    debugger
    console.log(store)
    console.log(this.props.children)
    let temp = <div className="my-content">{this.props.children}</div>
    if (isloggedin) {
      temp = <Provider store = {store} >
              <div isloggedin={false}>
                  <HeadCM store = {store} />
                  <div>
                    <div className="my-body">
                      <ContentCM  />
                      <section className="my-content">{this.props.children}</section>
                    </div>
                  </div>
                </div>
            </Provider>
    } else {
      // this.props.history.push('/login')
    }
    return (    
      temp
    );
  }
}
// 这是默认的确认函数
const getConfirmation = (message, callback) => {
  const allowTransition = window.confirm(message);
  callback(allowTransition);
}

const RouterLists = (
  <HashRouter getUserConfirmation={getConfirmation} >
    <div className="appWrap">
      <RouterList>
        <Switch>
          <Route exact path="/login" component={LoginCM} />
          {/* <PrivateRoute path='/' component={Index}/> */}
          {/* <Route path="/index" component={MainCM} />
          <Route path="/message" component={MessageCM} />
          <Route path="/case" component={CaseCM} />
          <Route path="/repay" component={RepayCM} />
          <Route path="/bi-report" component={BiPortCM} />
          <Route path="/user" component={UserCM} />
          <Redirect path="/" exact replace to="/index" /> */}
        </Switch>
      </RouterList>
    </div>
  </HashRouter>
);
export default  (RouterLists);
