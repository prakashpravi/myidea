import * as React from "react";
import {
    Row,
    Col,
    Typography,
    Card,
    Avatar,
    Badge
} from 'antd';
import "./styled.css";
import { UserOutlined } from '@ant-design/icons';
const { Title } = Typography;
const { Meta } = Card;

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
                            {["Members group", "General", "The Project Title"].map(v => {
                                return <Meta
                                    className="message_list_title"
                                    avatar={<Avatar shape="square" src="https://pbs.twimg.com/profile_images/864282616597405701/M-FEJMZ0_400x400.jpg" />}
                                    title={v}
                                    description={<span><Badge dot />This is the description</span>}
                                />
                            })}
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