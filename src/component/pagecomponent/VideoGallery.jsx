import { FaPlay } from "react-icons/fa6";
import TopSection from "../../atom/TopSection";
import { gallery } from "../../constant/data";
import { useState } from "react";
import VideoPlay from "../../atom/VideoPlay";

const VideoGallery = () => {
    const [open,setOpen]=useState(false)
  const content = {
    heading: "Video gallery",
    text: "Video gallery",
  };
  return (
    <div className="w-full min-h-screen overflow-hidden">
      <TopSection content={content} />
      <div className="w-full h-auto grid grid-cols-1 lg:grid-cols-3 py-10 lg:py-20 px-5 lg:px-20 gap-10 ">
        {gallery.map((image) => (
          <div className="w-full h-full relative group overflow-hidden rounded-3xl">
            <img
              src={image}
              className="w-full h-[350px] rounded-3xl bg-center"
            />
            <div className="w-full h-full absolute rounded-3xl inset-0 top-0 transform scale-0 group-hover:scale-110 transition duration-500 bg-blue-900/50 flex items-center justify-center">
              <span className="w-16  h-16 bg-gradient-to-br bg-indigo-800 via-20% from-blue-500 to-sky-400 rounded-full flex items-center justify-center transition-color duration-300">
                <FaPlay className="text-lg text-white z-20" 
                onClick={()=>setOpen(true)}
                />
              </span>
            </div>
           
          </div>
        ))}
         {open && <VideoPlay setOpen={setOpen}/>}
      </div>
    </div>
  );
};
export default VideoGallery;
