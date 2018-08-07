import * as React from 'react'
import { Menu, Icon } from 'antd';
import MenuConfig from '../../../config/menuConfig';
const { SubMenu } = Menu;
interface ITheme {
    theme: any
    current: number
}
interface IMyComponentState {
    menuTreeNode: any,
    navStyle: ITheme
}
// export interface IProps {
//     name: string;
//   }
class SiderMenus extends React.Component<{}, IMyComponentState> {

    public componentWillMount() {
        const navStyle: ITheme = {
            current: 1,
            theme: 'dark'
        }
        const menuTreeNode:any = this.renderMenu(MenuConfig)
        this.setState({
            navStyle,
            menuTreeNode
        })
    }

    public renderMenu = (data:any) => {
        return data.map((item:any, index:number):any => {
            if (item.children) {
                return (
                    <SubMenu title={<span><Icon type="appstore" /><span>{item.title}</span></span>} key={index}>
                        {this.renderMenu(item.children)}
                    </SubMenu>
                )
            } else {
                return (
                    <Menu.Item key={item.key}>
                        <Icon type="pie-chart" />
                        <span>{item.title}</span>
                    </Menu.Item>
                )
            }
        })
    }
    public render() {
        return (
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                {this.state.menuTreeNode}
            </Menu>
        )
    }
}

export default SiderMenus