const VideoPlay = ({ setOpen }) => {
  return (
    <div className="flex w-full h-[90%] absolute top-1/2 left-20 transform  -translate-y-1/2 rounded-lg z-20 bg-black items-center">
      <button
        onClick={() => setOpen(false)}
        className="absolute top-2 right-5 z-50 text-white text-xl"
      >
        X
      </button>

      <video width="750" height="500" controls autoPlay className="rounded-lg w-full p-5">
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
