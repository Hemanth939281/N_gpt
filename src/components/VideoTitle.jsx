const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[13%] px-24 absolute top-0 left-0 text-white z-10">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/3">{overview}</p>
      <div className="flex gap-4 mt-4">
        <button className="flex items-center gap-1 bg-white text-black py-2 px-8 text-xl rounded-lg hover:bg-opacity-80">
          <svg
            className="w-8 h-8"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
          Play
        </button>
        <button className="flex items-center gap-2 bg-gray-500 bg-opacity-50 text-white py-2 px-8 text-xl rounded-lg hover:bg-opacity-70">
          More Info
        </button>
      </div>
    </div>
  );
};


export default VideoTitle;
