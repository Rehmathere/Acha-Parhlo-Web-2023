import React, { useEffect } from "react";
// Loading Spinner Header File
import gsap from 'gsap';

export default function Navbar() {
  // ---------------------------------------------
  // ----- Load Spinner JS -----
  useEffect(() => {
    const loadingPage = document.querySelector(".loading-page");

    gsap.to(loadingPage, {
      opacity: 0,
      duration: 2.5,
      delay: 6,
      onComplete: () => {
        // After animation completes, hide the loading spinner
        loadingPage.style.display = "none";
      },
    });

    gsap.fromTo(
      ".logo-name",
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 2,
        delay: 0.7,
      }
    );
  }, []);
  // ----------------------------
  // Main Body
  return (
    <>
      {/* ------------------------------------------------ */}
      <div>
        {/* <!-- 1 - Loading Soinning Process --> */}
        <div className="loading-page">
          {/* <!-- Spinner Loader --> */}
          <section>
            <div className="loader">
              <span style={{ "--i": 1 }}></span>
              <span style={{ "--i": 2 }}></span>
              <span style={{ "--i": 3 }}></span>
              <span style={{ "--i": 4 }}></span>
              <span style={{ "--i": 5 }}></span>
              <span style={{ "--i": 6 }}></span>
              <span style={{ "--i": 7 }}></span>
              <span style={{ "--i": 8 }}></span>
              <span style={{ "--i": 9 }}></span>
              <span style={{ "--i": 10 }}></span>
              <span style={{ "--i": 11 }}></span>
              <span style={{ "--i": 12 }}></span>
              <span style={{ "--i": 13 }}></span>
              <span style={{ "--i": 14 }}></span>
              <span style={{ "--i": 15 }}></span>
              <span style={{ "--i": 16 }}></span>
              <span style={{ "--i": 17 }}></span>
              <span style={{ "--i": 18 }}></span>
              <span style={{ "--i": 19 }}></span>
              <span style={{ "--i": 20 }}></span>
            </div>

          </section>
          {/* <!-- Name Loader --> */}
          <div className="name-container">
            <div className="logo-name">Acha Parhlo</div>
          </div>
        </div>
      </div>
      {/* ------------------------------------------------ */}
    </>
  );
}
