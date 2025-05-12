import { Link } from 'react-router-dom';

const FaqHero = () => {
  return (
    <section className="relative bg-black text-white py-20 px-6 text-center overflow-hidden">
      
      {/* Image in the background as a real <img> element */}
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
