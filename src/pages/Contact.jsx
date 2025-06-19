import ContactForm from "./components/ContactForm";
import ContactHero from "./components/ContactHero";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ContactInfo from "./components/ContactInfo";
import HeroCommon from "./components/CommonHero";


const Contact = () => {

    return (
        <>
        <HeroCommon
            title="Ready to Level Up Your Game?"
            subtitle="We’re here to support young athletes every step of the way. Whether you’ve got questions or want to get your child involved, we’d love to hear from you."
            // primaryCta={{ label: 'Contact Us', to: '/contact' }}
            // secondaryCta={{ label: "Programs", to: '/prices' }}
            bgImage="luma-hero"
        />
        <ContactInfo/>
        <ContactForm/>
 
        </>
    )
}

export default Contact;