import { Layout } from "antd";
import * as React from "react";
import routes from "../../router/router";
import Login from "../login";
const { Sider, Content } = Layout;

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    Content = () => {
        if (window.location.pathname === routes.Login) {
            return <Login />
        }
    }
    render() {
        return (
            <Layout>
                <Sider>Sider</Sider>
                <Layout>
                    <Content>{this.Content()}</Content>
                </Layout>
            </Layout>
        );
    }
}
export default Home;