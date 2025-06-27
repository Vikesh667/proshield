import { FaArrowRight } from "react-icons/fa";
import iconHeading from "../../assets/icon-sub-heading.svg";
import { posts } from "../../constant/data";

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
      <div className="w-full h-[55vh] flex gap-10 bg-center bg-cover">
        {posts.map((post,index) => (
          <div
            key={index}
            className="group w-full h-full relative flex items-center overflow-hidden"
            onMouseEnter={() => {
              setHovered(true);
              setContent(
                <div className="flex flex-col items-center">
                  <span className="text-sm">View</span>
                </div>
              );
            }}
            onMouseLeave={() => {
              setHovered(false);
              setContent(null);
            }}
          >
            <img
              className="w-full h-full object-cover rounded-4xl group-hover:scale-110 transition duration-500"
              src={post.image}
              alt={post.title}
            />

            <div className="flex items-center absolute bottom-0 w-full py-7 z-10">
              <h1 className="text-white text-2xl w-3/4 ml-5 tracking-tighter">
                {post.title}
              </h1>
              <button className="p-3 bg-white text-blue-700 rounded-full hover:text-white hover:bg-blue-700">
                <FaArrowRight />
              </button>
            </div>
            <div className="absolute inset-0 bg-white/20 scale-0 group-hover:scale-[2.5] rotate-[-45deg] transition-transform duration-500 ease-out origin-center pointer-events-none" />
          </div>
        ))}
      </div>
    </div>
  );
};
export default LatestProjects;
