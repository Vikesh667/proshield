import React from "react";
import Navbar from "./component/navbar/Navbar";
import HomePages from "./pages/HomePages";
import Footer from "./component/footer/Footer";

const App = () => {
  return (
    <>
      <Navbar />
    <HomePages/>
    <Footer/>
    </>
  );
};

export default App;
