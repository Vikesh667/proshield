import TopSection from "../../atom/TopSection"
import { gallery } from "../../constant/data"

const Imagegallery=()=>{
    const content={
        heading:"Image gallery",
        text:"Image gallery"
    }
    return(
        <div className="w-full min-h-screen overflow-hidden">
          <TopSection content={content}/>
          <div className="w-full h-auto grid grid-cols-1 lg:grid-cols-3 px-5 py-10 lg:py-20 lg:px-20 gap-10 ">
            {
                gallery.map((image)=>(
                    <img src={image} className="w-full h-[350px] rounded-3xl bg-center"/>
                ))
            }
          </div> 
        </div>
    )
}
export default Imagegallery