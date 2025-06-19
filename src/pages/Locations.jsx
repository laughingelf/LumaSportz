import LocationsPage from "./components/LocationInfo";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"
import LocationsHero from "./components/HeroLocation";
import HeroCommon from "./components/CommonHero";


const Locations = () => {

    return (
        <>
        <HeroCommon
            title="Find a Program Near You"
            subtitle="Discover nearby locations offering Karate, Basketball, and Cheerleading programs. Easily enroll at the location that works best for you!"
            primaryCta={{ label: 'Contact Us', to: '/contact' }}
            secondaryCta={{ label: "Programs", to: '/prices' }}
            bgImage="luma-hero"
        />
        <LocationsPage/>
        
        </>
    )
}

export default Locations;