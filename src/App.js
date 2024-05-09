import React, { useEffect, useState } from "react";
import Z_Test_Parent from "./components/Z_Test/Z_Test_Parent";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomeLast from "./components/HomeLast";
import AboutUs from "./components/About/AboutUs";
import Contact from "./components/Contact/Contact";
import BlogPage from "./components/Blog/BlogPage";
import BlogUniDetails from "./components/Blog/BlogUniDetails";
import BlogPage2_H from "./components/Blog/BlogPage2_H";
import BlogPage3_V from "./components/Blog/BlogPage3_V";
import BlogPage4_D from "./components/Blog/BlogPage4_D";
import BlogPage5_E from "./components/Blog/BlogPage5_E";
import PLogin from "./components/Portal/PLogin";
import PSidebar from "./components/Portal/MyFeatures/PSidebar";
import PSignUp from "./components/Portal/PSignUp";
import PForgetPass from "./components/Portal/PForgetPass";
import PAbout from "./components/Portal/MyFeatures/PAbout/PAbout";
import PProfile from "./components/Portal/MyFeatures/PProfile/PProfile";
import PAppointments from "./components/Portal/MyFeatures/PAppointments/PAppointments";
import PAppoint_Detail from "./components/Portal/MyFeatures/PAppointments/PAppoint_Detail";
import PTracking from "./components/Portal/MyFeatures/PTracking/PTracking";
import PTStatus from "./components/Portal/MyFeatures/PTracking/PTStatus";
import PRecords from "./components/Portal/MyFeatures/PRecords/PRecords";
import PR_List from "./components/Portal/MyFeatures/PRecords/PR_List";
import PChat from "./components/Portal/MyFeatures/PChat/PChat";
import PAdd_Uni from "./components/Portal/MyFeatures/PAdd_Uni/PAdd_Uni";
import PAdd_U_add from "./components/Portal/MyFeatures/PAdd_Uni/PAdd_U_add";
import PAdd_Uni_Update from "./components/Portal/MyFeatures/PAdd_Uni/PAdd_Uni_Update";
import FinalChat from "./components/Portal/MyFeatures/PChat/FinalChat";
// Session Header File
import ProtectedRoute from "./components/Portal/ProtectedRoute";
import { useAuth } from "./components/Portal/AuthContext";

export default function App() {
  // Session
  const { userName } = useAuth();
  // Splash
  const [showImgSlider, setShowImgSlider] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  useEffect(() => {
    const delay = 7000;
    const timer = setTimeout(() => {
      setShowImgSlider(true);
      setShowNavbar(false);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, []);
  // Main Body
  return (
    <>
      <BrowserRouter>
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
          <Route path='/PLogin' element={<PLogin />} />
          <Route path='/PSideBar' element={<PSidebar />} />
          <Route path='/PSignUp' element={<PSignUp />} />
          <Route path='/PForgetPass' element={<PForgetPass />} />
          <Route path='/PAbout' element={<ProtectedRoute><PAbout /></ProtectedRoute>} />
          <Route path='/PProfile' element={<ProtectedRoute><PProfile /></ProtectedRoute>} />
          <Route path='/PAppointments' element={<ProtectedRoute><PAppointments /></ProtectedRoute>} />
          <Route path='/PAppointDetail/:id' element={<ProtectedRoute><PAppoint_Detail /></ProtectedRoute>} />
          <Route path='/PTracking' element={<ProtectedRoute><PTracking /></ProtectedRoute>} />
          <Route path='/PTStatus/:id' element={<ProtectedRoute><PTStatus /></ProtectedRoute>} />
          <Route path='/PRecords' element={<ProtectedRoute><PRecords /></ProtectedRoute>} />
          <Route path='/PR_List/:id' element={<ProtectedRoute><PR_List /></ProtectedRoute>} />
          <Route path='/PChat' element={<ProtectedRoute><PChat /></ProtectedRoute>} />
          <Route path='/FinalChat' element={<ProtectedRoute><FinalChat /></ProtectedRoute>} />
          <Route path='/PAdd_Uni' element={<ProtectedRoute><PAdd_Uni /></ProtectedRoute>} />
          <Route path='/PAdd_U_add' element={<ProtectedRoute><PAdd_U_add /></ProtectedRoute>} />
          <Route path='/PAdd_Uni_Update/:id' element={<ProtectedRoute><PAdd_Uni_Update /></ProtectedRoute>} />
        </Routes>
      </BrowserRouter>
      {/* --------------------------------------------------- */}
      {/* Extra Working */}
      {/* <Z_Test_Parent /> */}
    </>
  );
}
