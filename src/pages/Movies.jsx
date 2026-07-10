import { useEffect, useRef, useState } from "react";
import MovieCard from "../components/MovieCard.jsx";
import useDebounce from "../hooks/useDebounce.jsx";
import Navbar from "../components/Navbar.jsx";
import MoodSearch from "../components/MoodSearch.jsx";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

function Movies() {
  const [movies, setMovies] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const [searchMovie, setSearchMovie] = useState("");

  const debouncedSearch = useDebounce(searchMovie, 500);

  const loaderRef = useRef(null);

  const fetchPopularMovies = async (pageNumber) => {
    setLoading(true);

    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${pageNumber}`
      );

      const data = await res.json();

      setMovies((prev) => [...prev, ...data.results]);
    } catch (error) {
      console.log(error);
    }

    setLoading(false);
  };

  const searchMovies = async (query) => {
    setLoading(true);

    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${encodeURIComponent(
          query
        )}`
      );

      const data = await res.json();

      setSearchResults(data.results || []);
    } catch (error) {
      console.log(error);
    }

    setLoading(false);
  };

  const searchMovieByTitle = async (title) => {
    setLoading(true);

    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
          title
        )}`
      );

      const data = await res.json();

      setMovies(data.results || []);
      setSearchResults([]);
      setSearchMovie("");
    } catch (err) {
      console.log(err);
    }

    setLoading(false);
  };

  useEffect(() => {
    if (debouncedSearch.trim() === "") {
      fetchPopularMovies(page);
    }
  }, [page, debouncedSearch]);

  useEffect(() => {
    if (debouncedSearch.trim() === "") {
      setSearchResults([]);
      return;
    }

    searchMovies(debouncedSearch);
  }, [debouncedSearch]);

  useEffect(() => {
    if (debouncedSearch.trim() !== "") return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !loading) {
          setPage((prev) => prev + 1);
        }
      },
      {
        threshold: 1,
      }
    );

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => observer.disconnect();
  }, [loading, debouncedSearch]);

  const displayMovies =
    debouncedSearch.trim() === "" ? movies : searchResults;

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8">
          Explore Movies
        </h1>

        <input
          type="search"
          placeholder="Search movies..."
          value={searchMovie}
          onChange={(e) => setSearchMovie(e.target.value)}
          className="w-full rounded-full border border-gray-300 bg-white px-5 py-3 outline-none focus:ring-2 focus:ring-blue-500 mb-8"
        />

        <MoodSearch onMovieFound={searchMovieByTitle} />

        {displayMovies.length === 0 && !loading ? (
          <div className="flex items-center justify-center min-h-[40vh]">
            <h2 className="text-2xl text-gray-500">
              No Movies Found 🎬
            </h2>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 sm:gap-6 lg:gap-8 justify-items-center">
            {displayMovies.map((movie) => (
              <MovieCard
                key={movie.id}
                movie={movie}
              />
            ))}
          </div>
        )}

        {debouncedSearch.trim() === "" && (
          <div
            ref={loaderRef}
            className="py-10 text-center"
          >
            {loading && (
              <h2 className="text-lg font-semibold">
                Loading...
              </h2>
            )}
          </div>
        )}

      </div>
    </div>
  );
}

export default Movies;