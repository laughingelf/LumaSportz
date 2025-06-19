import { motion } from 'framer-motion';

const BoomCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="flex flex-col lg:flex-row items-center justify-center mx-auto my-4 rounded-[10px] font-sans max-w-xl overflow-hidden"
    >
      {/* Image */}
      <motion.img
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        src="/img/boom-sm.webp"
        alt="Boom Shaka Laka (Pre-Order)"
        className="w-full lg:w-1/2 object-cover rounded-md shadow-lg shadow-gray-800"
        onError={(e) => (e.target.style.display = 'none')}
      />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.7 }}
        className="w-full lg:w-1/2 p-5 text-center flex flex-col items-center justify-center gap-3 text-blue-600"
      >
        <p className="text-[18px] leading-[20px]">Boom Shaka Laka (Pre-Order)</p>
        <p className="text-[18px] leading-[20px] font-semibold">$15.00</p>

        <motion.a
          whileHover={{ scale: 1.05, boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)' }}
          href="https://square.link/u/152nPlPX?src=embed"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-white bg-blue-600 hover:bg-green-500 text-[18px] font-semibold px-6 py-3 rounded-lg transition-all shadow-md shadow-gray-800"
        >
          Buy Now
        </motion.a>
      </motion.div>
    </motion.div>
  );
};

export default BoomCard;
