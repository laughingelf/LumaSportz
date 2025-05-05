import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";
import HeroMain from "./components/heroMain";
import Navbar from "./components/Navbar";
import ProgramsSection from "./components/Programs";

const LandingPage = () => {

    return (
        <>
        <Navbar/>
        <HeroMain/>
        <AboutSection/>
        <ProgramsSection/>
        <Footer/>
        </>
    )
}

export default LandingPage;