import ContactForm from "./components/ContactForm";
import ContactHero from "./components/ContactHero";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ContactInfo from "./components/ContactInfo";


const Contact = () => {

    return (
        <>
        <Navbar/>
        <ContactHero/>
        <ContactInfo/>
        <ContactForm/>
        <Footer/>
        </>
    )
}

export default Contact;