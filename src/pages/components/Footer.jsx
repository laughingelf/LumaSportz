import { Link } from "react-router-dom";
import { Facebook, Instagram, Music2 } from "lucide-react";
import { motion } from "framer-motion";

const columnVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const Footer = () => {
  return (
    <footer className="bg-blue-300 text-gray-800 py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
        {/* Logo and Tagline */}
        <motion.div
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={columnVariants}
          className="flex flex-col items-center"
        >
          <img src="/img/luma-logo.svg" alt="Luma Sportz N Fun Logo" className="h-48" />
          <p className="text-lg max-w-xs text-center">
            Empowering kids through fun, fitness, and unforgettable experiences.
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={columnVariants}
        >
          <h3 className="text-2xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-lg">
            <li><Link to="/" className="hover:underline">Home</Link></li>
            <li><Link to="/about" className="hover:underline">Staff</Link></li>
            <li><Link to="/prices" className="hover:underline">Prices</Link></li>
            <li><Link to="/locations" className="hover:underline">Locations</Link></li>
          </ul>
        </motion.div>

        {/* Programs */}
        <motion.div
          custom={2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={columnVariants}
        >
          <h3 className="text-2xl font-semibold mb-4">Programs</h3>
          <ul className="space-y-2 text-lg">
            <li><Link to="/foam-parties" className="hover:underline">Foam Parties</Link></li>
            <li><Link to="/movie-snow-parties" className="hover:underline">Movie/Snow Parties</Link></li>
            <li><Link to="/faq" className="hover:underline">FAQ</Link></li>
            <li><Link to="/contact" className="hover:underline">Contact</Link></li>
          </ul>
        </motion.div>

        {/* Contact Info & Socials */}
        <motion.div
          custom={3}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={columnVariants}
          className="flex flex-col items-center md:items-start"
        >
          <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
          <p className="text-lg">Email: <a href="mailto:info@sportznfun.com" className="underline">info@sportznfun.com</a></p>
          <p className="text-lg mt-2">Phone: <a href="tel:+2146809155" className="underline">(214) 680-9155</a></p>
          <p className="text-lg mt-2">Follow us on social media:</p>
          <div className="flex space-x-4 mt-2 justify-center md:justify-start">
            {[
              { href: "https://www.facebook.com/LUMASportzNFun", icon: <Facebook className="w-8 h-8" />, label: "Facebook" },
              { href: "https://www.instagram.com/lumasportznfun/", icon: <Instagram className="w-8 h-8" />, label: "Instagram" },
              { href: "#", icon: <Music2 className="w-8 h-8" />, label: "TikTok" },
            ].map((social, idx) => (
              <motion.a
                key={idx}
                href={social.href}
                target="_blank"
                aria-label={social.label}
                className="text-2xl hover:text-gray-200 transition-transform duration-300 hover:rotate-12 hover:scale-125"
                animate={{ y: [0, -2, 0, 2, 0] }}
                transition={{ repeat: Infinity, duration: 4, delay: idx * 0.3, ease: "easeInOut" }}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="mt-10 text-center text-sm text-gray-800"
      >
        © {new Date().getFullYear()} Luma Sportz N Fun. All rights reserved.
      </motion.div>
    </footer>
  );
};

export default Footer;
