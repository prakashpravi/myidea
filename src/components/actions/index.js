import * as React from "react";
import {
    Row, Col, Button, Typography, Card, Tooltip, Modal, DatePicker, Select,
    message,
    notification,
    Dropdown,
    Menu
} from 'antd';
import "./styled.css";
import { PlusOutlined, StarOutlined, MoreOutlined, PlayCircleOutlined, SettingOutlined } from '@ant-design/icons';
const { Text } = Typography;
const { Option } = Select;
class Actions extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            addnew: false
        }
    }
    handleopen = () => {
        const state = this.state;
        this.setState({
            ...state,
            addnew: !state.addnew
        })
    }
    handleSubmit = async () => {
        const state = this.state;
        await message.loading("Loding....", 3);
        notification.success({
            message: "Success",
            description: "Successfully added your actions !"
        });
        this.setState({
            ...state,
            addnew: !state.addnew
        })
    }
    render() {
        const { addnew } = this.state;
        const chooseaction = ["Meeting", "To Do", "Bug"];
        const chooseactionpriority = ["Critical", "High", "Medium", "Low"];
        const chooseGRPnames = ["Pjct_Name1", "Pjct_Name2"];
        const members = ['Prakash', 'NaveenDa', "Guru gi"];
        return (
            <div className="actionsmain">
                <Row>
                    <Col flex="1 1" className="action_count_title">Actions(3)</Col>
                    <Col flex="0 1"><Button className="add_button" icon={<PlusOutlined />} onClick={() => this.handleopen()}> ADD NEW</Button></Col>
                </Row>
                <Row>
                    <Col flex="1 1">
                        <div className="timebase">
                            <Text level={5} className="timebase_label">Time Based:</Text>
                            {["Today", "This Week", "This Month", "Overdue", "All"].map(v => { return <Button className="timebase_btn">{v}</Button> })}
                        </div>
                    </Col>
                    <Col flex="0 1" className="timebase">
                        <Text level={5} className="timebase_filter">
                            <Dropdown overlay={<Menu> Filter lists soon !</Menu>} placement="bottomLeft" trigger={['click']}>
                                <Button>Filter</Button>
                            </Dropdown></Text>
                    </Col>
                </Row>
                <Row gutter={10}>
                {[1, 2, 3].map(v => {
                    return  <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 6 }} lg={{ span: 6 }}>
                        <Card className="actions_list_card"
                            actions={[
                                <Tooltip title="Hight"><PlayCircleOutlined /></Tooltip>,
                                <SettingOutlined key="setting" />
                            ]}
                            title={<span><label className="todo">To Do - 0001</label><label className="title">#projuctName</label><label className="hrs">6 hrs</label></span>}
                            extra={<span href="#"><StarOutlined />&nbsp;<MoreOutlined /></span>}>
                            <Tooltip title="Hey this a new Action Title! Created by @Prakash P">
                                <Text level={5} className="timebase_label_main">Hey this a new Action Title!</Text>
                            </Tooltip>
                            <span className="todo_date">Due:Dec 21, 2020 11:59 PM</span>
                            <span className="todo_by"> By Prakash</span>
                        </Card>
                    </Col> })}
                </Row>

                <Modal
                    title="Action"
                    style={{ top: 20 }}
                    visible={addnew}
                    onOk={() => this.handleSubmit()}
                    onCancel={() => this.handleopen()}
                    okText="Submit"
                >
                    <div
                        className="Action_model"
                    >
                        <DatePicker showTime placeholder="Start Date and Time"
                            style={{ width: "44%" }}
                        />
                        <DatePicker showTime placeholder="End Date and Time"
                            style={{ width: "44%" }}
                        />
                        <Select
                            showSearch
                            style={{ width: "44%" }}
                            placeholder="Select Action Types"
                            // onChange={onChange}
                            // onFocus={onFocus}
                            // onBlur={onBlur}
                            // onSearch={onSearch}
                            filterOption={(input, option) =>
                                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                            }
                        >
                            {chooseaction?.map(v => { return <Option value={v}>{v}</Option> })}
                        </Select>
                        <Select
                            showSearch
                            style={{ width: "44%" }}
                            placeholder="Select Action Priority"
                            // onChange={onChange}
                            // onFocus={onFocus}
                            // onBlur={onBlur}
                            // onSearch={onSearch}
                            filterOption={(input, option) =>
                                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                            }
                        >
                            {chooseactionpriority?.map(v => { return <Option value={v}>{v}</Option> })}
                        </Select>
                        <Select
                            showSearch
                            style={{ width: "92%" }}
                            placeholder="Select Tag"
                            // onChange={onChange}
                            // onFocus={onFocus}
                            // onBlur={onBlur}
                            // onSearch={onSearch}
                            filterOption={(input, option) =>
                                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                            }
                        >
                            {chooseGRPnames?.map(v => { return <Option value={v}>{v}</Option> })}
                        </Select>
                        <Select
                            showArrow
                            mode="multiple"
                            style={{ width: '92%' }}
                            placeholder="Add owner"
                            defaultValue={['Prakash', 'NaveenDa', "Guru gi"]}
                        >
                            {members?.map(v => { return <Option key={v}>{v}</Option> })}
                        </Select>
                        <Select
                            showArrow
                            mode="multiple"
                            style={{ width: '92%' }}
                            placeholder="Select Assigne Members"
                        >
                            {members?.map(v => { return <Option key={v}>{v}</Option> })}
                        </Select>
                        <Select
                            showArrow
                            mode="multiple"
                            style={{ width: '92%' }}
                            placeholder="Select Watcher"
                        >
                            {members?.map(v => { return <Option key={v}>{v}</Option> })}
                        </Select>
                    </div>
                </Modal>
            </div>
        );
    }
}
export default Actions;