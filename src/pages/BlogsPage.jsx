import Post from "../atom/Post";
import TopSection from "../atom/TopSection";
import { allPosts } from "../constant/data";

const BlogsPage = () => {
  const content = {
    heading: "Latest blog",
    text: "Blog",
  };
  return (
   <div className="w-full min-h-screen overflow-hidden ">
  <TopSection content={content} />

  <div className="w-full min-h-[60rem] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-20 py-20">
    {allPosts.map((post) => (
      <Post key={post.id} post={post} />
    ))}
  </div>
</div>

  );
};
export default BlogsPage;
