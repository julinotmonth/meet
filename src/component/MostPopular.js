import { Col, Row } from 'react-bootstrap';
import peacock_1 from '../img/peacock_1.jpg'
import cyber_2 from '../img/cyber_2.jpg'
import luminous_3 from '../img/luminous_3.jpg'
import burn_4 from '../img/burn_4.jpg'
import { Link } from 'react-router-dom';
import { useState } from 'react';

function MostPopular() {
    return (
        <div className="wadah_most_popular">
            <div className="margin_kanankiri">
                <span className="judul_most_popular">Most Popular</span>
                <div className="wadah_name_barang_popular">
                    <Row>
                        <Col className='column_wadah_popular zoom' xl={3} lg={3} md={6} sm={6} xs={6}>
                            <Link className='link_popular' to="/product/sub-product-1">
                                <img className='img_popular' src={peacock_1} />
                                <span className='name_barang_popular'>SARUNG TANGAN KIPER MEET PEACOCK</span>
                            </Link>
                        </Col>

                        <Col className='column_wadah_popular zoom' xl={3} lg={3} md={6} sm={6} xs={6}>
                            <Link className='link_popular' to="/product/sub-product-2">
                                <img className='img_popular' src={cyber_2} />
                                <span className='name_barang_popular'>SARUNG TANGAN KIPER MEET INDONESIA SERIE CYBER</span>
                            </Link>
                        </Col>

                        <Col className='column_wadah_popular zoom' xl={3} lg={3} md={6} sm={6} xs={6}>
                            <Link className='link_popular' to="/product/sub-product-3">
                                <img className='img_popular' src={luminous_3} />
                                <span className='name_barang_popular'>SARUNG TANGAN KIPER MEET LUMINOUS</span>
                            </Link>
                        </Col>

                        <Col className='column_wadah_popular zoom' xl={3} lg={3} md={6} sm={6} xs={6}>
                            <Link className='link_popular' to="/product/sub-product-4">
                                <img className='img_popular' src={burn_4} />
                                <span className='name_barang_popular'>SARUNG TANGAN KIPER MEET BURN SPIRIT A2</span>
                            </Link>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    );
}

export default MostPopular;