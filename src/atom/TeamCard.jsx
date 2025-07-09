import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { ourteam } from "../constant/data";
import { motion } from "framer-motion";

const TeamCard = ({ setHovered, setContent }) => {
  const teams = ourteam.slice(0, 4);

  return (
    <div className="w-full px-5 flex justify-center lg:px-20 relative z-20 ">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-center w-full absolute lg:top-40 px-5 lg:px-0">
        {teams.map((team, index) => (
          <motion.div
            key={index}
            className="h-96 bg-black rounded-3xl overflow-hidden relative group transition-transform lg:-translate-y-24"
         
            onMouseEnter={() => {
              setHovered(true);
              setContent(<div className="text-sm">View</div>);
            }}
            onMouseLeave={() => {
              setHovered(false);
              setContent(null);
            }}
            initial={{ y: 10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: index * 0.3 }}
            viewport={{ once: true }}
          >
            <img
              src={team.image}
              alt={team.name}
              className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
            />

      
            <div className="absolute bottom-10 w-full text-center z-10">
              <h1 className="text-white text-xl font-semibold">{team.name}</h1>
              <p className="text-white text-sm opacity-75">{team.expert}</p>
            </div>

          
            <div className="absolute inset-0 bg-black/30 scale-0 group-hover:scale-100 transition duration-500 flex items-center justify-center gap-4 z-20">
              <span className="w-10 h-10 rounded-full border border-white flex items-center justify-center">
                <FaXTwitter className="text-white" />
              </span>
              <span className="w-10 h-10 rounded-full border border-white flex items-center justify-center">
                <FaFacebookF className="text-white" />
              </span>
              <span className="w-10 h-10 rounded-full border border-white flex items-center justify-center">
                <FaInstagram className="text-white" />
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TeamCard;
