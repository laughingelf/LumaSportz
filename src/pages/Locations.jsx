import LocationsPage from "./components/LocationInfo";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"
import LocationsHero from "./components/HeroLocation";


const Locations = () => {

    return (
        <>
        <Navbar/>
        <LocationsHero/>
        <LocationsPage/>
        <Footer/>
        </>
    )
}

export default Locations;