import { CheckCircle, Clock, Truck } from 'lucide-react';

const details = [
  {
    title: "What's Included",
    icon: <CheckCircle size={40} className="text-blue-500 mb-4" />,
    content: [
      { text: 'SNOW!', bold: true },
      { text: "We'll provide snow, fun Christmas music, Inflatables, & set a fun Christmas vibe for your school!" },
      { text: 'We have several options to add on to your snow party!' },
      { text: 'We have Mini Thrones for both boys & girls!' },
      { text: 'We can bring live characters to your Snow Party!' },
      { text: 'You can also rent out our costume for your party!' }
    ],
  },
  {
    title: 'Cost & Time',
    icon: <Clock size={40} className="text-blue-500 mb-4" />,
    content: [
      { text: 'Snow Party', bold: true },
      { text: '1 Hour $299' },
      { text: '2 Hours $424' },
      { text: '$125 Per Extra Hour' },
      { text: 'Live Character', bold: true },
      { text: 'Grinch - $60/Hour' },
      { text: 'Santa Claus - $60/Hour' },
      { text: 'Mrs. Clause - $60/Hour' },
      { text: 'Snowman - $60/Day' },
      { text: 'Costume Rental', bold: true },
      { text: 'Grinch - $30/Day' },
      { text: 'Santa Claus - $30/Day' },
      { text: 'Mrs. Claus - $30/Day' },
      { text: 'Chair Rental', bold: true },
      { text: '$50/Day 1 Chair' },
      { text: '$75/Day 2 Chairs' },
      { text: 'Chair & Costume Info', bold: true },
      { text: 'Drop off takes place early morning the day of the event. Pick up happens at close of school day.' }
    ],
  },
  {
    title: 'Delivery & Setup',
    icon: <Truck size={40} className="text-blue-500 mb-4" />,
    content: [
      { text: 'Sit back and relax while we take care of delivery and setup' },
      { text: 'Our team will ensure that everything is in place for your event, allowing you to focus on having a great time with your guest' },
      { text: 'Book with us Today!', bold: true }
    ],
  },
];

const SnowPartyInfo = () => {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold text-blue-700 mb-2">Snow Party & Movie Night Details</h2>
        <p className="text-xl text-gray-600">Everything you need to know to get your party started!</p>
      </div>

      <div className="flex justify-center mb-10">
        <img
          src="/img/luma-foamparty.webp"
          alt="Foam party fun"
          className="w-full max-w-3xl rounded-xl shadow-lg shadow-gray-400"
        />
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {details.map((item, idx) => (
          <div
            key={idx}
            className="relative bg-blue-50 rounded-t-2xl pb-10 pt-8 px-6 shadow-md hover:shadow-xl transition group overflow-hidden"
          >
            {/* Background Image */}
            {/* <img
              src="/img/snow-bg.png"
              alt={`${item.title} background`}
              className="absolute inset-0 w-full h-full object-cover opacity-50 z-0 pointer-events-none"
            /> */}

            {/* Foreground Content */}
            <div className="relative z-10 text-center">
              {item.icon}
              <h3 className="text-2xl font-bold text-blue-700 mb-4 underline">{item.title}</h3>

              <ul className="list-none text-gray-700 text-md space-y-2">
                {item.content.map((point, i) => (
                  <li key={i}>
                    {point.bold ? <strong>{point.text}</strong> : point.text}
                  </li>
                ))}
              </ul>
            </div>

            
          </div>
        ))}
      </div>
      <div className='mt-12'>
        <a target='_blank' href='https://docs.google.com/forms/d/e/1FAIpQLSfYS1EiPrYJ3Z48mS3PeSyuoztMyx-BTAbQ0NpdYJQvisdmuQ/viewform' 
        className='text-xl md:text-3xl text-white bg-blue-600 px-8 py-4 rounded-full shadow-md shadow-gray-400 hover:bg-green-500 hover:shadow-lg transition'>Schedule Your Party Today!</a>
      </div>
    </section>
  );
};

export default SnowPartyInfo;
