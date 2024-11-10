import { Link } from "react-router-dom";

function AboutUs() {
    return(
        <div className="wadah_aboutus">
            <div className="margin_kanankiri">
                <div className="bckgrnd_aboutus">
                    <div className="bckgrnd_aboutus_deskripsi">
                        <span className="about">About</span>
                        <span className="us">us.</span>
                        <p className="deskripsi_about">Meet Indonesia adalah produsen sarung tangan kiper berkualitas, didirikan dengan tujuan untuk menyediakan perlengkapan kiper yang terbaik</p>
                        <Link style={{color: '#000'}} to=""><span className="read_more">Read More</span></Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;