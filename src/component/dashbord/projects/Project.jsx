import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../../../constant/data";

const Project = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="w-full min-h-screen bg-gray-300 p-5 overflow-y-scroll scrollbar">
      <h1 className="text-2xl text-[#010535] text-center py-5">Projects</h1>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-5">
        {projects.map((project, index) => (
          <motion.img
            key={index}
            onClick={() => setSelectedImage(project)}
            whileTap={{ scale: 0.95 }}
            className="w-72 h-72 object-cover cursor-pointer"
            src={project}
            alt={`Project ${index}`}
          />
        ))}
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.img
              src={selectedImage}
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.5 }}
              className="max-w-full max-h-full"
              alt="Full View"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Project;
