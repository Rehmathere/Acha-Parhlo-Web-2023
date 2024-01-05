import React from 'react'
import PSidebar from '../PSidebar'
// useNavigate
import { useNavigate } from 'react-router-dom'
// CSS
import '../PProfile/PProfile.css'
import '../PRecords/PRecords.css'
// Images
import logout from '../../../Pics/logout.png'
import Str from "../../../Pics/Str.png"
import Str_3 from "../../../Pics/Str_3.png"

export default function PRecords() {
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
                            <div id="PR_Third_Box" onClick={() => navigate('/PR_List')}>
                                <div id="PR_Third_Box_Part_0">
                                    00000000
                                </div>
                                <div id="PR_Third_Box_Part_1">
                                    <img src={Str_3} alt="NA" />
                                </div>
                                <div id="PR_Third_Box_Part_2">
                                    Zain
                                </div>
                                <div id="PR_Third_Box_Part_3">
                                    wr501-209936-9
                                </div>
                            </div>
                        </div>
                        {/* End */}
                    </div>
                </>
            </PSidebar>
        </div>
    )
}





