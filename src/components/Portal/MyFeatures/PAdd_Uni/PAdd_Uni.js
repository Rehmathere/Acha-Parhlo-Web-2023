import React from 'react'
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

export default function PAdd_Uni() {
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
                            {/* Start */}
                        </div>
                    </div>
                </>
            </PSidebar>
        </div>
    )
}








