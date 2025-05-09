import { Link } from 'react-router-dom';

const FoamHero = () => {
  return (
    <section className="relative bg-black text-white py-20 px-6 text-center overflow-hidden">
      
      {/* Image in the background as a real <img> element */}
      <img
        src="/img/luma-foamparty.webp"
        alt="Hero"
        className="absolute inset-0 w-full h-full object-cover opacity-60 z-0"
      />

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
