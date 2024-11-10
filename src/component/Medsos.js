import { Link } from 'react-router-dom';
import icon_ig from '../img/icon_ig.png'
import fb from '../img/fb.png'
import icon_tiktok from '../img/icon_tiktok.png'
import icon_shopee from '../img/icon_shopee.png'
import { Col, Row } from 'react-bootstrap';

function Medsos() {
    return (
        <div className="wadah_medsos">
            <div className="margin_kanankiri">
                <span className="medsos">Media Sosial dan Platform Penjualan</span>
                <h3 className="deskripsi_medsos">Untuk menjangkau lebih banyak pelanggan dan memudahkan proses pembelian, Meet Indonesia hadir di berbagai platform media sosial dan e-commerce:</h3>
                <div className="wadah_icon_medsos">
                    <Row>
                        <Col xl={3} lg={3} md={3} sm={6} xs={6} className='margin_icon_medsos_ig'>
                        <div className='column_medsos'>
                            <div className="wadah_ig">
                                <div className='wadah_icon_img'>
                                    <img src={icon_ig} className='ig' />
                                </div>
                                <div className='wadah_link-instagram'>
                                    <Link to="#" className='link_instagram'>Instagram</Link>
                                </div>
                                <span className='name_ig'>@meet.idn</span>
                            </div>
                        </div>
                        </Col>

                        <Col xl={3} lg={3} md={3} sm={6} xs={6} className='margin_icon_medsos_fb'>
                            <div className='column_medsos'>
                                <div className="wadah_fb">
                                    <div className='wadah_icon_img'>
                                        <img src={fb} className='fb' />
                                    </div>
                                    <div className='wadah_link-fb'>
                                        <Link to="#" className='link_fb'>Facebook</Link>
                                    </div>
                                    <span className='name_fb'>Meet Collection Idn</span>
                                </div>
                            </div>
                        </Col>

                        <Col xl={3} lg={3} md={3} sm={6} xs={6} className='margin_icon_medsos'>
                            <div className='column_medsos'>
                                <div className="wadah_tiktok">
                                    <div className='wadah_icon_img'>
                                        <img src={icon_tiktok} className='tiktok' />
                                    </div>
                                    <div className='wadah_link-tiktok'>
                                        <Link to="#" className='link_tiktok'>Tiktok</Link>
                                    </div>
                                    <span className='name_tiktok'>@meet.indonesia</span>
                                </div>
                            </div>
                        </Col>

                        <Col xl={3} lg={3} md={3} sm={6} xs={6} className='column_medsos'>
                            <div className="wadah_ig">
                                <div className='wadah_icon_img'>
                                    <img src={icon_shopee} className='shopee' />
                                </div>
                                <div className='wadah_link-shopee'>
                                    <Link to="#" className='link_shopee'>Shopee</Link>
                                </div>
                                <span className='name_shopee'>MEET INDONESIA</span>
                            </div>
                        </Col>
                    </Row>   
                </div>
            </div>
        </div>
    );
}

export default Medsos;