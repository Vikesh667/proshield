import TopSection from "../atom/TopSection"

const FaqPages=()=>{
  const content={
    heading:"Frequently asked questions",
    text:"Frequently asked questions"
  }
  return(
   <div className="w-full h-full">
   <TopSection content={content}/>
   </div>
  )
}
export default FaqPages