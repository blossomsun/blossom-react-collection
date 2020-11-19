import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
import { Link } from "react-router-dom";
import { Layout, Breadcrumb, Menu, Icon, Button, Switch } from "antd";
import { PieChartOutlined, TableOutlined,   CoffeeOutlined,  DollarCircleOutlined,  FileOutlined,  TeamOutlined,  UserOutlined} from '@ant-design/icons';
 

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

// const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;  
require("assets/styles/head.scss");
class ContentComponent extends Component {
  constructor(props){
    super(props);
}

  handleClick = e => {
    // debugger
    this.setState({
      current: e.key
    });
    if(e.key === '1'){
        this.props.history.push("/index");
    }else if(e.key === '2'){
        this.props.history.push("/case");
    } else if (e.key === '3') {
      this.props.history.push("/user");      
    } else if (e.key === '6') {
      this.props.history.push("/repay");
    }
  };
  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };
  render() {
    const { collapsed } = this.state;
    return (
      <aside className="aside-wrap">
      <Layout style={{ minHeight: '100vh'}}>
        <Sider  class="nav"  collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
          <div className="logo" />
          <Menu theme="dark"defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1" icon={<PieChartOutlined />} onClick={this.handleClick}>
             订单统计
            </Menu.Item>
            <Menu.Item key="2" icon={<TableOutlined />} onClick={this.handleClick}>
            产品列表
            </Menu.Item>          
            <Menu.Item key="3" icon={<UserOutlined />} onClick={this.handleClick}>
              用户管理
            </Menu.Item>
            <Menu.Item key="6" icon={<DollarCircleOutlined />} onClick={this.handleClick}>
            订单列表
            </Menu.Item>
            <SubMenu key="4" icon={<CoffeeOutlined />} title="敬请期待">
              <Menu.Item key="sub3">Team 1</Menu.Item>
              <Menu.Item key="sub4">Team 2</Menu.Item>
              <Menu.Item key="sub5">Team 3</Menu.Item>
            </SubMenu>
            <SubMenu key="5" icon={<CoffeeOutlined />} title="敬请期待">
              <Menu.Item key="sub6">Team 1</Menu.Item>
              <Menu.Item key="sub8">Team 2</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        {/* <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              Bill is a cat.
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout> */}
      </Layout>
      </aside>
      // <aside className="aside-wrap">
      //   <div style={{ width: 200 }}>
      //     <div>
      //       <Menu
      //         onClick={this.handleClick}
      //         style={{ width: 200 }}
      //         defaultSelectedKeys={["1"]}
      //         defaultOpenKeys={["1"]}
      //         theme={'dark'}
      //         mode="inline"
      //       >
      //         <Menu.Item key="1">
      //           <Link to="/index" replace>
      //             <Icon type="home" />首页
      //           </Link>
      //         </Menu.Item>
      //         <Menu.Item key="2">
      //           <Link to="/case" replace>
      //             <Icon type="mail" />产品列表
      //           </Link>
      //         </Menu.Item>
      //         <Menu.Item key="3">
      //           <Link to="/repay" replace>
      //             <Icon type="table" />订单列表
      //           </Link>
      //         </Menu.Item>
      //         <Menu.Item key="4">
      //           <Link to="/bi-report" replace>
      //             <Icon type="bar-chart" />订单报表
      //           </Link>
      //         </Menu.Item>
      //         <Menu.Item key="5">
      //           <Link to="/user" replace>
      //             <Icon type="team" />用户列表
      //           </Link>
      //         </Menu.Item>  
      //       </Menu>
      //     </div>
      //   </div>
      // </aside>
    );
  }
}
export default withRouter(ContentComponent);
