import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import luminous_product from "../img/luminous_product.jpg"
import luminous_product_hover from "../img/luminous_product_hover.jpg"
import luminous_product_2 from "../img/luminous_product_2.jpg"
import luminous_product_2_hover from "../img/luminous_product_2_hover.jpg"
import luminous_product_3 from "../img/luminous_product_3.jpg"
import luminous_product_4 from "../img/luminous_product_4.jpg"

function ProductTitle() {
    return (
        <div className="wadah_product_title">
            <div className="margin_kanankiri">
                <div className="content_product_title">
                    <Link className="link_content_home">
                        <span>HOME </span>
                    </Link>
                    <span className="product_productTitle">/ PRODUCT</span>
                    <h1 className="h1_product_productTitle">Product</h1>
                    <span className="content_showing_all">Showing all 4 results</span>
                    <Row>
                        <Col xl={3} lg={3} md={6} sm={6} xs={6} className="wadah_content_product_hover">
                            <div className="padding_left_product_hover_1">
                                <Link>
                                    <div className="img_container">
                                        <img src={luminous_product} className="img_content_product_2" />
                                        <img src={luminous_product_hover} className="img_content_product_2_hover" />
                                    </div>
                                </Link>
                                <Link className="link_deskripsi_luminous">
                                    <span className="deskripsi_luminous_product">SARUNG TANGAN KIPER MEET LUMINOUS</span>
                                </Link>
                            </div>
                        </Col>

                        <Col xl={3} lg={3} md={6} sm={6} xs={6} className="wadah_content_product_hover">
                            <div className="padding_left_product_hover_2">
                                <Link>
                                    <div className="img_container">
                                        <img src={luminous_product_2} className="img_content_product_2" />
                                        <img src={luminous_product_2_hover} className="img_content_product_2_hover" />
                                    </div>
                                        </Link>
                                <Link className="link_deskripsi_luminous">
                                    <span className="deskripsi_luminous_product">SARUNG TANGAN KIPER MEET LUMINOUS</span>
                                </Link>
                            </div>
                        </Col>

                        <Col xl={3} lg={3} md={6} sm={6} xs={6} className="wadah_content_product_hover">
                            <div className="padding_left_product_hover">
                                <Link>
                                    <div className="img_container">
                                        <img src={luminous_product_3} className="img_content_product_2" />
                                        <img src={luminous_product_2_hover} className="img_content_product_2_hover" />
                                    </div>
                                        </Link>
                                <Link className="link_deskripsi_luminous">
                                    <span className="deskripsi_luminous_product">SARUNG TANGAN KIPER MEET LUMINOUS</span>
                                </Link>
                            </div>
                        </Col>

                        <Col xl={3} lg={3} md={6} sm={6} xs={6} className="wadah_content_product_hover">
                            <div className="padding_left_product_hover">
                                <Link>
                                    <div className="img_container">
                                        <img src={luminous_product_3} className="img_content_product_2" />
                                        <img src={luminous_product_2_hover} className="img_content_product_2_hover" />
                                    </div>
                                        </Link>
                                <Link className="link_deskripsi_luminous">
                                    <span className="deskripsi_luminous_product">SARUNG TANGAN KIPER MEET LUMINOUS</span>
                                </Link>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    )
}

export default ProductTitle