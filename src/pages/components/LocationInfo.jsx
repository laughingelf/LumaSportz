import { useEffect, useState } from 'react';
import Papa from 'papaparse';
import { motion } from 'framer-motion';

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
        loc.Program.toLowerCase().includes(keyword.toLowerCase())
      );

      setFiltered(result);
    }
  };

  const getBgColor = (program) => {
    const p = program.toLowerCase();
    if (p.includes('little warriors')) return 'bg-green-200';
    if (p.includes('little pom poms')) return 'bg-pink-200';
    if (p.includes('little all stars')) return 'bg-orange-200';
    return 'bg-gray-100'; // fallback
  };

  return (
    <section className="py-16 px-6 bg-gray-50 min-h-screen mt-12">
      <div className="max-w-7xl mx-auto">
        {/* Animated Top Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-blue-600 text-center mb-8"
        >
          Our Locations
        </motion.h2>

        {/* Animated Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-10"
        >
          {[
            { label: 'All', value: 'all', class: 'bg-blue-600' },
            { label: 'Little Warriors (Karate)', value: 'karate', class: 'bg-green-500' },
            { label: 'Little Pom Poms (Cheerleading)', value: 'cheer', class: 'bg-pink-500' },
            { label: 'Little All Stars (Basketball & Soccer)', value: 'sports', class: 'bg-yellow-600' },
          ].map((btn) => (
            <motion.button
              key={btn.value}
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
              onClick={() => handleFilter(btn.value)}
              className={`${btn.class} shadow-md shadow-gray-400 hover:shadow-lg px-4 py-2 rounded-full font-medium text-white transition`}
            >
              {btn.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Static Mapped Locations (No Scroll Animation) */}
        <div className="flex flex-col gap-8">
          {filtered.map((loc, index) => (
            <div
              key={index}
              className={`${getBgColor(
                loc.Program
              )} shadow-md rounded-2xl p-6 flex flex-col md:flex-row md:items-start md:justify-between gap-6`}
            >
              <div className="flex-1 text-left">
                <p className="text-lg underline text-gray-500 uppercase font-medium">Program</p>
                <p className="text-blue-600 font-bold">{loc.Program}</p>
              </div>

              <div className="flex-1 text-left">
                <p className="text-lg underline text-gray-500 uppercase font-medium">School</p>
                <p className="font-semibold text-gray-800">{loc.School}</p>
                <p className="text-gray-600">{loc.Address}</p>
              </div>

              <div className="flex-1 text-left">
                <p className="text-lg underline text-gray-500 uppercase font-medium">Schedule</p>
                <p className="text-gray-700">
                  {loc.WeekDay} at {loc.Time}
                </p>
              </div>

              <div className="md:text-right">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://level-up-mma.gymdesk.com/signup"
                  className="inline-block bg-blue-600 shadow-md shadow-gray-800 hover:shadow-lg hover:scale-105 text-white font-semibold py-2 px-6 rounded-full transition"
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
