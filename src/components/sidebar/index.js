import React from 'react';
import { Layout, Menu, Avatar, Tooltip } from 'antd';
import {
    // FireOutlined, MessageOutlined, FileTextOutlined, ProfileOutlined,
    FileZipOutlined, AppstoreOutlined
} from '@ant-design/icons';
import "./styled.css"
const { Sider, Footer } = Layout;
class SiderBar extends React.Component {
    state = {};
    render() {
        const data = [
            // { name: "Projects", url: "/project", icon: <ProfileOutlined /> },
            // { name: "Actions", url: "/actions", icon: <FireOutlined /> },
            // { name: "Message", url: "", icon: <MessageOutlined /> },
            // { name: "Doccuments", url: "", icon: <FileTextOutlined /> },
            { name: "Drive", url: "/drive", icon: <FileZipOutlined /> },
            { name: "More", url: "", icon: <AppstoreOutlined /> },
        ];
        const url = window.location.pathname;
        return (<div>
            <Layout className="sidebarmain">
                <Sider collapsed={true} className="sidebar">
                    <div className="logodiv">
                        <Avatar size="large" shape="square"
                            src="https://pbs.twimg.com/profile_images/864282616597405701/M-FEJMZ0_400x400.jpg"
                            className="avatar" />
                    </div>
                    {data.map((v, i) => {
                        return <Menu className={v?.url === url ? "menu" : "menu_notactive"} defaultSelectedKeys={['1']} mode="inline" onClick={() => this.props.history.push(v?.url)}>
                            <Menu.Item key="1" className={v?.url === url ? "menuItem" : "menuItem_notactive"} style={{
                                position: data?.length - 1 === i ? "absolute" : "", bottom: data?.length - 1 === i ? 10 : "",
                                width: data?.length - 1 === i ? "inherit" : ""
                            }} icon={v.icon}> {v.name} </Menu.Item>
                        </Menu>
                    })}
                </Sider>
            </Layout>
            <Footer className="mobile_sidebar">
                {data.map(v => {
                    return <div className="menu" onClick={() => this.props.history.push(v?.url)}>
                        <Tooltip title={v.name}><span key="1" className={v?.url === url ? "menuItem" : "menuItem_notactive"}> {v.icon} </span></Tooltip>
                    </div>
                })}
            </Footer>
        </div>

        );
    }
}

export default SiderBar;