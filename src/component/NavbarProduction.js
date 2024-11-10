// import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logomeet from '../img/logomeet.png'
import { RxHamburgerMenu } from "react-icons/rx";
import { TfiClose } from "react-icons/tfi";


import { Col, Row } from "react-bootstrap";
import { useState } from 'react';


function NavbarProduction() {
    const [isSidebarVisible, setIsSidebarVisible] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarVisible(!isSidebarVisible);
    };
    return (
        <div className="wadah_navbar_meet">
        <div className="batas_navbar_meet">
            <Row>
                <Col xl={3} lg={3} md={3} sm={9} xs={9}>
                    <img className='logo_meet' src={logomeet} alt="Logo" />
                </Col>
                <Col xl={9} lg={9} md={9} sm={3} xs={3} style={{textAlign: 'right'}}>
                    <Link to="/" className='margin_left_sub item_hidden'><span className='home color_sub'>BERANDA</span></Link>
                    <Link to="/about" className='margin_left_sub item_hidden'><span className='home color_sub'>TENTANG KAMI</span></Link>
                    <Link to="/product" className='margin_left_sub item_hidden'><span className='home color_sub'>PRODUK</span></Link>
                    <Link to="/production" className='margin_left_sub item_hidden'><span className='home'>PRODUKSI</span></Link>
                    <Link to="/testimoni" className='margin_left_sub item_hidden'><span className='home color_sub'>TESTIMONI</span></Link>
                    <Link className='margin_left_sub item_hidden'><span className='home color_sub'>ARTIKEL</span></Link>
                    <Link to="/contact" className='margin_left_sub item_hidden'><span className='home color_sub'>KONTAK</span></Link>
                    <div className='bckgrnd_hamburger' onClick={toggleSidebar}>
                        <RxHamburgerMenu className='item_none' />
                    </div>
                </Col>
            </Row>
        </div>
            <div className={`wadah_sidebar ${isSidebarVisible ? 'wadah_sidebar_visible' : ''}`}>
                <div className='wadah_icon_close' onClick={toggleSidebar}>
                    <div className='bckgrnd_icon_close'><TfiClose className='icon_close' /></div>
                </div>
                <div className='wadah_menu_sidebar'>
                    <input type='text' placeholder="Cari" className='input_search_sidebar' />
                    <div className='wadah_link_sidebar'>
                        <Link to="/" className='link_sidebar_about'>
                            <div className='pdding_sidebar'>
                                <div className='link_home'>
                                    <span className='sidebar_home'>BERANDA</span>
                                </div>
                            </div>
                        </Link>

                        <Link to="/about" className='link_sidebar_about'>
                            <div className='pdding_sidebar'>
                                <div className='link_home'>
                                    <span className='sidebar_home'>TENTANG KAMI</span>
                                </div>
                            </div>
                        </Link>

                        <Link to="/product" className='link_sidebar_about'>
                            <div className='pdding_sidebar'>
                                <div className='link_home'>
                                    <span className='sidebar_home'>PRODUK</span>
                                </div>
                            </div>
                        </Link>

                        <Link to="/production" className='link_sidebar_home'>
                            <div className='pdding_sidebar'>
                                <div className='link_home'>
                                    <span className='sidebar_home'>PRODUKSI</span>
                                </div>
                            </div>
                        </Link>

                        <Link to="/testimoni" className='link_sidebar_testimoni'>
                            <div className='pdding_sidebar'>
                                <div className='link_home'>
                                    <span className='sidebar_home'>TESTIMONI</span>
                                </div>
                            </div>
                        </Link>

                        <Link to="#" className='link_sidebar_article'>
                            <div className='pdding_sidebar'>
                                <div className='link_home'>
                                    <span className='sidebar_home'>ARTIKEL</span>
                                </div>
                            </div>
                        </Link>

                        <Link to="/contact" className='link_sidebar_contact'>
                            <div className='pdding_sidebar'>
                                <div className='link_home'>
                                    <span className='sidebar_home'>KONTAK</span>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
    </div>
    )
}

export default NavbarProduction;