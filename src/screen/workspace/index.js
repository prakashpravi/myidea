import {
    Row, Avatar, Typography,
    Card,
    Input,
    message,
    notification,
    Form,
    Button
} from "antd";
import * as React from "react";
import "./styled.css";
import { MailOutlined } from '@ant-design/icons';
const { Title } = Typography;
const { Meta } = Card;
class Workspace extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: null
        }
    }
    handleSubmit = async () => {
        await message.loading("Loading....", 3);
        notification.success({
            message: "Success",
            description: "Welcome your Login Workspace!"
        });
        this.props.history.push("/drive");
    }
    render() {
        const { email } = this.state;
        return (<div className="workspace">
            <Row className="workspacelog">
                <Title level={5} className="dis_title">Logo Soon !</Title>
                {/* <Title level={3} className="title">Welcome to your Workspace!</Title>
                <Title level={5} className="dis_title">Continue with the Workspace account or email address you use to sign in.</Title> */}

                <Form
                    name="normal_login"
                    className="login-form"
                    onFinish={() => this.handleSubmit()}
                >
                    <Form.Item
                        name="email"
                        rules={[
                            {
                                required: true,
                                message: 'Please enter your Workspace!',
                            },
                        ]}
                    >
                        <Input
                            size="large"
                            autoFocus
                            className="Input"
                            prefix={<MailOutlined />}
                            value={email}
                            placeholder="name@work-email.com" />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            Sign In with Email
              </Button>
                    </Form.Item>
                    <span className="already">You’re already signed in to</span>
                    <Card className="workspacelogcard">
                        <Meta
                            onClick={() => this.props.history.push("/drive")}
                            avatar={<Avatar shape="square" size={50} src="https://media.wired.com/photos/5c0eb2350dc19b43aab5f1d6/125:94/w_2249,h_1691,c_limit/Sundar-1056109484.jpg" />}
                            title={<span className="workspacelogcard_title">My'Idea</span>}
                            description="myidea-workspace.app.com"
                        />
                    </Card>
                </Form>
            </Row>
        </div>);
    }
}
export default Workspace;