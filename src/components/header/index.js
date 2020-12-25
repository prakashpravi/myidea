import React from 'react';
import { PageHeader, Avatar, Breadcrumb, Dropdown, Menu } from 'antd';
import {
    AlertOutlined, SettingOutlined, SearchOutlined
} from '@ant-design/icons';
import "./styled.css";
class Header extends React.Component {
    state = {};
    render() {
        return (<div className="headermain">
            <PageHeader
                ghost={false}
                title={<Breadcrumb separator=">" className="Breadcrumb">
                    <Breadcrumb.Item className="home">Home</Breadcrumb.Item>
                    <Breadcrumb.Item>Application List</Breadcrumb.Item>
                    <Breadcrumb.Item>An Application</Breadcrumb.Item>
                </Breadcrumb>}
                extra={[
                    <SearchOutlined className="icon" />,
                    <SettingOutlined className="icon" />,
                    <Dropdown
                        arrow
                        placement="bottomCenter"
                        overlay={
                            <Menu className="menulist_item"><Menu.Item className="menulist_item" >  Soon ! </Menu.Item>
                            </Menu>}
                    >
                        <AlertOutlined className="icon" />
                    </Dropdown>,
                    <Avatar className="avatar_icon" src="https://www.india.com/wp-content/uploads/2020/06/sundar-pichai.jpg" />,
                ]}
            />
        </div>);
    }
}

export default Header;