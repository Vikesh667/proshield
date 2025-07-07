import TeamCard from "../atom/TeamCard";
import TopSection from "../atom/TopSection";
import AboutSection from "../component/about/AboutSection";
import Benfit from "../component/about/Benfit";
import OurApproch from "../component/about/OurApproch";
import WhatWedo from "../component/about/WhatWeDo";
import Work from "../component/about/Work";
import WhyChooseUs from "../component/choose/WhyChooseUs";
import Testmonial from "../component/testmonial/Testmonial";
import Faq from "../component/faq/Faq";
const AboutUsPage = () => {
  const content = {
    heading: "About Us",
    text: "About Us",
  };
  return (
    <div className="relative overflow-hidden">
      <TopSection content={content} />
      <AboutSection />
      <OurApproch />
      <WhatWedo />
      <WhyChooseUs />
      <Work />
{/* 
     <div className="w-full h-[60vh] relative px-28">
       <TeamCard />
     </div> */}

      <Testmonial />
      <Benfit />
      <Faq />
    </div>
  );
};
export default AboutUsPage;
