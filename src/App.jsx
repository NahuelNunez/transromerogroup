import React from "react";
import { Navbar } from "./components/pages/Navbar";
import { Home } from "./components/pages/Home";
import { Footer } from "./components/pages/Footer";
import { ExpresoCuyano } from "./components/ExpresoCuyano/ExpresoCuyano";

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <ExpresoCuyano />
    </>
  );
};

export default App;
