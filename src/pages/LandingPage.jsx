import AboutSection from "./components/AboutSection";
import BoomCard from "./components/Boom";

import Footer from "./components/Footer";
import HeroMain from "./components/HeroMain";
import Navbar from "./components/Navbar";
import ProgramsSection from "./components/Programs";

const LandingPage = () => {

    return (
        <>
        <Navbar/>
        <HeroMain/>
        <BoomCard/>
        <AboutSection/>
        <ProgramsSection/>
        <Footer/>
        </>
    )
}

export default LandingPage;