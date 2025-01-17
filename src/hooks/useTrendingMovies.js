import { useDispatch, useSelector } from "react-redux";
import { addTrendingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";

const useTrendingMovies = () => {
  const trendingMovies = useSelector((store) => store.movies.trendingMovies);
    const dispatch = useDispatch();
      const getNowPlayingMovies = async() => {
        const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', API_OPTIONS);
        const movies = await data.json();
        dispatch(addTrendingMovies(movies.results));
      }
    
      useEffect(() => {
        if (!trendingMovies){
          getNowPlayingMovies();
        }
      }, []);


}

export default useTrendingMovies;