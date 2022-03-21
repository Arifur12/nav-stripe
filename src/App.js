import React from "react";
import Hero from "./components/StripesProject/Hero";
import Navbar from "./components/StripesProject/Navbar";
import Sidebar from "./components/StripesProject/Sidebar";
import "./components/StripesProject/Stripes.css";
import Submenu from "./components/StripesProject/Submenu";

function App() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Hero />
      <Submenu />
    </>
  );
}

export default App;
