import { Link } from 'react-router-dom';

const FoamHero = () => {
  return (
    <section className="relative bg-black text-white py-20 px-6 text-center overflow-hidden">
      
      {/* Image in the background as a real <img> element */}
      <picture>
          {/* WebP for large screens */}
          <source
            srcSet="/img/luma-foamparty.webp"
            type="image/webp"
            media="(min-width: 768px)"
          />
          {/* WebP for small screens */}
          <source
            srcSet="/img/luma-foamparty-sm.webp"
            type="image/webp"
            media="(max-width: 767px)"
          />
          {/* PNG fallback for large screens */}
          <source
            srcSet="/img/luma-foamparty.jpg"
            type="image/jpg"
            media="(min-width: 768px)"
          />
          {/* PNG fallback for small screens */}
          <source
            srcSet="/img/luma-foamparty-sm.png"
            type="image/png"
            media="(max-width: 767px)"
          />

          {/* Fallback <img> for browsers that don't support <picture> */}
          <img
            src="/img/luma-foamparty.jpg"
            alt="Hero Background"
            className="absolute inset-0 bg-black opacity-50 w-full h-full object-cover z-0"
          />
        </picture>

      <div className="max-w-4xl mx-auto z-10 relative">
        <h1 className="text-5xl font-bold mb-4">Turn Up the Fun with Epic Foam Parties!</h1>
        <p className="text-xl mt-4 mb-8">
        Make your next event unforgettable with Luma SportznFun’s high-energy foam party experience! 
        Perfect for birthdays, school events, summer camps, and more — safe, exciting, and 100% kid-approved.
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

export default FoamHero;
