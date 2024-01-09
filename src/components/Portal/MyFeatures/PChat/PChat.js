import React from 'react'
import PSidebar from '../PSidebar'
// useNavigate
import { useNavigate } from 'react-router-dom'
// CSS
import '../PProfile/PProfile.css'
import '../PRecords/PRecords.css'
import "../PChat/PChat.css"
// Images
import logout from '../../../Pics/logout.png'
import Str_7 from "../../../Pics/Str_7.png"

export default function PChat() {
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
                                <h1>Chat</h1>
                            </div>
                            <div id="PTr_first_2">
                                <img src={Str_7} alt="Na" />
                            </div>
                        </div>
                    </div>
                    {/* PChat Code Start From Here */}
                    {/* 2 - PChat__first */}
                    <div id="PChat_first">
                        <div id="sub_PChat_first">
                            {/* Start */}
                        </div>
                    </div>
                </>
            </PSidebar>
        </div>
    )
}












