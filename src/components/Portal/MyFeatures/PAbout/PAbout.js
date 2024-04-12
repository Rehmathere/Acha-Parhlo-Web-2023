import React, { useState, useEffect } from 'react'
import PSidebar from '../PSidebar'
// Firebase
import { signOut } from 'firebase/auth'
import { useAuthState } from 'react-firebase-hooks/auth';
import { database } from '../../firebase'
// useNavigate
import { useNavigate, useLocation } from 'react-router-dom'
// CSS
import '../PAbout/PAbout.css'
import '../PProfile/PProfile.css'
// Images
import PAbout1 from '../../../Pics/PAbout1.png'
import logout from '../../../Pics/logout.png'
import E_User from "../../../Pics/E_User.png"
import Fea_1 from "../../../Pics/Fea_1.png"
import Fea_2 from "../../../Pics/Fea_2.png"
import Fea_3 from "../../../Pics/Fea_3.png"
import Fea_4 from "../../../Pics/Fea_4.png"

export default function PAbout() {
    // Email Address For Logout Dialog Box
    const [user] = useAuthState(database);
    // useNavigate 
    const navigate = useNavigate();
    const location = useLocation();
    // Logout Function
    const handleClick = () => {
        signOut(database).then(val => {
            console.log(val, 'val');
            navigate('/PLogin');
        })
    }
    const { userEmail } = location.state || { userEmail: ' ' };
    // Date
    const [currentDateTime, setCurrentDateTime] = useState(new Date());
    // Function to update currentDateTime every second
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentDateTime(new Date());
        }, 1000);
        // Cleanup interval on component unmount
        return () => clearInterval(intervalId);
    }, []);
    // ------ Logout Logic ------
    // Use state to manage the visibility of the Logout Box
    const [isLogoutBoxVisible, setLogoutBoxVisibility] = useState(false);
    // Function to toggle the visibility of the Logout Box
    const toggleLogoutBox = () => {
        setLogoutBoxVisibility(!isLogoutBoxVisible);
    };
    // ----------------------------------------------------
    // Main Body
    return (
        <div id='PAbout_container'>
            {/* Header Portion */}
            <div id="Header">
                <div id="sub_Header">
                    <div id="Head_1">
                        <p>Acha Parhlo Consultant Portal</p>
                    </div>
                    <div id="Head_2">
                        <button id="sub_Head_2" onClick={toggleLogoutBox}>
                            <img src={logout} alt="NA" />
                        </button>
                    </div>
                </div>
            </div>
            {/* ------------- */}
            <PSidebar>
                {/* PAbout First */}
                <div id="PAbout_First">
                    {/* 1 */}
                    <div id="PAbout_First_1">
                        <div id="PAbout_First_1_Box">
                            <div id="PAbout_First_1_Box_1">
                                {/* Displaying Date */}
                                <p id='PAbout_First_1_Box_1_P1'>{currentDateTime.toDateString()}</p>
                                {/* Displaying User Email */}
                                {/* <h3>Hello <span>{userEmail.slice(0, 10)}</span> !</h3> */}
                                <h3>Hello <span>{user.email.slice(0, 10)}</span> !</h3>
                                <p id='PAbout_First_1_Box_1_P2'>Hey Consultant, Let's make today count.</p>
                            </div>
                            <div id="PAbout_First_1_Box_2">
                                <div id="PAbout_First_1_Box_2_ImgParent">
                                    <div id="sub_PAbout_First_1_Box_2_ImgParent">
                                        <img src={PAbout1} alt="NA" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* PAbout Second */}
                <div id="PAbout_Sec">
                    <h1>Welcome Back To Dashboard <i className='fa fa-th'></i></h1>
                </div>
                {/* PAbout Third */}
                <div id="PAbout_Third">
                    <div id="sub_PAbout_Third">
                        {/* ------ Old Code ------ */}
                        {/* Paragraph 1
                        <p><i className='fa fa-graduation-cap'></i>Experience the convenience of our streamlined management system designed to make your consultancy journey smooth and efficient.</p>
                        Paragraph 2
                        <p><i className='fa fa-graduation-cap'></i>Complete your profile in 'My Profile' and manage student records effortlessly.</p>
                        Paragraph 3
                        <p><i className='fa fa-graduation-cap'></i>Initiate conversations and address queries promptly using the 'Chat with Students'.</p>
                        Paragraph 4
                        <p><i className='fa fa-graduation-cap'></i>Master application tracking, utilize affiliated universities, and stay informed</p> */}
                        {/* ------ Old Code ------ */}
                        {/* Start */}
                        {/* Box */}
                        <div id="Third_Box_1">
                            <div id="Third_Box_1_Part1">
                                <span id='Third_Box_Num'>1</span>
                                <span id='Third_Box_P'>Feature</span>
                            </div>
                            <div id="Third_Box_1_Part2">
                                <img src={Fea_1} alt="NA" />
                            </div>
                        </div>
                        {/* Box */}
                        <div id="Third_Box_2">
                            <div id="Third_Box_1_Part1">
                                <span id='Third_Box_Num'>1</span>
                                <span id='Third_Box_P'>Feature</span>
                            </div>
                            <div id="Third_Box_1_Part2">
                                <img src={Fea_2} alt="NA" />
                            </div>
                        </div>
                        {/* Box */}
                        <div id="Third_Box_3">
                            <div id="Third_Box_1_Part1">
                                <span id='Third_Box_Num'>1</span>
                                <span id='Third_Box_P'>Feature</span>
                            </div>
                            <div id="Third_Box_1_Part2">
                                <img src={Fea_3} alt="NA" />
                            </div>
                        </div>
                        {/* Box */}
                        <div id="Third_Box_4">
                            <div id="Third_Box_1_Part1">
                                <span id='Third_Box_Num'>1</span>
                                <span id='Third_Box_P'>Feature</span>
                            </div>
                            <div id="Third_Box_1_Part2">
                                <img src={Fea_4} alt="NA" />
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <br />
                {/* ---Logout Logic --- */}
                {isLogoutBoxVisible && (
                    <div id="Logout_Box">
                        {/* Above */}
                        <div id="sub_Logout_Box_Fir">
                            <img src={E_User} alt="NA" />
                            <span>{user.email}</span>
                        </div>
                        {/* Below */}
                        <div id="sub_Logout_Box">
                            <div id="Logout_Box_1">
                                You Want To Logout ?
                            </div>
                            <div id="Logout_Box_2">
                                <button onClick={handleClick}>Yes, Logout</button>
                            </div>
                        </div>
                    </div>
                )}
                {/* ------------------- */}
            </PSidebar>
        </div>
    )
}


