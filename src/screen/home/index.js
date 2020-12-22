import { Row, Col } from "antd";
import * as React from "react";
import routes from "../../router/router";
import Login from "../login";
import Actions from "../../components/actions/index";
import SiderBar from "../../components/sidebar";
import Project from "../../components/project";
import Message from "../../components/message";
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
        }
    }
    render() {
        return (
            <Row>
                <Col> <SiderBar {...this.props} /> </Col>
                <Col span={12}>{this.Content()}</Col>
            </Row>
        );
    }
}
export default Home;