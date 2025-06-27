import iconHeading from "../../assets/icon-sub-heading.svg";
import faqImage from "../../assets/faq-image.jpg";
import Accordion from "../../atom/Accordion";
const Faq = () => {
  return (
    <div className="w-full min-h-screen bg-gray-200 px-25 py-20 flex">
      <div className="flex flex-1 w-full h-full flex-col gap-10">
        <div className="flex flex-col items-start w-full">
          <div className="flex gap-3 items-center mb-5">
            <div className="flex items-center text-indigo-950">
              <img
                src={iconHeading}
                alt="icon"
                className="w-6 h-6 brightness-0 invert"
              />
              <span className="ml-2 text-xl tracking-wide uppercase">
                FAQ
              </span>
            </div>
          </div>
          <div className=" flex  flex-col  justify-center ">
            <h1 className="text-5xl font-semibold leading-16  font-sans tracking-normal text-[#010535]">
              Cybersecurity questions
            </h1>
            <h1 className="text-5xl font-semibold  font-sans tracking-normal bg-gradient-to-r bg-indigo-600 via-30% to-sky-400 bg-clip-text text-transparent">
              answered clearly
            </h1>
          </div>
        </div>
        <div className="w-full h-full flex items-center justify-start ">
          <img className="w-full h-full rounded-4xl p-2" src={faqImage} />
        </div>
      </div>
      <div className="flex flex-1 w-full h-full">
        <Accordion/>
      </div>
    </div>
  );
};
export default Faq;
