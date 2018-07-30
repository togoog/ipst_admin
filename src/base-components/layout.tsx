import * as React from 'react'
import { Layout } from 'antd'

const { Header, Sider, Content, Footer } = Layout;
// const SubMenu = Menu.SubMenu;
import './layout.styl'
class LayoutComponent extends React.Component {
    public render() {
        return (
        <Layout className="fui-admmin-wrap">
            <Header>header</Header>
            <Layout>
                <Sider breakpoint="md" 
                        collapsible={true} 
                        reverseArrow={true}
                        collapsed={false}>left sidebar</Sider>
                <Layout>
                    <Content>main content</Content>
                    <Footer>footer</Footer>
                </Layout>
            </Layout>
        </Layout>
        )
    }
}

export default LayoutComponent