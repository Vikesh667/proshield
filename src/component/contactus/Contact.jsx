import iconHeading from "../../assets/icon-sub-heading.svg";
import TopSection from "../../atom/TopSection";
import { contacts } from "../../constant/data";
import contactbg from "../../assets/contact-box-bg.jpg";
import Button from "../../atom/Button";

const Contact = () => {
  const content = {
    heading: "Contact us",
    text: "Contact us",
  };
  return (
    <div className="w-full min-h-screen overflow-hidden">
      <TopSection content={content} />
      <div className="w-full h-full  pt-5 lg:pt-20 overflow-hidden">
        <div className="w-full flex flex-col items-center gap-4 ">
          <div className="flex gap-5">
            <img src={iconHeading} />
            <h1 className="uppercase tracking-widest font-bold text-[#010535]">
              contact us
            </h1>
          </div>
          <div className="w-full flex flex-col items-center">
            <h1 className="text-2xl lg:text-6xl font-bold text-[#010535]">
              Do you have questions?
            </h1>
            <h1 className="text-2xl lg:text-5xl bg-gradient-to-r bg-indigo-600 via-30% to-blue-400 bg-clip-text font-bold">
              <span className=" text-transparent">ask us anytime</span>
            </h1>
          </div>
        </div>
        <div className="w-full h-full mt-30 flex flex-col items-center relative">
          <div className="lg:w-[70vw] w-[80%] flex flex-col lg:flex-row justify-center rounded-2xl bg-blue-500 absolute -top-20 z-10">
            {contacts.map((contact) => (
              <div className="flex flex-col items-start p-6 lg:p-10 w-full lg:w-84 justify-center gap-3 lg:gap-5 border-b-[0.1px] lg:border-r-[0.1px] border-gray-300/30 last:border-r-0">
                <div className="flex flex-col items-start justify-start gap-3 lg:gap-5">
                  <div className="bg-white p-2 lg:p-4 rounded-full">
                    <img
                      src={contact.icon}
                      alt="icon"
                      className="w-7 h-7 lg:w-10 lg:h-10 object-contain"
                    />
                  </div>
                  <h1 className="text-lg lg:text-xl capitalize text-white">
                    {contact.heading}
                  </h1>
                </div>
                <div>
                  <h1 className="text-sm lg:text-md font-semibold text-white">
                    {contact.para1}
                  </h1>
                  <h1 className="text-sm lg:text-md text-white">
                    {contact.para2}
                  </h1>
                </div>
              </div>
            ))}
          </div>

          <div className="w-full min-h-screen px-5 lg:py-20 lg:px-20">
            <div className="relative w-full h-[200vh] lg:h-full rounded-4xl overflow-hidden">
              <img
                src={contactbg}
                alt="Contact Background"
                className="w-full h-full object-cover"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(270deg, rgba(1, 5, 53, 0.28) 43.57%, rgba(1, 5, 53, 0.8) 100%)",
                  zIndex: 1,
                }}
              />
              <div className="w-full h-full absolute top-50 lg:top-0 flex items-center justify-center">
                <form className="w-full max-w-6xl mx-auto  bg-opacity-90 p-10 rounded-2xl shadow-lg z-10">
                  <h1 className="text-3xl font-semibold text-center text-white mb-8">
                    Get in touch with us
                  </h1>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input
                      type="text"
                      placeholder="First Name"
                      className="p-4 rounded-md border bg-white border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="p-4 rounded-md border bg-white border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                      type="text"
                      placeholder="Enter Your Phone No"
                      className="p-4 rounded-md border bg-white border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                      type="email"
                      placeholder="Enter Your E-mail"
                      className="p-4 rounded-md border bg-white border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div className="mt-6">
                    <textarea
                      rows="5"
                      placeholder="Your Message"
                      className="w-full p-5 bg-white rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                    ></textarea>
                  </div>

                  <div className="mt-10 text-center">
                    <Button text="Submit Message" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-full overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14688.159233904453!2d72.8257178!3d21.1702406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f8c97d8ea31%3A0x409aeb86b6b1c0c5!2sSurat%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
            width="100%"
            height="600"
            allowFullScreen=""
            loading="lazy"
            style={{ border: 0 }}
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
