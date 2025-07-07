import TopSection from "../../atom/TopSection";
import { projects } from "../../constant/data";

const Projects = () => {
  const content = {
    heading: "Our projects",
    text: "Project",
  };
  return (
    <div className="w-full min-h-screen overflow-hidden">
      <TopSection content={content} />
      <div className=" w-full h-full grid grid-cols-1 lg:grid-cols-3 gap-10 px-5 lg:px-20 py-20">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`w-full h-auto overflow-hidden relative group rounded-4xl
    `}
          >
            <img
              className="w-full h-[450px] object-cover group-hover:scale-110 transition duration-500"
              src={project}
            />

            <div
              className={`flex flex-col items-start gap-4 justify-end w-full h-full absolute p-5 
         inset-0 left-0 bottom-0 transform
        transition duration-500
      `}
            >
              <button className="border-[1px] border-white text-white py-2 px-5 text-lg rounded-lg cursor-pointer">
                Authentication
              </button>
              <h1 className="text-white text-xl tracking-widest font-semibold mb-5">
                IoT Security Enhancement for Smart Devices
              </h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Projects;
