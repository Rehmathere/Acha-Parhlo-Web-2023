import React, { useState } from 'react'
// Firebase
import { database } from './firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'
// Navigate
import { useNavigate } from 'react-router-dom'
// Portal CSS
import './Portal.css'
// Images
import login_fir from '../Pics/login_fir.png'

export default function PLogin() {
    // useState
    // useNavigate Variable
    const navigate = useNavigate();
    // --- Function ---
    // 1 - handleSubmit
    const handleSubmit = (e) => {
        e.preventDefault();
        // Email Logic
        const email = e.target.email.value
        const password = e.target.password.value
        signInWithEmailAndPassword(database, email, password).then(data => {
            const userEmail = data.user.email || 'user@example.com';
            navigate('/PAbout', { state: { userEmail } });
        }).catch((err) => {
            alert(err.code)
        });
    }
    // 2 - handleReset
    const handleReset = () => {
        navigate('/PForgetPass')
    }
    // Main Body
    return (
        <div id='Main'>
            {/* Login First */}
            <div id='Login_First'>
                <div id="sub_Login_First">
                    {/* 1 */}
                    <div id="Login_First_1">
                        <img src={login_fir} alt="NA" />
                        <p>Please provide your login details or register for a new account</p>
                    </div>
                    {/* 2 */}
                    <div id="Login_First_2">
                        <div id="sub_Login_First_2">
                            {/* Login Heading */}
                            <h4>Hello</h4>
                            <h1>Welcome!</h1>
                            {/* Email Form */}
                            <form onSubmit={(e) => handleSubmit(e)}>
                                {/* Email */}
                                <input name='email' placeholder=' Enter Your Email ' id='Login_Name' /> <br />
                                {/* Password */}
                                <input name='password' type='password' placeholder=' Enter Your Password ' id='Login_Name' /> <br />
                                {/* Forget Password */}
                                <p id='Login_First_P' onClick={handleReset}>Forget Password</p>
                                {/* Sign In Button */}
                                <button id="Login_Submit_Btn">Login</button>
                                {/* Sign Up Button */}
                                <button id='Login_First_Create' onClick={() => navigate('/PSignUp')}>Create Account</button>
                                {/* Home Page Button */}
                                <button id='Login_First_Back'>Back To Home <i class="fa fa-home"></i></button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

