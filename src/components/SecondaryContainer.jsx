import { useSelector } from "react-redux"
import MovieList from "./MovieList"

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    <div className="bg-black">
    <div className="pl-12 text-white relative -mt-56 z-20">
      <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies} />
      <MovieList title={"Trending"} movies={movies?.trendingMovies} />
      <MovieList title={"Popular"} movies={movies?.popularMovies} />
      <MovieList title={"Upcoming Movies"} movies={movies?.upcomingMovies} />
      <MovieList title={"Horror"} movies={movies?.horrorMovies} />
    </div>
    </div>
  )
}

export default SecondaryContainer