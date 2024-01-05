import React from 'react'
import PSidebar from '../PSidebar'
// useNavigate
import { useNavigate } from 'react-router-dom'
// CSS
import '../PProfile/PProfile.css'
// Images
import logout from '../../../Pics/logout.png'
import Ptr from "../../../Pics/PTr.png"

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
                    <div id="PTr_second">
                        <div id="sub_PTr_second">
                            {/* 2 - Part 1 */}
                            <div id="PTr_second_Part1">
                                <div id="PTr_second_Part1_Box">
                                    <div id="PTr_second_Part1_1">
                                        Sr No.
                                    </div>
                                    <div id="PTr_second_Part1_2">
                                        Name
                                    </div>
                                    <div id="PTr_second_Part1_3">
                                        University
                                    </div>
                                    <div id="PTr_second_Part1_4">
                                        Course
                                    </div>
                                </div>
                            </div>
                            {/* 2 - Part 2 */}
                            <div id="PTr_second_Part2">
                                {/* Box2 Number 1 */}
                                <div id="PTr_sec_Part2_Box" onClick={() => navigate('/PTStatus')}>
                                    <div id="PTr_sec_Part2_1">
                                        1
                                    </div>
                                    <div id="PTr_sec_Part2_2">
                                        Qazi Rehmat Hussain
                                    </div>
                                    <div id="PTr_sec_Part2_3">
                                        The Western Sdyney
                                    </div>
                                    <div id="PTr_sec_Part2_4">
                                        Apllied Science
                                    </div>
                                </div>
                                {/* Box2 Number 1 */}
                                <div id="PTr_sec_Part2_Box" onClick={() => navigate('/PTStatus')}>
                                    <div id="PTr_sec_Part2_1">
                                        2
                                    </div>
                                    <div id="PTr_sec_Part2_2">
                                        Zain
                                    </div>
                                    <div id="PTr_sec_Part2_3">
                                        Deakin
                                    </div>
                                    <div id="PTr_sec_Part2_4">
                                        Arts
                                    </div>
                                </div>
                            </div>

                            {/* Start */}
                        </div>
                    </div>
                    {/* --------------------------------------------- */}
                    {/* <br />
                    <br />
                    <button onClick={() => navigate('/PTStatus')}>Check PTStatus</button> */}
                </>
            </PSidebar>
        </div>
    )
}








