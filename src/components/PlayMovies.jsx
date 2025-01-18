import { useParams } from "react-router-dom";
import useMovieVideo from "../hooks/useMovieVideo";
import { useSelector } from "react-redux";
import { X } from "lucide-react";
import { useEffect } from "react";

const PlayMovies = () => {
  const { id } = useParams();
  useEffect(() => {
    window.location.reload;
  })
  useMovieVideo(id);
  const movieVideo = useSelector((store) => store.movies.movieVideo);
  if (!movieVideo) {
    return <div>Loading...</div>;
  }

  const videoUrl = `https://www.youtube.com/embed/${movieVideo[0]?.key}?autoplay=1&rel=0&controls=0&modestbranding=1&loop=1`;

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black/90 z-[200] flex items-center justify-center p-4">
      {/* Close Button */}
      <button
        className="absolute top-4 right-4 p-2 bg-black/50 text-white rounded-full hover:bg-white/10"
        onClick={() => console.log("Close Player")}
      >
        <X size={24} />
      </button>

      {/* Video Player */}
      <div className="relative w-full max-w-4xl aspect-video bg-black rounded-lg shadow-lg">
        <iframe
          className="w-full h-full"
          src={videoUrl}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default PlayMovies;
