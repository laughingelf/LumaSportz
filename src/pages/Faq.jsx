import FAQSection from "./components/Faq";
import FaqHero from "./components/FaqHero";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import HeroCommon from "./components/CommonHero";


const Faq = () => {

    return (
        <>
        <HeroCommon
            title="Frequently Asked Questions"
            subtitle="Got questions? We've got answers! Whether you're booking a foam party or joining a sports program, we’re here to help make your experience fun and stress-free."
            primaryCta={{ label: 'Contact Us', to: '/contact' }}
            secondaryCta={{ label: "Programs", to: '/prices' }}
            bgImage="luma-hero"
        />
        <FAQSection/>
    

        </>
    )
}

export default Faq;