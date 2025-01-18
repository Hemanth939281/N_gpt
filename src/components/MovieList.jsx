import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  if (!movies || movies.length === 0) return null;
  
  return (
    <div className="px-4 md:px-6 lg:px-8 mb-8">
      {/* Section Title */}
      <h2 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6">
        {title}
      </h2>
      
      {/* Movie List Container */}
      <div className="relative">
        <div className="flex overflow-x-scroll scrollbar-hide
                      gap-2 md:gap-4 lg:gap-6
                      -mx-4 md:-mx-6 lg:-mx-8
                      px-4 md:px-6 lg:px-8
                      pb-4 md:pb-8">
          {movies.map((movie) => (
            <MovieCard 
              key={movie.id}
              id={movie?.id}
              posterPath={movie?.poster_path}
              title={movie?.title || movie?.name}
              description={movie?.overview}
              rating={movie?.adult ? "18+" : "TV-14"}
              duration="2h 30m"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;