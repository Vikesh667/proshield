import TopSection from "../atom/TopSection";
import ProjectDetailComponent from "../component/project/ProjectDetailComponent";

const ProjectDetailsPage = () => {
  const content = {
    heading: "IoT security enhancement ...",
    text: "Blogs https://Html.Awaikenthemes.Com/ IoT security enhancement ..."
  };

  return (
    // REMOVE overflow-hidden from here
    <div className="w-full min-h-screen">
      <TopSection content={content} />
      <ProjectDetailComponent />
    </div>
  );
};

export default ProjectDetailsPage;