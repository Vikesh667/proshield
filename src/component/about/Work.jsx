import icon from "../../assets/icon-sub-heading.svg";
import workImage1 from "../../assets/how-it-work-image-1.jpg";
import workImage2 from "../../assets/how-it-work-image-2.jpg";

const Work = () => {
  const steps = [
    {
      number: "01",
      title: "assessment & planning",
      description:
        "We start by understanding your unique needs and potential risks. Through detailed assessment, we identify vulnerabilities and develop a plan.",
    },
    {
      number: "02",
      title: "implementation",
      description:
        "With a clear strategy, we implement customized cybersecurity solutions tailored to protect your data and infrastructure.",
    },
    {
      number: "03",
      title: "ongoing support & maintenance",
      description:
        "We provide continuous support, monitoring, and updates to ensure your security systems remain effective and up-to-date.",
    },
  ];

  return (
    <div className="w-full flex flex-col lg:flex-row items-center justify-center px-5 py-10 lg:py-28 gap-16">
      {/* Left Section */}
      <div className="w-full lg:w-1/2 relative flex flex-col items-start gap-10">
        {/* Heading */}
        <div className="flex items-center gap-2 text-black">
          <img src={icon} alt="icon" className="w-6 h-6" />
          <span className="text-lg uppercase font-serif tracking-wider">how it works</span>
        </div>

        {/* Title */}
        <div className="-mt-4">
          <h1 className="text-2xl lg:text-5xl font-semibold font-serif text-indigo-950">
            Streamlined process,
          </h1>
          <h1 className="text-2xl lg:text-5xl font-semibold font-serif bg-gradient-to-r from-blue-900 to-blue-300 bg-clip-text text-transparent">
            cyber protection security
          </h1>
        </div>

        {/* Timeline */}
        <div className="relative w-full">
          {/* Dotted Line */}
          <div className="absolute left-6 lg:left-10 top-10 h-72  border-l-2 border-dashed border-blue-500"></div>

          {/* Step items */}
          <div className="flex flex-col gap-5 mt-4 relative">
            {steps.map((step, index) => (
              <div key={index} className="flex items-start gap-6">
                {/* Number Circle aligned to the line */}
                <div className="relative">
                  <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-indigo-500 to-blue-400 rounded-full flex items-center justify-center text-white font-bold text-lg lg:text-2xl shadow-md relative left-6 lg:left-10 -translate-x-1/2" >
                    {step.number}
                  </div>
                </div>

                {/* Text Content aligned vertically with number */}
                <div className="flex flex-col">
                  <h2 className="text-lg lg:text-2xl capitalize font-semibold text-[#010535]">
                    {step.title}
                  </h2>
                  <p className="text-sm lg:text-base text-gray-700 opacity-90 leading-relaxed lg:mt-2">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Image */}
      <div className="w-full lg:w-1/2 relative flex justify-center items-center mt-10 lg:mt-0">
        <img
          src={workImage1}
          alt="Main"
          className="rounded-3xl w-full max-w-md lg:max-w-lg h-auto object-cover"
        />
        <img
          src={workImage2}
          alt="Overlay"
          className="absolute w-40 h-40 lg:w-84 lg:h-84 object-cover rounded-3xl border-8 border-white -left-5 top-1/4"
        />
      </div>
    </div>
  );
};

export default Work;
