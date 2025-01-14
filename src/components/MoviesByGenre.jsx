import axios from "axios";
import { useState } from "react";

const BASE_URL = "http://www.omdbapi.com/";
const API_KEY = "5ebf9019";

const fetchMoviesByGenre = async (genre, limit) => {
  try {
    const results = [];
    let page = 1;

    while (results.length < limit) {
      const response = await axios.get(BASE_URL, {
        params: {
          apikey: API_KEY,
          s: genre,
          page,
        },
      });

      const movies = response.data.Search;
      if (!movies) break;
      results.push(...movies);
      page++;

      if (results.length >= limit || movies.length < 10) break;
    }

    return results.slice(0, limit);
  } catch (error) {
    console.error("Error fetching data", error);
    return [];
  }
};


const MoviesByGenre = () => {
  const [genre, setGenre] = useState("action");
  const [movies, setMovies] = useState([]);
  const [limit, setLimit] = useState(10);

  const handleFetchMovies = async () => {
    const movieData = await fetchMoviesByGenre(genre, limit);
    setMovies(movieData);
  };

  return (
    <div className="p-6 text-center">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Movies By Genre</h1>
      
      {/* Genre Selector */}
      <div className="flex justify-center items-center mb-6 gap-4">
        <select
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
          className="border border-gray-300 rounded-lg p-2 text-gray-700"
        >
          <option value="action">Action</option>
          <option value="comedy">Comedy</option>
          <option value="drama">Drama</option>
          <option value="horror">Horror</option>
          <option value="romance">Romance</option>
        </select>

        {/* Limit Input */}
        <input
          type="number"
          value={limit}
          onChange={(e) => setLimit(e.target.value)}
          className="border border-gray-300 rounded-lg p-2 w-20 text-gray-700"
          min="1"
          max="100"
        />

        <button
          onClick={handleFetchMovies}
          className="bg-blue-600 text-white rounded-lg px-4 py-2 hover:bg-blue-700 transition"
        >
          Fetch Movies
        </button>
      </div>

      {/* Movies Display */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-6">
        {movies.map((movie) => (
          <div key={movie.imdbID} className="text-center">
            <img
              src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/150"}
              alt={movie.Title}
              className="w-full rounded-lg shadow-md"
            />
            <p className="mt-2 text-sm font-semibold text-gray-700">{movie.Title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoviesByGenre;
