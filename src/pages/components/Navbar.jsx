import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const navVariants = {
  hidden: { y: -100, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } },
};

const linkHover = {
  scale: 1.1,
  transition: { type: 'spring', stiffness: 300 },
};

const buttonHover = {
  scale: 1.05,
  boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)',
  transition: { type: 'spring', stiffness: 300 },
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef();

  const navLinks = [
    ['Home', '/'],
    ['Staff', '/about'],
    ['Prices', '/prices'],
    ['Locations', '/locations'],
    ['Foam Parties', '/foam-parties'],
    ['Movie/Snow Parties', '/movie-snow-parties'],
    ['FAQ', '/faq'],
    ['Contact', '/contact'],
  ];

  // Close mobile menu on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      animate="visible"
      className="fixed top-0 left-0 w-full h-16 bg-white z-50 shadow"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="block">
              <img src="/img/luma-logo.svg" alt="Luma Sportz N Fun Logo" className="h-38 w-auto" />
            </Link>
          </div>

          {/* Center Nav Links */}
          <div className="hidden md:flex space-x-6 mx-auto">
            {navLinks.map(([label, path]) => (
              <motion.div key={label} whileHover={linkHover}>
                <Link
                  to={path}
                  className="text-gray-700 hover:text-blue-600 font-medium text-md"
                >
                  {label}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Right Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <motion.a
              whileHover={buttonHover}
              target="_blank"
              href="https://level-up-mma.gymdesk.com/signup"
              className="px-4 py-2 bg-blue-600 text-white rounded-md text-md font-semibold shadow-md"
            >
              Sign Up
            </motion.a>
            <motion.a
              whileHover={buttonHover}
              target="_blank"
              href="https://level-up-mma.gymdesk.com/login"
              className="px-4 py-2 border-2 border-blue-600 text-blue-600 rounded-md text-md font-semibold"
            >
              Login
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-red-600 focus:outline-none"
            >
              {isOpen ? (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            ref={menuRef}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-white shadow-lg overflow-hidden"
          >
            <div className="px-4 pt-2 pb-4 space-y-2">
              {navLinks.map(([label, path]) => (
                <motion.div key={label} whileHover={linkHover}>
                  <Link
                    to={path}
                    onClick={() => setIsOpen(false)}
                    className="block text-gray-700 hover:text-red-600 font-medium text-base"
                  >
                    {label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
