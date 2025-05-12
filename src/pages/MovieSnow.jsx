import Navbar from "./components/Navbar";
import Footer from './components/Footer'
import SnowHero from "./components/SnowHero";
import SnowPartyInfo from "./components/SnowPartyInfo";
import MovieNightInfo from "./components/MovieInfo";
import SnowImgSection from "./components/SnowImg";


const MovieSnow = () => {

    return (
        <>
        <Navbar/>
        <SnowHero/>
        <SnowPartyInfo/>
        <SnowImgSection/>
        <MovieNightInfo/>
        <Footer/>

        </>
        
    )
}

export default MovieSnow;