import { motion } from 'framer-motion';

const BoomCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="flex flex-col lg:flex-row items-center justify-center mx-auto my-8 rounded-2xl font-sans max-w-5xl bg-white shadow-xl overflow-hidden border border-gray-200"
    >
      {/* Image */}
      <motion.img
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        src="/img/boom-banner.png"
        alt="Boom Shaka Laka (Pre-Order)"
        className="w-full lg:w-1/2 object-cover h-72 lg:h-auto"
        onError={(e) => (e.target.style.display = 'none')}
      />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.7 }}
        className="w-15/16 lg:w-1/2 p-8 text-center flex flex-col items-center justify-center gap-4"
      >
        <span className="text-sm uppercase font-bold text-white bg-red-500 px-3 py-1 rounded-full tracking-wide shadow">
          Pre-Order
        </span>

        <h2 className="text-2xl md:text-3xl font-bold text-blue-700">
          Boom Shaka Laka
        </h2>

        <div className="flex items-center gap-3">
          <span className="text-gray-500 line-through text-lg">$24.00</span>
          <span className="text-2xl font-semibold text-green-600">$18.00</span>
        </div>

        <p className="text-gray-600 text-md max-w-md">
          Grab your copy of this boom-tastic book before it’s gone — it’s only here for a little while!
          Packed with fun, excitement, and big laughs for awesome kids just like you! 
        </p>

        <motion.a
          whileHover={{ scale: 1.05 }}
          href="https://square.link/u/152nPlPX?src=embed"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block bg-blue-600 hover:bg-green-500 text-white font-semibold px-6 py-3 rounded-full shadow-md transition-all"
        >
          Buy Now
        </motion.a>
      </motion.div>
    </motion.div>
  );
};

export default BoomCard;
