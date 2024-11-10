import { Col, Row } from "react-bootstrap";
import ReactImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css"
import img_testimoni_1 from "../img/img_testimoni_1.jpg"
import img_testimoni_2 from "../img/img_testimoni_2.jpg"
import img_testimoni_3 from "../img/img_testimoni_3.jpg"
import img_testimoni_4 from "../img/img_testimoni_4.jpg"
import img_testimoni_5 from "../img/img_testimoni_5.jpg"
import img_testimoni_6 from "../img/img_testimoni_6.jpg"
import img_testimoni_7 from "../img/img_testimoni_7.jpg"
import img_testimoni_8 from "../img/img_testimoni_8.jpg"
import ReactPlayer from "react-player";

function ImgTestimoni() {
    const images = [
        {
          original: "https://picsum.photos/id/1018/1000/600/",
          thumbnail: "https://picsum.photos/id/1018/250/150/",
        },
        {
          original: "https://picsum.photos/id/1015/1000/600/",
          thumbnail: "https://picsum.photos/id/1015/250/150/",
        },
    ];
    return (
        <div className="wadah_img_testimoni">
            <div className="margin_kanankiri">
                <div className="wadah_img_content_testimoni">
                    <Row>
                        <Col xl={3} lg={3} md={3} sm={6} xs={6}>
                            <div className="margin_photo_player_testimoni">
                                <img src={img_testimoni_1} className="img_content_testimoni" />
                            </div>
                        </Col>
                        <Col xl={3} lg={3} md={3} sm={6} xs={6}>
                            <div className="margin_photo_player_testimoni">
                                <img src={img_testimoni_2} className="img_content_testimoni" />
                            </div>
                        </Col>
                        <Col xl={3} lg={3} md={3} sm={6} xs={6}>
                            <div className="margin_photo_player_testimoni">
                                <img src={img_testimoni_3} className="img_content_testimoni" />
                            </div>
                        </Col>
                        <Col xl={3} lg={3} md={3} sm={6} xs={6}>
                            <div className="margin_photo_player_testimoni">
                                <img src={img_testimoni_4} className="img_content_testimoni" />
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col xl={3} lg={3} md={3} sm={6} xs={6}>
                            <div className="margin_photo_player_testimoni">
                                <img src={img_testimoni_5} className="img_content_testimoni" />
                            </div>
                        </Col>
                        <Col xl={3} lg={3} md={3} sm={6} xs={6}>
                            <div className="margin_photo_player_testimoni">
                                <img src={img_testimoni_6} className="img_content_testimoni" />
                            </div>
                        </Col>
                        <Col xl={3} lg={3} md={3} sm={6} xs={6}>
                            <div className="margin_photo_player_testimoni">
                                <img src={img_testimoni_7} className="img_content_testimoni" />
                            </div>
                        </Col>
                        <Col xl={3} lg={3} md={3} sm={6} xs={6}>
                            <div className="margin_photo_player_testimoni">
                                <img src={img_testimoni_8} className="img_content_testimoni" />
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                            <div className="margin_video_player_testimoni">
                                <ReactPlayer url="https://www.youtube.com/shorts/PpYJ2ggrQ1U" controls={true} width="100%" />
                            </div>
                        </Col>
                    </Row>

                    <Row className="row_margin_testimoni">
                        <Col xl={3} lg={3} md={3} sm={6}>
                            <div className="margin_video_player_testimoni_1">
                                <ReactPlayer url="https://www.youtube.com/shorts/Bn660uUyuJY" controls={true} width="100%" />
                            </div>
                        </Col>

                        <Col xl={3} lg={3} md={3} sm={6}>
                            <div className="margin_video_player_testimoni_2">
                                <ReactPlayer url="https://www.youtube.com/shorts/PpYJ2ggrQ1U" controls={true} width="100%" />
                            </div>
                        </Col>

                        <Col xl={3} lg={3} md={3} sm={6}>
                            <div className="margin_video_player_testimoni_3">
                                <ReactPlayer url="https://www.youtube.com/shorts/rkxJRjqmuUE" controls={true} width="100%" />
                            </div>
                        </Col>

                        <Col xl={3} lg={3} md={3} sm={6}>
                            <div className="margin_video_player_testimoni_4">
                                <ReactPlayer url="https://www.youtube.com/shorts/rkxJRjqmuUE" controls={true} width="100%" />
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    );
}

export default ImgTestimoni;