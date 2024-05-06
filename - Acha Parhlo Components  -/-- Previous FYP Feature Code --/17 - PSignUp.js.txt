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
    // Toggle Password
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState('');
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
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
                                <div id="Input_Name_Parent">
                                    {/* 1 */}
                                    <div id="Input_Name_1">
                                        <i class="fa fa-user"></i>
                                    </div>
                                    {/* 2 */}
                                    <input name='text' placeholder=' Enter Your Username ' id="Input_Name" /> <br />
                                </div>
                                {/* Email */}
                                <div id="Input_Name_Parent">
                                    {/* 1 */}
                                    <div id="Input_Name_1">
                                        <i class="fa fa-envelope"></i>
                                    </div>
                                    {/* 2 */}
                                    <input name='email' placeholder=' Enter Your Email ' id="Input_Name" /> <br />
                                </div>
                                {/* Password */}
                                <div id="Input_Name_Parent">
                                    {/* 1 */}
                                    <div id="Input_Name_1">
                                        <i class="fa fa-lock"></i>
                                    </div>
                                    {/* 2 */}
                                    <input name='password' type={showPassword ? 'text' : 'password'} value={password} placeholder=' Enter Your Password ' id='Input_Name' onChange={(e) => setPassword(e.target.value)} /> <br />
                                    {/* 3 */}
                                    <div id="Input_Name_2">
                                        {showPassword ? (
                                            <i className="fa fa-eye-slash" onClick={togglePasswordVisibility}></i>
                                        ) : (
                                            <i className="fa fa-eye" onClick={togglePasswordVisibility}></i>
                                        )}
                                    </div>
                                </div>
                                <br />
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

