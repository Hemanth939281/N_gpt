import { useDispatch } from "react-redux";
import { addTrendingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";

const useTrendingMovies = () => {
    const dispatch = useDispatch();
      const getNowPlayingMovies = async() => {
        const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', API_OPTIONS);
        const movies = await data.json();
        dispatch(addTrendingMovies(movies.results));
      }
    
      useEffect(() => {
        getNowPlayingMovies();
      }, []);


}

export default useTrendingMovies;