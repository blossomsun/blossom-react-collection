import React from "react";
import { Button, Modal, Form, Input, Radio, Select,Cascader,message  } from "antd";
import axios from "axios";
const FormItem = Form.Item;
const Option = Select.Option;
require("assets/styles/user.scss");
const formItemLayout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 16 },
};

// const UserForm = Form.create()(
  class UserForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        visible: false,
        dialogForm: {
            username: '',
            tel: '',
            email: '',
            sex: ''
        }
      };
    }
    // 初始化调用下拉接口
    componentWillMount(){
    }
    handleOk = () => {
      this.props.form.validateFields((err,values) => {
        if(err) {
            console.log('错了');
            return false
        }
        message.success('用户添加成功');
        this.clearForm();
      })
    }
    //清空表单
    clearForm = () => {
      // this.props.form.resetFields();
      this.props.closeAdd();
    };
    // 电话检查
    checkTel = (rule,value,callback) => {
      let telpat = /^1[0-9]{10}/;
      if(telpat.test(value)){
          callback();
      }
      callback('电话格式不正确')
    }
    render() {
      const { visible, onCancel, onCreate, form } = this.props;
      //  } = form;
      return (
        <Modal
          visible={this.props.visible}
          title = {this.props.title}
          cancelText="取消"
          okText={this.props.text}
          onCancel={this.clearForm}
          onOk={this.handleOk}
        >
          <Form  >
          <Form.Item className="fixed-width" {...formItemLayout}
              name={['user', 'name']}
              label="用户姓名："
              rules={[
                {
                  required: true,
                    message: "必填项!"
                  },
                  {
                    min: 6,
                    max:12,
                    message: '名字应该在2-12个字符'
                  }
              ]}>
              <Input maxLength="20" placeholder="请输入用户姓名" type="password" />
            </Form.Item>
            {/* <FormItem label="电话："   {...formItemLayout}>
              {getFieldDecorator("tel", {
                rules: [
                  {
                    required: true,
                    message: "必填项!"
                  },
                  { 
                    validator: this.checkTel
                  }
                ],
              })
              (<Input maxLength="20" placeholder="请输入电话" />)
              }
            </FormItem>
            <FormItem label="邮箱："   {...formItemLayout}>
              {getFieldDecorator("email", {
                rules: [
                  {
                    required: true,
                    message: "必填项!"
                  }
                ],
              })
              (<Input maxLength="20" placeholder="请输入邮箱" />)
              }
            </FormItem>
            <FormItem label="性别"   {...formItemLayout}>
              {getFieldDecorator("sex", {
                rules: [
                  {
                    required: true,
                    message: "必填项!"
                  }
                ],
              })
              (<Select placeholder="请选择性别">
                  <Option value="male">男性</Option>
                  <Option value="female">女性</Option>
                  <Option value="other">其他</Option>
              </Select>)
              }
            </FormItem> */}
          </Form>
        </Modal>
      );
    }
  }
// );

export default UserForm