import FoamHero from "./components/FoamHero";
import FoamPartyGallery from "./components/FoamImages";
import FoamPartyPackages from "./components/FoamInfo";
import HeroCommon from "./components/CommonHero";



const FoamParties = () => {

    return (
        <>
            <HeroCommon
                title="Turn Up the Fun with Epic Foam Parties!"
                subtitle="Make your next event unforgettable with Luma SportznFun’s high-energy foam party experience! Perfect for birthdays, school events, summer camps, and more — safe, exciting, and 100% kid-approved."
                primaryCta={{ label: 'Contact Us', to: '/contact' }}
                secondaryCta={{ label: "FAQ", to: '/faq' }}
                bgImage="luma-foamparty"
            />
            <FoamPartyPackages/>
            <FoamPartyGallery/>
        
        </>
    )
}

export default FoamParties;