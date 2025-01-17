import { useDispatch, useSelector } from "react-redux";
import { addHorrorMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";

const useHorrorMovies = () => {
  const horrorMovies = useSelector((store) => store.movies.horrorMovies);
    const dispatch = useDispatch();
      const getNowPlayingMovies = async() => {
        const data = await fetch(`https://api.themoviedb.org/3/discover/movie?with_genres=27`, API_OPTIONS);
        const movies = await data.json();
        dispatch(addHorrorMovies(movies.results));
      }
    
      useEffect(() => {
        if (!horrorMovies){
          getNowPlayingMovies();
        }
      }, []);


}

export default useHorrorMovies;