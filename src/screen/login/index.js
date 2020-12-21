import {
    Button,
    Input,
    message,
    notification,
    Form,
    Avatar,
    Typography,
} from "antd";
import * as React from "react";
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import "./styled.css";
const { Title } = Typography;
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
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
    }
    render() {
        const { username, password } = this.state;
        return (<div className="main">
            <Form
                name="normal_login"
                className="login-form"
                onFinish={() => this.handleSubmit()}
            >
                <Avatar size={54}
                    src="https://media.wired.com/photos/5c0eb2350dc19b43aab5f1d6/125:94/w_2249,h_1691,c_limit/Sundar-1056109484.jpg"
                    className="avatar" />
                <Title level={3} className="title">Welcome!</Title>
                <Title level={5} className="dis_title"> Please login to your account</Title>
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
                    {/* <Form.Item name="remember" valuePropName="checked" noStyle>
                        <Checkbox className="remember">Remember me</Checkbox>
                    </Form.Item> */}

                    <a className="login-form-forgot" href="">
                        Forgot password
              </a>
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button"
                    // onClick={() => this.handleSubmit()}
                    >
                        Log in
              </Button>
                    <a href="" className="login-form-register">Don't have an account? SignUp</a>
                </Form.Item>
            </Form>
        </div>);
    }
}

export default Login;