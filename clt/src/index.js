import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Switch, Route, HashRouter } from "react-router-dom"; // 路由管理
import LoginCM from "./components/login/login"; // 登录
import Index from './components/index/index' // 登录后内容页
import PrivateRoute from './components/PrivateRoute'
// 引入样式和阿里巴巴的图标
require('antd/dist/antd.css')
require('./assets/styles/iconfont1/iconfont.css')
require('./assets/styles/App.scss')
ReactDOM.render( 
    <HashRouter >
    <div className="appWrap">
      <Switch>
        <Route exact path="/login" component={LoginCM} />
        <PrivateRoute path='/' component={Index}/>
      </Switch>
    </div>
  </HashRouter>,
  document.getElementById('root')
);
reportWebVitals() // 页面加载性能