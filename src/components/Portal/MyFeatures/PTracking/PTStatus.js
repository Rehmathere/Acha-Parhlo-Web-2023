import React, { useState, useEffect } from 'react'
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
import { useNavigate, useParams } from 'react-router-dom';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { database1 } from '../../firebase';
// Logout Logic 
import { useAuthState } from 'react-firebase-hooks/auth';
import E_User from "../../../Pics/E_User.png"
import { database } from '../../firebase'
import { signOut } from 'firebase/auth'
// Confirm Submit Btn
import confirm_u from '../../../Pics/StatusChange.png'
import fileupload from '../../../Pics/fileupload.png'


export default function PTStatus() {
    // Email Address For Logout Dialog Box
    const [user] = useAuthState(database);
    // ------ Confirm Submit Button Logic ------
    const [showBox2, setShowBox2] = useState(false);
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [showParent, setShowParent] = useState(false);
    const handleAddUniversityClick = () => {
        setShowParent(true);
        setShowConfirmation(true);
        setShowBox2(true); // Set showBox2 to true directly
        setTimeout(() => {
            setShowParent(false);
            navigate("/PTracking")
        }, 5000);
    };
    // ------ Logout Logic ------
    // useNavigate 
    const navigate = useNavigate();
    // Logout Function
    const handleClick = () => {
        signOut(database).then(val => {
            console.log(val, 'val');
            navigate('/PLogin');
        })
    }
    // Use state to manage the visibility of the Logout Box
    const [isLogoutBoxVisible, setLogoutBoxVisibility] = useState(false);
    // Function to toggle the visibility of the Logout Box
    const toggleLogoutBox = () => {
        setLogoutBoxVisibility(!isLogoutBoxVisible);
    };
    // ----------------------------------------------------
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
    const [Line1Color, setLine1Color] = useState('#C5C4C3');
    const [Line2Color, setLine2Color] = useState('#C5C4C3');
    const [Line3Color, setLine3Color] = useState('#C5C4C3');
    const [Line4Color, setLine4Color] = useState('#C5C4C3');
    const [Line5Color, setLine5Color] = useState('#C5C4C3');
    const [Line6Color, setLine6Color] = useState('#C5C4C3');
    const [Line7Color, setLine7Color] = useState('#C5C4C3');
    // ------------- Backend Logic -------------
    const { id } = useParams();
    const [U1_UniversityName, setU1_UniversityName] = useState('');
    const [P3_givenName, setP3_givenName] = useState('');
    const [P3_documentId, setP3_documentId] = useState(''); // New state for document ID
    const [P8_email, setP8_email] = useState('');
    const [U4_courseName, setU4_courseName] = useState('');
    const [buttonValue, setbuttonValue] = useState('');
    const [U_Extra_Uni_Image, setU_Extra_Uni_Image] = useState("");
    useEffect(() => {
        const fetchData = async () => {
            try {
                const docRef = doc(database1, '4 - Student Records', id);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    const data = docSnap.data();
                    setU1_UniversityName(data.U1_universityName || '');
                    setP3_givenName(data.P3_givenName || '');
                    setP3_documentId(docSnap.id || ''); // Set the document ID
                    setP8_email(data.P8_email || '');
                    setU4_courseName(data.U4_courseName || '');
                    setbuttonValue(data.buttonValue || '');
                    setU_Extra_Uni_Image(data.U_Extra_Uni_Image || "");
                } else {
                    console.error('Document not found.');
                }
            } catch (error) {
                console.error('Error fetching data from Firestore:', error);
            }
        };
        fetchData();
    }, [id]);

    const updateFirestoreWithValue = async (value) => {
        try {
            const docRef = doc(database1, '4 - Student Records', id);
            await updateDoc(docRef, { buttonValue: value });
            console.log('Document successfully updated!');
        } catch (error) {
            console.error('Error updating document:', error);
        }
    };
    // Matchig buttonValue value to change Background Color
    useEffect(() => {
        if (buttonValue === "Application Received") {
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
        }
        else if (buttonValue === "Document Verification") {
            // Button 2
            setButton2Color('#FFC300');
            // Button 1
            setButton1Color('#FFD8B0');
            // -- Line 1
            setLine1Color('#014101');
            // ---- Extra Color Off ----
            setButton3Color('white');
            setButton4Color('white');
            setButton5Color('white');
            setButton6Color('white');
            setButton7Color('white');
            setButton8Color('white');
        }
        else if (buttonValue === "Conditional Offer") {
            // Button 3
            setButton3Color('#FFC300');
            // Button 2
            setButton2Color('#FFD8B0');
            // Button 1
            setButton1Color('#FFD8B0');
            // -- Line 1
            setLine1Color('#014101');
            // -- Line 2
            setLine2Color('#014101');
            // ---- Extra Color Off ----
            setButton4Color('white');
            setButton5Color('white');
            setButton6Color('white');
            setButton7Color('white');
            setButton8Color('white');
        }
        else if (buttonValue === "Document Request") {
            // Button 4
            setButton4Color('#FFC300');
            // Button 3
            setButton3Color('#FFD8B0');
            // Button 2
            setButton2Color('#FFD8B0');
            // Button 1
            setButton1Color('#FFD8B0');
            // -- Line 1
            setLine1Color('#014101');
            // -- Line 2
            setLine2Color('#014101');
            // -- Line 3
            setLine3Color('#014101');
            // ---- Extra Color Off ----
            setButton5Color('white');
            setButton6Color('white');
            setButton7Color('white');
            setButton8Color('white');
        }
        else if (buttonValue === "Unconditional Offer") {
            // Button 5
            setButton5Color('#FFC300');
            // Button 4
            setButton4Color('#FFD8B0');
            // Button 3
            setButton3Color('#FFD8B0');
            // Button 2
            setButton2Color('#FFD8B0');
            // Button 1
            setButton1Color('#FFD8B0');
            // -- Line 1
            setLine1Color('#014101');
            // -- Line 2
            setLine2Color('#014101');
            // -- Line 3
            setLine3Color('#014101');
            // -- Line 4
            setLine4Color('#014101');
            // ---- Extra Color Off ----
            setButton6Color('white');
            setButton7Color('white');
            setButton8Color('white');
        }
        else if (buttonValue === "Confirmation Enrolment") {
            // Button 6
            setButton6Color('#FFC300');
            // Button 5
            setButton5Color('#FFD8B0');
            // Button 4
            setButton4Color('#FFD8B0');
            // Button 3
            setButton3Color('#FFD8B0');
            // Button 2
            setButton2Color('#FFD8B0');
            // Button 1
            setButton1Color('#FFD8B0');
            // -- Line 1
            setLine1Color('#014101');
            // -- Line 2
            setLine2Color('#014101');
            // -- Line 3
            setLine3Color('#014101');
            // -- Line 4
            setLine4Color('#014101');
            // -- Line 5
            setLine5Color('#014101');
            // ---- Extra Color Off ----
            setButton7Color('white');
            setButton8Color('white');
        }
        else if (buttonValue === "Visa App Submitted") {
            // Button 7
            setButton7Color('#FFC300');
            // Button 6
            setButton6Color('#FFD8B0');
            // Button 5
            setButton5Color('#FFD8B0');
            // Button 4
            setButton4Color('#FFD8B0');
            // Button 3
            setButton3Color('#FFD8B0');
            // Button 2
            setButton2Color('#FFD8B0');
            // Button 1
            setButton1Color('#FFD8B0');
            // -- Line 1
            setLine1Color('#014101');
            // -- Line 2
            setLine2Color('#014101');
            // -- Line 3
            setLine3Color('#014101');
            // -- Line 4
            setLine4Color('#014101');
            // -- Line 5
            setLine5Color('#014101');
            // -- Line 6
            setLine6Color('#014101');
            // ---- Extra Color Off ----
            setButton8Color('white');
        }
        else if (buttonValue === "Visa Granted") {
            // Button 8
            setButton8Color('#FFC300');
            // Button 7
            setButton7Color('#FFD8B0');
            // Button 6
            setButton6Color('#FFD8B0');
            // Button 5
            setButton5Color('#FFD8B0');
            // Button 4
            setButton4Color('#FFD8B0');
            // Button 3
            setButton3Color('#FFD8B0');
            // Button 2
            setButton2Color('#FFD8B0');
            // Button 1
            setButton1Color('#FFD8B0');
            // -- Line 1
            setLine1Color('#014101');
            // -- Line 2
            setLine2Color('#014101');
            // -- Line 3
            setLine3Color('#014101');
            // -- Line 4
            setLine4Color('#014101');
            // -- Line 5
            setLine5Color('#014101');
            // -- Line 6
            setLine6Color('#014101');
            // -- Line 7
            setLine7Color('#014101');
        }
        else {
            setButton1Color("transparent");
            setButton2Color("transparent");
            setButton3Color("transparent");
            setButton4Color("transparent");
            setButton5Color("transparent");
            setButton6Color("transparent");
            setButton7Color("transparent");
            setButton8Color("transparent");
        }
    }, [buttonValue]);
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
                                        {P3_givenName}
                                    </div>
                                </div>
                                {/* 1 - G */}
                                <div id="PTS_Pre_Box_Detail_Box_L">
                                    <div id="PTS_Pre_Box_Detail_Box_P1">
                                        Email
                                    </div>
                                    <div id="PTS_Pre_Box_Detail_Box_P2">
                                        {P8_email}
                                    </div>
                                </div>
                                {/* 2 - O */}
                                <div id="PTS_Pre_Box_Detail_Box">
                                    <div id="PTS_Pre_Box_Detail_Box_P1">
                                        University Name
                                    </div>
                                    <div id="PTS_Pre_Box_Detail_Box_P2">
                                        {U1_UniversityName}
                                    </div>
                                </div>
                                {/* 2 - G */}
                                <div id="PTS_Pre_Box_Detail_Box_L">
                                    <div id="PTS_Pre_Box_Detail_Box_P1">
                                        Course Name
                                    </div>
                                    <div id="PTS_Pre_Box_Detail_Box_P2">
                                        {U4_courseName}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* --- University Logo ( Coming From Apply Uni  ) --- */}
                <div id="Ext_Uni_Logo_Coming">
                    <div id="sub_Ext_Uni_Logo_Coming">
                        <h3>University Logo</h3>
                        <div id="Ext_Uni_Logo_Coimng_Img_Box">
                            <div id="Ext_Uni_Logo_Coimng_Img">
                                <img src={U_Extra_Uni_Image} alt="NA" />
                            </div>
                        </div>
                    </div>
                </div>
                {/* --- University Logo ( Coming From Apply Uni  ) --- */}
                {/* --- Status Writing --- */}
                <div id="Ext_Firebase_Status">
                    <h5>Status : </h5>
                    <h2>{buttonValue}</h2>
                </div>
                {/* --- Status Writing --- */}
                <br />
                <div id="PTS_first">
                    <div id="PTS_first_Box">
                        <h3>Application Status</h3>
                        <h4>Id No: <span>{P3_documentId}</span></h4>
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
                                        <button onClick={() => { handleAddUniversityClick(); updateFirestoreWithValue("Application Received"); }}>Application Received</button>
                                    </div>
                                </div>
                                {/* 2 */}
                                <div id="PT_Butt_1">
                                    <div id="PT_Button_1_P1">
                                        2 - Document Verification
                                    </div>
                                    <div id="PT_Button_1_P2">
                                        <button onClick={() => { handleAddUniversityClick(); updateFirestoreWithValue("Document Verification"); }}>Document Verification</button>
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
                                        <button onClick={() => { handleAddUniversityClick(); updateFirestoreWithValue("Conditional Offer"); }}>Conditional Offer</button>
                                    </div>
                                </div>
                                {/* 4 */}
                                <div id="PT_Butt_1">
                                    <div id="PT_Button_1_P1">
                                        4 - Document Request
                                    </div>
                                    <div id="PT_Button_1_P2">
                                        <button onClick={() => { handleAddUniversityClick(); updateFirestoreWithValue("Document Request"); }}>Document Request</button>
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
                                        <button onClick={() => { handleAddUniversityClick(); updateFirestoreWithValue("Unconditional Offer"); }}>Unconditional Offer</button>
                                    </div>
                                </div>
                                {/* 6 */}
                                <div id="PT_Butt_1">
                                    <div id="PT_Button_1_P1">
                                        6 - Confirmation Enrolment
                                    </div>
                                    <div id="PT_Button_1_P2">
                                        <button onClick={() => { handleAddUniversityClick(); updateFirestoreWithValue("Confirmation Enrolment"); }}>Confirmation Enrolment</button>
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
                                        <button onClick={() => { handleAddUniversityClick(); updateFirestoreWithValue("Visa App Submitted"); }}>Visa App Submitted</button>
                                    </div>
                                </div>
                                {/* 8 */}
                                <div id="PT_Butt_1">
                                    <div id="PT_Button_1_P1">
                                        8 - Visa Granted
                                    </div>
                                    <div id="PT_Button_1_P2">
                                        <button onClick={() => { handleAddUniversityClick(); updateFirestoreWithValue("Visa Granted"); }}>Visa Granted</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* ----- Confirm Add University Logic ----- */}
                <div id='PA_U_ConfirmAdd_Parent' style={{ display: showParent ? 'block' : 'none' }}>
                    {/* Basic Logic */}
                    <div id="sub_PA_U_ConfirmAdd_Parent" style={{ display: showConfirmation ? 'block' : 'none' }}>
                        <div id="PA_U_ConfirmAdd_Parent_Box">
                            {/* Box 2 */}
                            <div id="PA_U_ConfirmAdd_2" style={{ display: showBox2 ? 'block' : 'none' }}>
                                <div id="PA_U_ConfirmAdd_img">
                                    <img src={confirm_u} alt="NA" />
                                </div>
                                <h3>Status is Updated !</h3>
                            </div>
                        </div>
                    </div>
                </div>
                {/* ---Logout Logic --- */}
                {isLogoutBoxVisible && (
                    <div id="Logout_Box">
                        {/* Above */}
                        <div id="sub_Logout_Box_Fir">
                            <img src={E_User} alt="NA" />
                            <span>{user.email}</span>
                        </div>
                        {/* Below */}
                        <div id="sub_Logout_Box">
                            <div id="Logout_Box_1">
                                You Want To Logout ?
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





