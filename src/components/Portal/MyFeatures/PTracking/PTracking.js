import React, { useState } from 'react'
import PSidebar from '../PSidebar'
// useNavigate
import { useNavigate } from 'react-router-dom'
// CSS
import '../PProfile/PProfile.css'
// Images
import logout from '../../../Pics/logout.png'
import Ptr from "../../../Pics/PTr.png"
import Str_8 from "../../../Pics/Str_8.png"
// Logout Logic 
import { database } from '../../firebase'
import { signOut } from 'firebase/auth'

export default function PTracking() {
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
                                <h1>Application Tracking</h1>
                            </div>
                            <div id="PTr_first_2">
                                <img src={Ptr} alt="Na" />
                            </div>
                        </div>
                    </div>
                    {/* 2 - Ptr_Second */}
                    {/* 2 - PR_Second */}
                    <div id="PR_Second">
                        <div id="sub_PR_Second">
                            <div id="PR_Second_Box">
                                <div id="PR_Second_Box_Part_0">
                                    ID
                                </div>
                                <div id="PR_Second_Box_Part_1">
                                    Image
                                </div>
                                <div id="PR_Second_Box_Part_2">
                                    Name
                                </div>
                                <div id="PR_Second_Box_Part_3">
                                    University
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* 3 - PR_Third */}
                    <div id="PR_Third">
                        <div id="sub_PR_Third">
                            {/* Record Box 1 */}
                            <div id="PR_Third_Box" onClick={() => navigate('/PTStatus')}>
                                <div id="PR_Third_Box_Part_0">
                                    1234567890
                                </div>
                                <div id="PR_Third_Box_Part_1">
                                    <img src={Str_8} alt="NA" />
                                </div>
                                <div id="PR_Third_Box_Part_2">
                                    Qazi Rehmat Hussain
                                </div>
                                <div id="PR_Third_Box_Part_3">
                                    Deakin
                                </div>
                            </div>
                            {/* Record Box 2 */}
                        </div>
                        {/* End */}
                    </div>
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








