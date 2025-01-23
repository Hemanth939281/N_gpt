const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video px-4 sm:px-8 md:px-12 lg:px-24 absolute top-0 left-0 text-white z-10">
      <div className="mt-[40%] sm:mt-[13%]">
        <h1 className="hidden sm:block text-lg sm:text-3xl md:text-4xl lg:text-6xl font-bold max-w-[90%] md:max-w-[70%] leading-snug">
          {title}
        </h1>
        <p className="hidden sm:block py-2 md:py-4 lg:py-6 text-sm sm:text-base lg:text-lg w-full sm:w-2/3 md:w-1/2 lg:w-1/3">
          {overview}
        </p>
        <div className="flex gap-2 sm:gap-4 mt-2 sm:mt-4 mt-12">
          <button className="flex items-center gap-1 bg-white text-black py-1 sm:py-1.5 md:py-2 px-4 sm:px-6 md:px-8 text-sm sm:text-base md:text-xl rounded-lg hover:bg-opacity-80">
            <svg
              className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
            Play
          </button>
          <button className="flex items-center gap-1 sm:gap-2 bg-gray-500 bg-opacity-50 text-white py-1 sm:py-1.5 md:py-2 px-4 sm:px-6 md:px-8 text-sm sm:text-base md:text-xl rounded-lg hover:bg-opacity-70">
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;