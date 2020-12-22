import React from 'react';
import {
    Row, Col, Button, Select, message, Modal, notification,
    DatePicker,
    Input,
    Card,
    Dropdown,
    Menu,
    Typography
} from 'antd';
import {
    PlusOutlined, MoreOutlined, StarOutlined
} from '@ant-design/icons';
import "./styled.css";
const { Option } = Select;
const { Text } = Typography;
class Project extends React.Component {
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
            description: "Successfully added your Project !"
        });
        this.setState({
            ...state,
            addnew: !state.addnew
        })
    }
    render() {
        const { addnew } = this.state;
        const chooseaction = ["Project", "Sprint"];
        const chooseactionpriority = ["Critical", "High", "Medium", "Low"];
        const chooseGRPnames = ["1", "2"];
        const members = ['Prakash', 'NaveenDa', "Guru gi"];
        return (
            <div className="project_main">
                <Row>
                    <Col className="action_count_title">Projects(3)</Col>
                    <Col className="timebase">
                        <Text level={5} className="timebase_filter">
                            <Dropdown overlay={<Menu> Filter lists soon !</Menu>} placement="bottomLeft" trigger={['click']}>
                                <Button>Filter</Button>
                            </Dropdown></Text>
                        <Button className="add_button" icon={<PlusOutlined />} onClick={() => this.handleopen()}> ADD NEW</Button>
                    </Col>
                </Row><br />
                {[1, 2, 3].map(v => {
                    return <Card className="actions_list_card"
                        title={<span>Project Titlt<br /><label className="todo">PROJECT</label>
                            <label className="title">#projuctName</label>
                            <label className="todo">&nbsp;Nov 27, 2020 - Dec 27, 2020</label>
                            <label className="hrs">by NaveenDa</label></span>}
                        extra={<span href="#"><StarOutlined />&nbsp;<MoreOutlined /></span>} />
                })}
                <Modal
                    title="CREATE A PROJECT"
                    style={{ top: 20 }}
                    visible={addnew}
                    onOk={() => this.handleSubmit()}
                    onCancel={() => this.handleopen()}
                    okText="Submit"
                >
                    <div
                        className="Action_model"
                    >
                        <Input placeholder="Title"
                            style={{ width: "92%" }} />
                        <DatePicker showTime placeholder="Start Date and Time"
                            style={{ width: "44%" }}
                        />
                        <DatePicker showTime placeholder="End Date and Time"
                            style={{ width: "44%" }}
                        />
                        <Select
                            showSearch
                            style={{ width: "44%" }}
                            placeholder="Select Project Types"
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
                            placeholder="Available Members"
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
                    </div>
                </Modal>
            </div>
        );
    }
}

export default Project;