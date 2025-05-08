import React from 'react';

const PricingSection = () => {
  const programs = [
    {
      title: 'Little Warriors',
      description:
        'Our Little Warriors Karate program goes beyond kicks and punches—instilling lifelong values like respect, discipline, confidence, and leadership. Through martial arts, kids build strong character and a positive mindset for success on and off the mat.',
        button: 'Ninja HeadBands',
    },
    {
      title: 'Little All Stars',
      description:
        'Kickstart your child’s journey in youth sports with our beginner-friendly Soccer and Basketball program—designed to build confidence, coordination, and teamwork through fun, skill-based activities.',
        button: 'Start Up Kit(Optional)'
    },
    {
      title: 'Little Pom Poms',
      description:
        'Spark school spirit and self-confidence with our beginner Cheerleading program—perfect for kids to learn basic stunts, teamwork, and performance skills in a fun, encouraging environment.',
        button: 'Start up Kit(Optional)'
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
      title: 'Full Year(12 Months)',
      price: '$1,025',
      desc: 'Included Little Warrior start up Kit. Included virtual month in August 2025. Monthly Auto Draft, Full Payment, or Check. No Refunds.',
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
                className="bg-white rounded-2xl shadow-lg p-6 flex flex-col h-full"
                >
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">{program.title}</h3>
                <p className="text-gray-600 mb-6 flex-grow">{program.description}</p>
                <div className="mt-auto">
                    <a
                    href="/contact"
                    className="inline-block bg-blue-600 hover:bg-green-500 text-white shadow-md shadow-gray-500 hover:shadow-lg hover:scale-105 font-semibold py-2 px-6 rounded-full transition"
                    >
                    {program.button}
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
        <p>Need help registering? Watch this video</p>
      </div>

      {/* Pricing Options */}
      <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-left mb-12">
        {pricingOptions.map((plan) => (
          <div
            key={plan.title}
            className="bg-white rounded-2xl shadow-md p-6"
          >
            <h4 className="text-xl font-bold text-gray-800 mb-2">{plan.title}</h4>
            <p className="text-blue-600 text-2xl font-semibold mb-4">{plan.price}</p>
            <p className="text-gray-600 mb-6">{plan.desc}</p>
            <a
              href="/contact"
              className="inline-block bg-blue-600 hover:bg-green-500 shadow-md shadow-gray-500 hover:shadow-lg hover:scale-105 text-white font-semibold py-2 px-6 rounded-full transition"
            >
              Get Started →
            </a>
          </div>
        ))}
      </div>

      {/* Final CTA */}
      <a
        href="/contact"
        className="inline-block bg-green-500 hover:bg-blue-600 text-white font-bold shadow-md shadow-gray-500 hover:shadow-lg hover:scale-105 py-3 px-8 rounded-full transition shadow-lg"
      >
        Contact Us to Join! 
      </a>
    </section>
  );
};

export default PricingSection;
