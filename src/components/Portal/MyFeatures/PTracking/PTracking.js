import React from 'react'
import PSidebar from '../PSidebar'
// useNavigate
import { useNavigate } from 'react-router-dom'
// CSS
import '../PProfile/PProfile.css'
// Images
import logout from '../../../Pics/logout.png'

export default function PTracking() {
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
                <h1>Portal Tracking</h1>
                <br />
                <button onClick={() => navigate('/PTStatus')}>Check PTStatus</button>
            </PSidebar>
        </div>
    )
}





