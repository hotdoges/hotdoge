import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

class SiderLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
      user: '',
    };
  }

  testButton() {
    console.log(Meteor.user());
    console.log(this.props.users);
  }

  //不知道加载组件什么时候才加载Meteor.user()
  componentDidMount() {
    console.log('修改state', Meteor.user());
    this.setState({
      user: Meteor.user(),
    });
    console.log('state: ', this.state.user);
  }

  logout() {
    console.log(Meteor.user());
    Meteor.logout(
      (err) => {
        if(err) {
          console.log('logout: ', err);
          return;
        }
        console.log('登出');
      }
    );
  }

  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  }

  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
      <button type="button" onClick={this.testButton.bind(this)}>测试</button>
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <SubMenu
              key="sub1"
              title={<span><Icon type="user" /><span>User</span></span>}
            >
              <Menu.Item key="3">{this.state.user}</Menu.Item>
              <Menu.Item key="4">Bill</Menu.Item>
              <Menu.Item key="5">Alex</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={<span><Icon type="team" /><span>Team</span></span>}
            >
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>
            <SubMenu 
              key="sub3"
              title={<span><Icon type="setting" /><span>设置</span></span>}
            >
              <Menu.Item key="sys" >
                <span>
                  <Icon type="logout" />
                  <span onClick={this.logout.bind(this)}>登出</span>
                </span>
              </Menu.Item>
            </SubMenu>
            <Menu.Item key="9">
              <Icon type="file" />
              <span>File</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '12px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
              Bill is a cat.
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Ant Design ©2016 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

export default createContainer(() => {
  return {
    users: Meteor.users.find({}).fetch(),
  };
}, SiderLayout);

// ReactDOM.render(<SiderDemo />, mountNode);