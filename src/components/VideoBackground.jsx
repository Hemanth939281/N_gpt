import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  useMovieTrailer(movieId);

  return (
    <div className="w-screen aspect-video absolute top-0 left-0">
      <iframe
        className="w-full h-full"
        src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&rel=0&showinfo=0&modestbranding=1&controls=0&loop=1&playlist=${trailerVideo?.key}`}
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black opacity-90"></div>
    </div>
  );
};

export default VideoBackground;