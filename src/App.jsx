import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import AlbumPage from "./Components/Portfolio/AlbumPage";
import OurServices from "./Components/Services/OurServices";
import ScrollToTop from "./Components/ScrollToTop";
import Gallery from "./Components/Gallery/Gallery";
import Contact from "./Components/Contact/Contact";
import About from "./Components/About/About";
import Teaser from "./Utilites/Teaser";

const App = () => {
  return (
    <div className="App">
      <Router>
        <ScrollToTop/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<OurServices />} />
          <Route path="/gallery" element={<Gallery/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/about"element={<About/>}/>
          <Route path="/album/:name" element={<AlbumPage />} />
          <Route path="/teaser" element={<Teaser />}  />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
