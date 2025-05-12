import { ThumbsUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const packages = [
  {
    title: 'Foam Party',
    price: '$325',
    duration: '1 hour of FOAMtasticness',
    features: [
      'New - Free Digital Party Invite',
      'Fun Energetic Music!',
      'Beach Balls',
      'Professional Foam Equipment',
      'Trained Foam Canon & Fun Operator',
    ],
    image: '/img/foam-party-bg.jpg', // Update with your actual image paths
  },
  {
    title: 'Color Foam Party',
    price: '$425',
    duration: '1 hour Color FOAMbuwamba',
    features: [
      'New - Free Digital Party Invite',
      'Add Colored Foam to The Party!',
      'Fun Energetic Music!',
      'Beach Balls',
      'Professional Foam Equipment',
      'Trained Foam Canon & Fun Operator',
    ],
    image: '/img/color-foam-bg.jpg',
  },
  {
    title: 'UV Foam Party',
    price: '$450',
    duration: '1 hour Glow-N-the-Dark FOAM Awesomeness!',
    features: [
      'New - Free Digital Party Invite',
      "Blacklights, Disco lights, & LED's",
      'Fun Energetic Music!',
      'Beach Balls',
      'Professional Foam Equipment',
      'Trained Foam Canon & Fun Operator',
    ],
    image: '/img/uv-foam-bg.jpg',
  },
];

const FoamPartyPackages = () => {
  return (
    <section className="bg-blue-50 py-16 px-6 mx-1">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl md:text-6xl font-bold text-blue-600 mb-4">Foam Party Packages</h2>
        <p className="text-lg text-gray-700">
        Our Foam Party Packages are designed for birthday parties or smaller private venues and will accommodate up to 25 people.
        For churches, schools, corporate, or other larger events with groups greater than 25 people, we will design a custom quote 
        to meet your event needs. Just hit that <Link to='/contact' className='underline text-green-500 font-semibold'>Contact Us</Link> button and we will contact you with all the details and pricing,</p>
        <p className="text-lg text-gray-700">-OR-</p>
        <p className="text-lg text-gray-700">Call <a href='tel:2146809155' className='underline text-blue-600 font-semibold'>214-680-9155</a> to speak with us directly See Pics Below!!!</p>
        
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {packages.map((pkg, index) => (
          <div
            key={index}
            className="relative bg-white text-center rounded-t-2xl pb-10 pt-8 px-6 shadow-lg hover:shadow-xl transition group overflow-hidden"
          >
            {/* Background Image */}
            <img
              src='/img/foam-bg2.png'
              alt={`${pkg.title} background`}
              className="absolute inset-0 w-full h-full object-cover opacity-50 z-0 pointer-events-none"
            />

            {/* Hanging Hole */}
            {/* <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-white border-2 border-blue-600 rounded-full z-10"></div> */}

            {/* Content */}
            <div className="relative z-10">
              <div className="text-2xl font-semibold text-blue-600 mb-2">{pkg.title}</div>
              <p className="text-6xl font-bold text-gray-800 mb-2">{pkg.price}</p>
              <p className="text-lg font-semibold text-blue-600 mb-4">{pkg.duration}</p>

              <ul className="text-gray-900 text-sm mb-6 space-y-2 text-left">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <ThumbsUp size={16} className="text-blue-500" />
                    {feature}
                  </li>
                ))}
              </ul>

              <p className="text-black mb-6">
                *$125 for each additional hour<br />
                **Must have water source and electricity within 200 ft of the event site
              </p>

              <a target='_blank' href='https://docs.google.com/forms/d/e/1FAIpQLSfndLA152U9qdN0PLekQ7VogdEBAkWuybt2535LTqGjtYhTug/viewform'
                  className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-green-500 hover:scale-105 transition">
                Book Now
              </a>
            </div>

            {/* Banner Tail */}
            {/* <div className="absolute bottom-0 left-0 w-full h-0 overflow-hidden">
              <div className="w-full h-6 bg-white clip-triangle"></div>
            </div> */}
          </div>
        ))}
      </div>
      <div className='text-blue-600 mt-16 text-md font-semibold'>
        <p>* The above pricing is for groups of 25 or less. Please contact us for large event pricing.</p>
        <p>* Travel Fee - Please note if you are outside our free 25 miles radius of 75056 a travel charge will be added to your quote</p>
      </div>
    </section>
  );
};

export default FoamPartyPackages;
