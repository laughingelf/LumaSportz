import { motion } from 'framer-motion';

export default function HeroMain() {
  return (
    <section className="bg-black w-full overflow-hidden mt-8 flex flex-col items-center">
      {/* Hero image with aspect ratio preserved */}
      <div className="relative w-full max-w-[2659px] aspect-[2659/984]">
        <img
          src="/img/LumaBanner.png"
          alt="Hero Background"
          className="w-full h-full object-contain"
        />
      </div>

      {/* CTA section BELOW image */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="w-full flex flex-col items-center px-6 py-8 bg-white"
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

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="text-black text-md md:text-xl text-center bg-white/80 rounded-xl px-6 py-4 max-w-3xl"
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
