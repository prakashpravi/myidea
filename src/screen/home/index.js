import {  Row, Col } from "antd";
import * as React from "react";
import routes from "../../router/router";
import Login from "../login";
import Actions from "../../components/actions/index";
import SiderBar from "../../components/sidebar";

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
        }
    }
    render() {
        return (
            <Row>
                <Col> <SiderBar /> </Col>
                <Col>{this.Content()}</Col>
            </Row>
        );
    }
}
export default Home;