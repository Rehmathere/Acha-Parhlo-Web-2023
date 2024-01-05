import React, { useState } from 'react'
import PSidebar from '../PSidebar'
// CSS
import '../PProfile/PProfile.css'
import "./PRecords.css"
// Images
import logout from '../../../Pics/logout.png'

export default function PR_List() {
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
                <div id="PR_List">
                    <div id="sub_PR_List">
                        <div id="PR_List_Box">
                            <h2>Student Records Detail <i class="fa fa-id-card-o"></i></h2>
                            {/* Start */}
                        </div>
                    </div>
                </div>
                {/* Start */}
            </PSidebar>
        </div>
    )
}





