const SnowPartyImg = () => {
    return (
      <section className="py-12 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <img
            src="/img/snow1-size.jpg"
            alt="Descriptive Alt Text 1"
            className="w-88 h-105 md:w-120 md:h-138 object-cover rounded-lg shadow-md shadow-gray-400 hover:shadow-lg transition hover:scale-105"
          />
          <img
            src="/img/snow2-size.jpg"
            alt="Descriptive Alt Text 2"
            className="w-88 h-105 md:w-120 md:h-138 object-cover rounded-lg shadow-md shadow-gray-400 hover:shadow-lg transition hover:scale-105"
          />
        </div>
      </section>
    );
  };
  
  export default SnowPartyImg;
  