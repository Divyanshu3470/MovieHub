import React, { useContext, useEffect, useRef } from "react";
import { ShopContext } from "../context/ShopContext.jsx";
import MovieCard from "./MovieCard.jsx";

function LatestMovies() {
  const { latest } = useContext(ShopContext);
  const sliderRef = useRef(null);

  const slideLeft = () => {
    if (!sliderRef.current) return;

    sliderRef.current.scrollBy({
      left: -sliderRef.current.clientWidth,
      behavior: "smooth",
    });
  };

  const slideRight = () => {
    if (!sliderRef.current) return;

    sliderRef.current.scrollBy({
      left: sliderRef.current.clientWidth,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!sliderRef.current) return;

      const slider = sliderRef.current;

      if (
        slider.scrollLeft + slider.clientWidth >=
        slider.scrollWidth - 5
      ) {
        slider.scrollTo({
          left: 0,
          behavior: "smooth",
        });
      } else {
        slider.scrollBy({
          left: 300,
          behavior: "smooth",
        });
      }
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="mt-14 sm:mt-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black">
          LATEST MOVIES
        </h1>

        <div className="hidden sm:flex gap-3">
          <button
            onClick={slideLeft}
            className="w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 transition text-xl"
          >
          </button>

          <button
            onClick={slideRight}
            className="w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 transition text-xl"
          >
          </button>
        </div>
      </div>

      <div
        ref={sliderRef}
        className="flex gap-4 sm:gap-6 overflow-x-auto scroll-smooth scrollbar-hide snap-x snap-mandatory"
      >
        {latest.map((movie) => (
          <div key={movie.id} className="snap-start flex-shrink-0">
            <MovieCard movie={movie} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default LatestMovies;