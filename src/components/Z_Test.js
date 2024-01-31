import React, { useState, useEffect, useRef } from 'react';
import './Portal/MyFeatures/PAdd_Uni/PAdd_U.css';
import './Portal/MyFeatures/PChat/PChat.css';

export default function Z_Test() {
  // 
  const [showSecBox, setShowSecBox] = useState(false);
  // Rest
  const handleLogoutClick = () => {
    setShowSecBox(true);
  };
  const handleCancelClick = () => {
    setShowSecBox(false);
  };

  const handleClickOutside = (event) => {
    // Check if the click is outside the ZTest_Sec_Box div
    if (secBoxRef.current && !secBoxRef.current.contains(event.target)) {
      setShowSecBox(false);
    }
  };

  // Use useRef to create a reference to the ZTest_Sec_Box div
  const secBoxRef = useRef(null);

  useEffect(() => {
    // Attach the event listener when showSecBox is true
    if (showSecBox) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      // Remove the event listener when showSecBox is false
      document.removeEventListener('mousedown', handleClickOutside);
    }

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showSecBox]);

  return (
    <>
      <div>
        <h1>Confirm Portion Below</h1>
        <button onClick={handleLogoutClick}>Please Logout</button>
      </div>
      <div ref={secBoxRef} id="ZTest_Sec_Box" style={{ display: showSecBox ? 'block' : 'none' }}>
        <h6>Are You Sure You Want To Logout ?</h6>
        <button onClick={handleCancelClick}>Cancel</button>
      </div>
    </>
  );
}
