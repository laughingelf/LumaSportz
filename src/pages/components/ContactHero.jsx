import { Link } from 'react-router-dom';

const ContactHero = () => {
  return (
    <section className="relative bg-black text-white py-20 px-6 text-center overflow-hidden">
      
      {/* Image in the background as a real <img> element */}
      <img
        src="/img/luma-hero.webp"
        alt="Hero"
        className="absolute inset-0 w-full h-full object-cover opacity-60 z-0"
      />

      <div className="max-w-4xl mx-auto z-10 relative">
        <h1 className="text-5xl font-bold mb-4">Ready to Level Up Your Game?</h1>
        <p className="text-xl mt-4 mb-8">
        We’re here to support young athletes every step of the way. Whether you’ve got questions or 
        want to get your child involved, we’d love to hear from you.
        </p>
        {/* <Link
          to="/contact"
          className="inline-block bg-white text-blue-600 font-semibold py-3 px-8 rounded-full hover:bg-gray-100 transition shadow-md hover:scale-105"
        >
          Contact Us
        </Link> */}
      </div>
    </section>
  );
};

export default ContactHero;
