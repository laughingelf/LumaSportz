import { Link } from 'react-router-dom';

const SnowHero = () => {
  return (
    <section className="relative bg-black text-white py-20 px-6 text-center overflow-hidden">
      
      {/* Image in the background as a real <img> element */}
      <img
        src="/img/luma-foamparty.webp"
        alt="Hero"
        className="absolute inset-0 w-full h-full object-cover opacity-60 z-0"
      />

      <div className="max-w-4xl mx-auto z-10 relative">
        <h1 className="text-5xl font-bold mb-4">Winter Magic & Outdoor Movie Memories</h1>
        <p className="text-xl mt-4 mb-8">
        Bring the joy of snowfall and the magic of the big screen to your next event — 
        perfect for schools, neighborhoods, or family fun under the stars!
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

export default SnowHero;
