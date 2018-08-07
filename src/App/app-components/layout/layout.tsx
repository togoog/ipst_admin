import * as React from 'react'
import { Layout, Icon } from 'antd';
import SiderMenus from 'src/App/app-components/menus/menu'
// import Grid from 'src/pages/demo/grid/grid'
// import Button from 'src/pages/demo/button/button'
// import Icons from 'src/pages/demo/icons/icons'
const { Header, Sider, Content } = Layout;
import './layout.less'
// import SiderMenus from '../menus/menu';

class LayoutDemo extends React.Component {
  public state = {
    collapsed: false,
  };

  public toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  public render() {
    return (
      <Layout className="app-layout-wrap">
        <Sider
          trigger={null}
          collapsible={true}
          collapsed={this.state.collapsed}>
          <div className="logo" />
          <SiderMenus />
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </Header>
          <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
            content...
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default LayoutDemo