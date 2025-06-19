import { motion } from 'framer-motion';

export default function HeroMain() {
  return (
    <section className="relative bg-black min-h-[80vh] w-full overflow-hidden flex items-center justify-center mt-8">
      {/* Background image */}
      <picture>
        <source srcSet="/img/luma-hero.webp" type="image/webp" media="(min-width: 768px)" />
        <source srcSet="/img/luma-hero-sm.webp" type="image/webp" media="(max-width: 767px)" />
        <source srcSet="/img/luma-hero.png" type="image/png" media="(min-width: 768px)" />
        <source srcSet="/img/luma-hero-sm.png" type="image/png" media="(max-width: 767px)" />
        <img
          src="/img/luma-hero.png"
          alt="Hero Background"
          className="absolute inset-0 bg-black opacity-60 w-full h-full object-cover z-0"
        />
      </picture>

      {/* Center logo with animation */}
      <motion.img
        src="/img/luma-logo.svg"
        alt="Hero Overlay"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="absolute top-1/2 md:top-1/3 left-1/2 w-[28rem] md:w-[48rem] transform -translate-x-1/2 -translate-y-2/3 md:-translate-y-1/2 z-10"
      />

      {/* CTA at bottom */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="absolute bottom-4 w-full flex flex-col items-center z-10 px-6"
      >
        <div className="flex flex-col sm:flex-row gap-4 text-center mb-6">
          <motion.a
            whileHover={{ scale: 1.05 }}
            target="_blank"
            href="https://level-up-mma.gymdesk.com/signup"
            className="px-8 w-48 py-3 text-lg bg-blue-600 hover:bg-green-500 transition font-semibold rounded-full shadow-md shadow-gray-500 hover:shadow-lg text-white"
          >
            Sign Up
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            target="_blank"
            href="https://level-up-mma.gymdesk.com/login"
            className="px-8 w-48 py-3 text-lg bg-blue-600 text-white hover:text-white hover:bg-green-500 transition font-semibold rounded-full shadow-md shadow-gray-500 hover:shadow-lg"
          >
            Member Login
          </motion.a>
        </div>

        {/* Info text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="text-black text-md md:text-xl text-center bg-white/80 rounded-xl px-6 py-4"
        >
          <p className="mb-2">
            Please use <span className="font-semibold underline text-blue-600">Student's Name</span> and{' '}
            <span className="font-semibold underline text-blue-600">Age</span> when signing up.
          </p>
          <p>
            Need help registering?{' '}
            <a
              href="https://www.youtube.com/shorts/NWB2oO-suWU"
              target="_blank"
              className="underline text-green-500"
              rel="noopener noreferrer"
            >
              Watch this video
            </a>
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
