import { Col, Row } from 'react-bootstrap';
import poster from '../img/poster.jpg'
import meet_mini from '../img/meet_mini.png'
import { useEffect, useRef } from 'react';

function Poster() {
    return (
        <div className="wadah_poster">
            <img src={poster} className='poster_img' />
            <div className='wadah_poster_about'>
                <Row>
                    <Col xl={8} lg={8} md={8} sm={6} xs={6}>
                        <span className='about_us_postere'>ABOUT US</span>
                    </Col>

                    <Col xl={4} lg={4} md={4} sm={6} xs={6} className='column_border_left'>
                        <div className='wadah_content_poster'>
                            <img src={meet_mini} className='img_meet_mini' />
                            <span className='home_about_poster'>Home | About Us</span>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default Poster;