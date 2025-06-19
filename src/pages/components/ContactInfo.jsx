import { Mail, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

const ContactInfo = () => {
  return (
    <motion.section
      className="w-full bg-white py-6 md:py-0 shadow-lg"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-4xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center items-center min-h-[12rem]">
          {/* Phone */}
          <motion.div
            whileHover={{ scale: 1.05, y: -3 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="flex flex-col items-center justify-center h-full"
          >
            <Phone size={40} className="text-blue-600 mb-4" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Call Us</h3>
            <p className="text-blue-600 text-xl">
              <a href="tel:2146809155" className="hover:underline">
                (214) 680-9155
              </a>
            </p>
          </motion.div>

          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05, y: -3 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="flex justify-center items-center h-full"
          >
            <img src="/img/luma-logo.svg" alt="Logo" className="h-54 mx-auto" />
          </motion.div>

          {/* Email */}
          <motion.div
            whileHover={{ scale: 1.05, y: -3 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="flex flex-col items-center justify-center h-full"
          >
            <Mail size={40} className="text-blue-600 mb-4" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Email</h3>
            <p className="text-blue-600 text-xl">
              <a href="mailto:info@sportznfun.com" className="hover:underline">
                info@sportznfun.com
              </a>
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactInfo;
