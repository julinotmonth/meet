import { Link } from 'react-router-dom';
import logomeet from '../img/logomeet.png'
import icon_ig from '../img/icon_ig.png'
import icon_shopee from '../img/icon_shopee.png'
import icon_tiktok from '../img/icon_tiktok.png'
import fb from '../img/fb.png'
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";
import { TfiLocationPin } from "react-icons/tfi";
import artikel_1 from '../img/artikel_1.jpg'
import artikel_2 from '../img/artikel_2.jpg'
import artikel_3 from '../img/artikel_3.jpg'
import { FaArrowUp } from "react-icons/fa6";

 
import { Col, Row } from "react-bootstrap";
import { useEffect, useState } from 'react';

function Footer() {

    const [isVisible, setIsVisible] = useState(false);

    // Fungsi untuk menangani scroll
    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Fungsi untuk menggulir kembali ke atas
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);
    return (
        <div className="wadah_footer">
            <div className="margin_kanankiri">
                <div className='wadah_content_footer'>
                    <Row>
                        <Col xl={3} lg={3} md={3} sm={12} xs={12}>
                            <div className='margin_footer'>
                                <Link to="#">
                                    <img src={logomeet} className='logo_meet_footer' />
                                </Link>
                                <div className='wadah_icon_footer'>
                                    <img src={icon_ig} className='icon_instagram_footer margin_icon_footer' />
                                    <img src={icon_tiktok} className='icon_instagram_tiktok margin_icon_footer' />
                                    <img src={fb} className='icon_instagram_fb margin_icon_footer' />
                                    <img src={icon_shopee} className='icon_instagram_shopee' />
                                </div>
                            </div>
                        </Col>

                        <Col xl={3} lg={3} md={3} sm={12} xs={12}>
                            <div className='margin_footer'>
                                <div className='wadah_aboutus_footer'>
                                    <span className='aboutus_footer'>ABOUT US</span>
                                    <p className='deskripsi_aboutus_footer'>Dengan fokus pada kualitas, inovasi, dan kepuasan pelanggan, Meet Indonesia berkomitmen untuk terus menjadi pilihan utama bagi para penjaga gawang di Indonesia. Temukan sarung tangan kiper terbaik Anda di Meet Indonesia dan raih performa maksimal di setiap pertandingan!</p>
                                </div>
                            </div>
                        </Col>

                        <Col xl={3} lg={3} md={3} sm={12} xs={12}>
                            <div className='margin_footer'>
                                <div className='wadah_aboutus_footer'>
                                    <span className='aboutus_footer margin_top_footer'>CALL US</span>
                                    <Row>
                                        <Col xl={12} lg={12} md={12} sm={12} className='column_call_us_Footer'>
                                            <Link to="#" className='link_icon_telephone'>
                                                <BsFillTelephoneFill className='icon_telephone' />
                                                <span className='no_telephone'>Phone : 087761586485</span>
                                            </Link>
                                        </Col>

                                        <Col xl={12} lg={12} md={12} sm={12} className='column_call_us_Footer'>
                                            <Link to="#" className='link_icon_whatsapp'>
                                                <FaWhatsapp className='icon_whatsapp' />
                                                <span className='no_telephone'>Whatsapp : 087761586485</span>
                                            </Link>
                                        </Col>

                                        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                                            <Link to="#" className='link_icon_location'>
                                                <TfiLocationPin  className='icon_location' />
                                                <span className='addres'>Surabaya</span>
                                            </Link>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </Col>

                        <Col xl={3} lg={3} md={3} sm={12} xs={12}>
                            <div className='wadah_info_terbaru'>
                                <span className='aboutus_footer margin_top_footer'>INFO TERBARU</span>
                                <Row>
                                    <Col xl={2} lg={2} md={2} sm={2} xs={2} className='column_info_terbaru_Footer' style={{marginRight: '10px'}}>
                                        <Link to="#" className='link_deskripsi_icon_artikel_footer'>
                                            <img src={artikel_1} className='artikel_1_footer' />
                                        </Link>
                                    </Col>
                                    <Col xl={9} lg={9} md={9} sm={9} xs={9}>
                                        <Link to="" className='link_deskripsi_artikel_footer'>
                                            <span className='deskripsi_artikel_footer'>Rekomendasi Sarung Tangan Kiper</span>
                                        </Link>
                                    </Col>

                                    <Col xl={2} lg={2} md={2} sm={2} xs={2} className='column_info_terbaru_Footer' style={{marginRight: '10px'}}>
                                        <Link to="#" className='link_deskripsi_icon_artikel_footer'>
                                            <img src={artikel_2} className='artikel_1_footer' />
                                        </Link>
                                    </Col>
                                    <Col xl={9} lg={9} md={9} sm={9} xs={9}>
                                        <Link to="" className='link_deskripsi_artikel_footer'>
                                            <span className='deskripsi_artikel_footer'>Sarung Tangan Kiper Futsal</span>
                                        </Link>
                                    </Col>

                                    <Col xl={2} lg={2} md={2} sm={2} xs={2} style={{marginRight: '10px'}}>
                                        <Link to="#" className='link_deskripsi_icon_artikel_footer'>
                                            <img src={artikel_3} className='artikel_1_footer' />
                                        </Link>
                                    </Col>
                                    <Col xl={9} lg={9} md={9} sm={9} xs={9}>
                                        <Link to="" className='link_deskripsi_artikel_footer'>
                                            <span className='deskripsi_artikel_footer'>Jual Sarung Tangan Kiper Murah</span>
                                        </Link>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                            <div className='wadah_copyright_footer'>
                                <span className='copyright_footer'>© 2024 Meet Indonesia All Rights Reserved. Published by www.eda.co.id</span>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
            <div className="back-to-top">
            {isVisible && 
                <button onClick={scrollToTop} className="back-to-top-button">
                    <FaArrowUp />
                </button>
            }
        </div>
        </div>
    );
}

export default Footer;