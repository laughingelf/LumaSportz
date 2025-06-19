import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const PricingSection = () => {
  const programs = [
    {
      title: 'Little Warriors',
      description:
        'Our Little Warriors Karate program goes beyond kicks and punches—instilling lifelong values like respect, discipline, confidence, and leadership. Through martial arts, kids build strong character and a positive mindset for success on and off the mat.',
    },
    {
      title: 'Little All Stars',
      description:
        'Kickstart your child’s journey in youth sports with our beginner-friendly Soccer and Basketball program—designed to build confidence, coordination, and teamwork through fun, skill-based activities.',
    },
    {
      title: 'Little Pom Poms',
      description:
        'Spark school spirit and self-confidence with our beginner Cheerleading program—perfect for kids to learn basic stunts, teamwork, and performance skills in a fun, encouraging environment.',
    },
  ];

  const pricingOptions = [
    {
      title: 'Monthly Contract',
      price: '$70/month',
      desc: 'Payments autodrafted on the 1st of each month. Contact starts upon date of sign up & ends August 24, 2025. Cancellations are allowed upon approval by both parties. $70 Cancellation Fee applied.',
    },
    {
      title: 'Month to Month (Cancel Anytime)',
      price: '$80/month',
      desc: 'You can cancel at any time. Payments autodrafted on the 1st of each month.',
    },
    {
      title: 'Private Group Lessons',
      price: '$70 or $80/Little Warriors',
      desc: "Little Warriors are ages 3-5 and will be held 9:00am-9:30am. Located at Mr. C's home gym (Garage) in Lewisville. Fully matted, A/C, fans, water, & all training equipment necessary for Traditional Karate & MMA training. Live Stream classes available for all parents as they drop off students",
    },
    {
      title: 'Private Group Lessons',
      price: '$100/Level Up MMA',
      desc: "Level Up MMA are ages 6-12 and will be held 9:30am-10:30am. Located at Mr. C's home gym (Garage) in Lewisville. Fully matted, A/C, fans, water, & all training equipment necessary for Traditional Karate & MMA training. Live Stream classes available for all parents as they drop off students",
    },
  ];

  return (
    <section className="py-16 text-center mt-8 bg-gray-50">
      {/* Top Program Cards */}
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-blue-600 mb-10 underline"
        >
          Our Programs
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programs.map((program, index) => {
            const bgColor =
              program.title === 'Little Warriors'
                ? 'bg-green-200'
                : program.title === 'Little All Stars'
                ? 'bg-orange-200'
                : 'bg-pink-200';

            return (
              <motion.div
                key={program.title}
                className={`${bgColor} rounded-2xl shadow-lg p-6 flex flex-col h-full`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl md:text-3xl font-semibold text-blue-600 underline mb-4">
                  {program.title}
                </h3>
                <p className="text-gray-800 text-md md:text-lg mb-6 flex-grow">
                  {program.description}
                </p>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  target="_blank"
                  href="https://level-up-mma.gymdesk.com/signup"
                  className="mt-auto inline-block text-gray-800 text-xl font-semibold py-2 px-6 rounded-full transition"
                >
                  <span className="underline">Enroll Now</span> →
                </motion.a>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Banner */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-yellow-400 py-6 text-4xl font-bold text-gray-800 mb-4 shadow-md"
      >
        No Sign-Up Fee!
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-black text-3xl mb-12"
      >
        <p>
          Please use{' '}
          <span className="font-semibold underline text-blue-600">Students Name</span> and{' '}
          <span className="font-semibold underline text-blue-600">Age</span> when signing up.
        </p>
        <p>
          Need help registering?{' '}
          <a
            href="https://www.youtube.com/shorts/NWB2oO-suWU"
            target="_blank"
            className="underline text-green-500"
          >
            Watch this video
          </a>
        </p>
      </motion.div>

      {/* Pricing Options */}
      <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 text-left mb-12">
        {pricingOptions.map((plan, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-2xl shadow-md p-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-bold text-gray-800 mb-2">{plan.title}</h4>
            <p className="text-blue-600 text-2xl font-semibold mb-4">{plan.price}</p>
            <p className="text-gray-600 mb-6">{plan.desc}</p>
            <motion.a
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
              target="_blank"
              href="https://level-up-mma.gymdesk.com/signup"
              className="inline-block bg-blue-600 hover:bg-green-500 shadow-md shadow-gray-500 hover:shadow-lg text-white font-semibold py-2 px-6 rounded-full transition"
            >
              Get Started →
            </motion.a>
          </motion.div>
        ))}
      </div>

      {/* Final CTA */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        <Link
          to="/contact"
          className="inline-block bg-green-500 hover:bg-blue-600 text-white font-bold shadow-md shadow-gray-500 hover:shadow-lg py-3 px-8 rounded-full transition"
        >
          Contact Us to Join!
        </Link>
      </motion.div>
    </section>
  );
};

export default PricingSection;
