import heroImage from "../assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <div
      className="w-full h-screen bg-cover bg-center relative overflow-hidden flex justify-start opacity-95 bg-no-repeat"
    >
        <img className="w-full h-full" src={heroImage}/>
      <div className="w-2/3 h-full p-30 flex flex-col gap-10 absolute mt-5">
        <h3 className="text-white uppercase text-xl hover:text-black">welcome cyber security</h3>
        <h1 className="text-white text-7xl font-bold"> Secure your world, effortlessly today!</h1>
        <p  className="text-white/90 mr-20 text-lg">Protect your digital world with seamless, cutting-edge cybersecurity solutions designed to safeguard your data, systems, and peace of mind.</p>
       <div></div>
      </div>
    </div>
  );
};

export default HeroSection;
