import React, { useState, useEffect } from 'react'
import PSidebar from '../PSidebar'
// useNavigate
import { useNavigate } from 'react-router-dom'
// CSS
import '../PProfile/PProfile.css'
import '../PRecords/PRecords.css'
import "../PAppointments/PAppoint.css"
import "../PAdd_Uni/PAdd_U.css"
// Images
import logout from '../../../Pics/logout.png'
import Str_4 from "../../../Pics/Str_4.png"
import Str_5 from "../../../Pics/Str_5.png"
import add_u from '../../../Pics/del_aa.gif'
import confirm_u from '../../../Pics/del_a.png'
// Logout Logic 
import { useAuthState } from 'react-firebase-hooks/auth';
import E_User from "../../../Pics/E_User.png"
import { database } from '../../firebase'
import { signOut } from 'firebase/auth'
// Firebase
import { database1 } from '../../firebase';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';

export default function PAppointments() {
    // Email Address For Logout Dialog Box
    const [user] = useAuthState(database);
    // useNavigate 
    const navigate = useNavigate();
    // ------------- Backend Part Logic -------------
    const [val, setVal] = useState([]);
    const value = collection(database1, "3 - Appointment");
    // Function
    const getData = async () => {
        const dbVal = await getDocs(value);
        setVal(dbVal.docs.map(doc => ({ ...doc.data(), id: doc.id })));
    }
    useEffect(() => {
        getData();
    }, []);
    // View
    const handleEdit = (id) => {
        navigate(`/PAppointDetail/${id}`);
    }
    // Delete logic
    const handleDelete = async (id) => {
        await deleteDoc(doc(database1, "3 - Appointment", id));
        getData(); // Refresh data after delete
    }
    // ------------- Backend Part Logic -------------
    // ------ Confirm Add University Logic ------
    // State to manage which box to display
    const [showBox2, setShowBox2] = useState(false);
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [showParent, setShowParent] = useState(false);
    const handleAddUniversityClick = () => {
        setShowParent(true);
        setShowConfirmation(true);
        setShowBox2(true); // Set showBox2 to true directly
        setTimeout(() => {
            setShowParent(false);
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
                <>
                    {/* 1 - Heading */}
                    <div id="PTr_first">
                        <div id="sub_PTr_first">
                            <div id="PTr_first_1">
                                <h1>Appointment</h1>
                            </div>
                            <div id="PTr_first_2">
                                <img src={Str_4} alt="Na" />
                            </div>
                        </div>
                    </div>
                    {/* PAppointments Code Start From Here */}
                    {/* 2 - PR_Second */}
                    <div id="PR_Second">
                        <div id="sub_PR_Second">
                            <div id="PR_Second_Box">
                                <div id="PR_Second_Box_Part_0">
                                    Date
                                </div>
                                <div id="PR_Second_Box_Part_1">
                                    Image
                                </div>
                                <div id="PR_Second_Box_Part_2">
                                    Name
                                </div>
                                <div id="PR_Second_Box_Part_3">
                                    Action
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* 3 - PR_Third */}
                    <div id="PR_Third">
                        <div id="sub_PR_Third">
                            {/* Record Box 1 */}
                            {val.map(values =>
                                <div id="PR_Third_Box">
                                    {/* <div id="PR_Third_Box"> */}
                                    <div id="PR_Third_Box_Part_0" onClick={() => handleEdit(values.id)}>
                                        {values.Date}
                                    </div>
                                    <div id="PR_Third_Box_Part_1" onClick={() => handleEdit(values.id)}>
                                        <img src={Str_5} alt="NA" />
                                    </div>
                                    <div id="PR_Third_Box_Part_2" onClick={() => handleEdit(values.id)}>
                                        {values.value_1}
                                    </div>
                                    <div id="PR_Third_Box_Part_3">
                                        <button id='PR_Third_B_P_3_Btn' onClick={() => { handleAddUniversityClick(); handleDelete(values.id); }}>Delete <i class="fa fa-trash"></i></button>
                                    </div>
                                </div>
                            )
                            }
                            {/* Record Box 2 */}
                        </div>
                        {/* ----- Confirm Add University Logic ----- */}
                        <div id='PA_U_ConfirmAdd_Parent' style={{ display: showParent ? 'block' : 'none' }}>
                            {/* Basic Logic */}
                            <div id="sub_PA_U_ConfirmAdd_Parent" style={{ display: showConfirmation ? 'block' : 'none' }}>
                                <div id="PA_U_ConfirmAdd_Parent_Box">
                                    {/* Box 2 */}
                                    <div id="PA_U_ConfirmAdd_2" style={{ display: showBox2 ? 'block' : 'none' }}>
                                        <div id="PA_U_ConfirmAdd_img">
                                            <img src={add_u} alt="NA" />
                                        </div>
                                        <h3>Deleted Successfully !</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Start */}
                        {/* ---------------------------------------- */}
                        {/* End */}
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

                    </div>
                </>
            </PSidebar>
        </div>
    )
}








