import { FaPhoneAlt } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { TfiWorld } from "react-icons/tfi";
import { Link } from "react-router-dom";
import fb from "../img/fb.png"
import icon_tiktok from "../img/icon_tiktok.png"
import icon_shopee from "../img/icon_shopee.png"
import icon_ig from "../img/icon_ig.png"
const { Row, Col } = require("react-bootstrap");



function ContactUs() {
    return (
        <div className="wadah_contact_us">
            <div className="margin_kanankiri">
                <div className="wadah_content_contact_us">
                    <Row>
                        <Col xl={6} lg={6} md={6} style={{paddingRight: '10px'}}>
                            <span className="content_contact_us_span">Contact Us</span>
                            <span className="content_get_in_touch">Get in Touch</span>
                            <div className="wadah_icon_information_get_in_touch">
                                <div className="wadah_icon_telephone_get_in_touch">
                                    <FaPhoneAlt className="icon_telephone_get_in_touch" />
                                </div>
                                <Link to="#" className="link_no_phone_get_in_touch">
                                    <span className="no_phone_get_in_touch">Phone : 087761586485</span>
                                </Link>
                            </div>

                            <div className="wadah_icon_information_get_in_touch margin_bottom_get_in_touch">
                                <div className="wadah_icon_telephone_get_in_touch">
                                    <FaWhatsapp className="icon_telephone_get_in_touch" />
                                </div>
                                <Link to="#" className="link_no_phone_get_in_touch">
                                    <span className="no_phone_get_in_touch">Whatsapp : 087761586485</span>
                                </Link>
                            </div>

                            <div className="wadah_icon_information_get_in_touch margin_bottom_get_in_touch">
                                <div className="wadah_icon_telephone_get_in_touch">
                                    <TfiWorld  className="icon_telephone_get_in_touch" />
                                </div>
                                <Link to="#" className="link_no_phone_get_in_touch">
                                    <span className="no_phone_get_in_touch">www.meet-indonesia.com</span>
                                </Link>
                            </div>

                            <span className="addres_get_in_touch">Alamat</span>
                            <p className="addres_get_in_touch_paragraf">Jl. Raya Popoh, RT.06/RW.02, Gambiran, Besole, Kec. Besuki, Kabupaten Tulungagung, Jawa Timur 66275423</p>
                            <div className="wadah_icon_medsos_get_in_touch">
                                <img src={icon_ig} className="icon_medsos_get_in_touch margin_icon_medsos_get_in_touch" />
                                <img src={icon_tiktok} className="icon_medsos_get_in_touch margin_icon_medsos_get_in_touch" />
                                <img src={fb} className="icon_medsos_get_in_touch margin_icon_medsos_get_in_touch" />
                                <img src={icon_shopee} className="icon_medsos_get_in_touch" />
                            </div>
                        </Col>
                        <Col xl={6} lg={6} md={6}>
                            <div className="wadah_form_submit_email">
                                <form action="mailto:akhmadjazulialfaris@outlook.com">
                                    <span className="span_leave_message">Leave A Message</span>
                                    <div className="wadah_input_email margin_bottom_input_email">
                                        <input type="text" className="input_name" name="text" placeholder="Nama" />
                                    </div>

                                    <div className="wadah_input_email margin_bottom_input_email">
                                        <input type="email" className="input_name" name="email" placeholder="E-mail" />
                                    </div>

                                    <div className="wadah_input_email margin_bottom_input_email">
                                        <input type="text" className="input_name" name="no_hp" placeholder="Nomor Hp" />
                                    </div>

                                    <div className="wadah_input_email margin_bottom_input_email">
                                        <textarea className="input_name width_text_area" name="komentar" rows="10" placeholder="Pesan"></textarea>
                                    </div>

                                    <input type="submit" className="input_name button_kirim" value="Kirim Pesan" />
                                </form>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;