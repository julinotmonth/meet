import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import vans_1 from "../img/vans_1.webp"
import vans_2 from "../img/vans_2.webp"
import vans_3 from "../img/vans_3.webp"
import vans_4 from "../img/vans_4.webp"
import { IoIosStar } from "react-icons/io";

function Sub_Product () {
    return (
        <div className="wadah_sub_product">
            <div className="margin_kanankiri">
                <div className="sub_content_awal">
                    <p className="content_awal_link"><Link to="/" className="link_sub_content_awal">Home</Link><span style={{padding: '0px 12px'}}>/</span><Link to="/product" className="link_sub_content_awal">Product</Link><span style={{padding: '0px 12px'}}>/</span><span style={{color: '#757575'}}>Lowland ComfyCush Shoe</span></p>
                </div>
                <div className="wadah_img_sub_product">
                    <Row>
                        <Col xl={8} lg={8}>
                            <Row>
                                <Col xl={6} lg={6} md={6}>
                                    <div className="wadah_sub_img_kiri margin_sub_img">
                                        <img src={vans_1} className="img_sub_product" />
                                    </div>
                                </Col>
                                <Col xl={6} lg={6} md={6}>
                                    <div className="wadah_sub_img_kanan margin_sub_img">
                                        <img src={vans_2} className="img_sub_product" />
                                    </div>
                                </Col>
                                <Col xl={6} lg={6} md={6}>
                                    <div className="wadah_sub_img_kiri">
                                        <img src={vans_3} className="img_sub_product" />
                                    </div>
                                </Col>
                                <Col xl={6} lg={6} md={6}>
                                    <div className="wadah_sub_img_kanan">
                                        <img src={vans_4} className="img_sub_product" />
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col xl={4} lg={4}>
                            <div className="wadah_deskripsi_sub_product">
                                <div className="sub_product_new">
                                    <span className="content_sub_product_new">New</span>
                                </div>
                                <h1 className="font_deskrih1si_sub_product">Authentic Pig Suede Shoe</h1>
                                <div className="wadah_icon_bintang_sub_product">
                                    <IoIosStar className="pointer_icon_star_sub_product" />
                                    <IoIosStar className="pointer_icon_star_sub_product" />
                                    <IoIosStar className="pointer_icon_star_sub_product" />
                                    <IoIosStar className="pointer_icon_star_sub_product" />
                                    <IoIosStar className="pointer_icon_star_sub_product" />
                                    <Link className="link_icon_rating_bintang" to="#">(3)</Link>
                                    <p className="harga_deskripsi_product">$65.00</p>
                                </div>
                                <div className="wadah_button_buy_now">
                                   <span className="content_wadah_button_buy_now">Buy Now</span> 
                                </div>
                                <div className="wadah_deskripsi_content">
                                    <h2 className="content_deskripsi_content">Description</h2>
                                    <p className="title_content_deskripsi">The Heritage Shoe that Started It All. This is the Authentic—Since 1966.</p>
                                    <p>The Authentic is the original Vans silhouette. First introduced in 1966 and driven forward by creative culture ever since, this time-honored shoe keeps the old school vibe alive with soft suede uppers in seasonal colorways. Alongside its classic low-top design and iconic rubber waffle outsole, the Authentic Pig Suede is a blank canvas for creativity that allows you to do your thing in your own unique way.</p>
                                    <p>The Authentic is the original Vans silhouette. First introduced in 1966 and driven forward by creative culture ever since, this time-honored shoe keeps the old school vibe alive with soft suede uppers in seasonal colorways. Alongside its classic low-top design and iconic rubber waffle outsole, the Authentic Pig Suede is a blank canvas for creativity that allows you to do your thing in your own unique way.</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    );
}

export default Sub_Product;