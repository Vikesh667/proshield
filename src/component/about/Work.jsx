import icon from "../../assets/icon-sub-heading.svg";
import workImage1 from "../../assets/how-it-work-image-1.jpg";
import workImage2 from "../../assets/how-it-work-image-2.jpg";
const Work = () => {
  const num = ["01", "02", "03"];
  return (
    <div className="min-w-full min-h-screen   flex items-center justify-center px-5 py-20">
      <div className="flex flex-col w-full h-full items-start justify-center  gap-10  relative  ml-25">
        <div className="flex items-center text-black  mt-10 ">
          <img src={icon} alt="icon" className="w-6 h-6 " />
          <span className="ml-2 text-lg text-black uppercase font-serif tracking-wider">
            how it work
          </span>
        </div>
        <div className="-mt-5 ">
          <h1 className="text-5xl font-semibold font-serif tracking-tighter text-indigo-950">
            Streamlined process,
          </h1>
          <h1 className="text-5xl font-semibold font-serif tracking-tight bg-gradient-to-r bg-blue-900 to-blue-300 bg-clip-text text-transparent">
            cyber protection security
          </h1>
        </div>
        <div className="w-1 h-84 border-r-2 border-dashed border-blue-500 ml-8" />
        <div className="absolute top-1/3 mt-9 left-0 flex flex-col gap-24 w-full h-full">
          {num.map((n) => (
            <div className="w-16 h-16 bg-gradient-br bg-indigo-500 via-50% to-blue-400 flex items-center justify-center rounded-full">
              <span className="text-white text-2xl font-bold">{n}</span>
            </div>
          ))}
          <div className="flex absolute ml-20 flex-col gap-10">
            <div className="flex flex-col px-5 gap-5">
                <h1 className="text-2xl capitalize font-semibold text-[#010535]">assessment & planning</h1>
                <p className="text-md text-gray-700 opacity-90 tracking-wide font-sans">We start by understand your unique needs potential risks Through detailed assessment we identify vulnerabilities and develop.</p>
            </div>
              <div className="flex flex-col px-5 gap-5">
                <h1 className="text-2xl capitalize font-semibold text-[#010535]">implementation</h1>
                <p className="text-md text-gray-700 opacity-90 tracking-wide font-sans">We start by understand your unique needs potential risks Through detailed assessment we identify vulnerabilities and develop.</p>
            </div>
               <div className="flex flex-col px-5 gap-5">
                <h1 className="text-2xl capitalize font-semibold text-[#010535]">ongoing support & maintenance</h1>
                <p className="text-md text-gray-700 opacity-90 tracking-wide font-sans">We start by understand your unique needs potential risks Through detailed assessment we identify vulnerabilities and develop.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-full  flex justify-center mr-10 relative">
        <img src={workImage1} alt="" className="rounded-4xl h-full" />
        <img
          src={workImage2}
          alt=""
          className="absolute top-1/4 mt-4 left-0 border-8 border-white rounded-4xl"
        />
      </div>
    </div>
  );
};

export default Work;
