const BoomCard = () => {
    return (
      <div className="flex flex-col lg:flex-row items-center justify-center mx-auto my-4 rounded-[10px] font-sans max-w-xl overflow-hidden">
        {/* Image */}
        <img
          src="/img/boom-sm.webp"
          alt="Boom Shaka Laka (Pre-Order)"
          className="w-full lg:w-1/2 object-cover rounded-md shadow-lg shadow-gray-800"
          onError={(e) => (e.target.style.display = 'none')}
        />
  
        {/* Content */}
        <div className="w-full lg:w-1/2 p-5 text-center flex flex-col items-center justify-center gap-3 text-blue-600">
          <p className="text-[18px] leading-[20px]">Boom Shaka Laka (Pre-Order)</p>
          <p className="text-[18px] leading-[20px] font-semibold">$15.00</p>
          <a
            href="https://square.link/u/152nPlPX?src=embed"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white bg-blue-600 hover:bg-green-500 hover:scale-105 hover:shadow-lg text-[18px] font-semibold px-6 py-3 rounded-lg transition-all shadow-md shadow-gray-800"
          >
            Buy Now
          </a>
        </div>
      </div>
    );
  };
  
  export default BoomCard;
  