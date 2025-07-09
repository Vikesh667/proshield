import TopSection from "../atom/TopSection"
import TeamDetailsComponent from "../component/pagecomponent/TeamDetailsComponenet"

const TeamDetailsPage=()=>{
    const content={
    heading:"Sophia Carter",
     text:"Team https:// Html.Awaikenthemes.Com/ Sophia Carter"
  }
  return(
   <div className="w-full h-full">
   <TopSection content={content}/>
   <TeamDetailsComponent/>
   </div>
  )
}
export default TeamDetailsPage