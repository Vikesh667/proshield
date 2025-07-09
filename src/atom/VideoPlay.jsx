const VideoPlay = ({ setOpen }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
    
      <button
        onClick={() => setOpen(false)}
        className="absolute top-4 right-6 text-white text-2xl font-bold hover:text-red-400 transition duration-300"
      >
        ×
      </button>

    
      <div className="relative bg-black rounded-2xl overflow-hidden shadow-xl max-w-4xl w-full">
        <video
          controls
          autoPlay
          className="w-full h-auto rounded-2xl"
        >
          <source
            src="https://www.w3schools.com/html/mov_bbb.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default VideoPlay;
