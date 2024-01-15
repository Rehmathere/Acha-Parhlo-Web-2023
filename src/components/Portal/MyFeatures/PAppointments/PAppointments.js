import React from 'react'
import PSidebar from '../PSidebar'
// useNavigate
import { useNavigate } from 'react-router-dom'
// CSS
import '../PProfile/PProfile.css'
import '../PRecords/PRecords.css'
import "../PAppointments/PAppoint.css"
// Images
import logout from '../../../Pics/logout.png'
import Str_4 from "../../../Pics/Str_4.png"
import Str_5 from "../../../Pics/Str_5.png"

export default function PAppointments() {
    // useNavigate
    const navigate = useNavigate();
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
                        <button id="sub_Head_2">
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
                                <h1>Appointment</h1>
                            </div>
                            <div id="PTr_first_2">
                                <img src={Str_4} alt="Na" />
                            </div>
                        </div>
                    </div>
                    {/* PAppointments Code Start From Here */}
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
                                    Date
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* 3 - PR_Third */}
                    <div id="PR_Third">
                        <div id="sub_PR_Third">
                            {/* Record Box 1 */}
                            <div id="PR_Third_Box" onClick={() => navigate('/PAppointDetail')}>
                                <div id="PR_Third_Box_Part_0">
                                    1234567890
                                </div>
                                <div id="PR_Third_Box_Part_1">
                                    <img src={Str_5} alt="NA" />
                                </div>
                                <div id="PR_Third_Box_Part_2">
                                    Qazi Rehmat Hussain
                                </div>
                                <div id="PR_Third_Box_Part_3">
                                    12 / 01 / 2024
                                </div>
                            </div>
                            {/* Record Box 2 */}
                        </div>
                        {/* End */}
                    </div>
                </>
            </PSidebar>
        </div>
    )
}








