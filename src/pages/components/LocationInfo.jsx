

const locations = [
  {
    id: 1,
    programs: ['Karate'],
    location: 'Luma Academy Gym',
    address: '123 Main St, Austin, TX 78701',
    when: 'Mondays & Wednesdays at 5:00 PM',
  },
  {
    id: 2,
    programs: ['Basketball', 'Poms'],
    location: 'Northside Rec Center',
    address: '456 Elm St, Dallas, TX 75201',
    when: 'Tuesdays at 4:30 PM',
  },
  {
    id: 3,
    programs: ['Karate', 'Basketball'],
    location: 'Southtown Sports Complex',
    address: '789 Oak St, San Antonio, TX 78205',
    when: 'Thursdays at 6:00 PM',
  },
];

const LocationsPage = () => {
  return (
    <section className="py-16 px-6 bg-gray-50 min-h-screen mt-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-blue-600 text-center mb-12">Our Locations</h2>

        <div className="flex flex-col gap-8">
          {locations.map((loc) => (
            <div
              key={loc.id}
              className="bg-white shadow-md rounded-2xl p-6 flex flex-col md:flex-row md:items-start md:justify-between gap-6"
            >
              {/* Program(s) */}
              <div className="flex-1 text-left">
                <p className="text-lg underline text-gray-500 uppercase font-medium">Programs</p>
                <p className="text-blue-600 font-bold">{loc.programs.join(', ')}</p>
              </div>

              {/* Location & Address */}
              <div className="flex-1 text-left">
                <p className="text-lg underline text-gray-500 uppercase font-medium">Location</p>
                <p className="font-semibold text-gray-800">{loc.location}</p>
                <p className="text-gray-600">{loc.address}</p>
              </div>

              {/* When */}
              <div className="flex-1 text-left">
                <p className="text-lg underline text-gray-500 uppercase font-medium">When</p>
                <p className="text-gray-700">{loc.when}</p>
              </div>

              {/* CTA */}
              <div className="md:text-right">
                <a target='_blank'
                  href="https://level-up-mma.gymdesk.com/signup"
                  className="inline-block bg-blue-600 hover:bg-green-500 text-white font-semibold py-2 px-6 rounded-full transition"
                >
                  Enroll Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocationsPage;
