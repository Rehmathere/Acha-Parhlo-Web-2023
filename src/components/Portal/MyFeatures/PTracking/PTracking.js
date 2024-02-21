import React, { useState, useEffect } from 'react'
import PSidebar from '../PSidebar'
// useNavigate
import { useNavigate } from 'react-router-dom'
// CSS
import '../PProfile/PProfile.css'
// Images
import logout from '../../../Pics/logout.png'
import Ptr from "../../../Pics/PTr.png"
import Str_8 from "../../../Pics/Str_8.png"
import add_u from '../../../Pics/del_aa.gif'
import confirm_u from '../../../Pics/del_a.png'
// Logout Logic 
import { database } from '../../firebase'
import { signOut } from 'firebase/auth'
// Firebase
import { doc, getDocs, collection } from 'firebase/firestore';
import { database1 } from '../../firebase';

export default function PTracking() {
    // --------- Backend Part Logic ---------  
    const [val, setVal] = useState([]);
    const value = collection(database1, "4 - Student Records");
    const getData = async () => {
        try {
            const dbVal = await getDocs(value);
            setVal(dbVal.docs.map(doc => ({ ...doc.data(), id: doc.id })));
        } catch (error) {
            console.error("Error fetching data from Firestore:", error);
        }
    }
    useEffect(() => {
        getData();
    }, []);
    const handleEdit = (id, values) => {
        navigate(`/PTStatus/${id}`, { state: { values } });
    }
    // --------- Backend Part Logic ---------  
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
                                <h1>Application Tracking</h1>
                            </div>
                            <div id="PTr_first_2">
                                <img src={Ptr} alt="Na" />
                            </div>
                        </div>
                    </div>
                    {/* 2 - Ptr_Second */}
                    {/* 2 - PR_Second */}
                    <div id="PR_Second">
                        <div id="sub_PR_Second">
                            <div id="PR_Second_Box">
                                <div id="PR_Second_Box_Part_0">
                                    Email
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
                            {val.map(values => (
                                <div id="PR_Third_Box">
                                    <div id="PR_Third_Box_Part_0" onClick={() => handleEdit(values.id)}>
                                        {values.P8_email}
                                    </div>
                                    <div id="PR_Third_Box_Part_1" onClick={() => handleEdit(values.id)}>
                                        <img src={Str_8} alt="NA" />
                                    </div>
                                    <div id="PR_Third_Box_Part_2" onClick={() => handleEdit(values.id)}>
                                        {values.P3_givenName}
                                    </div>
                                    <div id="PR_Third_Box_Part_3">
                                        <button id='PR_Third_B_P_3_Btn' onClick={handleAddUniversityClick}>Delete <i class="fa fa-trash"></i></button>
                                    </div>
                                </div>
                            ))}
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
                    {/* End */}
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
                </>
            </PSidebar>
        </div >
    )
}








