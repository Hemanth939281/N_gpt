const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute w-screen aspect-video pt-[15%] px-14 bg-gradient-to-r from-black text-white z-10">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/3">{overview}</p>
      <div className="flex gap-4 mt-4">
        <button className="bg-white py-1 px-6 text-lg text-black rounded-lg hover:bg-opacity-80">
          <svg
            className="inline-block text-white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="black"
            width="48px"
            height="48px"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
          Play
        </button>
        <button className="bg-gray-500/30 text-white py-1 px-6 text-lg rounded-lg">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
