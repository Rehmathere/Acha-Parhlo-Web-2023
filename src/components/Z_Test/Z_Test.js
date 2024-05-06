import React, { useState } from "react";
import "../Portal/MyFeatures/PAdd_Uni/PAdd_U.css";
// Images
import E_Mail_1 from "../Pics/E_Mail_1.png";

export default function Z_Test() {
  // ------ Confirm Add University Logic ------
  // State to manage which box to display
  const [showBox2, setShowBox2] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showParent, setShowParent] = useState(false);
  // Function to handle button click and toggle between boxes
  const handleButtonClick = () => {
    setShowBox2(!showBox2);
  };
  // Function to handle "Add University" button click and toggle visibility of confirmation div
  const handleAddUniversityClick = () => {
    setShowParent(true); // Show the parent div
    setShowConfirmation(true);
    // Reset to show Box 1 whenever Add University button is clicked
    setShowBox2(false);
  };
  // Function to handle "Don't Add This University" button click and hide the entire parent div
  const handleCancelClick = () => {
    setShowParent(false);
  };
  const handleCancelClick_2 = () => {
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
      <div
        id="E_PA_U_ConfirmAdd_Parent"
        style={{ display: showParent ? "block" : "none" }}
      >
        {/* Basic Logic */}
        <div
          id="E_sub_PA_U_ConfirmAdd_Parent"
          style={{ display: showConfirmation ? "block" : "none" }}
        >
          <div id="E_PA_U_ConfirmAdd_Parent_Box">
            {/* Box 1 */}
            <div
              id="E_PA_U_ConfirmAdd_1"
              style={{ display: showBox2 ? "none" : "block" }}
            >
              <div id="E_PA_U_1_Img_Box">
                {/* 1 */}
                <img src={E_Mail_1} alt="NA" />
              </div>
              {/* 2 */}
              <h4>Email Verification Is Sent</h4>
              {/* 3 */}
              <p>
                we need you to verify your email. Please check your Inbox and confirm it's really you.
              </p>
              {/* Button Box 1 */}
              <button onClick={handleButtonClick}>Move To Next Box</button>
              {/* Cancel Button */}
              <button onClick={handleCancelClick}>Cancel</button>
            </div>
            {/* Box 2 */}
            <div
              id="E_PA_U_ConfirmAdd_2"
              style={{ display: showBox2 ? "block" : "none" }}
            >
              <h1>Now, It's Box 2</h1>
              {/* Cancel Button */}
              <button onClick={handleCancelClick_2}>Cancel</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
