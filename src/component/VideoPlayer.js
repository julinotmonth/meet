import { Col, Row } from "react-bootstrap";
import ReactPlayer from 'react-player'
import photo_player_1 from "../img/photo_player_1.jpg"
import photo_player__2 from "../img/photo_player__2.jpg"
import photo_player__3 from "../img/photo_player__3.jpg"
import photo_player__4 from "../img/photo_player__4.jpg"
import photo_player__5 from "../img/photo_player__5.jpg"
import photo_player__6 from "../img/photo_player__6.jpg"
import photo_player__7 from "../img/photo_player__7.jpg"
import photo_player__8 from "../img/photo_player__8.jpg"

function VideoPlayer() {
    return (
        <div className="wadah_video_player">
            <div className="margin_kanankiri">
                <div className="wadah_video_img_player">
                    <Row>
                        <Col xl={4} lg={4} md={4}>
                            <div className="margin_video_player">
                                <ReactPlayer url="https://www.youtube.com/shorts/Bn660uUyuJY" controls={true} width="100%" />
                            </div>
                        </Col>

                        <Col xl={4} lg={4} md={4}>
                            <div className="margin_video_player_1">
                                <ReactPlayer url="https://www.youtube.com/shorts/PpYJ2ggrQ1U" controls={true} width="100%" />
                            </div>
                        </Col>

                        <Col xl={4} lg={4} md={4}>
                            <div className="margin_video_player_2">
                                <ReactPlayer url="https://www.youtube.com/shorts/rkxJRjqmuUE" controls={true} width="100%" />
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col xl={3} lg={3} md={3} sm={6} xs={6}>
                            <div className="margin_photo_player">
                                <img src={photo_player_1} className="img_photo_player" />
                            </div>
                        </Col>

                        <Col xl={3} lg={3} md={3} sm={6} xs={6}>
                            <div className="margin_photo_player">
                                <img src={photo_player__2} className="img_photo_player" />
                            </div>
                        </Col>

                        <Col xl={3} lg={3} md={3} sm={6} xs={6}>
                            <div className="margin_photo_player">
                                <img src={photo_player__3} className="img_photo_player" />
                            </div>
                        </Col>

                        <Col xl={3} lg={3} md={3} sm={6} xs={6}>
                            <div className="margin_photo_player">
                                <img src={photo_player__4} className="img_photo_player" />
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col xl={3} lg={3} md={3} sm={6} xs={6}>
                            <div className="margin_photo_player">
                                <img src={photo_player__5} className="img_photo_player" />
                            </div>
                        </Col>

                        <Col xl={3} lg={3} md={3} sm={6} xs={6}>
                            <div className="margin_photo_player">
                                <img src={photo_player__6} className="img_photo_player" />
                            </div>
                        </Col>

                        <Col xl={3} lg={3} md={3} sm={6} xs={6}>
                            <div className="margin_photo_player">
                                <img src={photo_player__7} className="img_photo_player" />
                            </div>
                        </Col>

                        <Col xl={3} lg={3} md={3} sm={6} xs={6}>
                            <div className="margin_photo_player">
                                <img src={photo_player__8} className="img_photo_player" />
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    );
}

export default VideoPlayer;