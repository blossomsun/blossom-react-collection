/**
 * Created by wuyms on 2020/11/12.
 */
 
import React from "react"
import { withRouter } from 'react-router-dom'
import axios from "axios"
import { message,Form, Icon, Input, Button, Checkbox} from 'antd'
import store from '../../redux/store'
require('assets/styles/login.scss')
require('../../mock/mock')
 
const FormItem = Form.Item;
class NormalLoginForm extends React.Component {
    constructor(props){
        super(props);
    }
    state = {
        name : "admin",//输入框输入值
        password: ""
    };
    componentWillMount() {

    }
    handleSubmit(data){
        axios.post("/users",data).then((res) =>{
            debugger
            let resMsg = res.data;
            if(data.name === "admin" && data.password==="123456"){
                localStorage.setItem('username',data.name)
                store.dispatch({type:'login',username:data.name})
                localStorage.setItem('token', data.token)
                this.props.history.push('/index')
            }else{
                message.error('用户或密码不正确')
            }
        })
    }
    render() {
        let top = window.innerHeight/2;
        let left = window.innerWidth/2; 
        let message = this.message
        return (
            <div className="login-wrap">
                <Form onFinish={(e)=>this.handleSubmit(e)} className="loginForm">
                    <h5>用户登陆</h5>
                    <Form.Item className="fixed-width"
                        name='name'
                        label="用户姓名："
                        rules={[
                            {
                              required: true,
                              message: "用户名不能为空！"
                            }
                        ]}>
                        <Input maxLength="20" value={this.state.name}   placeholder="请输入用户名" />
                    </Form.Item>
                    <Form.Item className="fixed-width"
                        name='password'
                        label="用户姓名："
                        rules={[
                            {
                            required: true,
                            message: "密码不能为空！"
                            }
                        ]}>
                        <Input maxLength="20"  value={this.state.password}   placeholder="请输入密码" type="password" />
                    </Form.Item>
                    <FormItem>
                    <Button size="large"  type="primary" htmlType="submit" className="login-form-button" >登陆</Button>
                    </FormItem>
                    <p>用React仿建的报表系统</p>
                    <p>By Blossom</p>
                </Form>
            </div>
        );
    }
}

export default withRouter(NormalLoginForm)