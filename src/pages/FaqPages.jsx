import TopSection from "../atom/TopSection"
import FaqComponent from "../component/pagecomponent/FaqComponent"

const FaqPages=()=>{
  const content={
    heading:"Frequently asked questions",
    text:"Frequently asked questions"
  }
  return(
   <div className="w-full h-full">
   <TopSection content={content}/>
   <FaqComponent/>
   </div>
  )
}
export default FaqPages