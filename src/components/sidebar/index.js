import React from 'react';
import { Layout, Menu, Avatar } from 'antd';
import {
    FireOutlined, MessageOutlined, FileTextOutlined
} from '@ant-design/icons';
import "./styled.css"
const { Sider } = Layout;
class SiderBar extends React.Component {
    state = {};
    render() {
        const data = [
            { name: "Actions", url: "", icon: <FireOutlined /> },
            { name: "Message", url: "", icon: <MessageOutlined /> },
            { name: "Doccuments", url: "", icon: <FileTextOutlined /> },
        ];
        return (
            <Layout className="sidebarmain">
                <Sider collapsed={true} className="sidebar">
                    <div className="logodiv">
                        <Avatar size="large" shape="square"
                            src="https://pbs.twimg.com/profile_images/864282616597405701/M-FEJMZ0_400x400.jpg"
                            className="avatar" />
                    </div>
                    {data.map(v => {
                        return <Menu className="menu" defaultSelectedKeys={['1']} mode="inline">
                            <Menu.Item key="1" className="menuItem" icon={v.icon}> {v.name} </Menu.Item>
                        </Menu>
                    })}
                </Sider>
            </Layout>
        );
    }
}

export default SiderBar;