import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { ourteam } from "../../constant/data";
import TopSection from "../../atom/TopSection";

const Teams = ({setContent,setHovered}) => {
    const content={
        heading:"Our Team",
        text:"Team"
    }
  return (
  <div className="w-full min-h-screen">
    <TopSection content={content}/>
      <div className="w-full lg:h-[800px] grid grid-cols-1 lg:grid-cols-4 lg:px-25 px-5 gap-10 py-10">
      {ourteam.map((team) => (
        <div
          className="w-full h-full rounded-3xl overflow-hidden relative group"
          onMouseEnter={() => {
            setHovered(true);
            setContent(
              <div className="flex flex-col items-center ">
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
            className="w-full h-full group-hover:scale-110 transition duration-500"
            src={team.image}
          />
          <div className="absolute bottom-10 w-full  flex flex-col items-center">
            <h1 className="text-white text-xl font-semibold">{team.name}</h1>
            <h2 className="text-white text-md opacity-75">{team.expert}</h2>
          </div>
          <div className="w-full h-full absolute bg-white/30 inset-0  scale-0 group-hover:scale-110 transition duration-500">
            <div className="flex  space-x-5 items-center justify-center h-full cursor-pointer">
              <span className="w-10 h-10 rounded-full border-[1px] border-white flex items-center justify-center">
                <FaXTwitter className="text-lg text-[#FFFFFF] " />
              </span>
              <span className="w-10 h-10 rounded-full border-[1px] border-white flex items-center justify-center">
                {" "}
                <FaFacebookF className="text-lg text-[#FFFFFF] " />
              </span>
              <span className="w-10 h-10 rounded-full border-[1px] border-white flex items-center justify-center">
                {" "}
                <FaInstagram className="text-lg text-[#FFFFFF] " />
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
  );
};
export default Teams;
