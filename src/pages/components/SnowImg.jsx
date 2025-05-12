export default function SnowImgSection() {
    return (
      <section className="px-4 py-12 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-green-500 text-center mb-8">Our Costumes</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <img
                src="/img/santa-suit.avif"
                alt="Image 1"
                className="w-full h-110 md:h-88 object-cover rounded-lg shadow-lg shadow-gray-400"
              />
            </div>
            <div>
              <img
                src="/img/grinch-suit.avif"
                alt="Image 2"
                className="w-full h-110 md:h-88 object-cover rounded-lg shadow-lg shadow-gray-400"
              />
            </div>
            <div>
              <img
                src="/img/msclause-suit.avif"
                alt="Image 3"
                className="w-full h-110 md:h-88 object-cover rounded-lg shadow-lg shadow-gray-400"
              />
            </div>
            <div>
              <img
                src="/img/snow-chair.avif"
                alt="Image 4"
                className="w-full h-110 md:h-88 object-cover rounded-lg shadow-lg shadow-gray-400"
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
  