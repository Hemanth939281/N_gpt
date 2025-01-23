import { useSelector } from "react-redux"
import MovieList from "./MovieList"

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    <div className="bg-black">
      <div className="relative z-20 text-white 
        pb-6 sm:pb-8 md:pb-10 lg:pb-12
        px-2
        sm:-mt-20 sm:px-4 
        md:-mt-36 md:px-6
        lg:-mt-48 lg:px-8
        xl:-mt-64 xl:px-24">
        <div className="space-y-4 sm:space-y-6 md:space-y-8">
          <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies} />
          <MovieList title={"Trending"} movies={movies?.trendingMovies} />
          <MovieList title={"Popular"} movies={movies?.popularMovies} />
          <MovieList title={"Upcoming Movies"} movies={movies?.upcomingMovies} />
          <MovieList title={"Horror"} movies={movies?.horrorMovies} />
        </div>
      </div>
    </div>
  )
}

export default SecondaryContainer