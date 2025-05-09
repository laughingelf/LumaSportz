import FoamHero from "./components/FoamHero";
import FoamPartyGallery from "./components/FoamImages";
import FoamPartyPackages from "./components/FoamInfo";
import Navbar from "./components/Navbar";
import Footer from './components/Footer';


const FoamParties = () => {

    return (
        <>
        <Navbar/>
            <FoamHero/>
            <FoamPartyPackages/>
            <FoamPartyGallery/>
            <Footer/>
        
        </>
    )
}

export default FoamParties;