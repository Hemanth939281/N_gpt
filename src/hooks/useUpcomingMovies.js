import { useDispatch, useSelector } from "react-redux";
import { addUpcomingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";

const useUpcomingMovies = () => {
  const upcomingMovies = useSelector((store) => store.movies.upcomingMovies);
    const dispatch = useDispatch();
      const getNowPlayingMovies = async() => {
        const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', API_OPTIONS);
        const movies = await data.json();
        dispatch(addUpcomingMovies(movies.results));
      }
    
      useEffect(() => {
        if (!upcomingMovies){
          getNowPlayingMovies();
        }
      }, []);


}

export default useUpcomingMovies;