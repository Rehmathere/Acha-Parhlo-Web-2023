import React, { useState, useEffect } from "react";
// Firebase
import { database } from "./firebase"; // assuming `auth` is imported from firebase
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
// Navigate
import { useNavigate } from "react-router-dom";
// Portal CSS
import "./Portal.css";
// Images
import register from "../Pics/register.png";
// Images
import E_Mail_1 from "../Pics/E_Mail_1.png";
import E_Tick from "../Pics/E_Tick.gif";

export default function PSignUp() {
  // -------- Verify Email Modal --------
  const [showBox2, setShowBox2] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showParent, setShowParent] = useState(false);
  // Function to handle button click and toggle between boxes
  const handleButtonClick = () => {
    setShowBox2(!showBox2);
  };
  // Function to handle toggle visibility of confirmation div
  const handleAddUniversityClick = () => {
    setShowParent(true); // Show the parent div
    setShowConfirmation(true);
    // Reset to show Box 1 whenever Add University button is clicked
    setShowBox2(false);
  };
  // Function to d hide the entire parent div
  const handleCancelClick = () => {
    setShowParent(false);
  };
  const handleCancelClick_2 = () => {
    setShowParent(false);
  };
  // -------- Verify Email Modal --------
  // Toggle Password
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  // useNavigate Variable
  const navigate = useNavigate();

  // Function to handle email verification
  const handleEmailVerification = () => {
    const intervalId = setInterval(async () => {
      await database.currentUser.reload();
      if (database.currentUser.emailVerified) {
        console.log("Email is verified");
        // Box 2 Modal ( Open )
        setShowBox2(!showBox2);
        clearInterval(intervalId);
        setTimeout(() => {
          // Box Modal Closing
          setShowParent(false);
          navigate("/PAbout");
        }, 7000);
      }
    }, 3000);
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Email Logic
    const email = e.target.email.value;
    const password = e.target.password.value;
    createUserWithEmailAndPassword(database, email, password)
      .then((data) => {
        console.log(data, "authData");
        // Send email verification
        sendEmailVerification(database.currentUser)
          .then(() => {
            console.log("Verification email sent");
            handleEmailVerification(); // Start monitoring email verification
            // Box 1 Modal ( Open )
            setShowParent(true); // Show the parent div
            setShowConfirmation(true);
            // Reset to show Box 1 whenever Add University button is clicked
            setShowBox2(false);
          })
          .catch((error) => {
            console.error("Error sending verification email: ", error);
          });
      })
      .catch((err) => {
        alert(err.code);
      });
  };

  // Main Body
  return (
    <div id="Main">
      {/* Sign Up First */}
      <div id="Signup_First">
        <div id="sub_Signup_First">
          {/* 1 */}
          <div id="SignUp_First_1">
            <div id="sub_SignUp_First_1">
              {/* Login Heading */}
              <h1>Register</h1>
              {/* Email Form */}
              <form onSubmit={(e) => handleSubmit(e)}>
                {/* User Name */}
                <div id="Input_Name_Parent">
                  {/* 1 */}
                  <div id="Input_Name_1">
                    <i className="fa fa-user"></i>
                  </div>
                  {/* 2 */}
                  <input
                    name="text"
                    placeholder=" Enter Your Username "
                    id="Input_Name"
                  />{" "}
                  <br />
                </div>
                {/* Email */}
                <div id="Input_Name_Parent">
                  {/* 1 */}
                  <div id="Input_Name_1">
                    <i className="fa fa-envelope"></i>
                  </div>
                  {/* 2 */}
                  <input
                    name="email"
                    placeholder=" Enter Your Email "
                    id="Input_Name"
                  />{" "}
                  <br />
                </div>
                {/* Password */}
                <div id="Input_Name_Parent">
                  {/* 1 */}
                  <div id="Input_Name_1">
                    <i className="fa fa-lock"></i>
                  </div>
                  {/* 2 */}
                  <input
                    name="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    placeholder=" Enter Your Password "
                    id="Input_Name"
                    onChange={(e) => setPassword(e.target.value)}
                  />{" "}
                  <br />
                  {/* 3 */}
                  <div id="Input_Name_2">
                    {showPassword ? (
                      <i
                        className="fa fa-eye-slash"
                        onClick={() => setShowPassword(!showPassword)}
                      ></i>
                    ) : (
                      <i
                        className="fa fa-eye"
                        onClick={() => setShowPassword(!showPassword)}
                      ></i>
                    )}
                  </div>
                </div>
                <br />
                {/* Sign Up Button */}
                <button id="SignUp_Btn">Sign Up</button>
                {/* Sign In Button */}
                <button id="Alreday_Login" onClick={() => navigate("/PLogin")}>
                  Already Have An Account
                </button>
              </form>
            </div>
          </div>
          {/* 2 */}
          <div id="SignUp_First_2">
            <img src={register} alt="NA" />
            <p>Please Register for a new account</p>
          </div>
        </div>
      </div>
      {/* -------- Verify Email Modal -------- */}
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
                we need you to verify your email. Please check your Inbox and
                confirm it's really you.
              </p>
              {/* Button Box 1 */}
              {/* <button onClick={handleButtonClick}>Move To Next Box</button> */}
              {/* Cancel Button */}
              {/* <button onClick={handleCancelClick}>Cancel</button> */}
            </div>
            {/* Box 2 */}
            <div
              id="E_PA_U_ConfirmAdd_1"
              style={{ display: showBox2 ? "block" : "none" }}
            >
              <div id="E_PA_U_1_Img_Box">
                {/* 1 */}
                <img src={E_Tick} alt="NA" />
              </div>
              {/* 2 */}
              <h4>Your Email Is Verified</h4>
              {/* 3 */}
              {/* <p>Now You Can Use Our Services</p> */}
              {/* Cancel Button */}
              {/* <button onClick={handleCancelClick_2}>Cancel</button> */}
            </div>
          </div>
        </div>
      </div>
      {/* -------- Verify Email Modal -------- */}
    </div>
  );
}
