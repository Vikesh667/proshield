import images from "../assets/page-header-bg.jpg";
const TopSection = ({content}) => {
  return (
    <div
      className="w-full h-[55vh] bg-center bg-cover bg-no-repeat relative overflow-hidden"
      style={{ backgroundImage: `url(${images})` }}
    >

      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(270deg, rgba(1, 5, 53, 0.28) 43.57%, rgba(1, 5, 53, 0.8) 100%)",
          zIndex: 1,
        }}
      />
         <div className="absolute inset-0  top-0 left-0 transform translate-x-24 translate-y-40 z-10">
        <h1 className="text-7xl text-white font-bold">{content.heading}</h1>
        <h3 className="text-lg text-white mt-1">Home https://Html.Awaikenthemes.Com/ {content.text}</h3>
        </div>  
    </div>
  );
};
export default TopSection;
