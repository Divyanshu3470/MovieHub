import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard.jsx";
import Navbar from "../components/Navbar.jsx";

function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const data =
      JSON.parse(localStorage.getItem("favourites")) || [];

    setFavorites(data);
  }, []);

  const removeFavourite = (id) => {
    setFavorites((prev) =>
      prev.filter((movie) => movie.id !== id)
    );
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">

        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 sm:mb-10">
          My Favorites
        </h1>

        {favorites.length === 0 ? (
          <div className="flex flex-col items-center justify-center text-center min-h-[50vh]">

            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-700">
              No Favourite Movies Yet
            </h2>

            <p className="mt-3 text-gray-500 text-sm sm:text-base">
              Add your favourite movies and they'll appear here.
            </p>

          </div>
        ) : (
          <div className=" grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 sm:gap-6 lg:gap-8 justify-items-center">
            {favorites.map((movie) => (
              <MovieCard
                key={movie.id}
                movie={movie}
                onRemoveFavourite={removeFavourite}
              />
            ))}
          </div>
        )}

      </div>
    </div>
  );
}

export default Favorites;