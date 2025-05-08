import { Link } from "react-router-dom";

export default function AboutSection() {
    return (
      <section className="bg-white py-16 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-4xl font-bold text-blue-600 mb-4">Who We Are</h2>
            <p className="text-gray-700 text-lg mb-6">
            Welcome to LUMA Sportz N Fun! We help kids grow in confidence and teamwork through exciting programs and unforgettable events—all in a safe, fun, and family-first environment.
            </p>
            <p className="text-gray-600">
            At LUMA Sportz N Fun, our mission is to inspire confidence, teamwork, and joy in every child through high-energy programs in Martial Arts, Cheerleading, 
            Basketball, and Soccer. We’re passionate about creating unforgettable experiences—both in class and at our exciting events like foam parties, snow days, 
            and movie nights. Above all, we treat every child and family like our own, ensuring a safe, welcoming, and positive environment where fun and growth go hand in hand.
            </p>
            <div className="mt-8 flex justify-center gap-4">
                <div className="px-8 w-48 py-3 text-lg bg-blue-600 hover:bg-green-500 shadow-md shadow-gray-500 hover:shadow-lg hover:scale-105 transition font-semibold rounded-full text-white">
                    <Link to="/prices">Learn More</Link>
                </div>
                <div className="px-8 w-48 py-3 text-lg bg-blue-600 hover:bg-green-500 shadow-md shadow-gray-500 hover:shadow-lg hover:scale-105 transition font-semibold rounded-full text-white">
                    <Link to="/locations">Locations</Link>
                </div>
            </div>

          </div>
  
          {/* Image or Graphic */}
          <div className="relative">
            <img
              src="/img/luma-foamparty.webp"
              alt="Kids playing"
              className="rounded-2xl shadow-lg shadow-gray-500 w-full object-cover h-[300px] md:h-[400px]"
            />
          </div>
        </div>
      </section>
    );
  }
  