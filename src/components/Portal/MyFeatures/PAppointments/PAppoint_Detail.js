import React, { useState, useEffect } from 'react'
import PSidebar from '../PSidebar'
// CSS
import '../PProfile/PProfile.css'
import "../PRecords/PRecords.css"
import "../PTracking/PT.css"
// Images
import logout from '../../../Pics/logout.png'
import appoint_img from '../../../Pics/appoint_2.png'
import confirm_u from '../../../Pics/appoint_sent.gif';
// useNavigate
import { useNavigate, useParams } from "react-router-dom"
// Logout Logic 
import { database } from '../../firebase'
import { signOut } from 'firebase/auth'
import { database1 } from '../../firebase';
import { doc, getDoc, updateDoc } from 'firebase/firestore';


export default function PAppoint_Detail() {
    // useNavigate 
    const navigate = useNavigate();
    // ------------- Backend Part Logic -------------
    const { id } = useParams();
    const [value_1, setValue_1] = useState("");
    const [value_2, setValue_2] = useState("");
    const [value_3, setValue_3] = useState("");
    const [TimeSlot, setTimeSlot] = useState("");
    const [gender, setGender] = useState("");
    const [Date, setDate] = useState("");
    const [status, setStatus] = useState("Processing"); // Default status
    // Function
    useEffect(() => {
        const fetchData = async () => {
            const docRef = doc(database1, "3 - Appointment", id);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                const data = docSnap.data();
                setValue_1(data.value_1 || "");
                setValue_2(data.value_2 || "");
                setValue_3(data.value_3 || "");
                setTimeSlot(data.Date || "");
                setGender(data.gender || "");
                setDate(data.TimeSlot || "");
                // Check if status exists, otherwise set default
                setStatus(data.status || "Processing");
            }
        };
        fetchData();
    }, [id]);
    // Status Logic
    const handleStatusUpdate = async (status) => {
        const updateData = doc(database1, "3 - Appointment", id);
        await updateDoc(updateData, { status });
        setStatus(status); // Update status locally
    }
    // Define the status color based on its value
    const getStatusColor = () => {
        switch (status) {
            case "Accepted":
                return "green";
            case "Rejected":
                return "red";
            case "Delayed":
                return "blue";
            default:
                return "black";
        }
    };
    // ------------- Backend Part Logic -------------
    const [showBox2, setShowBox2] = useState(false);
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [showParent, setShowParent] = useState(false);
    const handleAddUniversityClick = () => {
        setShowParent(true);
        setShowConfirmation(true);
        setShowBox2(true); // Set showBox2 to true directly
        setTimeout(() => {
            setShowParent(false);
            // Naviagte
            navigate("/PAppointments")
        }, 2000);
    };
    // ------ Logout Logic ------
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
                <div id="PTS_Pre">
                    <div id="sub_PTS_Pre">
                        <div id="PTS_Pre_Box">
                            <h2>Appointment Detail <i class="fa fa-id-card-o"></i></h2>
                        </div>
                        {/* Start */}
                    </div>
                </div>
                {/* PAD_first */}
                <div id="PAD_first">
                    <div id="sub_PAD_first">
                        {/* Box */}
                        <div id="PAD_first_Box">
                            {/* 1 */}
                            <div id="PAD_first_B_1">
                                <div id="PAD_first_B_1_Box">
                                    <img src={appoint_img} alt="NA" />
                                </div>
                                <div id="PAD_first_B_1_Box_2">
                                    <p> Status :  <span style={{ color: getStatusColor() }}>{status}</span> </p>
                                </div>
                            </div>
                            {/* 2 */}
                            <div id="PAD_first_B_2">
                                {/* Part 1 */}
                                <div id="PAD_first_B_2_P1">
                                    {/* Info 1 */}
                                    <div id="PAD_first_B_2_P_InputBox">
                                        <div id="PAD_first_B_2_P_InputBox_P1">
                                            Name
                                        </div>
                                        <div id="PAD_first_B_2_P_InputBox_P2">
                                            {value_1}
                                        </div>
                                    </div>
                                    {/* Info 2 */}
                                    <div id="PAD_first_B_2_P_InputBox">
                                        <div id="PAD_first_B_2_P_InputBox_P1">
                                            Gender
                                        </div>
                                        <div id="PAD_first_B_2_P_InputBox_P2">
                                            {gender}
                                        </div>
                                    </div>
                                </div>
                                {/* Part 2 */}
                                <div id="PAD_first_B_2_P2">
                                    {/* Info 1 */}
                                    <div id="PAD_first_B_2_P_InputBox">
                                        <div id="PAD_first_B_2_P_InputBox_P1">
                                            Date
                                        </div>
                                        <div id="PAD_first_B_2_P_InputBox_P2">
                                            {Date}
                                        </div>
                                    </div>
                                    {/* Info 2 */}
                                    <div id="PAD_first_B_2_P_InputBox">
                                        <div id="PAD_first_B_2_P_InputBox_P1">
                                            Time Slot
                                        </div>
                                        <div id="PAD_first_B_2_P_InputBox_P2">
                                            {TimeSlot}
                                        </div>
                                    </div>
                                </div>
                                {/* Part 3 */}
                                <div id="PAD_first_B_2_P2">
                                    {/* Info 1 */}
                                    <div id="PAD_first_B_2_P_InputBox">
                                        <div id="PAD_first_B_2_P_InputBox_P1">
                                            Email
                                        </div>
                                        <div id="PAD_first_B_2_P_InputBox_P2">
                                            {value_2}
                                        </div>
                                    </div>
                                    {/* Info 2 */}
                                    <div id="PAD_first_B_2_P_InputBox">
                                        <div id="PAD_first_B_2_P_InputBox_P1">
                                            Contact No
                                        </div>
                                        <div id="PAD_first_B_2_P_InputBox_P2">
                                            {value_3}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* 3 */}
                            <div id="PAD_first_B_3">
                                {/* Button */}
                                <div id="PAD_first_B_3_Box">
                                    <button id="PAD_first_B_3_Box_Btn1" onClick={() => { handleStatusUpdate('Accepted'); handleAddUniversityClick(); }}>Accept</button>
                                </div>
                                {/* Button */}
                                <div id="PAD_first_B_3_Box">
                                    <button id="PAD_first_B_3_Box_Btn2" onClick={() => { handleStatusUpdate('Rejected'); handleAddUniversityClick(); }}>Reject</button>
                                </div>
                                {/* Button */}
                                <div id="PAD_first_B_3_Box">
                                    <button id="PAD_first_B_3_Box_Btn3" onClick={() => { handleStatusUpdate('Delayed'); handleAddUniversityClick(); }}>Delay</button>
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
                                <h3>Status Sent !</h3>
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








