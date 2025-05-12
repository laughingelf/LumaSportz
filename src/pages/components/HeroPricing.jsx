import { Link } from "react-router-dom";

const PricingHero = () => {
    return (
      <section className="relative bg-black text-white  py-24 px-6 text-center">
        {/* Optional Background Image */}
        <picture>
          {/* WebP for large screens */}
          <source
            srcSet="/img/luma-hero.webp"
            type="image/webp"
            media="(min-width: 768px)"
          />
          {/* WebP for small screens */}
          <source
            srcSet="/img/luma-hero-sm.webp"
            type="image/webp"
            media="(max-width: 767px)"
          />
          {/* PNG fallback for large screens */}
          <source
            srcSet="/img/luma-hero.png"
            type="image/png"
            media="(min-width: 768px)"
          />
          {/* PNG fallback for small screens */}
          <source
            srcSet="/img/luma-hero-sm.png"
            type="image/png"
            media="(max-width: 767px)"
          />

          {/* Fallback <img> for browsers that don't support <picture> */}
          <img
            src="/img/luma-hero.png"
            alt="Hero Background"
            className="absolute inset-0 bg-black opacity-50 w-full h-full object-cover z-0"
          />
        </picture>
        <div className="relative z-10 max-w-4xl mx-auto mt-8">
          <h1 style={{fontFamily: 'Bungee, sans-serif'}} className="text-5xl font-extrabold mb-4">Pricing Made Simple</h1>
          <p className="text-xl mb-8">
            Affordable, flexible plans for every child and every family. No hidden fees—just pure fun!
          </p>
          <Link
          to="/contact"
          className="inline-block bg-white text-blue-600 font-semibold py-3 px-8 rounded-full hover:bg-gray-100 transition shadow-md hover:scale-105"
        >
          Contact Us
        </Link>
        </div>
      </section>
    );
  };
  
  export default PricingHero;
  