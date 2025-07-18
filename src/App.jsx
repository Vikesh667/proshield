import React, { Suspense, useEffect, useState } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

// Layout and loader
import Layout from "./component/layout/Layout";
import FullPageLoader from "./atom/FullPageLoader";
import Video from "./component/home/Video";
import Login from "./component/auth/Login";
import Protected from "./component/auth/Protected";
import Dashbord from "./component/dashbord/Dashbord";
import DashboardHome from "./component/dashbord/DashbordHome";
import Settings from "./component/dashbord/setting/Setting";
import Register from "./component/auth/Register";
import AllMarquee from "./component/dashbord/AllMarquee";
import AllUser from "./component/dashbord/user/AllUser";
import EditUuser from "./component/dashbord/user/EditUser";

// Lazy-loaded pages
const HomePages = React.lazy(() => import("./pages/HomePages"));
const AboutUsPage = React.lazy(() => import("./pages/AboutUsPage"));
const Services = React.lazy(() => import("./pages/Services"));
const BlogsPage = React.lazy(() => import("./pages/BlogsPage"));
const Contactus = React.lazy(() => import("./pages/Contactus"));
const Projects = React.lazy(() => import("./component/pagecomponent/Projects"));
const Teams = React.lazy(() => import("./component/pagecomponent/Teams"));
const Pricing = React.lazy(() => import("./pages/Pricing"));
const Imagegallery = React.lazy(() =>
  import("./component/pagecomponent/ImageGallery")
);
const VideoGallery = React.lazy(() =>
  import("./component/pagecomponent/VideoGallery")
);
const ServicesDetails = React.lazy(() => import("./pages/ServicesDetails"));
const ProjectDetailsPage = React.lazy(() =>
  import("./pages/ProjectDetailsPage")
);
const TeamDetailsPage = React.lazy(() => import("./pages/TeamDetailsPage"));
const BlogsDetailsPages = React.lazy(() => import("./pages/BlogsDetailsPages"));
const TestimonialPages = React.lazy(() => import("./pages/TestimonialPages"));
const FaqPages = React.lazy(() => import("./pages/FaqPages"));
const PageNotFound = React.lazy(() => import("./pages/PageNotFound")); // ✅ Lazy-loaded now

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 800 });

    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  // ✅ All routes defined once
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register/>}/>
        <Route path="/unauthorized" element={<PageNotFound />} />
        <Route
          path="/admin/dashboard"
          element={
            <Protected allowedRoles={["admin"]}>
              <Dashbord />
            </Protected>
          }
        >
          <Route index element={<DashboardHome />} />
          <Route path="settings" element={<Settings />} />
          <Route path="marquee" element={<AllMarquee/>}/>
          <Route path="users" element={<AllUser/>}/>
          <Route path="edit/:id" element={<EditUuser/>}/>
        </Route>

        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <Protected>
                <HomePages />
              </Protected>
            }
          />
          <Route
            path="image"
            element={
              <Protected>
                <HomePages />
              </Protected>
            }
          />
          <Route
            path="video"
            element={
              <Protected>
                <Video />
              </Protected>
            }
          />
          <Route
            path="slider"
            element={
              <Protected>
                <HomePages />
              </Protected>
            }
          />

          {/* Public routes */}
          <Route path="about" element={<AboutUsPage />} />
          <Route path="services" element={<Services />} />
          <Route path="blog" element={<BlogsPage />} />
          <Route path="contact" element={<Contactus />} />
          <Route path="project" element={<Projects />} />
          <Route path="team" element={<Teams />} />
          <Route path="price" element={<Pricing />} />
          <Route path="gallery" element={<Imagegallery />} />
          <Route path="videogallery" element={<VideoGallery />} />
          <Route path="testimonials" element={<TestimonialPages />} />
          <Route path="faqs" element={<FaqPages />} />
          <Route path="servicedetails" element={<ServicesDetails />} />
          <Route path="blogsdetails" element={<BlogsDetailsPages />} />
          <Route path="projectdetails" element={<ProjectDetailsPage />} />
          <Route path="teamdetails" element={<TeamDetailsPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </>
    )
  );

  if (loading) return <FullPageLoader />;

  return (
    <Suspense fallback={<FullPageLoader />}>
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default App;
