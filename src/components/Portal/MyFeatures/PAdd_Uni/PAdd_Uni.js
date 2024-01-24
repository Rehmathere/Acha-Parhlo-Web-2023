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
// Logout Logic 
import { database } from '../../firebase'
import { signOut } from 'firebase/auth'
import "../PAppointments/PAppoint.css"

export default function PAdd_Uni() {
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
                                        <button>Add <i class="fa fa-plus"></i></button>
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
                                <div id="PR_Second_Box_Part_0">
                                    Sr No
                                </div>
                                <div id="PR_Second_Box_Part_1">
                                    Image
                                </div>
                                <div id="PR_Second_Box_Part_2">
                                    University
                                </div>
                                <div id="PR_Second_Box_Part_3">
                                    Subject
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
                                <div id="PR_Third_Box_Part_0">
                                    1
                                </div>
                                <div id="PR_Third_Box_Part_1">
                                    <img src={Str_9} alt="NA" />
                                </div>
                                <div id="PR_Third_Box_Part_2">
                                    Deakin
                                </div>
                                <div id="PR_Third_Box_Part_3">
                                    Applied Science
                                </div>
                            </div>
                            {/* Record Box 2 */}
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








