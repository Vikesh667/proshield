import { blogsdetails } from "../../constant/data";
import quoteImage from "../../assets/testimonial-quote.svg";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const BlogsComponent = () => {
  return (
    <div className="w-full min-h-screen py-5 px-5 lg:py-25 lg:px-25 ">
      {blogsdetails.map((blog) => (
        <div className="w-full h-full flex flex-col gap-8">
          <img src={blog.image} alt="" className="w-full h-full rounded-4xl" />
          <div className="w-full h-full flex flex-col gap-10 lg:px-28">
            <p className="text-lg  tracking-normal text-gray-500 opacity-90">
              {blog.para1}
            </p>
            <p className="text-lg   tracking-normal text-gray-500 opacity-90">
              {blog.para2}
            </p>
            <div className="w-full h-72 lg:h-44 bg-indigo-950 rounded-4xl flex flex-col lg:flex-row justify-center p-7 tracking-tight gap-5">
              <img className="lg:-mt-25 w-10 h-10" src={quoteImage} />{" "}
              <h2 className="text-white text-lg lg:text-2xl">{blog.quote}</h2>
            </div>
            <p className="text-md  tracking-normal text-gray-500 opacity-90">
              {blog.description}
            </p>
            <div className="w-full h-full flex flex-col gap-5">
              <h1 className="text-3xl lg:text-5xl font-semibold text-indigo-950">
                {blog.heading}
              </h1>
              <p className="text-md  tracking-normal text-gray-500 opacity-90">
                {blog.description}
              </p>
              <ul className="w-full flex flex-col gap-5 ml-7">
                {blog.lists.map((lis) => (
                  <li className="list-disc text-md pr-5 lg:text-xl text-gray-500 opacity-90">
                    {lis}
                  </li>
                ))}
              </ul>
              <p className="text-md  tracking-normal text-gray-500 opacity-90 mt-5">
                {blog.description2}
              </p>
            </div>
          </div>
        </div>
      ))}
      <div className="w-full h-full flex-col lg:flex-row py-10 lg:px-28 gap-5  mt-10 flex items-start lg:items-center justify-between">
        <div className="flex items-center gap-5 flex-col lg:flex-row ">
          <h1 className="text-black font-semibold text-xl">Tags:</h1>
          <button className="bg-gradient-to-r from-5% bg-indigo-500 via-55% to-sky-500 py-2 px-5 text-lg text-white rounded-lg">
            Security
          </button>
          <button className="bg-gradient-to-r from-5% bg-indigo-500 via-55% to-sky-500 py-2 px-5 text-lg text-white rounded-lg">
            Protection
          </button>
          <button className="bg-gradient-to-r from-5% bg-indigo-500 via-55% to-sky-500 py-2 px-5 text-lg text-white rounded-lg">
            Innovation
          </button>
        </div>
        <div className="flex gap-5 items-center text-xl">
          <span className="bg-gradient-to-r from-5% bg-indigo-500 via-55% to-sky-500 p-2 rounded-md text-white">
            <FaFacebookF />
          </span>
          <span className="bg-gradient-to-r from-5% bg-indigo-500 via-55% to-sky-500 p-2 rounded-md text-white">
            <FaLinkedinIn />
          </span>
          <span className="bg-gradient-to-r from-5% bg-indigo-500 via-55% to-sky-500 p-2 rounded-md text-white">
            <FaInstagram />
          </span>
          <span className="bg-gradient-to-r from-5% bg-indigo-500 via-55% to-sky-500 p-2 rounded-md text-white">
            <FaXTwitter />
          </span>
        </div>
      </div>
    </div>
  );
};
export default BlogsComponent;
