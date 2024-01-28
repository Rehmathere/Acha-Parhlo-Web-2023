import React, { useState } from 'react'
import PSidebar from '../PSidebar'
// useNavigate
import { useNavigate } from 'react-router-dom'
// CSS
import '../PProfile/PProfile.css'
import '../PRecords/PRecords.css'
import "../PAdd_Uni/PAdd_U.css"
// Images
import logout from '../../../Pics/logout.png'
import Str_6 from "../../../Pics/Str_6.png"
import PADD_Img from "../../../Pics/Adduni_z.png"
import Str_9 from "../../../Pics/Str_9.png"
import add_u from '../../../Pics/del_aa.gif'
import confirm_u from '../../../Pics/del_a.png'
// Logout Logic 
import { database } from '../../firebase'
import { signOut } from 'firebase/auth'
import "../PAppointments/PAppoint.css"

export default function PAdd_Uni() {
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
            }, 3000);
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
                                <h1>Add Universities</h1>
                            </div>
                            <div id="PTr_first_2">
                                <img src={Str_6} alt="Na" />
                            </div>
                        </div>
                    </div>
                    {/* PAdd_Uni Code Start From Here */}
                    {/* 2 - PAdd_U_first */}
                    <div id="PAdd_U_first">
                        <div id="sub_PAdd_U_first">
                            <div id="PAdd_U_first_Box">
                                <div id="PAdd_U_f_B_1">
                                    <div id="PAdd_U_f_B_1_Box">
                                        Want To Append a New Educational Institution?
                                        <button onClick={() => navigate('/PAdd_U_add')}>Add <i class="fa fa-plus"></i></button>
                                    </div>
                                </div>
                                <div id="PAdd_U_f_B_2">
                                    <div id="PAdd_U_f_B_2_Box">
                                        <img src={PADD_Img} alt="NA" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Previous Code */}
                    {/* 2 - PR_Second */}
                    <div id="PR_Second">
                        <div id="sub_PR_Second">
                            <div id="PR_Second_Box">
                                <div id="PR_Second_Box_Part_2">
                                    University
                                </div>
                                {/* Part 2 */}
                                <div id="PR_Second_Box_Part_1">
                                    Image
                                </div>
                                {/* Part 4 */}
                                <div id="PR_Second_Box_Part_3">
                                    Subject
                                </div>
                                {/* Part 1 */}
                                <div id="PR_Second_Box_Part_0">
                                    Status
                                    {/* Part 3 */}
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* ----- Previous Code ----- */}
                    {/* 3 - PAdd_U_Third */}
                    <div id="PR_Third">
                        <div id="sub_PR_Third">
                            {/* Record Box 1 */}
                            <div id="PR_Third_Box">
                                {/* Part 3 */}
                                <div id="PR_Third_Box_Part_2">
                                    Deakin
                                </div>
                                {/* Part 2 */}
                                <div id="PR_Third_Box_Part_1">
                                    <img src={Str_9} alt="NA" />
                                </div>
                                {/* Part 4 */}
                                <div id="PR_Third_Box_Part_3">
                                    Applied Science
                                </div>
                                {/* Part 1 */}
                                <div id="PR_Third_Box_Part_0">
                                    <button onClick={handleAddUniversityClick}>Delete <i class="fa fa-trash"></i></button>
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








