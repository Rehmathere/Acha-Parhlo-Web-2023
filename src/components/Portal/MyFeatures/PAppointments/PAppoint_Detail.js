import React, { useState } from 'react'
import PSidebar from '../PSidebar'
// CSS
import '../PProfile/PProfile.css'
import "../PRecords/PRecords.css"
import "../PTracking/PT.css"
// Images
import logout from '../../../Pics/logout.png'

export default function PAppoint_Detail() {
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
                {/* PR_List */}
                {/* PTS_Pre, sub_PTS_Pre, PTS_Pre_Box Are Write For Media Query Identification */}
                <div id="PTS_Pre">
                    <div id="sub_PTS_Pre">
                        <div id="PTS_Pre_Box">
                            <h2>Appointment Detail <i class="fa fa-id-card-o"></i></h2>
                        </div>
                        {/* Start */}
                    </div>
                </div>
                <div id="PAD_first">
                    <div id="sub_PAD_first">
                        {/* Box */}
                        <div id="PAD_first_Box">
                            {/* 1 */}
                            <div id="PAD_first_B_1">
                                {/* Image */}
                            </div>
                            {/* 2 */}
                            <div id="PAD_first_B_2">
                                <div id="PAD_first_B_2_P1">
                                    {/* Info 1 */}
                                </div>
                                <div id="PAD_first_B_2_P2">
                                    {/* Info 2 */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Start */}
            </PSidebar>
        </div>
    )
}







