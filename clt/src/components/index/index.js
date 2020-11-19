import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect, HashRouter, withRouter } from "react-router-dom"; // 引入需要用到的页面组件
import {Layout} from 'antd'
import HeadCM from "../common/head";// 头部
import ContentCM from "../common/content";// 主题 
import MainCM from "../main"; // 主页
import MessageCM from "../common/message";
import CaseCM from "../case/case";// 案件
import RepayCM from "../repay/repayList";// 还款
import BiPortCM from "../bi-repot/bi-report";// 报表
import UserCM from "../user/user"; // 用户列表
import PrivateRoute from '../PrivateRoute'


class Index extends React.Component{
  state = {
    collapsed: false
  }

  toggle = () => {
    // console.log(this)  状态提升后，到底是谁调用的它
    this.setState({
      collapsed: !this.state.collapsed
    })
  }
  render() {
    debugger
    // 设置Sider的minHeight可以使左右自适应对齐
    return (
      <div id='page'>
       <div isloggedin={false}>
          <HeadCM />
          <div>
            <div className="my-body">
              <ContentCM  />
              <section className="my-content">
                {/* {this.props.children} */}
                <Switch>
                  <PrivateRoute exact path="/index" component={MainCM} />
                  <PrivateRoute path="/message" component={MessageCM} />
                  <PrivateRoute path="/case" component={CaseCM} />
                  <PrivateRoute path="/repay" component={RepayCM} />
                  <PrivateRoute path="/bi-report" component={BiPortCM} />
                  <PrivateRoute path="/user" component={UserCM} />
                  <Redirect path="/" exact replace to="/index" />
                </Switch>
                </section>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Index