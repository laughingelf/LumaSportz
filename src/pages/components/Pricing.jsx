import { Link } from 'react-router-dom';

const PricingSection = () => {
  const programs = [
    {
      title: 'Little Warriors',
      description:
        'Our Little Warriors Karate program goes beyond kicks and punches—instilling lifelong values like respect, discipline, confidence, and leadership. Through martial arts, kids build strong character and a positive mindset for success on and off the mat.',
        // button: 'Ninja HeadBands',
    },
    {
      title: 'Little All Stars',
      description:
        'Kickstart your child’s journey in youth sports with our beginner-friendly Soccer and Basketball program—designed to build confidence, coordination, and teamwork through fun, skill-based activities.',
        // button: 'Start Up Kit(Optional)'
    },
    {
      title: 'Little Pom Poms',
      description:
        'Spark school spirit and self-confidence with our beginner Cheerleading program—perfect for kids to learn basic stunts, teamwork, and performance skills in a fun, encouraging environment.',
        // button: 'Start up Kit(Optional)'
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
      desc: "Little Warriors are ages 3-5 and will be held 9:00am-9:30am. Located at Mr. C's home gym (Garage) in Lewisville. Fully matted, A/C, fans, water, & all training equipment necassry for Traditional Karate & MMA training. Live Stream classes available for all parents as they drop off students",
    },
    {
      title: 'Private Group Lessons',
      price: '$100/Level Up MMA',
      desc: "Level Up MMA are ages 6-12 and will be held 9:30am-10:30am. Located at Mr. C's home gym (Garage) in Lewisville. Fully matted, A/C, fans, water, & all training equipment necassry for Traditional Karate & MMA training. Live Stream classes available for all parents as they drop off students",
    },
  ];

  return (
    <section className="py-16 text-center mt-8 bg-gray-50">
      {/* Top Program Cards */}
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <h2 className="text-4xl font-bold text-blue-600 mb-10 underline">Our Programs</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {programs.map((program) => (
                <div
                key={program.title}
                className="bg-green-200 rounded-2xl shadow-lg p-6 flex flex-col h-full"
                >
                <h3 className="text-2xl md:text-3xl font-semibold text-blue-600 underline mb-4">{program.title}</h3>
                <p className="text-gray-800 text-md md:text-lg mb-6 flex-grow">{program.description}</p>
                <div className="mt-auto">
                    <a target='_blank'
                    href="https://level-up-mma.gymdesk.com/signup"
                    className="inline-block text-gray-800 text-xl hover:scale-110 hover:text-blue-600 font-semibold py-2 px-6 rounded-full transition"
                    >
                    <span className='underline'>Enroll Now</span> →
                    </a>
                </div>
                </div>
            ))}
        </div>


      </div>

      {/* Banner */}
      <div className="bg-yellow-400 py-6 text-4xl font-bold text-gray-800 mb-4 shadow-md">
        No Sign-Up Fee!
      </div>
      <div className='text-black text-3xl mb-12'>
        <p>Please use <span className='font-semibold underline text-blue-600'>Students Name</span> and <span className='font-semibold underline text-blue-600'>Age</span> when signing up. </p>
        <p>Need help registering? <a href='https://www.youtube.com/shorts/NWB2oO-suWU' target='_blank'
         className='underline text-green-500' >Watch this video</a></p>
      </div>

      {/* Pricing Options */}
      <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 text-left mb-12">
        {pricingOptions.map((plan) => (
          <div
            key={plan.title}
            className="bg-white rounded-2xl shadow-md p-6"
          >
            <h4 className="text-xl font-bold text-gray-800 mb-2">{plan.title}</h4>
            <p className="text-blue-600 text-2xl font-semibold mb-4">{plan.price}</p>
            <p className="text-gray-600 mb-6">{plan.desc}</p>
            <a target='_blank'
              href="https://level-up-mma.gymdesk.com/signup"
              className="inline-block bg-blue-600 hover:bg-green-500 shadow-md shadow-gray-500 hover:shadow-lg hover:scale-105 text-white font-semibold py-2 px-6 rounded-full transition"
            >
              Get Started →
            </a>
          </div>
        ))}
      </div>

      {/* Final CTA */}
      <Link
        to="/contact"
        className="inline-block bg-green-500 hover:bg-blue-600 text-white font-bold shadow-md shadow-gray-500 hover:shadow-lg hover:scale-105 py-3 px-8 rounded-full transition shadow-lg"
      >
        Contact Us to Join! 
      </Link>
    </section>
  );
};

export default PricingSection;
