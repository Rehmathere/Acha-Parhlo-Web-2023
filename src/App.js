import "./App.css";
import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import HomeLast from "./components/HomeLast";
import AboutUs from "./components/About/AboutUs";
import Contact from "./components/Contact/Contact";
import NavigatePortal from "./components/Portal/NavigatePortal";
import Temp_Parent from "./components/Blog/API_Data/Temp_Parent";
// --- Extra ---

export default function App() {
  // Some Image Slider Delay JS
  const [showImgSlider, setShowImgSlider] = useState(false);
  useEffect(() => {
    // Show ImgSlider after a delay (e.g., 3000 milliseconds)
    const delay = 8000;
    const timer = setTimeout(() => {
      setShowImgSlider(true);
    }, delay);
    // Clear the timer to prevent showing the ImgSlider if the component unmounts
    return () => {
      clearTimeout(timer);
    };
  }, []);
  // -- Main Body --
  return (
    <div>
      {/* --------- Page 1 --------- */}
      {/* 1 - Navbar */}
      {/* <Navbar /> */}
      {/* 2 - Img Slider */}
      {/* {showImgSlider && <ImgSlider />} */}
      {/* 3 - HomeLast */}
      {/* {showImgSlider && <HomeLast/>} */}
      {/* <HomeLast/> */}
      {/* 4 - About Us */}
      {/* <AboutUs /> */}
      {/* 5 - Contact */}
      {/* <Contact /> */}
      {/* 6 - Temp Parent Blog */}
      {/* <Temp_Parent /> */}
      {/* 7 - Portal */}
      <NavigatePortal />
      {/* - Extra - */}
    </div>
  );
}



