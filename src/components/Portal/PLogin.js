import React, { useEffect, useState, useRef } from 'react';
// Firebase
import { database } from './firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'
// Navigate
import { useNavigate } from 'react-router-dom'
// Portal CSS
import './Portal.css'
import "./MyFeatures/PChat/FinalChat.css"
// Images
import login_fir from '../Pics/login_fir.png'
import L_Lock from '../Pics/L_Lock.png'

export default function PLogin() {
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
    // ------ Login To Register Logic ------
    const [showBox2, setShowBox2] = useState(false);
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [showParent, setShowParent] = useState(false);
    const [passwordStatus, setPasswordStatus] = useState('');
    const passwordInputRef = useRef(null);
    const handleAddUniversityClick = () => {
        setShowParent(true);
        setShowConfirmation(true);
    };
    const handleCancelClick = () => {
        setShowParent(false);
    };
    const handlePasswordCheck = (event) => {
        event.preventDefault();
        const enteredPassword = event.target.elements.password.value;
        if (enteredPassword === 'Acha@12') {
            setPasswordStatus('PIN is Correct');
            // Navigate to Signup page after 3 seconds
            setTimeout(() => {
                navigate('/PSignUp');
            }, 4000);
        } else {
            setPasswordStatus('PIN is Wrong');
        }
        // Clear input field
        passwordInputRef.current.value = '';
    };
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
                                {/* Forget Password */}
                                <p id='Login_First_P' onClick={handleReset}>Forget Password</p>
                                {/* Sign In Button */}
                                <button id="Login_Submit_Btn">Login</button>
                            </form>
                            {/* Sign Up Button */}
                            <button id='Login_First_Create' onClick={handleAddUniversityClick}>Create Account</button>
                            {/* Home Page Button */}
                            <button id='Login_First_Back' onClick={() => navigate('/')}>Back To Home <i class="fa fa-home"></i></button>
                        </div>
                    </div>
                </div>
            </div>
            {/* ----- Password Modal ----- */}
            <div id='PA_U_ConfirmAdd_Parent' style={{ display: showParent ? 'block' : 'none' }}>
                {/* Basic Logic */}
                <div id="sub_PA_U_ConfirmAdd_Parent" style={{ display: showConfirmation ? 'block' : 'none' }}>
                    <div id="PA_U_ConfirmAdd_Parent_Box">
                        {/* Box 1 */}
                        <div id="PA_U_ConfirmAdd_1" style={{ display: showBox2 ? 'none' : 'block' }}>
                            <div id="PA_U_ConfirmAdd_img">
                                <img src={L_Lock} alt="NA" />
                            </div>
                            <h3>Enter Secrect PIN</h3>
                            <p>If PIN Is Correct Then You Will Able To Register Account Otherwise Not Allowed</p>
                            {/* Password Input Area */}
                            <form onSubmit={handlePasswordCheck}>
                                <div id="PA_U_ConfirmAdd_Input_Parent_Box">
                                    {/* 1 */}
                                    <div id="PA_U_ConfirmAdd_Input_1">
                                        <i class="fa fa-key"></i>
                                    </div>
                                    {/* 2 */}
                                    <input ref={passwordInputRef} type="password" placeholder='Enter Secret PIN Here' id="PA_U_ConfirmAdd_Input" name="password" />
                                </div>
                                {/* Password Status */}
                                <h6 style={{ color: passwordStatus.includes('Correct') ? 'green' : 'red' }} id='PA_U_Special_Status'>{passwordStatus}</h6>
                                {/* Yes Button */}
                                <button id='PA_U_ConfirmAdd_1_A' type="submit">Check PIN</button>
                                {/* Cancel Button */}
                                <button id='PA_U_ConfirmAdd_1_B' onClick={handleCancelClick}>Cancel</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* ----- Password Modal ----- */}
        </div>
    )
}

