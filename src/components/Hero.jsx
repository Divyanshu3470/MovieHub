import React from "react";

function Hero() {
  return (
    <section className="min-h-[75vh] sm:min-h-[80vh] w-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center text-center">

        <h1 className="font-extrabold leading-none flex">
          <span className="block text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
            MOVIE
          </span>
          <span className="block text-blue-400 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
            HUB
          </span>
        </h1>

        <p className="mt-4 sm:mt-6 text-white font-serif font-medium text-base sm:text-lg md:text-xl lg:text-2xl max-w-2xl">
          YOUR ULTIMATE STREAMING VIDEOS
        </p>

      </div>
    </section>
  );
}

export default Hero;