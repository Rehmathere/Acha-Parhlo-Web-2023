import React, { useState } from 'react';
import './Portal/MyFeatures/PAdd_Uni/PAdd_U.css';

export default function Z_Test() {
  // ------ Confirm Add University Logic ------
  // State to manage which box to display
  const [showBox2, setShowBox2] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showParent, setShowParent] = useState(false);
  // Function to handle button click and toggle between boxes
  const handleButtonClick = () => {
    if (!showBox2) {
      setShowConfirmation(true);
    }
    setShowBox2(!showBox2);
    if (!showBox2) {
      // Set a timeout to hide the parent after 3 seconds
      setTimeout(() => {
        setShowParent(false);
      }, 3000);
    }
  };
  const handleAddUniversityClick = () => {
    setShowParent(true); // Show the parent div
    setShowConfirmation(true);
    setShowBox2(false); // Reset showBox2 when Add University is clicked
  };
  const handleCancelClick = () => {
    setShowParent(false);
  };
  // Main Body
  return (
    <>
      {/* first */}
      <div>
        <h1>Confirm Portion Below</h1>
        <button onClick={handleAddUniversityClick}>Add University</button>
      </div>
      {/* second */}
      <div id='PA_U_ConfirmAdd_Parent' style={{ display: showParent ? 'block' : 'none' }}>
        <h1>Are You Sure To Add University ?</h1>
        <br /><br />
        <br /><br />
        {/* Basic Logic */}
        <div id="sub_PA_U_ConfirmAdd_Parent" style={{ display: showConfirmation ? 'block' : 'none' }}>
          <div id="PA_U_ConfirmAdd_Parent_Box">
            {/* Box 1 */}
            <div id="PA_U_ConfirmAdd_1" style={{ display: !showBox2 ? 'block' : 'none' }}>
              <h1>Box 1</h1>
              <button onClick={handleButtonClick}>Move To Next Box</button>
              {/* Cancel Button */}
              <button onClick={handleCancelClick}>Don't Add This University</button>
            </div>
            {/* Box 2 */}
            <div id="PA_U_ConfirmAdd_2" style={{ display: showBox2 ? 'block' : 'none' }}>
              <h1>Now, It's Box 2</h1>
              <button>Final Cancel</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
