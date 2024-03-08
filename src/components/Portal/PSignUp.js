import React, { useState } from 'react'
// Firebase
import { database } from './firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'
// Navigate
import { useNavigate } from 'react-router-dom'
// Portal CSS
import './Portal.css'
// Images
import register from '../Pics/register.png'

export default function PSignUp() {
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
        createUserWithEmailAndPassword(database, email, password).then(data => {
            console.log(data, "authData")
            navigate('/PAbout')
        }).catch((err) => {
            alert(err.code)
        });
    }
    // Main Body
    return (
        <div id="Main">
            {/* Sign Up First */}
            <div id='Signup_First'>
                <div id="sub_Signup_First">
                    {/* 1 */}
                    <div id="SignUp_First_1">
                        <div id="sub_SignUp_First_1">
                            {/* Login Heading */}
                            <h1>Register</h1>
                            {/* Email Form */}
                            <form onSubmit={(e) => handleSubmit(e)}>
                                {/* User Name */}
                                <input name='text' placeholder=' Enter Your Username ' id='Signup_Name' /> <br />
                                {/* Email */}
                                <input name='email' placeholder=' Enter Your Email ' id='Signup_Name' /> <br />
                                {/* Password */}
                                <input name='password' type='password' placeholder=' Enter Your Password ' id='Signup_Name' /> <br />
                                {/* Sign Up Button */}
                                <button id="SignUp_Btn">Sign Up</button>
                                {/* Sign In Button */}
                                <button id='Alreday_Login' onClick={() => navigate('/PLogin')}>Already Have An Account</button>
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
    )
}

