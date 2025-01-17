import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  if (!movies || movies.length === 0) return null;

  return (
    <div className="px-1 sm:px-2 mb-8">
      {/* Section Title */}
      <h1 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3 sm:mb-4 md:mb-6">
        {title}
      </h1>

      {/* Horizontal Scrollable Movie List */}
      <div className="flex overflow-x-scroll scrollbar-hide 
        gap-2 sm:gap-3 md:gap-4 lg:gap-6
        pb-4 sm:pb-6">
        {movies.map((movie) => (
          <MovieCard 
            key={movie.id} 
            posterPath={movie?.poster_path} 
          />
        ))}
      </div>
    </div>
  );
};

export default MovieList;