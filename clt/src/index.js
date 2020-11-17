import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import RouterLists from './router/index'
// 引入样式和阿里巴巴的图标
require('antd/dist/antd.css')
require('./styles/iconfont1/iconfont.css')
require('./styles/App.scss')
ReactDOM.render(
  <div className="appWrap">
    {RouterLists}
  </div>, 
    // <App />
  document.getElementById('root')
);
reportWebVitals(); 