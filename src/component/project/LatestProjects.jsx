import { FaArrowRight } from "react-icons/fa";
import iconHeading from "../../assets/icon-sub-heading.svg";
import { posts } from "../../constant/data";
import Post from "../../atom/Post";

const LatestProjects = ({ setContent, setHovered }) => {
  return (
    <div className="w-full min-h-screen flex flex-col gap-20 py-25 px-25">
      <div className="flex flex-col items-center">
        <div className="flex gap-3 items-center mb-5">
          <img src={iconHeading} className="text-white" />
          <h1 className="text-sm uppercase font-semibold tracking-widest">
            latest post
          </h1>
        </div>
        <div className=" flex  gap-2 justify-center mb-5">
          <h1 className="text-5xl font-semibold font-serif  text-indigo-950">
            Our latest
          </h1>
          <h1 className="text-5xl text-center font-semibold font-serif  bg-gradient-to-r bg-blue-900 to-blue-300 bg-clip-text text-transparent ">
            insight blog
          </h1>
        </div>
      </div>
      <div className="w-full h-[55vh] flex gap-10 bg-center bg-cover ">
        {posts.map((post,index) => (
         <Post post={post} setContent={setContent} setHovered={setHovered} index={index}/>
        ))}
      </div>
    </div>
  );
};
export default LatestProjects;
