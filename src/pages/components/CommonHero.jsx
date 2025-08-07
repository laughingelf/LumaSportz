import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const HeroCommon = ({ title, subtitle, primaryCta, secondaryCta, bgImage }) => {
  const basePath = `/img/${bgImage}`;

  return (
    <section className="w-full text-center overflow-hidden flex flex-col items-center mt-16">
      {/* Hero image with responsive sources */}
      <motion.picture
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="w-full max-w-[2659px] aspect-[2659/984]" // Adjust if you want it more general
      >
        {/* <source srcSet={`${basePath}.webp`} type="image/webp" media="(min-width: 768px)" />
        <source srcSet={`${basePath}-sm.webp`} type="image/webp" media="(max-width: 767px)" />
        <source srcSet={`${basePath}.png`} type="image/png" media="(min-width: 768px)" />
        <source srcSet={`${basePath}-sm.png`} type="image/png" media="(max-width: 767px)" /> */}
        <img
          src={`${basePath}.png`}
          alt="Hero"
          className="w-full h-full object-contain mx-auto"
        />
      </motion.picture>

      {/* Text & CTA content below the image */}
      <div className="bg-white w-full text-black py-12 px-6 flex flex-col items-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          {title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl mb-8 max-w-2xl"
        >
          {subtitle}
        </motion.p>

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
                  className="inline-block bg-blue-600 text-white font-semibold py-3 px-8 rounded-full shadow-md hover:bg-green-500 hover:text-white transition"
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
                  className="inline-block bg-blue-600 text-white font-semibold py-3 px-8 rounded-full shadow-md hover:bg-green-500 hover:text-white transition"
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
