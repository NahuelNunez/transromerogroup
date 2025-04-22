import React from "react";
import { Navbar } from "./components/pages/Navbar";
import { Home } from "./components/pages/Home";
import { Footer } from "./components/pages/Footer";
import { ExpresoCuyano } from "./components/ExpresoCuyano/ExpresoCuyano";
import { Testimonials } from "./components/pages/Testimonials";
import { Services } from "./components/pages/Services";
import { Contact } from "./components/pages/Contact";
import { WhatsApp } from "./components/WhatsApp";
import { Megapack } from "./components/ExpresoCuyano/Megapack";

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <ExpresoCuyano />
      <Megapack />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
      <WhatsApp />
    </>
  );
};

export default App;
