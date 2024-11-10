import ContactUs from "../component/ContactUs";
import Footer from "../component/Footer";
import Maps from "../component/Maps";
import NavbarContact from "../component/NavbarContact";
import PosterContact from "../component/PosterContact";

function ContactPage() {
    return (
        <>
            <NavbarContact />
            <PosterContact />
            <ContactUs />
            <Maps />
            <Footer />
        </>
    );
}

export default ContactPage;