import { useEffect, useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import AddMarquee from "./setting/AddMarquee";

const AllMarquee = () => {
  const [marquee, setMarquee] = useState([]);
  const [open, setOpen] = useState(false);

  const getMarquees = async () => {
    const responve = await fetch("https://proshieldcybersecurity.onrender.com/api/marquee/");
    const data = await responve.json();
    setMarquee(data.marquees);
    console.log(data.marquees);
  };
  useEffect(() => {
    getMarquees();
  }, []);

  return (
    <div className="w-full min-h-screen bg-gray-300">
      <div className="w-full h-32 bg-white flex items-center justify-between px-10">
        <h1>Image Upload</h1>
        <button
          onClick={() => setOpen(true)}
          className="py-3 px-5 text-lg text-white font-sans font-semibold bg-blue-500 rounded-lg shadow-lg hover:scale-110 transition-all duration-300"
        >
          Upload
        </button>
      </div>
      {open && <AddMarquee />}
      <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5  p-7 lg:p-10 shadow-lg">
        {marquee?.map((image) => (
          <div className="w-72 h-96 bg-white rounded-2xl flex flex-col gap-3 items-center  overflow-hidden">
            <img className="w-full h-72" key={image._id} src={image.imageUrl} />
            <h1 className="">{image.title}</h1>
            <button className="p-2 bg-red-500 rounded-full shadow text-2xl text-white hover:scale-90 transition duration-300 cursor-pointer">
              <MdDeleteForever />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
export default AllMarquee;
