import { Row, Col } from "antd";
import * as React from "react";
import routes from "../../router/router";
import SiderBar from "../../components/sidebar";
import Header from "../../components/header/index";
import Drive from "../../components/drive";
class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    Content = () => {
        if (window.location.pathname === routes.Drive) {
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