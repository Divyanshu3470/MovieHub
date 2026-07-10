import React, { useEffect, useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import toast from "react-hot-toast";

function MovieCard({ movie, onRemoveFavourite }) {
  const imageUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : "https://via.placeholder.com/300x450?text=No+Image";

  const [liked, setLiked] = useState(false);

  useEffect(() => {
    const favourites =
      JSON.parse(localStorage.getItem("favourites")) || [];

    setLiked(favourites.some((item) => item.id === movie.id));
  }, [movie.id]);

  const handleFavourite = () => {
    let favourites =
      JSON.parse(localStorage.getItem("favourites")) || [];

    const exists = favourites.some((item) => item.id === movie.id);

    if (exists) {
      favourites = favourites.filter((item) => item.id !== movie.id);

      localStorage.setItem(
        "favourites",
        JSON.stringify(favourites)
      );

      setLiked(false);

      toast.success("Removed from Favourites");

      if (onRemoveFavourite) {
        onRemoveFavourite(movie.id);
      }
    } else {
      favourites.push(movie);

      localStorage.setItem(
        "favourites",
        JSON.stringify(favourites)
      );

      setLiked(true);

      toast.success("Added to Favourites ❤️");
    }
  };

  return (
    <div className="relative w-[150px] sm:w-[180px] md:w-[210px] lg:w-[230px] xl:w-[250px] flex-shrink-0 bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-all duration-300">
      <button
        onClick={handleFavourite}
        className="absolute top-2 right-2 sm:top-3 sm:right-3 bg-white/90 hover:bg-white rounded-full p-2 z-10 transition"
      >
        {liked ? (
          <FaHeart className="text-red-500 text-base sm:text-xl" />
        ) : (
          <FaRegHeart className="text-gray-700 text-base sm:text-xl" />
        )}
      </button>

      <img
        src={imageUrl}
        alt={movie.title}
        loading="lazy"
        className="
          w-full
          aspect-[2/3]
          object-cover
        "
      />

      <div className="p-3 sm:p-4">
        <h2 className="text-white font-semibold text-sm sm:text-base truncate">
          {movie.title}
        </h2>

        <div className="flex justify-between items-center mt-3">
          <span className="text-gray-400 text-xs sm:text-sm">
            {movie.release_date
              ? movie.release_date.substring(0, 4)
              : "N/A"}
          </span>

          <span className="bg-yellow-400 text-black px-2 py-1 rounded-md font-semibold text-xs sm:text-sm">
            ⭐ {movie.vote_average?.toFixed(1)}
          </span>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;