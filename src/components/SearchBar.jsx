
import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/language";
import { useRef } from "react";
import { API_OPTIONS } from "../utils/constant";
import { setSearchResults } from "../utils/searchSlice";

const SearchBar = () => {
  const dispatch = useDispatch();
  const searchText = useRef(null);
  const languageIdentifier = useSelector((store) => store.config.lang);
  const language = lang[languageIdentifier];

  const handleSearchClick = async () => {
    const query = searchText.current?.value?.trim();
    if (!query) return;

    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(query)}&include_adult=false&language=en-US&page=1`,
        API_OPTIONS
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      
      if (data.results.length === 0) {
        console.log("No movies found.");
        return;
      }

      
      const movieResults = data.results.slice(0, data.results.length<5? data.results.length : 20 ).map(movie => ({
        id: movie.id,
        title: movie.title,
        releaseDate: movie.release_date,
        posterPath: movie.poster_path,
        overview: movie.overview
      }));

      dispatch(setSearchResults(movieResults));
      console.log("Movie Results:", movieResults);

    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  return (
    <div className="relative z-40 bg-black py-4 rounded-lg mt-20">
      <form className="flex flex-col items-center gap-4" onSubmit={(e) => e.preventDefault()}>
        <div className="flex justify-center gap-6">
          <input
            ref={searchText}
            type="text"
            placeholder={`${language.searchPlaceholder}`}
            className="w-96 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          <button 
            onClick={handleSearchClick} 
            type="submit" 
            className="py-2 px-4 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
          >
            {language.search}
          </button>
        </div>

      </form>
    </div>
  );
};

export default SearchBar;