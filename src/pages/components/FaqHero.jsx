import { Link } from 'react-router-dom';

const FaqHero = () => {
  return (
    <section className="relative bg-black text-white py-20 px-6 text-center overflow-hidden">
      
      {/* Image in the background as a real <img> element */}
      <img
        src="/img/luma-hero.webp"
        alt="Hero"
        className="absolute inset-0 w-full h-full object-cover opacity-60 z-0"
      />

      <div className="max-w-4xl mx-auto z-10 relative">
        <h1 className="text-5xl font-bold mb-4">Frequently Asked Questions</h1>
        <p className="text-xl mt-4 mb-8">
        Got questions? We've got answers! Whether you're booking a foam party or joining a 
        sports program, we’re here to help make your experience fun and stress-free.
        </p>
        <Link
          to="/contact"
          className="inline-block bg-white text-blue-600 font-semibold py-3 px-8 rounded-full hover:bg-green-500 hover:text-white transition shadow-md hover:scale-105"
        >
          Contact Us
        </Link>
      </div>
    </section>
  );
};

export default FaqHero;
