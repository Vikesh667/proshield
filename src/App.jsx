import React from "react";
import { createBrowserRouter, createRoutesFromChildren, Route, RouterProvider, Routes } from "react-router-dom";
import Layout from "./component/layout/Layout";
import HomePages from "./pages/HomePages"
import AboutUsPage from "./pages/AboutUsPage";
import Services from "./pages/Services";
import Pages from "./pages/Pages";
import Contactus from "./pages/Contactus";
import BlogsPage from "./pages/BlogsPage";
import Projects from "./component/pagecomponent/Projects";
import Teams from "./component/pagecomponent/Teams";
import Prices from "./component/pagecomponent/Prices";
import Pricing from "./pages/Pricing";
import Imagegallery from "./component/pagecomponent/ImageGallery";
import VideoGallery from "./component/pagecomponent/VideoGallery";
import PageNoteFound from "./pages/PageNotFound";

const App = () => {

  const router=createBrowserRouter(
    createRoutesFromChildren(
      <Route path="/" element={<Layout/>}>
       <Route index element={<HomePages/>}/>
       <Route path="/video" element={<HomePages/>}/>
       <Route path="/image" element={<HomePages/>}/>
        <Route path="/image" element={<HomePages/>}/>
        <Route path="/about" element={<AboutUsPage/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="blog" element={<BlogsPage/>}/>
        <Route path="/page" element={<Pages/>}/>
        <Route path="/contact" element={<Contactus/>}/>
         <Route path="/project" element={<Projects/>}/>
         <Route path="/team" element={<Teams/>}/>
         <Route path="/price" element={<Pricing/>}/>
          <Route path="/gallery" element={<Imagegallery/>}/>
           <Route path="/videogallery" element={<VideoGallery/>}/>
            <Route path="/pagenotfound" element={<PageNoteFound/>}/>
      </Route>
    )
  )
  return (
    <RouterProvider router={router}>
      
    </RouterProvider>
  );
};

export default App;
