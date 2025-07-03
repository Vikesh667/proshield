import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { ourteam } from "../constant/data";
import iconHeading from "../assets/icon-sub-heading.svg";
import ourteambg from "../assets/our-team-bg.png";
import { motion } from "framer-motion";
const TeamCard = ({ setHovered, setContent }) => {
  const teams = ourteam.slice(0, 4);
  return (
    <div className="w-full h-[70vh] bg-[#010535] bg-cover  relative">
      <img className="z-20" src={ourteambg} alt="" />
      <div className="flex flex-col items-center absolute top-20 left-1/3 -ml-5 z-20 ">
        <motion.div
          className="flex gap-3 items-center mb-5 text-white"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.4 }} // more precise trigger
        >
          <img src={iconHeading} alt="Icon" className="w-6 h-6 invert" />
          <h1 className="text-sm uppercase font-semibold tracking-widest text-white">
            Expert team
          </h1>
        </motion.div>

        <div className=" flex  flex-col gap-2 justify-center mb-20">
          <motion.h1
            className="text-5xl font-semibold font-serif tracking-tighter text-white"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, amount: 0.4 }}
          >
            Our expert team member
          </motion.h1>
        </div>
      </div>
      <div className="w-full h-96 flex gap-7 px-25  absolute -bottom-40">
        {teams.map((team,index) => (
          <motion.div
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
            key={index}
            initial={{ y: 1, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: index * 0.4 }}
            viewport={{once:true}}
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
          </motion.div>
        ))}
      </div>
    </div>
  );
};
export default TeamCard;
