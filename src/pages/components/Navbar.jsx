import { useState } from 'react';
import { Link } from 'react-router-dom'; // or 'next/link' for Next.js

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full h-16 bg-white z-50 shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
          <Link to="/" className="block">
            <img
                src="/img/luma-logo.svg"
                alt="Luma Sportz N Fun Logo"
                className="h-38 w-auto"
            />
            </Link>
          </div>

          {/* Center Nav Links */}
          <div className="hidden md:flex space-x-6 mx-auto">
            {[
              ['Home', '/'],
              ['Staff', '/about'],
              ['Prices', '/prices'],
              ['Locations', '/locations'],
              ['Foam Parties', '/foam-parties'],
              ['Movie/Snow Parties', '/movie-snow-parties'],
              ['FAQ', '/faq'],
              ['Contact', '/contact'],
            ].map(([label, path]) => (
              <Link
                key={label}
                to={path}
                className="text-gray-700 hover:text-blue-600 font-medium text-md"
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Right Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              target='_blank'
              href='https://level-up-mma.gymdesk.com/signup'
              className="px-4 py-2 bg-blue-600 text-white rounded-md text-md font-semibold hover:bg-green-500 shadow-md shadow-gray-500 hover:shadow-lg hover:scale-105 transition"
            >
              Sign Up
            </a>
            <a
              target='_blank'
              href='https://level-up-mma.gymdesk.com/login'
              className="px-4 py-2 border-2 border-blue-600 text-blue-600 rounded-md text-md font-semibold hover:bg-green-500 shadow-gray-500 hover:shadow-lg hover:scale-105 hover:text-white transition"
            >
              Login
            </a>
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
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-4 pt-2 pb-4 space-y-2">
            {[
              ['Home', '/'],
              ['Staff', '/about'],
              ['Prices', '/prices'],
              ['Locations', '/locations'],
              ['Foam Parties', '/foam-parties'],
              ['Movie/Snow Parties', '/movie-snow-parties'],
              ['FAQ', '/faq'],
              ['Contact', '/contact'],
            //   ['Sign Up', '/'],
            //   ['Login', '/'],
            ].map(([label, path]) => (
              <Link
                key={label}
                to={path}
                className="block text-gray-700 hover:text-red-600 font-medium text-base"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
