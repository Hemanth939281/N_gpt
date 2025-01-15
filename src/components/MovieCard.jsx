import { IMAGE_CDN_URL } from "../utils/constant";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-40 h-50 flex-shrink-0 bg-gray-200 rounded overflow-hidden shadow-md">
      <img
        src={IMAGE_CDN_URL + posterPath}
        alt="Movie poster"
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default MovieCard;
