// ChangePassword.js
import React, { useState } from 'react';
// CSS
import './Portal/MyFeatures/PTracking/PT.css'
// Images
import fir from './Pics/Z_Call.png'

export default function Z_Test() {
  // Status Logic
  const [button1Color, setButton1Color] = useState('lightgray');
  const [button2Color, setButton2Color] = useState('lightgray');
  const [button3Color, setButton3Color] = useState('lightgray');
  // Functions
  // 1
  const handleButton1Click = () => {
    // Button 1
    setButton1Color('green');
  };
  // 2
  const handleButton2Click = () => {
    // Button 2
    setButton2Color('green');
    // Button 1 
    setButton1Color('lightgreen');
  };
  // 3
  const handleButton3Click = () => {
    // Button 3
    setButton3Color('green');
    // Button 1 
    setButton1Color('lightgreen');
    // Button 2 
    setButton2Color('lightgreen');
  };
  // Main Body
  return (
    <div>
      <h1>Application Tracking Setting</h1>
      <br /><br />
      {/* Box 1 */}
      <div id="Z_box" style={{ backgroundColor: button1Color }}>
        <img src={fir} alt="NA" />
      </div>
      <br />
      <button onClick={handleButton1Click}>First Step</button>
      <br /><br />
      {/* Box 2 */}
      <div id="Z_box" style={{ backgroundColor: button2Color }}>
        <img src={fir} alt="NA" />
      </div>
      <br />
      <button onClick={handleButton2Click}>First Step</button>
      <br /><br />
      {/* Box 3 */}
      <div id="Z_box" style={{ backgroundColor: button3Color }}>
        <img src={fir} alt="NA" />
      </div>
      <br />
      <button onClick={handleButton3Click}>First Step</button>
      <br />
    </div>
  );
};

