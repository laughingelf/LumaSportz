import AboutSection from "./components/AboutSection";
import BoomCard from "./components/Boom";

import Footer from "./components/Footer";
import HeroMain from "./components/HeroMain";
import Navbar from "./components/Navbar";
import ProgramsSection from "./components/Programs";
import VideoSection from "./components/VideoSection";

const LandingPage = () => {

    return (
        <>
        <HeroMain/>
        <VideoSection  title="Meet Our Team" videoId="pPTZIuLKFT8" />
        <BoomCard/>
        <AboutSection/>
        <ProgramsSection/>
        </>
    )
}

export default LandingPage;