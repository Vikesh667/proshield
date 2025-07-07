import { FaArrowRight } from "react-icons/fa";
import iconHeading from "../../assets/icon-sub-heading.svg";
import { posts } from "../../constant/data";
import Post from "../../atom/Post";
import { motion } from "framer-motion";

const LatestProjects = ({ setContent, setHovered }) => {
  return (
    <div className="w-full flex flex-col gap-16 py-10 px-4 md:px-10 lg:px-20 bg-white">
      {/* Heading */}
      <motion.div
        className="flex flex-col items-center text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Top line with icon */}
        <div className="flex gap-3 items-center mb-4">
          <img src={iconHeading} className="w-6 h-6" alt="heading-icon" />
          <h1 className="text-sm uppercase font-semibold tracking-widest text-gray-700">
            Latest post
          </h1>
        </div>

        {/* Main heading */}
        <div className="flex flex-wrap justify-center gap-2">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold font-serif text-indigo-950">
            Our latest
          </h1>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold font-serif bg-gradient-to-r from-blue-900 to-blue-300 bg-clip-text text-transparent">
            insight blog
          </h1>
        </div>
      </motion.div>

      {/* Posts Section */}
      <motion.div
        className="w-full h-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          visible: { transition: { staggerChildren: 0.2 } },
        }}
      >
        {posts.map((post, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Post
              post={post}
              setContent={setContent}
              setHovered={setHovered}
              index={index}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Bottom spacing to prevent footer overlap */}
      <div className="h-20" />
    </div>
  );
};

export default LatestProjects;
