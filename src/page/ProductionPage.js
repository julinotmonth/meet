import Footer from "../component/Footer";
import NavbarProduction from "../component/NavbarProduction";
import PosterProduct from "../component/PosterProduct";
import VideoPlayer from "../component/VideoPlayer";

function ProductionPage() {
    return (
        <>
            <NavbarProduction />
            <PosterProduct />
            <VideoPlayer />
            <Footer />
        </>
    );
}

export default ProductionPage;