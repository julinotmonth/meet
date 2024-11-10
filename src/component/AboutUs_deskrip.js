import { Col, Row } from "react-bootstrap";
import meet_mini from "../img/meet_mini.png"
import about_us from "../img/about_us.png"
import { useEffect, useRef } from "react";

function AboutUs_deskrip() {
    const imgRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('slide-in');
                    observer.unobserve(entry.target); // Berhenti mengamati setelah animasi dijalankan
                }
            });
        }, { threshold: 0.1 }); // Memulai animasi ketika 10% dari elemen terlihat

        if (imgRef.current) {
            observer.observe(imgRef.current);
        }

        return () => {
            if (imgRef.current) {
                observer.unobserve(imgRef.current);
            }
        };
    }, []);

    return (
        <div className="wadah_aboutus_deskrip">
            <div className="margin_kanankiri">
                <div className="wadah_aboutus_deskrip_content">
                    <Row>
                        <Col xl={6} lg={6} md={6}>
                            <span className="aboutus_deskrip">About Us</span>
                            <h2 className="meet_indo_deskrip">MEET INDONESIA</h2>
                            <p className="parag_deskrip">Meet Indonesia adalah produsen sarung tangan kiper berkualitas, didirikan dengan tujuan untuk menyediakan perlengkapan kiper yang terbaik, Meet Indonesia telah menjadi pilihan utama bagi para penjaga gawang yang mencari perlindungan dan performa maksimal di lapangan.</p>
                            <span className="aboutus_deskrip">Visi</span>
                            <p className="parag_deskrip">Menjadi produsen perlengkapan kiper terkemuka yang diakui di tingkat nasional dan internasional, dengan produk yang unggul dalam kualitas, inovasi, dan desain.</p>
                            <span className="aboutus_deskrip margin_bottom_misi">Misi</span>
                            <div className="wadah_margin_misi">
                                <Row>
                                    <Col xl={4} lg={4} md={4} sm={4}>
                                        <div className="margin_about_misi">
                                            <div className="wadah_misi" style={{padding: '10px'}}>
                                                <img src={meet_mini} className="img_meet_misi" />
                                                <p className="deskripsi_misi">Menyediakan sarung tangan kiper berkualitas tinggi yang dapat diakses oleh semua kalangan.</p>
                                            </div>
                                        </div>
                                    </Col>

                                    <Col xl={4} lg={4} md={4} sm={4}>
                                        <div className="margin_about_misi">
                                            <div className="wadah_misi" style={{padding: '10px'}}>
                                                <img src={meet_mini} className="img_meet_misi" />
                                                <p className="deskripsi_misi">Menyediakan sarung tangan kiper berkualitas tinggi yang dapat diakses oleh semua kalangan.</p>
                                            </div>
                                        </div>
                                    </Col>

                                    <Col xl={4} lg={4} md={4} sm={4}>
                                            <div className="wadah_misi" style={{padding: '10px'}}>
                                                <img src={meet_mini} className="img_meet_misi" />
                                                <p className="deskripsi_misi">Menyediakan sarung tangan kiper berkualitas tinggi yang dapat diakses oleh semua kalangan.</p>
                                            </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                        <Col xl={6} lg={6} md={6} className="column_alignself_aboutus">
                            <div className="wadah_img_aboutus">
                                <img ref={imgRef} src={about_us} className="img_about_us" />
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    );
}

export default AboutUs_deskrip;