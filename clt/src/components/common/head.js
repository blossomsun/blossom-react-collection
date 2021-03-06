import React,{Component} from 'react'
import { withRouter } from 'react-router-dom';
import {Button,Icon,Avatar,Divider  } from 'antd'
import axios from 'axios'
import { isAbsolute } from "path";
import {createStore} from 'redux'
import {Provider,connect} from 'react-redux'
import store from '../../redux/store'
import { LogoutOutlined, SmileOutlined, FastBackwardOutlined, AreaChartOutlined,UserOutlined } from '@ant-design/icons';
require('assets/styles/head.scss')
class HeadComponent extends Component {
    constructor(props){
      super(props);
      this.state = {
        text: '退出',
        color: '#7265e6',
        username: ''
      }
    }
    componentWillMount = () =>{
     store.subscribe( () => {
      let state = store.getState();
      let username = state.username
      this.setState({'username': username});
     })

    }
    componentDidUpdate = () => {
     // console.log(this.state.username)
    }
    logout = (e) => {
      e.preventDefault();
      axios.post("/user/logout",{}).then((res) =>{
        if(res.data.code === 0){
            localStorage.removeItem('username');
            localStorage.removeItem('token');
            this.props.history.push("/login");
        }else{
            // message.error('系统异常')
        }
      })
    }
    render () {
      return (
        <header className='my-head'>
          <div className='hd-left'>
            <img src="../img/logo.png" className="logo" /> 
          </div>
          <div className='hd-right'  >
          <Avatar src="../img/header.png"  style={{ backgroundColor: this.state.color,display:'inline-block'}} />
          &nbsp;{this.state.username}
          <Divider  type="vertical" />
          <LogoutOutlined style={{ fontSize: '16px', color: '#fff' }} onClick={this.logout} />
          </div>
        </header>
      )
    }
}

export default withRouter(HeadComponent)