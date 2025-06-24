import { avatarList } from "../constant/data"

const Card=({counter,className})=>{
    return(
         <div className={`flex -space-x-4 `}>
              {avatarList.map((avatar, index) => (
                <div
                  key={index}
                  className={`relative group  overflow-hidden rounded-full ${className}`}
                >
                  <img src={avatar} className={` rounded-full ${className}`} />
                  <div className="absolute inset-0 bg-white/20 bg-opacity-10 transform scale-0 group-hover:scale-150 rotate-90 transition-transform duration-500 pointer-events-none" />
                </div>
              ))}
              <div className={`relative group overflow-hidden rounded-full bg-gradient-to-r from-blue-800 to-blue-400 text-white text-sm flex items-center justify-center border-2 border-white z-10 ${className}`}>
                <h1 className="text-xl font-semibold"> {counter}k</h1>
                <div className="absolute inset-0 bg-white/20 bg-opacity-10 transform scale-0 group-hover:scale-150 rotate-90 transition-transform duration-500 pointer-events-none" />
              </div>
            </div>
    )
}
export default Card