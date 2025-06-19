import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const HeroCommon = ({ title, subtitle, primaryCta, secondaryCta, bgImage }) => {
  const basePath = `/img/${bgImage}`;

  return (
    <section className="relative bg-black text-white py-20 mt-15 px-6 text-center overflow-hidden">
      {/* Background Image */}
      <motion.picture
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <source srcSet={`${basePath}.webp`} type="image/webp" media="(min-width: 768px)" />
        <source srcSet={`${basePath}-sm.webp`} type="image/webp" media="(max-width: 767px)" />
        <source srcSet={`${basePath}.png`} type="image/png" media="(min-width: 768px)" />
        <source srcSet={`${basePath}-sm.png`} type="image/png" media="(max-width: 767px)" />
        <img
          src={`${basePath}.png`}
          alt="Hero Background"
          className="absolute inset-0 bg-black opacity-50 w-full h-full object-cover z-0"
        />
      </motion.picture>

      {/* Text Content */}
      <div className="max-w-4xl mx-auto z-10 relative">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold mb-4"
        >
          {title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl mt-4 mb-8"
        >
          {subtitle}
        </motion.p>

        {/* Optional Buttons */}
        {(primaryCta || secondaryCta) && (
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, type: 'spring' }}
          >
            {primaryCta && (
              <motion.div
                whileHover={{ scale: 1.1, y: -2 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <Link
                  to={primaryCta.to}
                  className="inline-block bg-white text-blue-600 font-semibold py-3 px-8 rounded-full shadow-md hover:bg-green-500 hover:text-white transition"
                >
                  {primaryCta.label}
                </Link>
              </motion.div>
            )}

            {secondaryCta && (
              <motion.div
                whileHover={{ scale: 1.1, y: -2 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <Link
                  to={secondaryCta.to}
                  className="inline-block bg-white text-blue-600 font-semibold py-3 px-8 rounded-full shadow-md hover:bg-green-500 hover:text-white transition"
                >
                  {secondaryCta.label}
                </Link>
              </motion.div>
            )}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default HeroCommon;
