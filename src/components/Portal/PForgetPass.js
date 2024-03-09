import React from 'react'
// useNavigate
import { useNavigate } from 'react-router-dom'
// firebase
import { database } from './firebase'
import { sendPasswordResetEmail } from "firebase/auth";
// CSS
import './Portal.css'

export default function PForgetPass() {
  // useNavigate
  const navigate = useNavigate();
  // Foregte Password
  const handleSubmit = async (e) => {
    e.preventDefault()
    const emalVal = e.target.email.value;
    sendPasswordResetEmail(database, emalVal).then(data => {
      alert("Check your Recovery Email")
      navigate("/PLogin")
    }).catch(err => {
      alert(err.code)
    })
  }
  // Main Body
  return (
    <div id='My_Forget_Main'>
      <div id="Forget_First">
        <div id="sub_Forget_First">
          {/* Heading */}
          <h1>Forget Password &nbsp; <i class="fa fa-lock"></i></h1>
          {/* Form */}
          <form onSubmit={(e) => handleSubmit(e)}>
            {/* Heading For Email Recovery */}
            <h5>Enter Email For Recovery</h5>
            {/* Email For Recovery */}
            <input name="email" id='MyRecoveryInput' placeholder=' Enter Your Recovery Email ' /><br />
            {/* Reset Button */}
            <button id="Reset_Btn">Reset</button>
          </form>
          {/* Back To Login Page */}
          <button id="BackLogin_Btn" onClick={() => navigate('/PLogin')}>Back To Login</button>
        </div>
      </div>
    </div>
  )
}

