import {
    Button,
    Input,
    message,
    notification,
    Form,
    Avatar,
    Typography,
    Row,
    Col
} from "antd";
import * as React from "react";
import { UserOutlined, LockOutlined, ArrowRightOutlined } from '@ant-design/icons';
import "./styled.css";
const { Title } = Typography;
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: null,
            password: null,
        };
    }

    setInputValue = (name, val) => {
        this.setState({
            [name]: val
        });
    }
    handleSubmit = async () => {
        await message.loading("Login....", 3);
        notification.success({
            message: "Success",
            description: "User Login Successfully !"
        });
        this.props.history.push("/workspace");
    }
    render() {
        const { username, password } = this.state;
        return (
            <Row className="main-login">
                <Col md={{ span: 24 }} lg={{ span: 12 }} className="f-col">
                    <div className="main">      <Form
                        name="normal_login"
                        className="login-form"
                        onFinish={() => this.handleSubmit()}
                    >
                        <Avatar size={54}
                            src="https://media.wired.com/photos/5c0eb2350dc19b43aab5f1d6/125:94/w_2249,h_1691,c_limit/Sundar-1056109484.jpg"
                            className="avatar" />
                        {/* <Title level={3} className="title">Welcome!</Title> */}
                        <Button className="google-btn"
                        >
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" />
                        Login with google
                </Button>
                        <Title level={5} className="dis_title"> Or Login with Email</Title>
                        <Form.Item
                            name="username"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please enter your Username!',
                                },
                            ]}
                        >
                            <Input
                                autoFocus
                                className="Input"
                                prefix={<UserOutlined className="site-form-item-icon" />}
                                value={username}
                                placeholder="Username" />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: 'please enter your password!',
                                },
                            ]}
                        >
                            <Input.Password
                                value={password}
                                className="Input"
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="password"
                                placeholder="Password"
                            />
                        </Form.Item>
                        <Form.Item style={{ margin: 0 }}>
                            <Form.Item name="remember" valuePropName="checked" noStyle>
                                {/* <Checkbox className="remember">Remember me</Checkbox> */}
                                <span className="login-form-keep">
                                    Keep me login
              </span>
                            </Form.Item>

                            <span className="login-form-forgot">
                                Forgot password
              </span>
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button"
                            // onClick={() => this.handleSubmit()}
                            >
                                Log in <ArrowRightOutlined className="loginIcon" />
                            </Button>
                            <span className="login-form-register">You don't have an account? SignUp </span>
                        </Form.Item>
                    </Form>
                    </div>   </Col>
                <Col span={12} className="s-col">
                    <div className="circle-ripple"></div>
                    <img src="https://image.freepik.com/free-vector/internship-job-illustration_23-2148722413.jpg" />
                </Col>
            </Row>
        );
    }
}

export default Login;