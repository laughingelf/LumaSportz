export default function HeroMain() {
    return (
      <section className="relative min-h-[80vh] w-full overflow-hidden flex items-center justify-center">
        {/* Background image */}
        <img
          src="/img/luma-hero.svg"
          alt="Hero Background"
          className="absolute inset-0 bg-black opacity-40 w-full h-full object-cover z-0"
        />
  
        {/* Center logo */}
        <img
          src="/img/luma-logo.svg"
          alt="Hero Overlay"
          className="absolute top-1/2 left-1/2 w-[28rem] md:w-[48rem] transform -translate-x-1/2 -translate-y-1/2 z-10"
        />
  
        {/* CTA at bottom */}
        <div className="absolute bottom-12 w-full flex justify-center z-20 px-6">
          <div className="flex flex-col sm:flex-row gap-4 text-center">
            <a
              href="/"
              className="px-8 w-48 py-3 text-lg bg-blue-600 hover:bg-green-500 transition font-semibold rounded-full shadow-md shadow-gray-500 hover:shadow-lg hover:scale-105 text-white transition"
            >
              Sign Up
            </a>
            <a
              href="/contact"
              className="px-8 w-48 py-3 text-lg bg-blue-600 text-white hover:text-white hover:bg-green-500 transition font-semibold rounded-full shadow-md shadow-gray-500 hover:shadow-lg hover:scale-105 text-white transition"
            >
              Member Login
            </a>
          </div>
        </div>
      </section>
    );
  }
  