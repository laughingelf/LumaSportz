export default function HeroMain() {
    return (
      <section className="relative bg-black min-h-[80vh] w-full overflow-hidden flex items-center justify-center mt-8">
        {/* Background image */}
        <picture>
          {/* WebP for large screens */}
          <source
            srcSet="/img/luma-hero.webp"
            type="image/webp"
            media="(min-width: 768px)"
          />
          {/* WebP for small screens */}
          <source
            srcSet="/img/luma-hero-sm.webp"
            type="image/webp"
            media="(max-width: 767px)"
          />
          {/* PNG fallback for large screens */}
          <source
            srcSet="/img/luma-hero.png"
            type="image/png"
            media="(min-width: 768px)"
          />
          {/* PNG fallback for small screens */}
          <source
            srcSet="/img/luma-hero-sm.png"
            type="image/png"
            media="(max-width: 767px)"
          />

          {/* Fallback <img> for browsers that don't support <picture> */}
          <img
            src="/img/luma-hero.png"
            alt="Hero Background"
            className="absolute inset-0 bg-black opacity-60 w-full h-full object-cover z-0"
          />
        </picture>

  
        {/* Center logo */}
        <img
          src="/img/luma-logo.svg"
          alt="Hero Overlay"
          className="absolute top-1/2 md:top-1/3 left-1/2 w-[28rem] md:w-[48rem] transform -translate-x-1/2 -translate-y-2/3 md:-translate-y-1/2 z-10"
        />
  
        {/* CTA at bottom */}
        <div className="absolute bottom-4 w-full flex flex-col items-center z-10 px-6">
          <div className="flex flex-col sm:flex-row gap-4 text-center mb-6">
            <a
              href="https://level-up-mma.gymdesk.com/signup"
              className="px-8 w-48 py-3 text-lg bg-blue-600 hover:bg-green-500 transition font-semibold rounded-full shadow-md shadow-gray-500 hover:shadow-lg hover:scale-105 text-white transition"
            >
              Sign Up
            </a>
            <a
              href="https://level-up-mma.gymdesk.com/login"
              className="px-8 w-48 py-3 text-lg bg-blue-600 text-white hover:text-white hover:bg-green-500 transition font-semibold rounded-full shadow-md shadow-gray-500 hover:shadow-lg hover:scale-105 text-white transition"
            >
              Member Login
            </a>
          </div>
  
          {/* Info text */}
          <div className="text-black text-md md:text-xl text-center bg-white/80 rounded-xl px-6 py-4">
            <p className="mb-2">
              Please use <span className="font-semibold underline text-blue-600">Student's Name</span> and{' '}
              <span className="font-semibold underline text-blue-600">Age</span> when signing up.
            </p>
            <p>Need help registering? <a href="https://www.youtube.com/shorts/NWB2oO-suWU" target='_blank'
             className="underline text-green-500" >Watch this video</a></p>
          </div>
        </div>
      </section>
    );
  }
  