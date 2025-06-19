import Footer from "./components/Footer";
import PricingHero from "./components/HeroPricing";
import Navbar from "./components/Navbar";
import PricingSection from "./components/Pricing";
import HeroCommon from "./components/CommonHero";


const Prices = () => {
  return (
    <>
      <HeroCommon
        title="Pricing Made Simple"
        subtitle="Affordable, flexible plans for every child and every family. No hidden fees—just pure fun!"
        primaryCta={{ label: 'Contact Us', to: '/contact' }}
        secondaryCta={{ label: "FAQ's", to: '/faq' }}
        bgImage="luma-hero"
      />
      <PricingSection/>
      
      
    </>
  );
};

export default Prices;
