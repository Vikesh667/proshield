import React from "react";
import { createBrowserRouter, createRoutesFromChildren, Route, RouterProvider, Routes } from "react-router-dom";
import Layout from "./component/layout/Layout";
import HomePages from "./pages/HomePages"
import AboutUsPage from "./pages/AboutUsPage";
import Services from "./pages/Services";
import Pages from "./pages/Pages";
import Contactus from "./pages/Contactus";
import BlogsPage from "./pages/BlogsPage";

const App = () => {

  const router=createBrowserRouter(
    createRoutesFromChildren(
      <Route path="/" element={<Layout/>}>
       <Route index element={<HomePages/>}/>
        <Route path="/about" element={<AboutUsPage/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="blog" element={<BlogsPage/>}/>
        <Route path="/pages" element={<Pages/>}/>
        <Route path="/contact" element={<Contactus/>}/>
      </Route>
    )
  )
  return (
    <RouterProvider router={router}>
      
    </RouterProvider>
  );
};

export default App;
