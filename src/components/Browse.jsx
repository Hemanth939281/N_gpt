import { LOGO_URL } from "../utils/constant.js";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies.js";
import MainContainer from "./MainContainer.jsx";
import SecondaryContainer from "./SecondaryContainer.jsx";
import usePopularMovies from "../hooks/usePopularMovies.js";
import useTrendingMovies from "../hooks/useTrendingMovies.js";
import useUpcomingVideos from "../hooks/useUpcomingMovies.js";
import useHorrorMovies from "../hooks/useHorrorMovies.js"

const Browse = () => {
  const { user, handleSignOut } = useNowPlayingMovies();
  usePopularMovies();
  useTrendingMovies();
  useUpcomingVideos();
  useHorrorMovies();

  return (
    <div className="relative w-screen">
      {/* Header Section */}
      <div className="bg-gradient-to-b from-black via-black/80 h-20 relative z-40">
        {/* Netflix logo */}
        <img
          className="z-50 absolute w-44 left-10 top-2"
          src={LOGO_URL}
          alt="netflix logo"
        />

        {/* User Profile */}
        <div className="absolute right-16 top-4 flex flex-col items-center group z-50">
          {/* User Icon */}
          <img
            src={user.photoURL || "/assets/default-avatar.png"}
            alt="user icon"
            className="h-12 w-12 rounded-full"
          />

          {/* Hover Menu */}
          <div className="relative hidden group-hover:block">
            <div className="absolute top-0 right-1 bg-black/60 text-white flex flex-col whitespace-nowrap shadow-lg rounded-xl rounded-tr-none">
              <h1 className="hover:bg-black/40 rounded-xl p-3">{user.displayName}</h1>
              <button
                onClick={handleSignOut}
                className="hover:bg-black/40 p-3 rounded-xl"
              >
                Signout
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative -mt-24 z-10">
        <MainContainer />
        <SecondaryContainer />
      </div>
    </div>
  );
};


export default Browse;
