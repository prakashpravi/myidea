import React from 'react';
import { Typography, Card, Row, Col, Dropdown, Menu, Avatar, Tooltip, message, notification, Upload } from 'antd';
import {
    VideoCameraOutlined, FileImageOutlined, FileOutlined, CustomerServiceOutlined, MoreOutlined, DeleteOutlined,
    CopyOutlined, ScissorOutlined, RetweetOutlined, StarFilled, StarOutlined, PlusOutlined, InboxOutlined,
    DownloadOutlined, ExpandAltOutlined, PlayCircleOutlined, FullscreenOutlined
} from '@ant-design/icons';
import ModalCom from "../comman/dialogbox/index";
import "./styled.css";
const { Title } = Typography;
const { Dragger } = Upload;
class Drive extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            addnew: false,
            star: null,
            showfilesdata: {},
            showfilesopen: false,
            fileList: [
                {
                    uid: '-1',
                    name: 'sundar-pichai1.jpg',
                    status: 'done',
                    thumbUrl: 'https://pbs.twimg.com/profile_images/864282616597405701/M-FEJMZ0_400x400.jpg',
                },
                {
                    uid: '-2',
                    name: 'sundar-pichai2.jpg',
                    thumbUrl: 'https://www.india.com/wp-content/uploads/2020/06/sundar-pichai.jpg',
                    status: 'done',
                },
            ]
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
            description: "Successfully added your File !"
        });
        this.setState({
            ...state,
            addnew: !state.addnew
        })
    }
    handlechangestar = (v) => {
        const state = this.state;
        const update = v === state.star ? null : v
        this.setState({
            ...state,
            star: update
        })
    }

    filesIcon = (v) => {
        if (v === "folder") {
            return <img alt="example" className="img" src={"/assets/folders.79db48ae.svg"} />
        } else if (v === "file") {
            return <FileOutlined className="icon_" />
        } else if (v === "video") {
            return <VideoCameraOutlined className="icon_" />
        } else if (v === "image") {
            return <FileImageOutlined className="icon_" />
        } else if (v === "music") {
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
        const data = [
            {
                name: "Doccument Files",
                dis: ".pdf, .doc / 2773.7 Kb",
                date: "Apr 13,2020",
                icon: "file"
            }, {
                name: "Video Files",
                dis: ".mp4 / 2.7 Gb",
                date: "Apr 20,2020",
                icon: "video"
            },
            {
                name: "Image Files",
                dis: ".JPEG, .JPG, .PNG, .GIF / 2.7 Gb",
                date: "Apr 29,2020",
                icon: "image"
            }, {
                name: "Audio File",
                dis: "22 Files / 6686 Mb",
                date: "Jan 29,2020",
                icon: "music"
            }
        ];
        const datalists = [
            {
                name: "Snail Video File",
                dis: "22 Files / 6686 Mb",
                date: "Jan 29,2020",
                icon: "video",
                url: "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-slow.mp4",
            }, {
                name: "Audio File",
                dis: "22 Files / 6686 Mb",
                date: "Jan 29,2020",
                icon: "music",
                url: "https://music.kcak11.com/playlist/favorites/Violin%20Music.mp3"
            }, {
                name: "Doccument Files",
                dis: ".pdf, .doc / 2773.7 Kb",
                date: "Apr 13,2020",
                icon: "file"
            }, {
                name: "Cat Video",
                dis: "22 Files / 6686 Mb",
                date: "Jan 29,2020",
                icon: "video",
                url: "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-cute.mp4"
            }, {
                name: "Audio File",
                dis: "22 Files / 6686 Mb",
                date: "Jan 29,2020",
                icon: "music",
                url: "https://raw.githubusercontent.com/himalayasingh/music-player-1/master/music/4.mp3"
            }, {
                name: "Image File",
                dis: ".JPG / 2.7 Gb",
                date: "Apr 13,2020",
                url: "https://media.wired.com/photos/5ec70372c96258473f891964/16:9/w_2399,h_1349,c_limit/Biz-pichai-h_15151797.jpg",
                icon: "image"
            }, {
                name: "Gif File",
                dis: ".GIF / 2.7 Gb",
                date: "Apr 13,2020",
                url: "https://media.giphy.com/media/10SvWCbt1ytWCc/giphy.gif",
                icon: "image"
            }, {
                name: "Doccuments",
                dis: "22 Files / 6686 Mb",
                date: "Jan 29,2020",
                icon: "folder"
            }
        ]
        const { addnew, star, fileList, showfilesdata, showfilesopen } = this.state;
        return (
            <div className="drivermain">
                <Title level={4} className="title">Internal Storage</Title>
                <Title level={5} className="sub_title">9 Folders, 5 Files</Title>

                <Title level={4} className="sub_title_recent">Recent Files</Title>
                <Row>
                    {data?.map(v => {
                        return <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 8 }}>
                            <Card className="drive_list_card"
                                title={<div className="drive_list_card_div">
                                    {this.filesIcon(v?.icon)}
                                    <span>{v?.name}<div className="todo">{v?.dis}</div>
                                    </span> </div>}
                                extra={<label className="todo">{v?.date}</label>} /></Col>
                    })}
                </Row>
                <Title level={4} className="sub_title_recent">Files</Title>
                <Row>
                    {datalists?.map((v, i) => {
                        return <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 8 }}>
                            <Card className="drive_list_card"
                                title={<div className="drive_list_card_div">
                                    {this.filesIcon(v?.icon)}
                                    <span>{v?.name}<div className="todo">{v?.dis}</div>
                                    </span> </div>}
                                extra={<label className="todo">{v?.date}
                                    {star === i ? <StarFilled className="more_star" style={{ color: "#F9C84C" }} onClick={() => this.handlechangestar(i)} /> :
                                        <StarOutlined className="more_star" onClick={() => this.handlechangestar(i)} />}
                                    <Dropdown
                                        placement="bottomCenter" arrow
                                        overlay={
                                            <Menu className="menulist_item">

                                                <Menu.Item className="menulist_item" onClick={() => this.handleshowfiles(v?.icon, v?.url)}>
                                                    {(v?.icon === "video" || v?.icon === "music") ? <PlayCircleOutlined /> : <FullscreenOutlined />}
                                                    {(v?.icon === "video" || v?.icon === "music") ? "Play" : "Open"} </Menu.Item>
                                                <Menu.Item className="menulist_item"> <RetweetOutlined /> Rename </Menu.Item>
                                                <Menu.Item className="menulist_item"> <CopyOutlined /> Copy </Menu.Item>
                                                <Menu.Item className="menulist_item"> <ScissorOutlined /> Move </Menu.Item>
                                                <Menu.Item className="menulist_item"> <DeleteOutlined /> Delete </Menu.Item>
                                                <Menu.Item className="menulist_item"> <DownloadOutlined /> Download </Menu.Item>
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
                    onCancel={() => this.handleopen()}
                    okTextTitle={<span><PlusOutlined /> Add Files</span>}
                    children={
                        <div>
                            <Dragger listType="picture" defaultFileList={[...fileList]}
                            >
                                <p className="ant-upload-drag-icon">
                                    <InboxOutlined />
                                </p>
                                <p className="ant-upload-text">Click or drag file to this area to upload</p>
                                <p className="ant-upload-hint">
                                    Support for a single or bulk upload. Strictly prohibit from uploading company data or other
                                band files  </p>
                            </Dragger>
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
                            {showfilesdata.n === "video" && <video
                                style={{ width: "100%", height: "100%" }}
                                controls
                                autoPlay
                                src={showfilesdata.u} />}
                            {showfilesdata.n === "music" && <audio
                                style={{ width: "-webkit-fill-available", outline: "none" }}
                                controls className="player" preload="false">
                                <source src={showfilesdata.u}
                                    style={{ width: "100%", height: "100%" }}
                                />
                            </audio>
                            }
                            {showfilesdata.n === "image" && <img alt="viwer" width="100%" height="100%" src={showfilesdata.u} />}
                        </div>
                    }
                />
            </div>
        );
    }
}

export default Drive;