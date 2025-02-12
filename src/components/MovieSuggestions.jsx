import { useSelector } from "react-redux";

const MovieSuggestions = () => {
  const searchResults = useSelector((store) => store.search.searchResults);

  return (
    <div className="px-4 sm:px-6 w-full max-w-screen-xl mx-auto relative z-60">
      {searchResults && (
        <div className="bg-black bg-opacity-80 rounded-lg mt-16 p-4 max-h-[calc(100vh-240px)] overflow-y-auto scrollbar-hide">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-6 md:gap-8">
            {searchResults.map((movie) => (
              <div
                key={movie.id}
                className="relative cursor-pointer group"
              >
                <div className="aspect-[2/3] w-full overflow-hidden rounded-lg">
                  {movie.posterPath ? (
                    <img
                      src={`https://image.tmdb.org/t/p/w500${movie.posterPath}`}
                      alt={movie.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition duration-300"
                    />
                  ) : (
                    <div className="w-full h-full bg-zinc-800 flex items-center justify-center">
                      <span className="text-zinc-500">No Image</span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-2 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h2 className="text-white text-sm font-medium truncate">
                      {movie.title}
                    </h2>
                    {movie.releaseDate && (
                      <p className="text-zinc-400 text-xs">
                        {new Date(movie.releaseDate).getFullYear()}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieSuggestions;
