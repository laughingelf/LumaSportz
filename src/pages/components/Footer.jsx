import { Link } from "react-router-dom";
import { Facebook, Instagram, Music2 } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-blue-300 text-gray-800 py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
        
        {/* Logo and Tagline */}
        <div className="flex flex-col items-center">
          <img src="/img/luma-logo.svg" alt="Luma Sportz N Fun Logo" className="h-48" />
          <p className="text-sm max-w-xs text-center">
            Empowering kids through fun, fitness, and unforgettable experiences.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:underline">Home</Link></li>
            <li><Link to="/about" className="hover:underline">Staff</Link></li>
            <li><Link to="/prices" className="hover:underline">Prices</Link></li>
            <li><Link to="/locations" className="hover:underline">Locations</Link></li>
          </ul>
        </div>

        {/* Programs */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Programs</h3>
          <ul className="space-y-2">
            <li><Link to="/foam-parties" className="hover:underline">Foam Parties</Link></li>
            <li><Link to="/movie-snow-parties" className="hover:underline">Movie/Snow Parties</Link></li>
            <li><Link to="/faq" className="hover:underline">FAQ</Link></li>
            <li><Link to="/contact" className="hover:underline">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info & Socials */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
          <p className="text-sm">Email: <a href="mailto:info@sportznfun.com" className="underline">info@sportznfun.com</a></p>
          <p className="text-sm mt-2">Phone: <a href="tel:+2146809155" className="underline">(214) 680-9155</a></p>
          <p className="text-sm mt-2">Follow us on social media:</p>
          <div className="flex space-x-4 mt-2 justify-center md:justify-start">
            <a
              href="https://www.facebook.com/LUMASportzNFun"
              target="_blank"
              aria-label="Facebook"
              className="text-2xl transition-transform duration-300 hover:rotate-12 hover:scale-125 hover:text-gray-200"
            >
              <Facebook className="w-6 h-6" />
            </a>
            <a
              href="https://www.instagram.com/lumasportznfun/"
              target="_blank"
              aria-label="Instagram"
              className="text-2xl transition-transform duration-300 hover:rotate-12 hover:scale-125 hover:text-gray-200"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a
              href="#"
              target="_blank"
              aria-label="TikTok"
              className="text-2xl transition-transform duration-300 hover:rotate-12 hover:scale-125 hover:text-gray-200"
            >
              <Music2 className="w-6 h-6" />
            </a>
          </div>

        </div>
      </div>

      <div className="mt-10 text-center text-sm text-gray-800">
        © {new Date().getFullYear()} Luma Sportz N Fun. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
