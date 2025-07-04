const ChooseUsCard=({item})=>{
    return(
        <div className="flex  gap-5 -mt-4 bg-white px-3 lg:px-7 py-3 items-start lg:items-center overflow-hidden rounded-2xl lg:rounded-4xl relative group z-10">
            <img
              src={item.icon}
              className="w-14 h-14 lg:w-20 lg:h-20 group-hover:invert transition duration-500 z-10"
            />
           <div className="flex flex-col gap-3 lg:ml-3">
              <h2 className="text-md lg:text-xl capitalize text-indigo-950 font-semibold font-serif z-10 group-hover:text-white">
                {item.heading}
              </h2>
              <p className="text-gray-500 text-md lg:text-lg tracking-tight mr-5 z-10 group-hover:text-white">
               {item.para}
              </p>
            </div>
            <div className="w-full h-full bg-gradient-to-l bg-blue-500 from-60% to-indigo-600 rounded-4xl absolute inset-0 top-0 left-0 transform -translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition duration-500"></div>
          </div>
    )
}
export default ChooseUsCard