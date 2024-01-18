import React, { useState } from 'react'
import PSidebar from '../PSidebar'
// CSS
import '../PProfile/PProfile.css'
import "../PRecords/PRecords.css"
import "../PTracking/PT.css"
// Images
import logout from '../../../Pics/logout.png'
import appoint_img from '../../../Pics/appoint_2.png'
// useNavigate
import { useNavigate } from 'react-router-dom'
// Logout Logic 
import { database } from '../../firebase'
import { signOut } from 'firebase/auth'

export default function PAppoint_Detail() {
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
                {/* PR_List */}
                {/* PTS_Pre, sub_PTS_Pre, PTS_Pre_Box Are Write For Media Query Identification */}
                <div id="PTS_Pre">
                    <div id="sub_PTS_Pre">
                        <div id="PTS_Pre_Box">
                            <h2>Appointment Detail <i class="fa fa-id-card-o"></i></h2>
                        </div>
                        {/* Start */}
                    </div>
                </div>
                {/* PAD_first */}
                <div id="PAD_first">
                    <div id="sub_PAD_first">
                        {/* Box */}
                        <div id="PAD_first_Box">
                            {/* 1 */}
                            <div id="PAD_first_B_1">
                                <div id="PAD_first_B_1_Box">
                                    <img src={appoint_img} alt="NA" />
                                </div>
                            </div>
                            {/* 2 */}
                            <div id="PAD_first_B_2">
                                {/* Part 1 */}
                                <div id="PAD_first_B_2_P1">
                                    {/* Info 1 */}
                                    <div id="PAD_first_B_2_P_InputBox">
                                        <div id="PAD_first_B_2_P_InputBox_P1">
                                            Name
                                        </div>
                                        <div id="PAD_first_B_2_P_InputBox_P2">
                                            Qazi Rehmat Hussain
                                        </div>
                                    </div>
                                    {/* Info 2 */}
                                    <div id="PAD_first_B_2_P_InputBox">
                                        <div id="PAD_first_B_2_P_InputBox_P1">
                                            Gender
                                        </div>
                                        <div id="PAD_first_B_2_P_InputBox_P2">
                                            Male
                                        </div>
                                    </div>
                                </div>
                                {/* Part 2 */}
                                <div id="PAD_first_B_2_P2">
                                    {/* Info 1 */}
                                    <div id="PAD_first_B_2_P_InputBox">
                                        <div id="PAD_first_B_2_P_InputBox_P1">
                                            Date
                                        </div>
                                        <div id="PAD_first_B_2_P_InputBox_P2">
                                            20
                                        </div>
                                    </div>
                                    {/* Info 2 */}
                                    <div id="PAD_first_B_2_P_InputBox">
                                        <div id="PAD_first_B_2_P_InputBox_P1">
                                            Time Slot
                                        </div>
                                        <div id="PAD_first_B_2_P_InputBox_P2">
                                            10:00 - 12:00
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* 3 */}
                            <div id="PAD_first_B_3">
                                {/* Button */}
                                <div id="PAD_first_B_3_Box">
                                    <button id="PAD_first_B_3_Box_Btn1">Accept</button>
                                </div>
                                {/* Button */}
                                <div id="PAD_first_B_3_Box">
                                    <button id="PAD_first_B_3_Box_Btn2">Reject</button>
                                </div>
                                {/* Button */}
                                <div id="PAD_first_B_3_Box">
                                    <button id="PAD_first_B_3_Box_Btn3">Delay</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Start */}
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








