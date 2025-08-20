import React from "react";
import { Button } from "./components/ui/button";
import Navbar from "./components/Header/Navbar";
import LandingPage from "./LandingPage/LandingPage";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="">
      <Navbar />
      <LandingPage/>
      <Footer/>
    </div>
  );
}

export default App;
