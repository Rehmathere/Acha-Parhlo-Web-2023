import React, { useState } from 'react'
import PSidebar from '../PSidebar'
// useNavigate
import { useNavigate } from 'react-router-dom'
// CSS
import '../PProfile/PProfile.css'
import '../PRecords/PRecords.css'
import "./PChat.css"
// Images
import logout from '../../../Pics/logout.png'
import Str_7 from "../../../Pics/Str_7.png"
// Logout Logic 
import { database } from '../../firebase'
import { signOut } from 'firebase/auth'
import "../PAppointments/PAppoint.css"

export default function PChat() {
    // ------ Logout Logic ------
    // useNavigate 
    const navigate = useNavigate();
    // Logout Function
    const handleClick = () => {
        signOut(database).then(val => {
            console.log(val, 'val');
            navigate('/');
        })
    }
    // Use state to manage the visibility of the Logout Box
    const [isLogoutBoxVisible, setLogoutBoxVisibility] = useState(false);
    // Function to toggle the visibility of the Logout Box
    const toggleLogoutBox = () => {
        setLogoutBoxVisibility(!isLogoutBoxVisible);
    };
    // ----------------------------------------------------
    // Main Body
    return (
        <div>
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
                <>
                    {/* 1 - Heading */}
                    <div id="PTr_first">
                        <div id="sub_PTr_first">
                            <div id="PTr_first_1">
                                <h1>Chat</h1>
                            </div>
                            <div id="PTr_first_2">
                                <img src={Str_7} alt="Na" />
                            </div>
                        </div>
                    </div>
                    {/* PChat Code Start From Here */}
                    {/* 2 - PChat__first */}
                    <div id="PChat_first">
                        <div id="sub_PChat_first">
                            {/* Start */}
                        </div>
                    </div>
                    {/* ------------------- */}
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
                </>
            </PSidebar>
        </div>
    )
}












