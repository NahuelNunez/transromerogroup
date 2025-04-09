import React from "react";
import { Navbar } from "./components/pages/Navbar";
import { Home } from "./components/pages/Home";
import { Footer } from "./components/pages/Footer";
import { ExpresoCuyano } from "./components/ExpresoCuyano/ExpresoCuyano";
import { Testimonials } from "./components/pages/Testimonials";

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <ExpresoCuyano />
      <Testimonials />
    </>
  );
};

export default App;
