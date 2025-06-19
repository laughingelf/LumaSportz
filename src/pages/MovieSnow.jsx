import Navbar from "./components/Navbar";
import Footer from './components/Footer'
import SnowHero from "./components/SnowHero";
import SnowPartyInfo from "./components/SnowPartyInfo";
import MovieNightInfo from "./components/MovieInfo";
import SnowImgSection from "./components/SnowImg";
import HeroCommon from "./components/CommonHero";


const MovieSnow = () => {

    return (
        <>
        <HeroCommon
            title="Winter Magic & Outdoor Movie Memories"
            subtitle="Bring the joy of snowfall and the magic of the big screen to your next event — perfect for schools, neighborhoods, or family fun under the stars!"
            primaryCta={{ label: 'Contact Us', to: '/contact' }}
            secondaryCta={{ label: "FAQ", to: '/faq' }}
            bgImage="luma-foamparty"
        />s
        <SnowPartyInfo/>
        <SnowImgSection/>
        <MovieNightInfo/>


        </>
        
    )
}

export default MovieSnow;