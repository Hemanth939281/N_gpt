import { LOGO_URL, SUPPORTED_LANGUAGES } from "../utils/constant.js";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies.js";
import MainContainer from "./MainContainer.jsx";
import SecondaryContainer from "./SecondaryContainer.jsx";
import usePopularMovies from "../hooks/usePopularMovies.js";
import useTrendingMovies from "../hooks/useTrendingMovies.js";
import useUpcomingVideos from "../hooks/useUpcomingMovies.js";
import useHorrorMovies from "../hooks/useHorrorMovies.js";
import Search from "./Search.jsx";
import { useDispatch, useSelector } from "react-redux";
import { toggleSearchView } from "../utils/searchSlice.js";
import { useEffect } from "react";
import { changeLanguage, headerBgColor } from "../utils/configSlice.js";

const Browse = () => {
  const { user, handleSignOut } = useNowPlayingMovies();
  const dispatch = useDispatch();
  const search = useSelector((store) => store.search.showSearch);
  const headerBg = useSelector((store) => store.config.headerBgColor);
  usePopularMovies();
  useTrendingMovies();
  useUpcomingVideos();
  useHorrorMovies();

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(headerBgColor("")); // Update Redux state
    }, 5000);

    return () => clearTimeout(timer); // Cleanup timer
  }, [dispatch]);

  useEffect(() => {
    console.log("Updated headerBg value from Redux:", headerBg);
  }, [headerBg]);

  const handleSearchClick = () => {
    dispatch(toggleSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="relative">

      {/* Header section */}
        <header className={`fixed top-0 w-full bg-gradient-to-b ${headerBg? `from-black ${headerBg}`: "from-black"} to-transparent h-24 flex items-center px-24 z-50`}>
  <img
    className="w-32"
    src={LOGO_URL}
    alt="Netflix Logo"
  />
   
  <div className="ml-auto flex items-center gap-8">
    
      <button
        className="px-6 py-2 bg-white text-black rounded-lg hover:bg-opacity-90"
        onClick={handleSearchClick}
      >
        {search? "Home Page" : "Search"}
      </button>
      
    {search && (
      <select
        name="lang"
        className="p-2 rounded-lg bg-gray-800 text-white focus:outline-none"
        onChange={handleLanguageChange}
      >
        {SUPPORTED_LANGUAGES.map((lang) => (
          <option key={lang.identifier} value={lang.identifier}>
            {lang.language}
          </option>
        ))}
      </select>
    )}
    
    <div className="relative group">
      <img
        src={user.photoURL || "/assets/default-avatar.png"}
        alt="User Avatar"
        className="h-10 w-10 rounded-full border-2 border-gray-300 cursor-pointer"
      />
      <div className="absolute right-0 mt-2 w-48 bg-black/90 text-white rounded-lg shadow-lg hidden group-hover:block">
        <h1 className="px-4 py-3 hover:bg-black/40 rounded-t-lg">
          {user.displayName}
        </h1>
        <button
          onClick={handleSignOut}
          className="w-full px-4 py-3 text-left hover:bg-black/40 rounded-b-lg"
        >
          Sign Out
        </button>
      </div>
    </div>
  </div>
</header>

      {/* Main Content */}
      <main className="relative">
        {search ? (
          <Search />
        ) : (
          <div className="relative z-10">
            <MainContainer />
            <SecondaryContainer />
          </div>
        )}
      </main>
    </div>
  );
};

export default Browse;
