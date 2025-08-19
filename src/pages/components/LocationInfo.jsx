import { useEffect, useMemo, useState } from "react";
import Papa from "papaparse";
import { motion } from "framer-motion";

const WEEKDAY_ORDER = {
  monday: 1,
  tuesday: 2,
  wednesday: 3,
  thursday: 4,
  friday: 5,
  saturday: 6,
  sunday: 7,
};

// normalize program labels → stable keys
const PROGRAM_KEYS = [
  { key: "warriors", match: "little warriors", label: "Little Warriors" },
  { key: "pom", match: "little pom poms", label: "Little Pom Poms" },
  { key: "allstars", match: "little all stars", label: "Little All Stars" },
];

function getProgramKey(program = "") {
  const p = (program || "").toLowerCase();
  const hit = PROGRAM_KEYS.find(({ match }) => p.includes(match));
  return hit?.key ?? "other";
}

function programLabelFromKey(key) {
  return PROGRAM_KEYS.find((p) => p.key === key)?.label ?? "Other";
}

function getBgColorByKey(key) {
  if (key === "warriors") return "bg-green-200";
  if (key === "pom") return "bg-pink-200";
  if (key === "allstars") return "bg-yellow-200";
  return "bg-gray-100";
}

function parseTimeToMinutes(t = "") {
  // e.g. "9:15 AM", "2:30 PM"
  const m = t.match(/^(\d{1,2}):(\d{2})\s*(AM|PM)$/i);
  if (!m) return Number.MAX_SAFE_INTEGER; // push unknowns to bottom
  let [_, hh, mm, ap] = m;
  let H = parseInt(hh, 10);
  const M = parseInt(mm, 10);
  const isPM = ap.toUpperCase() === "PM";
  if (isPM && H !== 12) H += 12;
  if (!isPM && H === 12) H = 0;
  return H * 60 + M;
}

function sortByDayAndTime(a, b) {
  const da = WEEKDAY_ORDER[(a.WeekDay || "").toLowerCase()] ?? 99;
  const db = WEEKDAY_ORDER[(b.WeekDay || "").toLowerCase()] ?? 99;
  if (da !== db) return da - db;
  return parseTimeToMinutes(a.Time) - parseTimeToMinutes(b.Time);
}

export default function LocationsPage() {
  const [locations, setLocations] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    fetch("/data/locations.csv")
      .then((r) => r.text())
      .then((csvText) => {
        Papa.parse(csvText, {
          header: true,
          skipEmptyLines: true,
          complete: ({ data }) => {
            // trim fields defensively
            const cleaned = data.map((row) =>
              Object.fromEntries(
                Object.entries(row).map(([k, v]) => [k, typeof v === "string" ? v.trim() : v])
              )
            );
            setLocations(cleaned);
          },
        });
      });
  }, []);

  // derive filtered + grouped + sorted view
  const view = useMemo(() => {
    // filter by program if needed
    let rows = locations;
    if (filter !== "all") {
      const map = { karate: "warriors", cheer: "pom", sports: "allstars" };
      const wantedKey = map[filter];
      rows = rows.filter((r) => getProgramKey(r.Program) === wantedKey);
    }

    // group by program key
    const groups = rows.reduce((acc, r) => {
      const key = getProgramKey(r.Program);
      if (!acc[key]) acc[key] = [];
      acc[key].push(r);
      return acc;
    }, {});

    // sort inside each program by weekday/time
    Object.keys(groups).forEach((k) => {
      groups[k].sort(sortByDayAndTime);
    });

    // order the program sections as Warriors → Pom Poms → All Stars → Other
    const order = ["warriors", "pom", "allstars", "other"];
    const orderedEntries = order
      .filter((k) => groups[k]?.length)
      .map((k) => [k, groups[k]]);

    return orderedEntries; // array of [programKey, rows[]]
  }, [locations, filter]);

  return (
    <section className="py-16 px-6 bg-gray-50 min-h-screen mt-12">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-blue-600 text-center mb-8"
        >
          Our Locations
        </motion.h2>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-10"
        >
          {[
            { label: "All", value: "all", class: "bg-blue-600" },
            { label: "Little Warriors (Karate)", value: "karate", class: "bg-green-500" },
            { label: "Little Pom Poms (Cheerleading)", value: "cheer", class: "bg-pink-500" },
            { label: "Little All Stars (Basketball & Soccer)", value: "sports", class: "bg-yellow-600" },
          ].map((btn) => (
            <motion.button
              key={btn.value}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              onClick={() => setFilter(btn.value)}
              className={`${btn.class} shadow-md shadow-gray-400 hover:shadow-lg px-4 py-2 rounded-full font-medium text-white transition`}
            >
              {btn.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Grouped + Sorted Listings */}
        <div className="flex flex-col gap-12">
          {view.map(([programKey, rows]) => (
            <div key={programKey}>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                {programLabelFromKey(programKey)}
              </h3>

              <div className="flex flex-col gap-6">
                {rows.map((loc, i) => (
                  <div
                    key={`${programKey}-${i}-${loc.School}-${loc.Time}`}
                    className={`${getBgColorByKey(
                      programKey
                    )} shadow-md rounded-2xl p-6 flex flex-col md:flex-row md:items-start md:justify-between gap-6`}
                  >
                    <div className="flex-1 text-left">
                      <p className="text-lg underline text-gray-500 uppercase font-medium">
                        Program
                      </p>
                      <p className="text-blue-600 font-bold">{loc.Program}</p>
                    </div>

                    <div className="flex-1 text-left">
                      <p className="text-lg underline text-gray-500 uppercase font-medium">
                        School
                      </p>
                      <p className="font-semibold text-gray-800">{loc.School}</p>
                      {loc.Address && loc.Address !== "-" && (
                        <p className="text-gray-600">{loc.Address}</p>
                      )}
                    </div>

                    <div className="flex-1 text-left">
                      <p className="text-lg underline text-gray-500 uppercase font-medium">
                        Schedule
                      </p>
                      <p className="text-gray-700">
                        {loc.WeekDay} at {loc.Time}
                      </p>
                      {loc.Instructor && (
                        <p className="text-gray-600 mt-1">Instructor: {loc.Instructor}</p>
                      )}
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
          ))}

          {/* Empty state */}
          {view.length === 0 && (
            <p className="text-center text-gray-600">No locations match this filter.</p>
          )}
        </div>
      </div>
    </section>
  );
}
