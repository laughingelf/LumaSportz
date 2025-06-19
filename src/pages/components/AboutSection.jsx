import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="bg-white py-16 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-blue-600 mb-4">Who We Are</h2>
          <p className="text-gray-700 text-xl md:text-2xl mb-6">
            Welcome to LUMA Sportz N Fun! We help kids grow in confidence and teamwork through exciting programs and unforgettable events—all in a safe, fun, and family-first environment.
          </p>
          <p className="text-gray-600 text-xl">
            At LUMA Sportz N Fun, our mission is to inspire confidence, teamwork, and joy in every child through high-energy programs in Martial Arts, Cheerleading, Basketball, and Soccer. We’re passionate about creating unforgettable experiences—both in class and at our exciting events like foam parties, snow days, and movie nights. Above all, we treat every child and family like our own, ensuring a safe, welcoming, and positive environment where fun and growth go hand in hand.
          </p>

          {/* Buttons with bounce hover */}
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <motion.div whileHover={{ scale: 1.05, y: -3 }} transition={{ type: "spring", stiffness: 300 }}>
              <div className="px-8 w-48 py-3 text-lg bg-blue-600 hover:bg-green-500 shadow-md shadow-gray-500 hover:shadow-lg transition font-semibold rounded-full text-white text-center">
                <Link to="/prices">Learn More</Link>
              </div>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05, y: -3 }} transition={{ type: "spring", stiffness: 300 }}>
              <div className="px-8 w-48 py-3 text-lg bg-blue-600 hover:bg-green-500 shadow-md shadow-gray-500 hover:shadow-lg transition font-semibold rounded-full text-white text-center">
                <Link to="/locations">Locations</Link>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Image with entrance animation */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative"
        >
          <img
            src="/img/luma-foamparty.webp"
            alt="Kids playing"
            className="rounded-2xl shadow-lg shadow-gray-500 w-full object-cover h-[300px] md:h-[400px]"
          />
        </motion.div>
      </div>
    </section>
  );
}
