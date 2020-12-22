import * as React from "react";
import {
    Row,
    Col,
    Typography,
    Card
} from 'antd';
import "./styled.css";
import { UserOutlined } from '@ant-design/icons';
const { Title } = Typography;
class Message extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            addnew: false
        }
    }
    render() {
        // const { addnew } = this.state;
        return (
            <div className="messagesmain">
                <Row>
                    <Col className="message_list">
                        <Title className="message_list_title_main" level={1}>Workspace Title </Title>
                        <div className="message_list_title_main_div">
                            {["Members group", "General", "The Project Title"].map(v => { return <Title className="message_list_title" level={5}># {v} </Title> })}
                        </div>
                    </Col>
                    <Col className="details">
                        <Card className="actions_list_card"
                            title={<span>Project Title<br /><label className="todo"><UserOutlined /> 8</label>
                                <label className="title">#General</label></span>}
                        />
                    </Col>
                </Row>
            </div>
        );
    }
}
export default Message;