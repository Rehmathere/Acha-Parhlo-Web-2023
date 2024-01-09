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
                    {/* 2 - PR_first */}
                    <div id="PApp_first">
                        <div id="sub_PApp_first">
                            {/* Start */}
                        </div>
                    </div>
                </>
            </PSidebar>
        </div>
    )
}








