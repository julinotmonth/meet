import AboutUs from "../component/AboutUs";
import Carousels from "../component/Carousels";
import Footer from "../component/Footer";
import Medsos from "../component/Medsos";
import MostPopular from "../component/MostPopular";
import Navbar from "../component/Navbar";
import PostInstagram from "../component/PostInstagram";
import Search from "../component/Search";
import ViewCatalog from "../component/ViewCatalog";

function MainPage() {
    return (
        <>
            <Navbar />
            <Carousels />
            <ViewCatalog />
            <MostPopular />
            <AboutUs />
            <Search />
            <Medsos />
            <PostInstagram />
            <Footer />
        </>
    );
}

export default MainPage;