import TopSection from "../atom/TopSection"

const BlogsPage=()=>{
    const content={
        heading:"Latest blog",
        text:"Blog"
    }
    return(
        <div className="">
         <TopSection content={content}/>
        </div>
    )
}
export default BlogsPage 