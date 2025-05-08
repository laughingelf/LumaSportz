import { Link } from "react-router-dom";

const PricingHero = () => {
    return (
      <section className="relative bg-black text-white  py-24 px-6 text-center">
        {/* Optional Background Image */}
        <img
          src="/img/luma-hero.webp"
          alt="Kids having fun"
          className="absolute inset-0 w-full h-full object-cover opacity-60 z-0"
        />
        <div className="relative z-10 max-w-4xl mx-auto mt-8">
          <h1 className="text-5xl font-extrabold mb-4">Pricing Made Simple</h1>
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
  