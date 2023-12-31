import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomeLast from "./components/HomeLast";
import AboutUs from "./components/About/AboutUs";
import Contact from "./components/Contact/Contact";
import BlogPage from './components/Blog/BlogPage'
// Blog Pages Link
import BlogUniDetails from "./components/Blog/BlogUniDetails";
import BlogPage2_H from "./components/Blog/BlogPage2_H";
import BlogPage3_V from "./components/Blog/BlogPage3_V";
import BlogPage4_D from "./components/Blog/BlogPage4_D";
import BlogPage5_E from "./components/Blog/BlogPage5_E";
// --- Extra Work ---
import NavigatePortal from './components/Portal/NavigatePortal'
import Z_Test from './components/Z_Test'

export default function App() {
  const [showImgSlider, setShowImgSlider] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    // Show ImgSlider after a delay (e.g., 7000 milliseconds)
    const delay = 7000;
    const timer = setTimeout(() => {
      setShowImgSlider(true);
      setShowNavbar(false);
    }, delay);

    // Clear the timer to prevent showing the ImgSlider if the component unmounts
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      {/* --------------------------------------------------- */}
      {/* Final Code */}
      {/* <BrowserRouter>
        {showNavbar && <Navbar />}
        <Routes>
          {showImgSlider && (
            <Route path="/" element={<HomeLast />} />
          )}
          <Route path="/home2" element={<HomeLast />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/blogpage" element={<BlogPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path='/blogUniDetails/:blogId' element={<BlogUniDetails />} />
          <Route path='/blogPage2_H' element={<BlogPage2_H />} />
          <Route path='/BlogPage3_V' element={<BlogPage3_V />} />
          <Route path='/BlogPage4_D' element={<BlogPage4_D />} />
          <Route path='/BlogPage5_E' element={<BlogPage5_E />} />
        </Routes>
      </BrowserRouter> */}
      {/* --------------------------------------------------- */}
      {/* Extra Working */}
      <NavigatePortal />
      {/* <Z_Test /> */}
    </>
  );
}
