import React from 'react';
import {
    Typography, Card, Row, Col,
    Dropdown, Menu, Avatar, Tooltip,
    message, notification, Upload,
    Button, Checkbox
} from 'antd';
import {
    VideoCameraOutlined, FileImageOutlined, FileOutlined,
    CustomerServiceOutlined, MoreOutlined, DeleteOutlined,
    CopyOutlined, ScissorOutlined, RetweetOutlined, StarFilled,
    StarOutlined, PlusOutlined, InboxOutlined, DownloadOutlined,
    ExpandAltOutlined, PlayCircleOutlined, FullscreenOutlined,
    FilterOutlined, FolderOpenOutlined
} from '@ant-design/icons';
import ModalCom from "../comman/dialogbox/index";
import "./styled.css";
import moment from "moment";

const { Title } = Typography;

class Drive extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            addnew: false,
            star: null,
            showfilesdata: {},
            showfilesopen: false,
            data: [{
                uid: "-1",
                name: "GregoriB Video",
                size: "6686",
                typepoint: "mp4",
                type: "video",
                date: "Jan 29,2020",
                url: "https://github.com/gregoriB/custom-HTML5-video-player-Javascript/blob/master/video.mp4?raw=true",
            }, {
                uid: "-2",
                name: "Audio File",
                size: "6686",
                typepoint: "mp3",
                type: "audio",
                date: "Jan 29,2020",
                url: "https://music.kcak11.com/playlist/favorites/Violin%20Music.mp3"
            }, {
                uid: "-3",
                name: "Doccuments",
                size: "6686",
                typepoint: "file",
                type: "text",
                date: "Jan 29,2020",
            }, {
                uid: "-4",
                name: "Pdf File",
                size: "6686",
                typepoint: "pdf",
                type: "application",
                date: "Jan 29,2020",
                url: "https://drive.google.com/file/d/1vyJ9kUbD4MV3Dt0DERO7vG0OrEaZguzJ/view?usp=sharing"
            }],
            datalists: [
                {
                    uid: "-1",
                    name: "Snail Video File",
                    size: "6686",
                    typepoint: "mp4",
                    type: "video",
                    date: "Jan 29,2020",
                    url: "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-slow.mp4",
                }, {
                    uid: "-2",
                    name: "Audio File",
                    size: "6686",
                    typepoint: "mp3",
                    type: "audio",
                    date: "Jan 29,2020",
                    url: "https://music.kcak11.com/playlist/favorites/Violin%20Music.mp3"
                }, {
                    uid: "-3",
                    name: "Doccument Files",
                    size: "6686",
                    typepoint: "pdf",
                    type: "image",
                    date: "Apr 13,2020",
                }, {
                    uid: "-4",
                    name: "Sintel trailer",
                    size: "6686",
                    typepoint: "mp4",
                    type: "video",
                    date: "Jan 29,2020",
                    url: "http://media.w3.org/2010/05/sintel/trailer.mp4"
                }, {
                    uid: "-5",
                    name: "Image File",
                    size: "6686",
                    typepoint: "jpg",
                    type: "image",
                    date: "Apr 13,2020",
                    url: "https://media.wired.com/photos/5ec70372c96258473f891964/16:9/w_2399,h_1349,c_limit/Biz-pichai-h_15151797.jpg",
                }, {
                    uid: "-6",
                    name: "Gif File",
                    size: "6686",
                    type: "image",
                    typepoint: "gif",
                    date: "Apr 13,2020",
                    url: "https://media.giphy.com/media/10SvWCbt1ytWCc/giphy.gif",
                }, {
                    uid: "-7",
                    name: "Doccuments",
                    size: "6686",
                    typepoint: "file",
                    type: "text",
                    date: "Jan 29,2020",
                }
            ],
            datalistsData: [],
            error: false
        }
    }
    handleopen = async (v) => {
        const state = this.state;
        if (v === "cancel") {
            this.setState({
                ...state,
                addnew: !state.addnew,
                datalistsData: []
            })
        } else {
            this.setState({
                ...state,
                addnew: !state.addnew,
            })
        }
    }
    handleSubmit = async () => {
        const state = this.state;
        if (!state.error) {
            if (state?.datalistsData?.length > 0) {
                await message.loading("Loding....", 3);
                this.handleSubit()
                notification.success({
                    message: "Success",
                    description: "Successfully added your File !"
                });
                this.setState({ ...state, addnew: !state.addnew })
            } else {
                message.error("Please select you file...");
            }
        }
    }
    handlechangestar = (v) => {
        const state = this.state;
        const update = v === state.star ? null : v
        this.setState({
            ...state,
            star: update
        })
    }
    getBase64 = (img, callback) => {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(img);
    }
    handleSubit = () => {
        const state = this.state;
        const v = state?.datalistsData.map(v => { return v });
        state.data.push(v[0])
        this.setState({
            ...state,
        })
    }
    handleChange = (info) => {
        debugger
        const state = this.state;

        const isLt2M = info.file.size / 1024 / 1024 < 2;
        if (!isLt2M) {
            this.setState({
                ...state,
                error: true
            })
            if (!state.error) {
                message.error('Image must smaller than 2MB!');
            }
        } else {
            this.getBase64(info.file.originFileObj, imageUrl =>
                this.setState({
                    ...state,
                    error: false,
                    datalistsData: [{
                        uid: `-${state.data?.length + 1}`,
                        name: info.file.name,
                        status: "done",
                        type: info.file.type.split("/")[0],
                        typepoint: info.file.type.split("/")[1],
                        size: Math.round(info.file.size),
                        url: imageUrl,
                        date: moment(info.file.lastModifiedDate).format("MMM Do YYYY"),
                    }]
                }),
            );
        }
    }
    ondelete = (name, id) => {
        debugger
        const state = this.state;
        const update = state[name]?.filter((v, i) => { return v?.uid !== id })
        this.setState({
            ...state,
            [name]: update
        })
    }
    filesIcon = (v) => {
        if (v === "text") {
            return <FolderOpenOutlined className="icon_" />
        } else if (v === "application") {
            return <FileOutlined className="icon_" />
        } else if (v === "video") {
            return <VideoCameraOutlined className="icon_" />
        } else if (v === "image") {
            return <FileImageOutlined className="icon_" />
        } else if (v === "audio") {
            return <CustomerServiceOutlined className="icon_" />
        }
    }
    handleshowfiles = (n, u) => {
        const state = this.state;
        if (n && u) {
            this.setState({
                ...state,
                showfilesdata: { n, u },
                showfilesopen: true
            })
        } else {
            this.setState({
                ...state,
                showfilesdata: {},
                showfilesopen: false
            })
        }
    }
    render() {
        const { addnew, star, showfilesdata, showfilesopen, data, datalistsData, datalists } = this.state;
        const propsfile = {
            name: 'file',
            multiple: true,
            action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
            headers: {
                authorization: 'authorization-text',
            },
        };
        return (
            <div className="drivermain">
                <Title level={4} className="title">Internal Storage</Title>
                <Title level={5} className="sub_title">9 Folders, 5 Files</Title>
                <div className="add_folder_div">
                    <Dropdown
                        placement="bottomCenter"
                        arrow
                        overlay={
                            <Menu className="menulist_item">
                                <Menu.Item className="menulist_item"><Checkbox checked>Images</Checkbox></Menu.Item>
                                <Menu.Item className="menulist_item"><Checkbox>Videos</Checkbox></Menu.Item>
                                <Menu.Item className="menulist_item"><Checkbox>Files</Checkbox></Menu.Item>
                                <Menu.Item className="menulist_item"><Checkbox>Folders</Checkbox></Menu.Item>
                            </Menu>
                        }>
                        <Button className="btn">
                            <FilterOutlined className="more" /> Filter
                        </Button>
                    </Dropdown>&nbsp;
                    <Button className="btn" icon={<PlusOutlined />}>
                        Add Folder  </Button>
                </div>
                <Title level={4} className="sub_title_recent">Recent Files</Title>
                <Row>
                    {datalists?.map((v, i) => {
                        return <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 8 }}>
                            <Card className="drive_list_card"
                                title={<div className="drive_list_card_div">
                                    {this.filesIcon(v?.type)}
                                    <span>{v?.name}<div className="todo">{"." + v?.typepoint} / {v?.size + " Mb"}</div>
                                    </span> </div>}
                                extra={<label className="todo">{v?.date}
                                    {star === i ? <StarFilled className="more_star" style={{ color: "#F9C84C" }} onClick={() => this.handlechangestar(i)} /> :
                                        <StarOutlined className="more_star" onClick={() => this.handlechangestar(i)} />}
                                    <Dropdown
                                        placement="bottomCenter" arrow
                                        overlay={
                                            <Menu className="menulist_item">
                                                <Menu.Item className="menulist_item" onClick={() => this.handleshowfiles(v?.type, v?.url)}>
                                                    {(v?.icon === "video" || v?.icon === "music") ? <PlayCircleOutlined /> : <FullscreenOutlined />}
                                                    {(v?.icon === "video" || v?.icon === "music") ? "Play" : "Open"} </Menu.Item>
                                                <Menu.Item className="menulist_item"> <RetweetOutlined /> Rename </Menu.Item>
                                                <Menu.Item className="menulist_item"> <CopyOutlined /> Copy </Menu.Item>
                                                <Menu.Item className="menulist_item"> <ScissorOutlined /> Move </Menu.Item>
                                                <Menu.Item className="menulist_item"> <DeleteOutlined /> Delete </Menu.Item>
                                                <Menu.Item className="menulist_item" onClick={() => this.ondelete("datalists", v?.uid)}> <DownloadOutlined /> Download </Menu.Item>
                                                <Menu.Item className="menulist_item"> <ExpandAltOutlined /> Copy Link </Menu.Item>
                                            </Menu>}
                                    >
                                        <MoreOutlined className="more" />
                                    </Dropdown></label>} /></Col>
                    })}
                </Row>
                <Title level={4} className="sub_title_recent">Files</Title>
                <Row>
                    {data?.map((v, i) => {
                        return <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 8 }}>
                            <Card className="drive_list_card"
                                title={<div className="drive_list_card_div">
                                    {this.filesIcon(v?.type)}
                                    <span>{v?.name}<div className="todo">{"." + v?.typepoint} / {v?.size + " Mb"}</div>
                                    </span> </div>}
                                extra={<label className="todo">{v?.date}
                                    {star === i ? <StarFilled className="more_star" style={{ color: "#F9C84C" }} onClick={() => this.handlechangestar(i)} /> :
                                        <StarOutlined className="more_star" onClick={() => this.handlechangestar(i)} />}
                                    <Dropdown
                                        placement="bottomCenter" arrow
                                        overlay={
                                            <Menu className="menulist_item">
                                                <Menu.Item className="menulist_item" onClick={() => this.handleshowfiles(v?.type, v?.url)}>
                                                    {(v?.icon === "video" || v?.icon === "music") ? <PlayCircleOutlined /> : <FullscreenOutlined />}
                                                    {(v?.icon === "video" || v?.icon === "music") ? "Play" : "Open"} </Menu.Item>
                                                <Menu.Item className="menulist_item"> <RetweetOutlined /> Rename </Menu.Item>
                                                <Menu.Item className="menulist_item"> <CopyOutlined /> Copy </Menu.Item>
                                                <Menu.Item className="menulist_item"> <ScissorOutlined /> Move </Menu.Item>
                                                <Menu.Item className="menulist_item"> <DeleteOutlined /> Delete </Menu.Item>
                                                <Menu.Item className="menulist_item" onClick={() => this.ondelete("data", v?.uid)}> <DownloadOutlined /> Download </Menu.Item>
                                                <Menu.Item className="menulist_item"> <ExpandAltOutlined /> Copy Link </Menu.Item>
                                            </Menu>}
                                    >
                                        <MoreOutlined className="more" />
                                    </Dropdown>
                                </label>} />
                        </Col>
                    })}
                </Row>
                <Tooltip title="Add">
                    <Avatar className="addicon" icon={<PlusOutlined />} onClick={() => this.handleopen()} />
                </Tooltip>
                <ModalCom
                    titleText="Upload File"
                    open={addnew}
                    onOk={() => this.handleSubmit()}
                    onCancel={() => this.handleopen("cancel")}
                    okTextTitle={<span><PlusOutlined /> Add Files</span>}
                    children={
                        <div>
                            <Upload
                                {...propsfile}
                                // directory
                                defaultFileList={datalistsData}
                                listType='picture'
                                onChange={this.handleChange}
                            >
                                <p className="ant-upload-drag-icon">
                                    <InboxOutlined />
                                </p>
                                <p className="ant-upload-text">Click or drag file to this area to upload</p>
                                <p className="ant-upload-hint">
                                    Support for a single or bulk upload. Strictly prohibit from uploading company data or other
                                band files  </p>
                            </Upload >
                        </div>
                    }
                />
                <ModalCom
                    titleText="Veiw"
                    open={showfilesopen}
                    footer={null}
                    onCancel={() => this.handleshowfiles()}
                    children={
                        <div>
                            {showfilesdata.n === "application" && "View Soon Your File !"}
                            {showfilesdata.n === "video" && <video
                                style={{ width: "100%", height: "100%", outline: "none" }}
                                controls
                                autoPlay
                                src={showfilesdata.u} />}
                            {showfilesdata.n === "audio" && <audio autoPlay
                                style={{ width: "-webkit-fill-available", outline: "none" }}
                                controls className="player" preload="false">
                                <source src={showfilesdata.u}
                                    style={{ width: "100%", height: "100%" }}
                                />
                            </audio>
                            }
                            {(showfilesdata.n === "image") && <img alt="viwer" width="100%" height="100%" src={showfilesdata.u} />}
                        </div>
                    }
                />
            </div>
        );
    }
}

export default Drive; 