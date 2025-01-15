import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  if (!movies || movies.length === 0) return null;

  return (
    <div className="px-2">
      {/* Section Title */}
      <h1 className="text-2xl mb-6">{title}</h1>

      {/* Horizontal Scrollable Movie List */}
      <div className="flex  overflow-x-scroll scrollbar-hide gap-6">
        {movies.map((movie) => (
          <MovieCard key={movie.id} posterPath={movie?.poster_path} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
