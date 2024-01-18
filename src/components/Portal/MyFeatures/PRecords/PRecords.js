import React, { useState } from 'react'
import PSidebar from '../PSidebar'
// CSS
import '../PProfile/PProfile.css'
import '../PRecords/PRecords.css'
// Images
import logout from '../../../Pics/logout.png'
import Str from "../../../Pics/Str.png"
import Str_3 from "../../../Pics/Str_3.png"
// useNavigate
import { useNavigate } from 'react-router-dom'
// Logout Logic 
import { database } from '../../firebase'
import { signOut } from 'firebase/auth'

export default function PRecords() {
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
                                    ID
                                </div>
                                <div id="PR_Second_Box_Part_1">
                                    Image
                                </div>
                                <div id="PR_Second_Box_Part_2">
                                    Name
                                </div>
                                <div id="PR_Second_Box_Part_3">
                                    CNIC
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* 3 - PR_Third */}
                    <div id="PR_Third">
                        <div id="sub_PR_Third">
                            {/* Record Box 1 */}
                            <div id="PR_Third_Box" onClick={() => navigate('/PR_List')}>
                                <div id="PR_Third_Box_Part_0">
                                    1234567890
                                </div>
                                <div id="PR_Third_Box_Part_1">
                                    <img src={Str_3} alt="NA" />
                                </div>
                                <div id="PR_Third_Box_Part_2">
                                    Qazi Rehmat Hussain
                                </div>
                                <div id="PR_Third_Box_Part_3">
                                    42501-3205936-9
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





