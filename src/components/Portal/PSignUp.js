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

export default function PSignUp() {
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
        clearInterval(intervalId);
        setTimeout(() => {
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
    </div>
  );
}
