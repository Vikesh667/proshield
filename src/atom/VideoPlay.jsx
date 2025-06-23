const VideoPlay = ({ setOpen }) => {
  return (
    <div className="flex w-1/2 h-1/2 absolute top-1/2 left-0 transform translate-x-1/2 -translate-y-1/2 rounded-lg z-10 bg-black">
      <button
        onClick={() => setOpen(false)}
        className="absolute top-2 right-5 z-10 text-white text-xl"
      >
        X
      </button>

      <video width="750" height="500" controls autoPlay className="rounded-lg">
        <source 
          src="https://www.w3schools.com/html/mov_bbb.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlay;
