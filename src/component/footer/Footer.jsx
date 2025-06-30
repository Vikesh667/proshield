import {
  FaFacebookF,
  FaInstagram,
  FaLocationArrow,
  FaPinterest,
  FaPinterestP,
  FaXTwitter,
} from "react-icons/fa6";
import footerBgImage from "../../assets/footer-bg.png";
import footerLogo from "../../assets/footer-logo.svg";
import { TiSocialPinterest } from "react-icons/ti";
import { TfiLocationArrow } from "react-icons/tfi";
import { footerItem } from "../../constant/data";
const Footer = () => {
  console.log(footerBgImage);
  return (
    <footer
      className="w-full h-auto bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: `url(${footerBgImage})` }}
    >
      <div className="w-full h-full bg-gradient-to-bl bg-blue-500 to-indigo-500 relative">
        <div className="w-full h-40 flex items-center justify-between px-30">
          <img src={footerLogo} alt="" />
          <div className="flex gap-10 relative group">
            <span className="border border-gray-100 p-3 rounded-full flex items-center justify-center group-hover:bg-white">
              <FaPinterestP className="text-white text-xl group-hover:text-blue-700 hover:!text-blue-500" />
            </span>
            <span className="border border-gray-100 p-3 rounded-full flex items-center justify-center group-hover:bg-white">
            
              <FaXTwitter className="text-white text-xl group-hover:text-blue-700 hover:!text-blue-500" />
            </span>
            <span className="border border-gray-100 p-3 rounded-full flex items-center justify-center group-hover:bg-white">
        
              <FaFacebookF className="text-white text-xl group-hover:text-blue-700 hover:!text-blue-500" />
            </span>
            <span className="border border-gray-100 p-3 rounded-full flex items-center justify-center group-hover:bg-white">
              <FaInstagram className="text-white text-xl group-hover:text-blue-700 hover:!text-blue-500" />{" "}
            </span>
          </div>
        </div>
       <hr className="w-[90%] mx-auto border-t border-white/20 my-6" />
        <div className="w-full h-72 px-30 py-25 flex justify-around -mt-10">
          <div className="flex flex-col gap-4">
          <h1 className="text-2xl text-white">Subscribe our newsletter:</h1>
          <h3 className="text-xl text-white">Protecting networks, systems data from evolving.</h3>
          <div className="flex gap-4 ">
            <input type="email" placeholder="Enter Your Email" className="py-5 px-5 w-72 rounded-full bg-white outline-none"/>
            <button className=" p-4 rounded-full bg-white hover:bg-indigo-950 hover:text-white transform hover:rotate-90 transition duration-500"><TfiLocationArrow className="text-4xl "/></button>
          </div>
          </div>
          <div className="flex gap-3 -mt-10">
           {
            footerItem.map((footeritem)=>(
              <div className="w-full h-full">
                <h1 className="text-white text-lg hover:text-indigo-950 cursor-pointer relative group py-2 overflow-hidden">
                  <span>{footeritem.title}</span>
                  <span className="h-[3px] w-16 bg-white absolute   bottom-0 left-0 transform -translate-x-full opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition duration-500"></span>
                  </h1>
                <ul className="w-full h-full mt-3 flex flex-col items-start gap-2">
                  {footeritem.list.map((lis)=>(
                    <li className="text-md text-white font-serif hover:text-indigo-950 cursor-pointer">{lis}</li>
                  ))}
                </ul>
              </div>
            ))
           }
          </div>
        </div>
         <hr className="w-full border-t border-white/20 my-6" />
  
        <div className="w-full h-20 bg-gradient-to-bl flex items-center justify-center -mt-5">
            <h1 className="text-white text-lg opacity-90">Copyright © 2025 All Rights Reserved.</h1>
        </div>
      
      </div>
    </footer>
  );
};

export default Footer;
