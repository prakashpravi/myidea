import React from 'react';
import { Layout, Menu, Avatar, Tooltip } from 'antd';
import {
    FireOutlined, MessageOutlined, FileTextOutlined,ProfileOutlined
} from '@ant-design/icons';
import "./styled.css"
const { Sider, Footer } = Layout;
class SiderBar extends React.Component {
    state = {};
    render() {
        const data = [
            { name: "Projects", url: "/project", icon: <ProfileOutlined /> },
            { name: "Actions", url: "/actions", icon: <FireOutlined /> },
            { name: "Message", url: "/message", icon: <MessageOutlined /> },
            { name: "Doccuments", url: "", icon: <FileTextOutlined /> },
        ];
        return (<div>
            <Layout className="sidebarmain">
                <Sider collapsed={true} className="sidebar">
                    <div className="logodiv">
                        <Avatar size="large" shape="square"
                            src="https://pbs.twimg.com/profile_images/864282616597405701/M-FEJMZ0_400x400.jpg"
                            className="avatar" />
                    </div>
                    {data.map(v => {
                        return <Menu className="menu" defaultSelectedKeys={['1']} mode="inline" onClick={() => this.props.history.push(v?.url)}>
                            <Menu.Item key="1" className="menuItem" icon={v.icon}> {v.name} </Menu.Item>
                        </Menu>
                    })}
                </Sider>
            </Layout>
            <Footer className="mobile_sidebar">
                {data.map(v => {
                    return <div className="menu">
                        <Tooltip title={v.name}><span key="1" className="menuItem"> {v.icon} </span></Tooltip>
                    </div>
                })}
            </Footer>
        </div>

        );
    }
}

export default SiderBar;