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
import { setSearchResults, toggleSearchView } from "../utils/searchSlice.js";
import { useEffect, useState } from "react";
import { changeLanguage, headerBgColor } from "../utils/configSlice.js";
import { toggleProfile } from "../utils/userSlice.js";

const Browse = () => {
  const { user, handleSignOut } = useNowPlayingMovies();
  const dispatch = useDispatch();
  const search = useSelector((store) => store.search.showSearch);
  const headerBg = useSelector((store) => store.config.headerBgColor);
  const showProfile = useSelector((store) => store.user.showProfile);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  usePopularMovies();
  useTrendingMovies();
  useUpcomingVideos();
  useHorrorMovies();

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(headerBgColor("")); 
    }, 5000);

    return () => clearTimeout(timer);
  }, [dispatch]);

  const handleSearchClick = () => {
    dispatch(toggleSearchView());
    setIsMobileMenuOpen(false);
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  const handleProfileClick = () => {
    dispatch(toggleProfile());
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    window.location.href === "http://localhost:5173/browse" && dispatch(setSearchResults(null));
  }, []);

  return (
    <div className="relative">
      {/* Header section */}
      <header className={`fixed top-0 w-full bg-gradient-to-b ${headerBg ? `from-black ${headerBg}` : "from-black"} to-transparent z-50`}>
        <div className="flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-24 h-16 md:h-20 lg:h-24">
          {/* Logo */}
          <img
            className="w-20 md:w-24 lg:w-32"
            src={LOGO_URL}
            alt="Netflix Logo"
          />

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4 lg:gap-8">
            <button
              className="px-4 lg:px-6 py-1.5 lg:py-2 bg-white text-black rounded-lg hover:bg-opacity-90 text-sm lg:text-base"
              onClick={handleSearchClick}
            >
              {search ? "Home Page" : "Search"}
            </button>

            {search && (
              <select
                name="lang"
                className="p-2 rounded-lg bg-gray-800 text-white focus:outline-none text-sm lg:text-base"
                onChange={handleLanguageChange}
              >
                {SUPPORTED_LANGUAGES.map((lang) => (
                  <option key={lang.identifier} value={lang.identifier}>
                    {lang.language}
                  </option>
                ))}
              </select>
            )}

            <div className="relative" onClick={handleProfileClick}>
              <img
                src={user.photoURL || "/assets/default-avatar.png"}
                alt="User Avatar"
                className="h-8 w-8 lg:h-10 lg:w-10 rounded-full border-2 border-gray-300 cursor-pointer"
              />
              {showProfile && (
                <div className="absolute right-0 mt-2 w-48 bg-black/90 text-white rounded-lg shadow-lg">
                  <h1 className="px-4 py-3 hover:bg-black/40 rounded-t-lg text-sm lg:text-base">
                    {user.displayName}
                  </h1>
                  <button
                    onClick={handleSignOut}
                    className="w-full px-4 py-3 text-left hover:bg-black/40 rounded-b-lg text-sm lg:text-base"
                  >
                    Sign Out
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-black/95 py-4">
            <div className="flex flex-col items-center gap-4">
              <button
                className="px-6 py-2 bg-white text-black rounded-lg hover:bg-opacity-90 w-[80%]"
                onClick={handleSearchClick}
              >
                {search ? "Home Page" : "Search"}
              </button>

              {search && (
                <select
                  name="lang"
                  className="p-2 rounded-lg bg-gray-800 text-white focus:outline-none w-[80%]"
                  onChange={handleLanguageChange}
                >
                  {SUPPORTED_LANGUAGES.map((lang) => (
                    <option key={lang.identifier} value={lang.identifier}>
                      {lang.language}
                    </option>
                  ))}
                </select>
              )}

              <div className="flex items-center gap-2 w-[80%] justify-center py-2" onClick={handleProfileClick}>
                <img
                  src={user.photoURL || "/assets/default-avatar.png"}
                  alt="User Avatar"
                  className="h-8 w-8 rounded-full border-2 border-gray-300"
                />
                <span className="text-white">{user.displayName}</span>
              </div>

              <button
                onClick={handleSignOut}
                className="text-white hover:bg-black/40 w-[80%] py-2 rounded-lg"
              >
                Sign Out
              </button>
            </div>
          </div>
        )}
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