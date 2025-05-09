import React from 'react';
import { Film, Clock, Truck } from 'lucide-react';

const details = [
  {
    title: "What's Included",
    icon: <Film size={40} className="text-yellow-500 mb-4" />,
    content: [
      { text: 'Giant Outdoor Movie Screen', bold: true },
      { text: 'High-quality projector & sound system' },
      { text: 'Your choice of movie (PG/PG-13)' },
      { text: 'Popcorn machine add-on available' },
      { text: 'Perfect for schools, churches, or neighborhoods!' }
    ],
  },
  {
    title: 'Cost & Time',
    icon: <Clock size={40} className="text-yellow-500 mb-4" />,
    content: [
      { text: 'Movie Night Rental', bold: true },
      { text: '2 Hours - $350' },
      { text: '$100 per additional hour' },
      { text: 'Add-Ons', bold: true },
      { text: 'Popcorn Machine - $50' },
      { text: 'Extra Speakers - $25' },
      { text: 'Setup & Takedown Included', bold: true },
    ],
  },
  {
    title: 'Delivery & Setup',
    icon: <Truck size={40} className="text-yellow-500 mb-4" />,
    content: [
      { text: 'Delivered & set up 30 mins before start time' },
      { text: 'Requires power source within 100ft' },
      { text: 'We handle everything so you can enjoy the show!' }
    ],
  },
];

const MovieNightInfo = () => {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-5xl font-bold text-yellow-600 mb-2">Movie Night Party Info</h2>
        <p className="text-xl text-gray-600">Get ready for a magical movie night under the stars!</p>
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
            className="relative bg-yellow-50 rounded-t-2xl pb-10 pt-8 px-6 shadow-md hover:shadow-xl transition group overflow-hidden"
          >
            {/* Optional Background Image */}
            {/* <img
              src="/img/movie-bg.png"
              alt={`${item.title} background`}
              className="absolute inset-0 w-full h-full object-cover opacity-20 z-0 pointer-events-none"
            /> */}

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
    </section>
  );
};

export default MovieNightInfo;
