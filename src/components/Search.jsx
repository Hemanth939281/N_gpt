import { BG_IMAGE } from "../utils/constant";
import MovieSuggestions from "./MovieSuggestions";
import SearchBar from "./SearchBar";

const Search = () => {
  return (
    <div
      className={`fixed top-0 w-full h-screen bg-[url('${BG_IMAGE}')] bg-cover bg-center`}
    >
      {/* Background overlay */}
      <div className="absolute bg-black/60 top-0 h-screen w-full"></div>

      {/* Search Bar */}
      <div className="relative z-10 flex items-center justify-center h-1/4 px-4 sm:px-8">
        <div className="w-full max-w-lg sm:max-w-xl lg:max-w-2xl mt-16">
          <SearchBar />
        </div>
      </div>

      {/* Movie Suggestions */}
      <div className="relative z-10 mt-4 px-4 sm:px-8">
        <MovieSuggestions />
      </div>
    </div>
  );
};

export default Search;
