import TeamCard from "../atom/TeamCard";
import TopSection from "../atom/TopSection";
import AboutSection from "../component/about/AboutSection";
import Benfit from "../component/about/Benfit";
import OurApproch from "../component/about/OurApproch";
import WhatWedo from "../component/about/WhatWeDo";
import Work from "../component/about/Work";
import WhyChooseUs from "../component/choose/WhyChooseUs";
import Testmonial from "../component/testmonial/Testmonial";

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
       <WhatWedo/>
      <WhyChooseUs/>
       <Work/>
     <div className="w-full min-h-screen flex flex-col justify-between items-center">
      <TeamCard/>
      </div>
      <Testmonial/>
      <Benfit/>
    </div>
  );
};
export default AboutUsPage;
