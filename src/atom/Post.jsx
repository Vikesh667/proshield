import { FaArrowRight } from "react-icons/fa";

const Post = ({post,setContent,setHovered,index}) => {
  return (
    <div
      key={index}
      className="group w-full h-full relative flex items-center overflow-hidden rounded-4xl"
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
      <div className="absolute rounded-3xl inset-0 bg-white/20 scale-0 group-hover:scale-[2.5] rotate-[-45deg] transition-transform duration-500 ease-out origin-center pointer-events-none" />
    </div>
  );
};
export default Post;
