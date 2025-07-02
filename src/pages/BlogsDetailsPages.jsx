import TopSection from "../atom/TopSection"
import BlogsComponent from "../component/blogs/BlogsComponent"

const BlogsDetailsPages=()=>{
  const content={
    heading:"The linux threat you need ...",
    text:"Blogs https://Html.Awaikenthemes.Com/ The linux threat you need ..."
  }
  return(
   <div className="w-full h-full overflow-hidden">
   <TopSection content={content}/>
   <BlogsComponent/>
   </div>
  )
}
export default BlogsDetailsPages