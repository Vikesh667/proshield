import iconHeading from "../assets/icon-sub-heading.svg";
import iconPhone from "../assets/icon-phone.svg";
const Contact = () => {
  return (
    <div className="bg-gradient-to-r from-5% bg-indigo-500 via-60% to-sky-300 p-10 rounded-2xl flex flex-col gap-5">
      <div className="flex items-center gap-3">
        <span className="bg-white w-14 h-14 flex items-center justify-center rounded-full">
          <img className="w-9 h-9" src={iconHeading} alt="heading" />
        </span>
        <h1 className="text-3xl font-semibold text-white">Proshield.</h1>
      </div>
      <p className="text-white text-md tracking-wide opacity-75 pr-5">
        We are a leading cybersecurity firm dedicated to protecting businesses
        from digital threats.
      </p>
      <hr className="border-white/20" />
      <div className="flex items-center gap-4">
        <div className="relative">
          <span className="absolute h-full w-full animate-ping rounded-full bg-white opacity-75" />
          <span className="relative flex w-14 h-14 rounded-full bg-gradient-to-r from-indigo-500 to-blue-400 items-center justify-center z-10">
            <img className="w-6 h-6" src={iconPhone} alt="phone" />
          </span>
        </div>
        <div>
          <h1 className="text-white text-xl">+(0) 123 - 456 - 789</h1>
          <p className="text-white opacity-75 text-sm">Get free consultancy</p>
        </div>
      </div>
    </div>
  );
};
export default Contact;
