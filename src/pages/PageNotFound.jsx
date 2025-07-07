import TopSection from "../atom/TopSection"
import notfoundImage from "../assets/404-error-img.png"
import Button from "../atom/Button"
const PageNoteFound=()=>{
    const content={
        heading:"Page not found",
        text:"404 error page"
    }
    return(
     <div className="w-full min-h-screen overflow-hidden">
      <TopSection content={content}/> 
      <div className="w-full h-full flex items-center justify-center flex-col gap-10 px-5 py-20">
        <img src={notfoundImage}/>
        <h1 className="text-3xl lg:text-6xl"><span className="text-[#010535] font-bold">Oops!</span><span className="bg-gradient-to-br bg-indigo-900 via-20% to-blue-500 bg-clip-text text-transparent">Page not found</span></h1>
        <Button text="BackToHome"/>
      </div>
     </div>
    )
}
export default PageNoteFound