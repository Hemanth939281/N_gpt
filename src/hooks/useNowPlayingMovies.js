import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";
import { API_OPTIONS } from "../utils/constant";

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();
      const navigate = useNavigate();
      const getNowPlayingMovies = async() => {
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS);
        const movies = await data.json();
        dispatch(addNowPlayingMovies(movies.results));
      }
    
      useEffect(() => {
        getNowPlayingMovies();
      }, []);
      const user = JSON.parse(localStorage.getItem('user'));
      console.log(user);
      
      
      useEffect(() => {
         onAuthStateChanged(auth, (user) => {
          if (user) {
            const { uid, email, displayName, photoURL } = user;
            dispatch(addUser({ uid:uid, email:email, displayName:displayName, photoURL:photoURL }));
            navigate("/browse");
          } else {
            dispatch(removeUser());
            navigate("/");
          }
        });
      
      }, [dispatch, navigate]);
    
      
      
    
      const handleSignOut = async () => {
        await signOut(auth);
        localStorage.removeItem('user');
      };

      return { user,handleSignOut };
    
}

export default useNowPlayingMovies;