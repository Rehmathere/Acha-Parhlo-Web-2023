import React, { useState } from 'react'
import PSidebar from '../PSidebar'
// CSS
import '../PProfile/PProfile.css'
import '../PRecords/PRecords.css'
// Images
import logout from '../../../Pics/logout.png'
import Str from "../../../Pics/Str.png"
import Str_3 from "../../../Pics/Str_3.png"
import add_u from '../../../Pics/del_aa.gif'
import confirm_u from '../../../Pics/del_a.png'
// useNavigate
import { useNavigate } from 'react-router-dom'
// Logout Logic 
import { database } from '../../firebase'
import { signOut } from 'firebase/auth'

export default function PRecords() {
        // ------ Confirm Add University Logic ------
    // State to manage which box to display
    const [showBox2, setShowBox2] = useState(false);
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [showParent, setShowParent] = useState(false);
    // Function to handle button click and toggle between boxes
    const handleButtonClick = () => {
        if (!showBox2) {
            setShowConfirmation(true);
        }
        setShowBox2(!showBox2);
        if (!showBox2) {
            // Set a timeout to hide the parent after 3 seconds
            setTimeout(() => {
                setShowParent(false);
            }, 2000);
        }
    };
    const handleAddUniversityClick = () => {
        setShowParent(true); // Show the parent div
        setShowConfirmation(true);
        setShowBox2(false); // Reset showBox2 when Add University is clicked
    };
    const handleCancelClick = () => {
        setShowParent(false);
    };
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
                                <h1>Students Record</h1>
                            </div>
                            <div id="PTr_first_2">
                                <img src={Str} alt="Na" />
                            </div>
                        </div>
                    </div>
                    {/* PRecords Code Start From Here */}
                    {/* 2 - PR_Second */}
                    <div id="PR_Second">
                        <div id="sub_PR_Second">
                            <div id="PR_Second_Box">
                                <div id="PR_Second_Box_Part_0">
                                    CNIC
                                </div>
                                <div id="PR_Second_Box_Part_1">
                                    Image
                                </div>
                                <div id="PR_Second_Box_Part_2">
                                    Name
                                </div>
                                <div id="PR_Second_Box_Part_3">
                                    Status
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* 3 - PR_Third */}
                    <div id="PR_Third">
                        <div id="sub_PR_Third">
                            {/* Record Box 1 */}
                            <div id="PR_Third_Box">
                                <div id="PR_Third_Box_Part_0" onClick={() => navigate('/PR_List')}> 
                                    42501-3205936-9
                                </div>
                                <div id="PR_Third_Box_Part_1" onClick={() => navigate('/PR_List')}>
                                    <img src={Str_3} alt="NA" />
                                </div>
                                <div id="PR_Third_Box_Part_2" onClick={() => navigate('/PR_List')}>
                                    Qazi Rehmat Hussain
                                </div>
                                <div id="PR_Third_Box_Part_3">
                                    <button id='PR_Third_B_P_3_Btn' onClick={handleAddUniversityClick}>Delete <i class="fa fa-trash"></i></button>
                                </div>
                            </div>
                            {/* Record Box 2 */}
                        </div>
                    </div>
                    {/* ----- Confirm Add University Logic ----- */}
                    <div id='PA_U_ConfirmAdd_Parent' style={{ display: showParent ? 'block' : 'none' }}>
                        {/* Basic Logic */}
                        <div id="sub_PA_U_ConfirmAdd_Parent" style={{ display: showConfirmation ? 'block' : 'none' }}>
                            <div id="PA_U_ConfirmAdd_Parent_Box">
                                {/* Box 1 */}
                                <div id="PA_U_ConfirmAdd_1" style={{ display: showBox2 ? 'none' : 'block' }}>
                                    <h3>Confirm Delete ?</h3>
                                    <div id="PA_U_ConfirmAdd_img">
                                        <img src={add_u} alt="NA" />
                                    </div>
                                    <button id='PA_U_ConfirmAdd_1_A' onClick={handleButtonClick}>Delete</button>
                                    {/* Cancel Button */}
                                    <button id='PA_U_ConfirmAdd_1_B' onClick={handleCancelClick}>Don't Delete</button>
                                </div>
                                {/* Box 2 */}
                                <div id="PA_U_ConfirmAdd_2" style={{ display: showBox2 ? 'block' : 'none' }}>
                                    <div id="PA_U_ConfirmAdd_img">
                                        <img src={confirm_u} alt="NA" />
                                    </div>
                                    <h3>Deleted Successfully !</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Start */}
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





