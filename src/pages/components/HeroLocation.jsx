import React from 'react';
import { Link } from 'react-router-dom';

const LocationsHero = () => {
  return (
    <section className="relative bg-black text-white py-20 px-6 text-center">
      <div className="max-w-4xl mx-auto z-10 relative">
        <h1 className="text-5xl font-bold mb-4">Find a Program Near You</h1>
        <p className="text-xl mt-4 mb-8">
          Discover nearby locations offering Karate, Basketball, and Cheerleading programs. Easily enroll at the location that works best for you!
        </p>
        <Link
          to="/contact"
          className="inline-block bg-white text-blue-600 font-semibold py-3 px-8 rounded-full hover:bg-gray-100 transition shadow-md hover:scale-105"
        >
          Contact Us
        </Link>
      </div>

      {/* Optional decorative background (if desired) */}
      <div className="absolute inset-0 bg-[url('/img/luma-hero.svg')] bg-cover bg-center opacity-60 pointer-events-none"></div>
    </section>
  );
};

export default LocationsHero;
