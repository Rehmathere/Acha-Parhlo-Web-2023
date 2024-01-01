import React, { useState } from 'react'
import PSidebar from '../PSidebar'
// CSS
import '../PProfile/PProfile.css'
import './PT.css'
// Images
import logout from '../../../Pics/logout.png'
import Pt_1 from '../../../Pics/PT_1.png'
import Pt_2 from '../../../Pics/PT_2.png'
import Pt_3 from '../../../Pics/PT_3.png'
import Pt_4 from '../../../Pics/PT_4.png'
import PT_5 from '../../../Pics/PT_5.png'
import PT_6 from '../../../Pics/PT_6.png'
import PT_7 from '../../../Pics/PT_7.png'
import PT_8 from '../../../Pics/PT_8.png'

export default function PTStatus() {
    // Status Logic
    // Button useState
    const [button1Color, setButton1Color] = useState('white');
    const [button2Color, setButton2Color] = useState('white');
    const [button3Color, setButton3Color] = useState('white');
    const [button4Color, setButton4Color] = useState('white');
    const [button5Color, setButton5Color] = useState('white');
    const [button6Color, setButton6Color] = useState('white');
    const [button7Color, setButton7Color] = useState('white');
    const [button8Color, setButton8Color] = useState('white');
    // Line useState
    const [Line1Color, setLine1Color] = useState('#807F7E');
    const [Line2Color, setLine2Color] = useState('#807F7E');
    const [Line3Color, setLine3Color] = useState('#807F7E');
    const [Line4Color, setLine4Color] = useState('#807F7E');
    const [Line5Color, setLine5Color] = useState('#807F7E');
    const [Line6Color, setLine6Color] = useState('#807F7E');
    const [Line7Color, setLine7Color] = useState('#807F7E');
    // Functions
    // 1
    const handleButton1Click = () => {
        // Button 1
        setButton1Color('#FFC300');
        // ---- Extra Color Off ----
        setButton2Color('white');
        setButton3Color('white');
        setButton4Color('white');
        setButton5Color('white');
        setButton6Color('white');
        setButton7Color('white');
        setButton8Color('white');
        
    };
    // 2
    const handleButton2Click = () => {
        // Button 2
        setButton2Color('#FFC300');
        // Button 1
        setButton1Color('#FBD1A5');
        // -- Line 1
        setLine1Color('#001400');
        // ---- Extra Color Off ----
        setButton3Color('white');
        setButton4Color('white');
        setButton5Color('white');
        setButton6Color('white');
        setButton7Color('white');
        setButton8Color('white');
    };
    // 3
    const handleButton3Click = () => {
        // Button 3
        setButton3Color('#FFC300');
        // Button 2
        setButton2Color('#FBD1A5');
        // Button 1
        setButton1Color('#FBD1A5');
        // -- Line 1
        setLine1Color('#001400');
        // -- Line 2
        setLine2Color('#001400');
        // ---- Extra Color Off ----
        setButton4Color('white');
        setButton5Color('white');
        setButton6Color('white');
        setButton7Color('white');
        setButton8Color('white');
    };
    // 4
    const handleButton4Click = () => {
        // Button 4
        setButton4Color('#FFC300');
        // Button 3
        setButton3Color('#FBD1A5');
        // Button 2
        setButton2Color('#FBD1A5');
        // Button 1
        setButton1Color('#FBD1A5');
        // -- Line 1
        setLine1Color('#001400');
        // -- Line 2
        setLine2Color('#001400');
        // -- Line 3
        setLine3Color('#001400');
        // ---- Extra Color Off ----
        setButton5Color('white');
        setButton6Color('white');
        setButton7Color('white');
        setButton8Color('white');
    };
    // 5
    const handleButton5Click = () => {
        // Button 5
        setButton5Color('#FFC300');
        // Button 4
        setButton4Color('#FBD1A5');
        // Button 3
        setButton3Color('#FBD1A5');
        // Button 2
        setButton2Color('#FBD1A5');
        // Button 1
        setButton1Color('#FBD1A5');
        // -- Line 1
        setLine1Color('#001400');
        // -- Line 2
        setLine2Color('#001400');
        // -- Line 3
        setLine3Color('#001400');
        // -- Line 4
        setLine4Color('#001400');
        // ---- Extra Color Off ----
        setButton6Color('white');
        setButton7Color('white');
        setButton8Color('white');
    };
    // 6
    const handleButton6Click = () => {
        // Button 6
        setButton6Color('#FFC300');
        // Button 5
        setButton5Color('#FBD1A5');
        // Button 4
        setButton4Color('#FBD1A5');
        // Button 3
        setButton3Color('#FBD1A5');
        // Button 2
        setButton2Color('#FBD1A5');
        // Button 1
        setButton1Color('#FBD1A5');
        // -- Line 1
        setLine1Color('#001400');
        // -- Line 2
        setLine2Color('#001400');
        // -- Line 3
        setLine3Color('#001400');
        // -- Line 4
        setLine4Color('#001400');
        // -- Line 5
        setLine5Color('#001400');
        // ---- Extra Color Off ----
        setButton7Color('white');
        setButton8Color('white');
    };
    // 7
    const handleButton7Click = () => {
        // Button 7
        setButton7Color('#FFC300');
        // Button 6
        setButton6Color('#FBD1A5');
        // Button 5
        setButton5Color('#FBD1A5');
        // Button 4
        setButton4Color('#FBD1A5');
        // Button 3
        setButton3Color('#FBD1A5');
        // Button 2
        setButton2Color('#FBD1A5');
        // Button 1
        setButton1Color('#FBD1A5');
        // -- Line 1
        setLine1Color('#001400');
        // -- Line 2
        setLine2Color('#001400');
        // -- Line 3
        setLine3Color('#001400');
        // -- Line 4
        setLine4Color('#001400');
        // -- Line 5
        setLine5Color('#001400');
        // -- Line 6
        setLine6Color('#001400');
        // ---- Extra Color Off ----
        setButton8Color('white');
    };
    // 8
    const handleButton8Click = () => {
        // Button 8
        setButton8Color('#FFC300');
        // Button 7
        setButton7Color('#FBD1A5');
        // Button 6
        setButton6Color('#FBD1A5');
        // Button 5
        setButton5Color('#FBD1A5');
        // Button 4
        setButton4Color('#FBD1A5');
        // Button 3
        setButton3Color('#FBD1A5');
        // Button 2
        setButton2Color('#FBD1A5');
        // Button 1
        setButton1Color('#FBD1A5');
        // -- Line 1
        setLine1Color('#001400');
        // -- Line 2
        setLine2Color('#001400');
        // -- Line 3
        setLine3Color('#001400');
        // -- Line 4
        setLine4Color('#001400');
        // -- Line 5
        setLine5Color('#001400');
        // -- Line 6
        setLine6Color('#001400');
        // -- Line 7
        setLine7Color('#001400');
    };
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
                <div id="PTS_Pre">
                    <div id="sub_PTS_Pre">
                        <div id="PTS_Pre_Box">
                            <h2>Application Details <i class="fa fa-address-card"></i></h2>
                            <div id="PTS_Pre_Box_Detail">
                                {/* 1 - O */}
                                <div id="PTS_Pre_Box_Detail_Box">
                                    <div id="PTS_Pre_Box_Detail_Box_P1">
                                        Student Name
                                    </div>
                                    <div id="PTS_Pre_Box_Detail_Box_P2">
                                        Qazi Rehmat Hussain
                                    </div>
                                </div>
                                {/* 1 - G */}
                                <div id="PTS_Pre_Box_Detail_Box_L">
                                    <div id="PTS_Pre_Box_Detail_Box_P1">
                                        Email
                                    </div>
                                    <div id="PTS_Pre_Box_Detail_Box_P2">
                                        Rehmat.qazi000@gmail.com
                                    </div>
                                </div>
                                {/* 2 - O */}
                                <div id="PTS_Pre_Box_Detail_Box">
                                    <div id="PTS_Pre_Box_Detail_Box_P1">
                                        University Name
                                    </div>
                                    <div id="PTS_Pre_Box_Detail_Box_P2">
                                        Deakin University
                                    </div>
                                </div>
                                {/* 2 - G */}
                                <div id="PTS_Pre_Box_Detail_Box_L">
                                    <div id="PTS_Pre_Box_Detail_Box_P1">
                                        Course Name
                                    </div>
                                    <div id="PTS_Pre_Box_Detail_Box_P2">
                                        Applied Sciences
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <div id="PTS_first">
                    <div id="PTS_first_Box">
                        <h3>Application Status</h3>
                        <h4>Id No: 1234567890</h4>
                        {/* Boxes Portion */}
                        <div id="pre_Box_Light">
                            {/* --- Box 1 --- */}
                            <div id="Main_Box_Light">
                                <div id="Main_B_L_1">
                                    <div id="Box_Light" style={{ backgroundColor: button1Color }}>
                                        <img src={Pt_1} alt="NA" />
                                    </div>
                                    <p>1</p>
                                </div>
                            </div>
                            {/* Line 1 */}
                            <div id="Main_Box_Light_L">
                                <div id="F_Main_B_L_2">
                                    <div id="Main_B_L_2" style={{ backgroundColor: Line1Color }}>
                                        {/* Line 1 */}
                                    </div>
                                </div>
                            </div>
                            {/* --- Box 2 --- */}
                            <div id="Main_Box_Light">
                                <div id="Main_B_L_1">
                                    <div id="Box_Light" style={{ backgroundColor: button2Color }}>
                                        <img src={Pt_2} alt="NA" />
                                    </div>
                                    <p>2</p>
                                </div>
                            </div>
                            {/* Line 2 */}
                            <div id="Main_Box_Light_L">
                                <div id="F_Main_B_L_2">
                                    <div id="Main_B_L_2" style={{ backgroundColor: Line2Color }}>
                                        {/* Line 2 */}
                                    </div>
                                </div>
                            </div>
                            {/* --- Box 3 --- */}
                            <div id="Main_Box_Light">
                                <div id="Main_B_L_1">
                                    <div id="Box_Light" style={{ backgroundColor: button3Color }}>
                                        <img src={Pt_3} alt="NA" />
                                    </div>
                                    <p>3</p>
                                </div>
                            </div>
                            {/* Line 3 */}
                            <div id="Main_Box_Light_L">
                                <div id="F_Main_B_L_2">
                                    <div id="Main_B_L_2" style={{ backgroundColor: Line3Color }}>
                                        {/* Line 1 */}
                                    </div>
                                </div>
                            </div>
                            {/* --- Box 4 --- */}
                            <div id="Main_Box_Light">
                                <div id="Main_B_L_1">
                                    <div id="Box_Light" style={{ backgroundColor: button4Color }}>
                                        <img src={Pt_4} alt="NA" />
                                    </div>
                                    <p>4</p>
                                </div>
                            </div>
                            {/* Line 4 */}
                            <div id="Main_Box_Light_L">
                                <div id="F_Main_B_L_2">
                                    <div id="Main_B_L_2" style={{ backgroundColor: Line4Color }}>
                                        {/* Line 4 */}
                                    </div>
                                </div>
                            </div>
                            {/* --- Box 5 --- */}
                            <div id="Main_Box_Light">
                                <div id="Main_B_L_1">
                                    <div id="Box_Light" style={{ backgroundColor: button5Color }}>
                                        <img src={PT_5} alt="NA" />
                                    </div>
                                    <p>5</p>
                                </div>
                            </div>
                            {/* Line 5 */}
                            <div id="Main_Box_Light_L">
                                <div id="F_Main_B_L_2">
                                    <div id="Main_B_L_2" style={{ backgroundColor: Line5Color }}>
                                        {/* Line 5 */}
                                    </div>
                                </div>
                            </div>
                            {/* --- Box 6 --- */}
                            <div id="Main_Box_Light">
                                <div id="Main_B_L_1">
                                    <div id="Box_Light" style={{ backgroundColor: button6Color }}>
                                        <img src={PT_6} alt="NA" />
                                    </div>
                                    <p>6</p>
                                </div>
                            </div>
                            {/* Line 6 */}
                            <div id="Main_Box_Light_L">
                                <div id="F_Main_B_L_2">
                                    <div id="Main_B_L_2" style={{ backgroundColor: Line6Color }}>
                                        {/* Line 1 */}
                                    </div>
                                </div>
                            </div>
                            {/* --- Box 7 --- */}
                            <div id="Main_Box_Light">
                                <div id="Main_B_L_1">
                                    <div id="Box_Light" style={{ backgroundColor: button7Color }}>
                                        <img src={PT_7} alt="NA" />
                                    </div>
                                    <p>7</p>
                                </div>
                            </div>
                            {/* Line 7 */}
                            <div id="Main_Box_Light_L">
                                <div id="F_Main_B_L_2">
                                    <div id="Main_B_L_2" style={{ backgroundColor: Line7Color }}>
                                        {/* Line 1 */}
                                    </div>
                                </div>
                            </div>
                            {/* --- Box 7 --- */}
                            <div id="Main_Box_Light">
                                <div id="Main_B_L_1">
                                    <div id="Box_Light" style={{ backgroundColor: button8Color }}>
                                        <img src={PT_8} alt="NA" />
                                    </div>
                                    <p>8</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Update Button */}
                    <div id="PT_Button">
                        <h3>Update Status</h3>
                        {/* Buttons */}
                        <div id="sub_PT_Button">
                            {/* --- Button 1 Box --- */}
                            <div id="PT_Button_Box_1">
                                {/* 1 */}
                                <div id="PT_Butt_1">
                                    <div id="PT_Button_1_P1">
                                        1 - Application Received
                                    </div>
                                    <div id="PT_Button_1_P2">
                                        <button onClick={handleButton1Click}>Application Received</button>
                                    </div>
                                </div>
                                {/* 2 */}
                                <div id="PT_Butt_1">
                                    <div id="PT_Button_1_P1">
                                        2 - Document Verification
                                    </div>
                                    <div id="PT_Button_1_P2">
                                        <button onClick={handleButton2Click}>Document Verification</button>
                                    </div>
                                </div>
                            </div>
                            {/* --- Button 2 Box --- */}
                            <div id="PT_Button_Box_1">
                                {/* 3 */}
                                <div id="PT_Butt_1">
                                    <div id="PT_Button_1_P1">
                                        3 - Conditional Offer
                                    </div>
                                    <div id="PT_Button_1_P2">
                                        <button onClick={handleButton3Click}>Conditional Offer</button>
                                    </div>
                                </div>
                                {/* 4 */}
                                <div id="PT_Butt_1">
                                    <div id="PT_Button_1_P1">
                                        4 - Document Request
                                    </div>
                                    <div id="PT_Button_1_P2">
                                        <button onClick={handleButton4Click}>Document Request</button>
                                    </div>
                                </div>
                            </div>
                            {/* --- Button 3 Box --- */}
                            <div id="PT_Button_Box_1">
                                {/* 5 */}
                                <div id="PT_Butt_1">
                                    <div id="PT_Button_1_P1">
                                        5 - Unconditional Offer
                                    </div>
                                    <div id="PT_Button_1_P2">
                                        <button onClick={handleButton5Click}>Unconditional Offer</button>
                                    </div>
                                </div>
                                {/* 6 */}
                                <div id="PT_Butt_1">
                                    <div id="PT_Button_1_P1">
                                        6 - Confirmation Enrolment
                                    </div>
                                    <div id="PT_Button_1_P2">
                                        <button onClick={handleButton6Click}>Confirmation Enrolment</button>
                                    </div>
                                </div>
                            </div>
                            {/* --- Button 4 Box --- */}
                            <div id="PT_Button_Box_1">
                                {/* 7 */}
                                <div id="PT_Butt_1">
                                    <div id="PT_Button_1_P1">
                                        7 - Visa App Submitted
                                    </div>
                                    <div id="PT_Button_1_P2">
                                        <button onClick={handleButton7Click}>Visa App Submitted</button>
                                    </div>
                                </div>
                                {/* 8 */}
                                <div id="PT_Butt_1">
                                    <div id="PT_Button_1_P1">
                                        8 - Visa Granted
                                    </div>
                                    <div id="PT_Button_1_P2">
                                        <button onClick={handleButton8Click}>Visa Granted</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </PSidebar>
        </div>
    )
}





