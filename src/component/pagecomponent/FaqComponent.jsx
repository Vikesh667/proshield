import Accordion from "../../atom/Accordion";
import CommonCard from "../../atom/CommonCard";
import Contact from "../../atom/Contact";
import { faq } from "../../constant/data";
const FaqComponent = () => {
  const faqs = [
    "General Security",
    "Services And Solutions FAQs",
    "Incident Response",
    "Cloude Security",
  ];
  return (
    <div className="w-full min-h-screen px-5 py-10 lg:px-28 lg:py-28 flex flex-col lg:flex-row">
     <div className="w-full lg:w-1/2 flex h-full lg:sticky top-10">
           <div className=" flex-col gap-5 ">
        <div className="w-full  flex flex-col gap-5 items-center p-5 bg-gray-100 rounded-lg">
          {faqs.map((faq,index) => (
            <CommonCard item={faq} key={index}/>
          ))}
        </div>
         <Contact />
      </div>
     </div>
      <div className="w-full h-full flex-col">
        <div className="lg:p-10 ">
          <h1 className="text-2xl mt-5  lg:text-5xl font-sans font-bold text-[#010535] mb-5">General security</h1>
          <Accordion
            data={faq}
            openHeight="28vh"
            closedHeight="10vh"
            bgOpen="bg-gradient-to-r from-blue-500 to-teal-700"
            bgClosed="bg-white"
            textOpen="text-white"
            textClosed="text-gray-900"
          />
        </div>
        <div className="lg:p-10 ">
          <h1 className="text-2xl mt-5  lg:text-5xl font-sans font-bold text-[#010535] mb-5">Services And Solutions FAQs</h1>
          <Accordion
            data={faq}
            openHeight="28vh"
            closedHeight="10vh"
            bgOpen="bg-gradient-to-r from-blue-500 to-teal-700"
            bgClosed="bg-white"
            textOpen="text-white"
            textClosed="text-gray-900"
          />
        </div>
        <div className="lg:p-10 ">
          <h1 className="text-2xl mt-5  lg:text-5xl font-sans font-bold text-[#010535] mb-5">Incident Response</h1>
          <Accordion
            data={faq}
            openHeight="28vh"
            closedHeight="10vh"
            bgOpen="bg-gradient-to-r from-blue-500 to-teal-700"
            bgClosed="bg-white"
            textOpen="text-white"
            textClosed="text-gray-900"
          />
        </div>
         <div className="lg:p-10 ">
          <h1 className="text-2xl mt-5  lg:text-5xl font-sans font-bold text-[#010535] mb-5">Cloud Security</h1>
          <Accordion
            data={faq}
            openHeight="28vh"
            closedHeight="10vh"
            bgOpen="bg-gradient-to-r from-blue-500 to-teal-700"
            bgClosed="bg-white"
            textOpen="text-white"
            textClosed="text-gray-900"
          />
        </div>
      </div>
    </div>
  );
};
export default FaqComponent;
