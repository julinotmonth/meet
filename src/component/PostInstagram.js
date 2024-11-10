import { Col, Row } from 'react-bootstrap';
import { InstagramEmbed } from 'react-social-media-embed';


function PostInstagram() {
    return (
        <div className="wadah_post_instagram">
            <div className="margin_kanankiri">
                <span className="text_instagram">Instagram</span>
                <p className="follow_instagram">Follow on Instagram :</p>
                <div className='wadah_social_media_ig'>
                    <Row>
                        <Col xl={4} lg={4}>
                            <div className='column_medsos_ig_margin_right'>
                                <InstagramEmbed className='instagramembed' captioned={true} url="https://www.instagram.com/p/C6s7k7mP-vq/?utm_source=ig_embed&ig_rid=12815d47-81a2-42cd-9149-6ca4dd23ac1d" />
                            </div>
                        </Col>

                        <Col xl={4} lg={4}>
                            <div className='column_medsos_ig_margin column_medsos_ig_margin_right'>
                                <InstagramEmbed className='instagramembed' captioned={true} url="https://www.instagram.com/p/C6nJVKEvuD0/?utm_source=ig_embed&ig_rid=68395d05-4689-4ab0-b4b1-b55d27dd2a7e" />
                            </div>
                        </Col>

                        <Col xl={4} lg={4}>
                            <div className='column_medsos_ig_margin'>
                                <InstagramEmbed className='instagramembed' captioned={true} url="https://www.instagram.com/p/C8G1IDSpeST/" />
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    );
}

export default PostInstagram;