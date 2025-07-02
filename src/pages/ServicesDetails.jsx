import TopSection from "../atom/TopSection"
import ServiceComponent from "../component/services/ServiceComponent"

const ServicesDetails=()=>{
 const content={
   heading:"Endpoint security solutions",
    text:"Services https://Html.Awaikenthemes.Com/ Endpoint security solutions"
  }
  return(
   <div className="w-full h-full ">
   <TopSection content={content}/>
   <ServiceComponent/>
   </div>
  )
}
export default ServicesDetails