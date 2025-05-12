import { Film, Clock, Truck } from 'lucide-react';

const details = [
  {
    title: "What's Included",
    icon: <Film size={40} className="text-yellow-500 mb-4" />,
    content: [
      { text: 'Inflatable Movie Screen' },
      { text: 'Loud Speakers & Projector' },
      { text: 'Streaming or DVD' },
      { text: '3 Bags of Popcorn & Popcorn Machine' },
      { text: 'Ticket Stand & Red Carpet' },
      { text: 'Ambient Lighting' },
      { text: 'Just a Little Power', bold: true },
    ],
  },
  {
    title: 'Pricing',
    icon: <Clock size={40} className="text-yellow-500 mb-4" />,
    content: [
      { text: 'Standard Movie Night', bold: true },
      { text: '$300' },
    ],
  },
  {
    title: 'Add-Ons Available',
    icon: <Truck size={40} className="text-yellow-500 mb-4" />,
    content: [
      { text: 'Candy Bars & Extra Bags of Popcorn' },
      { text: 'Snack Size Candy & Drinks' },
      { text: 'Glow in the Dark LED Party Swag' },
      { text: 'Let us know if you have the staff to cover the ticket stand' },
      { text: 'We can provide this at an extra cost' },
    ],
  },
];

const MovieNightInfo = () => {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold text-yellow-600 mb-4">Movie Night Party Info</h2>
        <p className="text-xl text-gray-800 px-4 md:px-16">Lets us host your next movie night! Whether your hosting a family event or
        a staff appreciation night, let us bring a magical movie experience to your event. We provide an inflatable 
        movie screen, projector, streaming or DVD player, and the red carpet. Explore our website for bookings and more information.</p>
      </div>

      <div className="flex justify-center mb-10">
        <img
          src="/img/movie-night.avif"
          alt="Movie night event"
          className="w-full max-w-3xl rounded-xl shadow-lg shadow-gray-400"
        />
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {details.map((item, idx) => (
          <div
            key={idx}
            className="relative bg-white-50 rounded-t-2xl pb-10 pt-8 px-6 shadow-md hover:shadow-xl transition group overflow-hidden"
          >
            {/* Optional Background Image */}
            <img
              src="/img/movie-bg.png"
              alt={`${item.title} background`}
              className="absolute inset-0 w-full h-full object-cover opacity-20 z-0 pointer-events-none"
            />

            <div className="relative z-10 text-center">
              {item.icon}
              <h3 className="text-2xl font-bold text-yellow-700 mb-4 underline">{item.title}</h3>

              <ul className="list-none text-gray-700 text-md space-y-2">
                {item.content.map((point, i) => (
                  <li key={i}>
                    {point.bold ? <strong>{point.text}</strong> : point.text}
                  </li>
                ))}
              </ul>
            </div>

            <div className="absolute bottom-0 left-0 w-full h-0 overflow-hidden">
              <div className="w-full h-6 bg-yellow-50 clip-triangle"></div>
            </div>
          </div>
        ))}
      </div>
      <div className='mt-12'>
        <a target='_blank' href='https://docs.google.com/forms/d/e/1FAIpQLSen53U937YZtJsi6-JgIpZX9TDzY8m0a-vrCtxhwuWj7YzANw/viewform' 
        className='text-xl md:text-3xl text-white bg-blue-600 px-8 py-4 rounded-full shadow-md shadow-gray-400 hover:bg-green-500 hover:shadow-lg transition'>Schedule Your Movie Today!</a>
      </div>
    </section>
  );
};

export default MovieNightInfo;
