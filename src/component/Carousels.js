import { Carousel } from "react-bootstrap";
import carousels_1 from "../img/carousels_1.jpg"
import carousels_2 from "../img/carousels_2.jpg"

function Carousels() {
    return (
        <div className="wadah_crousels">
            <Carousel>
                <Carousel.Item>
                    <img src={carousels_1} className="crousels_1" />
                </Carousel.Item>
                <Carousel.Item>
                    <img src={carousels_2} className="crousels_1" />
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default Carousels;