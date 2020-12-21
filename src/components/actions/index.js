import * as React from "react";
import { Row, Col, Button, Typography, Card, Tooltip } from 'antd';
import "./styled.css";
import { PlusOutlined, StarOutlined, MoreOutlined, PlayCircleOutlined, SettingOutlined } from '@ant-design/icons';
const { Text } = Typography;
class Actions extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="actionsmain">
                <Row>
                    <Col flex="1 1" className="action_count_title">Actions(1)</Col>
                    <Col flex="0 1"><Button className="add_button" icon={<PlusOutlined />}> ADD NEW</Button></Col>
                </Row>
                <Row>
                    <Col span={24}>
                        <div className="timebase">
                            <Text level={5} className="timebase_label">Time Based:</Text>
                            {["Today", "This Week", "This Month", "Overdue", "All"].map(v => { return <Button className="timebase_btn">{v}</Button> })}
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 6 }} lg={{ span: 6 }}>
                        <Card className="actions_list_card"
                            actions={[
                                <Tooltip title="Hight"><PlayCircleOutlined /></Tooltip>,
                                <SettingOutlined key="setting" />
                            ]}
                            title={<span><label className="todo">To Do - 0001</label><label className="title">#projuctName</label><label className="hrs">6 hrs</label></span>}
                            extra={<span href="#"><StarOutlined />&nbsp;<MoreOutlined /></span>}>
                            <Tooltip title="Hey this a new Actions ! Created by @Prakash P">
                                <Text level={5} className="timebase_label_main">Hey this a new Action Title!</Text>
                            </Tooltip>
                            <span className="todo_date">Due:Dec 21, 2020 11:59 PM</span>
                            <span className="todo_by"> By Prakash</span>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}
export default Actions;