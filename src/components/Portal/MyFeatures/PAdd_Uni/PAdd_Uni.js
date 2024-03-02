import React, { useEffect, useState } from 'react';
import PSidebar from '../PSidebar'
// useNavigate
import { useNavigate } from 'react-router-dom'
// CSS
import '../PProfile/PProfile.css'
import '../PRecords/PRecords.css'
import "../PAdd_Uni/PAdd_U.css"
// Images
import logout from '../../../Pics/logout.png'
import Str_6 from "../../../Pics/Str_6.png"
import PADD_Img from "../../../Pics/Adduni_z.png"
import Str_9 from "../../../Pics/Str_9.png"
import add_u from '../../../Pics/del_aa.gif'
// Logout Logic 
import { database } from '../../firebase'
import { signOut } from 'firebase/auth'
import "../PAppointments/PAppoint.css"
// Firebase
import { database1 } from '../../firebase';
import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from 'firebase/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';
import E_User from "../../../Pics/E_User.png"

export default function PAdd_Uni() {
    // Email Address For Logout Dialog Box
    const [user] = useAuthState(database);
    // ------------- Backend Logic Part -------------
    // Some List Shown, Edit ( Data Passing ) & Delete JS Logic
    const [val, setVal] = useState([]);
    const value = collection(database1, "1 - Add University");
    const getData = async () => {
        const dbVal = await getDocs(value);
        setVal(dbVal.docs.map(doc => ({ ...doc.data(), id: doc.id })));
    }
    useEffect(() => {
        getData();
    }, []);
    const handleDelete = async (id) => {
        const deleteVal = doc(database1, "1 - Add University", id);
        await deleteDoc(deleteVal);
        getData();
    }
    const handleEdit = (id) => {
        navigate(`/PAdd_Uni_Update/${id}`);
    }
    // ------------- Backend Logic Part -------------
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
                                <h1>Add Universities</h1>
                            </div>
                            <div id="PTr_first_2">
                                <img src={Str_6} alt="Na" />
                            </div>
                        </div>
                    </div>
                    {/* PAdd_Uni Code Start From Here */}
                    {/* 2 - PAdd_U_first */}
                    <div id="PAdd_U_first">
                        <div id="sub_PAdd_U_first">
                            <div id="PAdd_U_first_Box">
                                <div id="PAdd_U_f_B_1">
                                    <div id="PAdd_U_f_B_1_Box">
                                        Want To Append a New Educational Institution?
                                        <button onClick={() => navigate('/PAdd_U_add')}>Add <i class="fa fa-plus"></i></button>
                                    </div>
                                </div>
                                <div id="PAdd_U_f_B_2">
                                    <div id="PAdd_U_f_B_2_Box">
                                        <img src={PADD_Img} alt="NA" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Previous Code */}
                    {/* 2 - PR_Second */}
                    <div id="PR_Second">
                        <div id="sub_PR_Second">
                            <div id="PR_Second_Box">
                                <div id="PR_Second_Box_Part_2">
                                    University
                                </div>
                                {/* Part 2 */}
                                <div id="PR_Second_Box_Part_1">
                                    Logo
                                </div>
                                {/* Part 4 */}
                                <div id="PR_Second_Box_Part_3">
                                    Courses
                                </div>
                                {/* Part 1 */}
                                <div id="PR_Second_Box_Part_0">
                                    Status
                                    {/* Part 3 */}
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* ----- Previous Code ----- */}
                    {/* 3 - PAdd_U_Third */}
                    <div id="PR_Third">
                        <div id="sub_PR_Third">
                            {/* Record Box 1 */}
                            {val.map(values =>
                                <div id="PR_Third_Box" key={values.id}>
                                    {/* Part 3 */}
                                    <div id="PR_Third_Box_Part_2" onClick={() => handleEdit(values.id)}>
                                        {values.name1}
                                    </div>
                                    {/* Part 2 */}
                                    <div id="PR_Third_Box_Part_1" onClick={() => handleEdit(values.id)}>
                                        <img src={values.MyImage} alt="NA" />
                                    </div>
                                    {/* Part 4 */}
                                    <div id="PR_Third_Box_Part_3" onClick={() => handleEdit(values.id)}>
                                        {values.name3}
                                    </div>
                                    {/* Part 1 */}
                                    <div id="PR_Third_Box_Part_0">
                                        <button onClick={() => { handleDelete(values.id); handleAddUniversityClick(); }}>
                                            Delete <i class="fa fa-trash"></i>
                                        </button>
                                    </div>
                                </div>
                            )}
                            {/* Record Box 2 */}
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
                                        <img src={add_u} alt="NA" />
                                    </div>
                                    <h3>Deleted Successfully !</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Start */}
                    {/* ---------------------------------------- */}
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
                </>
            </PSidebar>
        </div>
    )
}








