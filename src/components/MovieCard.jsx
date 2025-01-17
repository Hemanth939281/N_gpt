import { IMAGE_CDN_URL } from "../utils/constant";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-28 sm:w-32 md:w-36 lg:w-40 
      h-40 sm:h-44 md:h-48 lg:h-52 
      flex-shrink-0 
      bg-gray-200 
      rounded 
      overflow-hidden 
      shadow-md 
      transition-transform duration-300 hover:scale-105">
      <img
        src={IMAGE_CDN_URL + posterPath}
        alt="Movie poster"
        className="w-full h-full object-cover"
        loading="lazy"
      />
    </div>
  );
};

export default MovieCard;