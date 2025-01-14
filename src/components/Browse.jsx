import { LOGO_URL } from "../utils/constant.js";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies.js";
import MainContainer from "./MainContainer.jsx";
import SecondaryContainer from "./SecondaryContainer.jsx";

const Browse = () => {
  const {user, handleSignOut} = useNowPlayingMovies()


  return (
    <div>
      <div className="relative bg-gradient-to-b from-black min-w-screen h-24">
        {/* Netflix logo */}
        <img
          className="z-50 absolute w-44"
          src={LOGO_URL}
          alt="netflix logo"
        />

        {/* User Profile */}
        <div className="absolute right-16 top-4 flex flex-col items-center group">
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
            <MainContainer/>
            <SecondaryContainer/>
      </div>
            
    </div>
  );
};

export default Browse;
