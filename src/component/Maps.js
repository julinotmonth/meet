import { Col, Row } from "react-bootstrap";

function Maps() {
    return (
        <div className="wadah_map">
            <div className="margin_kanankiri">
                <div className="wadah_content_map">
                    <Row>
                        <Col xl={12}>
                            <div style={{width: '100%', height: '400px'}} className="margin_bottom_maps_iframe"><iframe width="100%" height="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=100%25&amp;hl=en&amp;q=Pademo,%20RT.12/RW.03,%20Pademo,%20Pademonegoro,%20Kec.%20Sukodono,%20Kabupaten%20Sidoarjo,%20Jawa%20Timur%2061258+(Meet)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps trackers</a></iframe></div>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    );
}

export default Maps;