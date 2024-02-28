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
import chat from '../../../Pics/chat.png'
import Z_chat from '../../../Pics/Str_10.png'
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
            navigate('/PLogin');
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
                    {/* ----------------------------------------- */}
                    {/* PChat Code Start From Here */}
                    {/* 2 - PChat__first */}
                    <div id="PChat_first">
                        <div id="sub_PChat_first">
                            {/* Part 1 */}
                            <div id="PChat_first_Part_1">
                                {/* Image Bar */}
                                <div id="PChat_first_Part_1_Image_Box">
                                    <div id="PChat_first_Part_1_Image_Box_1">
                                        <h4>Communicate With Students</h4>
                                    </div>
                                    <div id="PChat_first_Part_1_Image_Box_2">
                                        <img src={chat} alt="NA" />
                                    </div>
                                </div>
                                {/* Points */}
                                <div id="PChat_first_Part_1_Point">
                                    <p><i class="fa fa-send"></i> Seen Unread Messsages</p>
                                    <p><i class="fa fa-send"></i> New chat alert</p>
                                    <p><i class="fa fa-send"></i> Sent a chat</p>
                                    <p><i class="fa fa-send"></i> Chat viewed</p>
                                </div>
                            </div>
                            {/* Part 2 */}
                            <div id="PChat_first_Part_2">
                                {/* Heading */}
                                <div id="PChat_first_Part_Chat_Heading">
                                    <div id="PCHat_Heading_Part_0">
                                        Sr. No
                                    </div>
                                    <div id="PCHat_Heading_Part_1">
                                        Logo
                                    </div>
                                    <div id="PCHat_Heading_Part_2">
                                        Messages
                                    </div>
                                </div>
                                {/* Chat Box Click */}
                                <div id="PChat_Box_Messages" onClick={() => navigate('/FinalChat') }>
                                    <div id="PChat_Box_Messages_Part_0">
                                        1
                                    </div>
                                    <div id="PChat_Box_Messages_Part_1">
                                        <img src={Z_chat} alt="NA" />
                                    </div>
                                    <div id="PChat_Box_Messages_Part_2">
                                        Rehmat Qazi
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* ----- Previous Code ----- */}
                    {/* ---------------------------------------- */}
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












