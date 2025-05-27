import { useEffect, useState } from 'react';
import Papa from 'papaparse';

const LocationsPage = () => {
  const [locations, setLocations] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    fetch('/data/locations.csv')
      .then((response) => response.text())
      .then((csvText) => {
        Papa.parse(csvText, {
          header: true,
          skipEmptyLines: true,
          complete: (results) => {
            setLocations(results.data);
            setFiltered(results.data);
          },
        });
      });
  }, []);

  const handleFilter = (type) => {
    setFilter(type);

    if (type === 'all') {
      setFiltered(locations);
    } else {
      const keywords = {
        karate: 'Little Warriors',
        cheer: 'Little Pom Poms',
        sports: 'Little All Stars',
      };

      const keyword = keywords[type];

      const result = locations.filter((loc) =>
        Array.isArray(keyword)
          ? keyword.some((k) => loc.Program.toLowerCase().includes(k.toLowerCase()))
          : loc.Program.toLowerCase().includes(keyword.toLowerCase())
      );

      setFiltered(result);
    }
  };

  return (
    <section className="py-16 px-6 bg-gray-50 min-h-screen mt-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-blue-600 text-center mb-8">Our Locations</h2>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <button onClick={() => handleFilter('all')} className="bg-blue-600 shadow-md shadow-gray-400 hover:scale-105 hover:shadow-lg px-4 py-2 rounded-full font-medium transition">All</button>
          <button onClick={() => handleFilter('karate')} className="bg-green-500 shadow-md shadow-gray-400 hover:scale-105 hover:shadow-lg px-4 py-2 rounded-full font-medium transition">Little Warriors (Karate)</button>
          <button onClick={() => handleFilter('cheer')} className="bg-pink-500 shadow-md hover:scale-105 shadow-md shadow-gray-400 hover:shadow-lg px-4 py-2 rounded-full font-medium transition">Little Pom Poms (Cheerleading)</button>
          <button onClick={() => handleFilter('sports')} className="bg-yellow-600 shadow-md shadow-gray-400 hover:scale-105 hover:shadow-lg px-4 py-2 rounded-full font-medium transition">Little All Stars (Basketball & Soccer)</button>
        </div>

        {/* Locations */}
        <div className="flex flex-col gap-8">
          {filtered.map((loc, index) => (
            <div
              key={index}
              className="bg-green-200 shadow-md rounded-2xl p-6 flex flex-col md:flex-row md:items-start md:justify-between gap-6"
            >
              {/* Program Info */}
              <div className="flex-1 text-left">
                <p className="text-lg underline text-gray-500 uppercase font-medium">Program</p>
                <p className="text-blue-600 font-bold">{loc.Program}</p>
                {/* <p className="text-sm text-gray-700">Instructor: {loc.Instructor}</p> */}
              </div>

              {/* School Location */}
              <div className="flex-1 text-left">
                <p className="text-lg underline text-gray-500 uppercase font-medium">School</p>
                <p className="font-semibold text-gray-800">{loc.School}</p>
                <p className="text-gray-600">{loc.Address}</p>
              </div>

              {/* Schedule */}
              <div className="flex-1 text-left">
                <p className="text-lg underline text-gray-500 uppercase font-medium">Schedule</p>
                <p className="text-gray-700">{loc.WeekDay} at {loc.Time}</p>
              </div>

              {/* CTA */}
              <div className="md:text-right">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://level-up-mma.gymdesk.com/signup"
                  className="inline-block bg-blue-600 shadow-md shaow-gray-800 hover:shadow-lg hover:scale-105 text-white font-semibold py-2 px-6 rounded-full transition"
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
