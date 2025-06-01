import { Link } from "react-router-dom";

export default function ProgramsSection() {
    const programs = [
      {
        title: "Karate",
        image: "/img/little-warriors.svg",
        description: "Learn discipline, focus, and self-defense in our fun, structured karate classes.",
        link: "/prices"
      },
      {
        title: "Basketball & Soccer",
        image: "/img/little-all-stars.svg",
        description: "Dribble, shoot, and score in our high-energy basketball & Soccer sessions for all skill levels.",
        link: "/prices"
      },
      {
        title: "Cheerleading",
        image: "/img/little-poms.svg",
        description: "Build confidence and teamwork through upbeat routines and fun performances.",
        link: "/prices"
      },
      {
        title: "Foam Parties",
        image: "/img/foamnfun2.svg",
        description: "The ultimate summer fun—music, dancing, and mountains of foam!",
        link: "/foam-parties"
      },
      {
        title: "Movie Nights",
        image: "/img/movie-nights.svg",
        description: "Family-friendly movies under the stars with snacks, laughter, and community.",
        link: "/movie-snow-parties"
      },
      {
        title: "Winter Snow Parties",
        image: "/img/snow-party.svg",
        description: "Bring the magic of winter to Texas with our snowy, festive party experience!",
        link: "/movie-snow-parties"
      },
    ];
  
    return (
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-blue-600 underline">Our Programs</h2>
          <div className="flex flex-col items-center justify-center mb-8 px-4">
            <p className="text-gray-800 max-w-3xl text-xl text-center">
              We come to your child’s school once a week on your school’s designated day for a 30-minute session.
              Our Little Warriors program is for ages 3 & up. Little Allstars & Little Pom Poms are available for children ages 2 & up!
            </p>
            <p className="text-gray-800 max-w-3xl text-lg text-center">In person class from August 12th - August 1st, 2025. Our virtual month is from August 2nd - 24th, 2025</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {programs.map((program) => (
              <div key={program.title} className="bg-white rounded-2xl shadow-md shadow-gray-500 hover:shadow-lg transition overflow-hidden flex flex-col">
                <img
                  src={program.image}
                  alt={program.title}
                  className="h-48 w-full object-fit mt-4"
                />
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-3xl font-semibold mb-2 text-black">{program.title}</h3>
                  <p className="text-gray-700 text-lg md:text-xl flex-grow">{program.description}</p>
                  <Link
                    to={program.link}
                    className="mt-4 inline-flex items-center text-blue-600 font-semibold group text-lg"
                    >
                    <span className="mr-2 bg-blue-500 text-white rounded-full px-1 transition-transform transform group-hover:scale-115 text-2xl">
                        →
                    </span>
                    <span className=" group-hover:underline transition hover:scale-105">Learn More</span>
                    </Link>



                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  