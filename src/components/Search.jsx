
import { BG_IMAGE } from "../utils/constant";
import MovieSuggestions from "./MovieSuggestions"
import SearchBar from "./SearchBar"

const Search = () => {
    return (
      <div className={`absolute top-0 w-full h-screen bg-[url('${BG_IMAGE}')]`}>
        <div className="absolute bg-black/60 top-0 h-screen w-full"></div>
        <div className="flex items-center justify-center min-h-1/4 mt-10">
        <div className="w-full max-w-xl">
          <SearchBar />
        </div>
      </div>
      <MovieSuggestions />
      </div>
    );
  };

export default Search