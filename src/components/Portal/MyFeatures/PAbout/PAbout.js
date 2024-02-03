import React, { useState, useEffect } from 'react'
import PSidebar from '../PSidebar'
// Firebase
import { signOut } from 'firebase/auth'
import { database } from '../../firebase'
// useNavigate
import { useNavigate, useLocation } from 'react-router-dom'
// CSS
import '../PAbout/PAbout.css'
import '../PProfile/PProfile.css'
// Images
import PAbout1 from '../../../Pics/PAbout1.png'
import logout from '../../../Pics/logout.png'

export default function PAbout() {
    // useNavigate 
    const navigate = useNavigate();
    const location = useLocation();
    // Logout Function
    const handleClick = () => {
        signOut(database).then(val => {
            console.log(val, 'val');
            navigate('/');
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
                                <h3>Hello <span>{userEmail.slice(0, 10)}</span> !</h3>
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
                        {/* Paragraph 1 */}
                        <p><i className='fa fa-exclamation-circle'></i>Experience the convenience of our streamlined management system designed to make your consultancy journey smooth and efficient.</p>
                        {/* Paragraph 2 */}
                        <p><i className='fa fa-exclamation-circle'></i>Complete your profile in 'My Profile' and manage student records effortlessly.</p>
                        {/* Paragraph 3 */}
                        <p><i className='fa fa-exclamation-circle'></i>Initiate conversations and address queries promptly using the 'Chat with Students'.</p>
                        {/* Paragraph 4 */}
                        <p><i className='fa fa-exclamation-circle'></i>Master application tracking, utilize affiliated universities, and stay informed</p>
                    </div>
                </div>
                <br />
                <br />
                {/* ---Logout Logic --- */}
                {isLogoutBoxVisible && (
                    <div id="Logout_Box">
                        <div id="sub_Logout_Box">
                            <div id="Logout_Box_1">
                                Are You Sure You Want To Logout ?
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



