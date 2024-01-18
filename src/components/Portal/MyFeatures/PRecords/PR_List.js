import React, { useState } from 'react'
import PSidebar from '../PSidebar'
// CSS
import '../PProfile/PProfile.css'
import "./PRecords.css"
import "../PTracking/PT.css"
// Images
import logout from '../../../Pics/logout.png'
// useNavigate
import { useNavigate } from 'react-router-dom'
// Logout Logic 
import { database } from '../../firebase'
import { signOut } from 'firebase/auth'

export default function PR_List() {
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
                {/* PR_List */}
                {/* PTS_Pre, sub_PTS_Pre, PTS_Pre_Box Are Write For Media Query Identification */}
                <div id="PTS_Pre">
                    <div id="sub_PTS_Pre">
                        <div id="PTS_Pre_Box">
                            <h2>Student Records Detail <i class="fa fa-id-card-o"></i></h2>
                        </div>
                        {/* Information List */}
                        <div id="PR_List_Detail">
                            {/* ---- 1 - University Information ---- */}
                            <h3>1 - University Details</h3>
                            <div id="PR_Detail_Part">
                                {/* Element */}
                                <div id="PR_Detail_Box">
                                    <div id="PR_D_B_1">University Name</div>
                                    <div id="PR_D_B_2">------</div>
                                </div>
                                {/* Element */}
                                <div id="PR_Detail_Box">
                                    <div id="PR_D_B_1">Campus</div>
                                    <div id="PR_D_B_2">------</div>
                                </div>
                                {/* Element */}
                                <div id="PR_Detail_Box">
                                    <div id="PR_D_B_1">Intake</div>
                                    <div id="PR_D_B_2">------</div>
                                </div>
                                {/* Element */}
                                <div id="PR_Detail_Box">
                                    <div id="PR_D_B_1">Course Name</div>
                                    <div id="PR_D_B_2">------</div>
                                </div>
                            </div>
                            {/* ---- 1 - University Information ---- */}
                            <h3>2 - Personal Details</h3>
                            <div id="PR_Detail_Part">
                                {/* Element */}
                                <div id="PR_Detail_Box">
                                    <div id="PR_D_B_1">Title</div>
                                    <div id="PR_D_B_2">------</div>
                                </div>
                                {/* Element */}
                                <div id="PR_Detail_Box">
                                    <div id="PR_D_B_1">Family Name</div>
                                    <div id="PR_D_B_2">------</div>
                                </div>
                                {/* Element */}
                                <div id="PR_Detail_Box">
                                    <div id="PR_D_B_1">Given Name</div>
                                    <div id="PR_D_B_2">------</div>
                                </div>
                                {/* Element */}
                                <div id="PR_Detail_Box">
                                    <div id="PR_D_B_1">Date of Birth</div>
                                    <div id="PR_D_B_2">------</div>
                                </div>
                                {/* Element */}
                                <div id="PR_Detail_Box">
                                    <div id="PR_D_B_1">City of Birth</div>
                                    <div id="PR_D_B_2">------</div>
                                </div>
                                {/* Element */}
                                <div id="PR_Detail_Box">
                                    <div id="PR_D_B_1">Country of Citizenship</div>
                                    <div id="PR_D_B_2">------</div>
                                </div>
                                {/* Element */}
                                <div id="PR_Detail_Box">
                                    <div id="PR_D_B_1">Dual Citizen</div>
                                    <div id="PR_D_B_2">------</div>
                                </div>
                                {/* Element */}
                                <div id="PR_Detail_Box">
                                    <div id="PR_D_B_1">Email Address</div>
                                    <div id="PR_D_B_2">------</div>
                                </div>
                                {/* Element */}
                                <div id="PR_Detail_Box">
                                    <div id="PR_D_B_1">First Language Spoken</div>
                                    <div id="PR_D_B_2">------</div>
                                </div>
                                {/* Element */}
                                <div id="PR_Detail_Box">
                                    <div id="PR_D_B_1">Marital Status</div>
                                    <div id="PR_D_B_2">------</div>
                                </div>
                                {/* Element */}
                                <div id="PR_Detail_Box">
                                    <div id="PR_D_B_1">Have Any Medical Or Health Issue</div>
                                    <div id="PR_D_B_2">------</div>
                                </div>
                                {/* Element */}
                                <div id="PR_Detail_Box">
                                    <div id="PR_D_B_1">Do you have disability, impairment or long term medical condition?</div>
                                    <div id="PR_D_B_2">------</div>
                                </div>
                                {/* Element */}
                                <div id="PR_Detail_Box">
                                    <div id="PR_D_B_1">Been convicted of any crime or offence in any Country</div>
                                    <div id="PR_D_B_2">------</div>
                                </div>
                                {/* Element */}
                                <div id="PR_Detail_Box">
                                    <div id="PR_D_B_1">Home Country Address with Suburb, City, State, Country & postcode</div>
                                    <div id="PR_D_B_2">------</div>
                                </div>
                                {/* Element */}
                                <div id="PR_Detail_Box">
                                    <div id="PR_D_B_1">Home Country Phone Number with Area & Country Code</div>
                                    <div id="PR_D_B_2">------</div>
                                </div>
                                {/* Element */}
                                <div id="PR_Detail_Box">
                                    <div id="PR_D_B_1">Visa refusal of Australia</div>
                                    <div id="PR_D_B_2">------</div>
                                </div>
                                {/* Element */}
                                <div id="PR_Detail_Box">
                                    <div id="PR_D_B_1">Been refused entry to any Country</div>
                                    <div id="PR_D_B_2">------</div>
                                </div>
                            </div>
                            {/* ---- 3 - English Test Data ---- */}
                            <h3>3 - English Ability Details</h3>
                            <div id="PR_Detail_Part">
                                {/* Element */}
                                <div id="PR_Detail_Box">
                                    <div id="PR_D_B_1">English Test Name (PTE/IELTS)</div>
                                    <div id="PR_D_B_2">------</div>
                                </div>
                                {/* Element */}
                                <div id="PR_Detail_Box">
                                    <div id="PR_D_B_1">Date of Test</div>
                                    <div id="PR_D_B_2">------</div>
                                </div>
                                {/* Element */}
                                <div id="PR_Detail_Box">
                                    <div id="PR_D_B_1">Overall Score</div>
                                    <div id="PR_D_B_2">------</div>
                                </div>
                                {/* Element */}
                                <div id="PR_Detail_Box">
                                    <div id="PR_D_B_1">Listening Score</div>
                                    <div id="PR_D_B_2">------</div>
                                </div>
                                {/* Element */}
                                <div id="PR_Detail_Box">
                                    <div id="PR_D_B_1">Reading Score</div>
                                    <div id="PR_D_B_2">------</div>
                                </div>
                                {/* Element */}
                                <div id="PR_Detail_Box">
                                    <div id="PR_D_B_1">Writing Score</div>
                                    <div id="PR_D_B_2">------</div>
                                </div>
                                {/* Element */}
                                <div id="PR_Detail_Box">
                                    <div id="PR_D_B_1">Speaking Score</div>
                                    <div id="PR_D_B_2">------</div>
                                </div>
                                {/* Element */}
                                <div id="PR_Detail_Box">
                                    <div id="PR_D_B_1">Test Reference Number</div>
                                    <div id="PR_D_B_2">------</div>
                                </div>
                                {/* Element */}
                                <div id="PR_Detail_Box">
                                    <div id="PR_D_B_1">Have you undertaken and completed any study where English is language of instruction? </div>
                                    <div id="PR_D_B_2">------</div>
                                </div>
                            </div>
                            {/* ---- 4 - Education Data ---- */}
                            <h3>4 - Education Details</h3>
                            <div id="PR_Detail_Part">
                                {/* Element */}
                                <div id="PR_Detail_Box">
                                    <div id="PR_D_B_1">High School / Year 12 / Equivalent</div>
                                    <div id="PR_D_B_2">------</div>
                                </div>
                                {/* Element */}
                                <div id="PR_Detail_Box">
                                    <div id="PR_D_B_1">School Name</div>
                                    <div id="PR_D_B_2">------</div>
                                </div>
                                {/* Element */}
                                <div id="PR_Detail_Box">
                                    <div id="PR_D_B_1">Program Name</div>
                                    <div id="PR_D_B_2">------</div>
                                </div>
                                {/* Element */}
                                <div id="PR_Detail_Box">
                                    <div id="PR_D_B_1">Country</div>
                                    <div id="PR_D_B_2">------</div>
                                </div>
                                {/* Element */}
                                <div id="PR_Detail_Box">
                                    <div id="PR_D_B_1">Course Length – Medium (Language) of Instruction </div>
                                    <div id="PR_D_B_2">------</div>
                                </div>
                                {/* Element */}
                                <div id="PR_Detail_Box">
                                    <div id="PR_D_B_1">Month / Year Started</div>
                                    <div id="PR_D_B_2">------</div>
                                </div>
                                {/* Element */}
                                <div id="PR_Detail_Box">
                                    <div id="PR_D_B_1">Month / Year Finished</div>
                                    <div id="PR_D_B_2">------</div>
                                </div>
                                {/* Element */}
                                <div id="PR_Detail_Box">
                                    <div id="PR_D_B_1">Complete or Incomplete or Withdrawn</div>
                                    <div id="PR_D_B_2">------</div>
                                </div>
                                {/* Element */}
                                <div id="PR_Detail_Box">
                                    <div id="PR_D_B_1">If incomplete then when will finish</div>
                                    <div id="PR_D_B_2">------</div>
                                </div>
                                {/* Element */}
                                <div id="PR_Detail_Box">
                                    <div id="PR_D_B_1">If incomplete then result available Date</div>
                                    <div id="PR_D_B_2">------</div>
                                </div>
                            </div>
                            {/* ---- 5 - Additional Data ---- */}
                            <h3>5 - Additional Details</h3>
                            <div id="PR_Detail_Part">
                                {/* Element */}
                                <div id="PR_Detail_Box">
                                    <div id="PR_D_B_1">Father Highest Qualification</div>
                                    <div id="PR_D_B_2">------</div>
                                </div>
                                {/* Element */}
                                <div id="PR_Detail_Box">
                                    <div id="PR_D_B_1">Mother Highest Qualification</div>
                                    <div id="PR_D_B_2">------</div>
                                </div>
                                {/* Element */}
                                <div id="PR_Detail_Box">
                                    <div id="PR_D_B_1">Scholarships</div>
                                    <div id="PR_D_B_2">------</div>
                                </div>
                                {/* Element */}
                                <div id="PR_Detail_Box">
                                    <div id="PR_D_B_1">Have you granted Scholarship (Government or Private) before</div>
                                    <div id="PR_D_B_2">------</div>
                                </div>
                                {/* Element */}
                                <div id="PR_Detail_Box">
                                    <div id="PR_D_B_1">Are you applying for Scholarship (Government or Private)</div>
                                    <div id="PR_D_B_2">------</div>
                                </div>
                            </div>
                            {/* ---- 6 - Bachelor Data ---- */}
                            <h3>6 - Bachelor Details</h3>
                            <p id="PR_Detail_P_Hint">( A filled Bachelor field signifies an application for a Master's program, while an empty field indicates an application for a Bachelor's program. )</p>
                            <div id="PR_Detail_Part">
                                {/* Element */}
                                <div id="PR_Detail_Box">
                                    <div id="PR_D_B_1">University Name</div>
                                    <div id="PR_D_B_2">------</div>
                                </div>
                                {/* Element */}
                                <div id="PR_Detail_Box">
                                    <div id="PR_D_B_1">Program Name</div>
                                    <div id="PR_D_B_2">------</div>
                                </div>
                                {/* Element */}
                                <div id="PR_Detail_Box">
                                    <div id="PR_D_B_1">Country</div>
                                    <div id="PR_D_B_2">------</div>
                                </div>
                                {/* Element */}
                                <div id="PR_Detail_Box">
                                    <div id="PR_D_B_1">Course Length - Medium (Language) of Instruction</div>
                                    <div id="PR_D_B_2">------</div>
                                </div>
                                {/* Element */}
                                <div id="PR_Detail_Box">
                                    <div id="PR_D_B_1">Month / Year Started</div>
                                    <div id="PR_D_B_2">------</div>
                                </div>
                                {/* Element */}
                                <div id="PR_Detail_Box">
                                    <div id="PR_D_B_1">Month / Year Finished</div>
                                    <div id="PR_D_B_2">------</div>
                                </div>
                                {/* Element */}
                                <div id="PR_Detail_Box">
                                    <div id="PR_D_B_1">Complete or Incomplete or Withdrawn</div>
                                    <div id="PR_D_B_2">------</div>
                                </div>
                                {/* Element */}
                                <div id="PR_Detail_Box">
                                    <div id="PR_D_B_1">If incomplete then when will finish</div>
                                    <div id="PR_D_B_2">------</div>
                                </div>
                                {/* Element */}
                                <div id="PR_Detail_Box">
                                    <div id="PR_D_B_1">If incomplete then result available Date</div>
                                    <div id="PR_D_B_2">------</div>
                                </div>
                                {/* Element */}
                                <div id="PR_Detail_Box">
                                    <div id="PR_D_B_1">Are you applying for Credits base on this study</div>
                                    <div id="PR_D_B_2">------</div>
                                </div>
                                {/* Element */}
                                <div id="PR_Detail_Box">
                                    <div id="PR_D_B_1">Have you completed a master's degree?</div>
                                    <div id="PR_D_B_2">------</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Start */}
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
            </PSidebar>
        </div>
    )
}





