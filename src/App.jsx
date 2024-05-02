import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import "./App.css";
import Hero from "./Components/Hero";
import Intro from "./Components/Intro";
import Footer from "./Components/Footer";
// import Context from "./Store/Context";

const App = () => {
  const [theme, setTheme] = useState("helllo");
  console.log(theme);
  return (
    <>
      //{" "}
      <Context.Provider value={theme}>
        <Navbar />
        <Hero />
        <Intro />
        <Footer />
        //{" "}
      </Context.Provider>
    </>
  );
};

export default App;
