

const FoamPartyGallery = () => {
    const images = [
        '/img/foamp1.avif',
        '/img/foamp2.avif',
        '/img/foamp3.avif',
        '/img/foamp4.avif',
        '/img/foamp5.avif',
      ];

  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-blue-700 mb-4">Foam Party Fun</h2>
        <p className="text-lg text-gray-700">
          Check out some of the unforgettable moments from our awesome foam parties!
        </p>
      </div>

      {/* Top 3 images */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        {images.slice(0, 3).map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Foam party ${index + 1}`}
            className="rounded-lg shadow-md shadow-gray-400 object-cover w-full h-88 hover:scale-105 hover:shadow-lg transition"
          />
        ))}
      </div>

      {/* Bottom 2 images: 2/3 and 1/3 layout */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <img
          src={images[3]}
          alt="Foam party 4"
          className="rounded-lg shadow-md object-cover w-full h-88 col-span-1 sm:col-span-2 hover:scale-105 hover:shadow-lg transition"
        />
        <img
          src={images[4]}
          alt="Foam party 5"
          className="rounded-lg shadow-md shadow-gray-400 object-cover w-full h-88 col-span-1 hover:scale-105 hover:shadow-lg transition"
        />
      </div>
    </section>
  );
};

export default FoamPartyGallery;
