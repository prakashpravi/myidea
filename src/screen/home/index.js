import { Row, Col } from "antd";
import * as React from "react";
import routes from "../../router/router";
import Login from "../login";
import Actions from "../../components/actions/index";
import SiderBar from "../../components/sidebar";
import Project from "../../components/project";
import Message from "../../components/message";
import Header from "../../components/header/index";
import Drive from "../../components/drive";
class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    Content = () => {
        if (window.location.pathname === routes.Login) {
            return <Login {...this.props} />
        } else if (window.location.pathname === routes.Actions) {
            return <Actions {...this.props} />
        } else if (window.location.pathname === routes.Project) {
            return <Project {...this.props} />
        } else if (window.location.pathname === routes.Message) {
            return <Message {...this.props} />
        } else if (window.location.pathname === routes.Drive) {
            return <Drive {...this.props} />
        }
    }
    render() {
        return (
            <Row style={{ width: "max-content" }}>
                <Col> <SiderBar {...this.props} /> </Col>
                <Col> <Header /> {this.Content()}</Col>
            </Row>
        );
    }
}
export default Home;