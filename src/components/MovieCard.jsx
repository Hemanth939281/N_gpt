import { Play, Info } from 'lucide-react';
import { IMAGE_CDN_URL } from "../utils/constant";
import { useNavigate } from 'react-router-dom';

const MovieCard = ({
  id,
  posterPath,
  title = "Movie Title",
  description = "Movie description goes here...",
  rating = "TV-14",
  duration = "1h 30m",
}) => {
  const navigate = useNavigate();

  const handlePlayClick = () => {
    navigate(`/movie/${id}`); 
  };

  return (
    <div className="relative group">
      {/* Base card size */}
      <div
        className="w-32 md:w-40 lg:w-48 aspect-[2/3] rounded-md overflow-hidden 
        bg-zinc-800 transition-transform duration-300 ease-in-out group-hover:w-[300px] 
        group-hover:h-[170px] group-hover:rounded-lg shadow-lg"
      >
        {/* Poster */}
        <div className="relative w-full h-full">
          <img
            src={IMAGE_CDN_URL + posterPath}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 
            transition-transform duration-300 rounded-lg"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        </div>

        {/* Hover Content */}
        <div
          className="absolute top-0 left-0 w-full h-full bg-gradient-to-t 
          from-black via-black/70 to-transparent opacity-0 group-hover:opacity-100 
          transition-opacity duration-500"
        >
          <div className="absolute bottom-0 left-0 w-full p-4 space-y-3">
            {/* Title */}
            <h3 className="text-white font-bold text-base md:text-lg">
              {title}
            </h3>

            {/* Buttons */}
            <div className="flex items-center gap-3">
              <button
                className="p-3 bg-white rounded-full hover:bg-opacity-80 transition"
                onClick={handlePlayClick}
              >
                <Play size={20} className="text-black" />
              </button>
              <button className="p-3 bg-white/30 rounded-full hover:bg-white/20 transition">
                <Info size={20} className="text-white" />
              </button>
            </div>

            {/* Details */}
            <div className="flex items-center gap-2 text-sm text-white/70">
              <span>{rating}</span> • <span>{duration}</span>
            </div>

            {/* Description */}
            <p className="text-white/60 text-sm line-clamp-4">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
