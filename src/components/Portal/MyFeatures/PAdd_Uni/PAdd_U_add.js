import React, { useEffect, useState, useRef } from 'react';
import PSidebar from '../PSidebar'
// useNavigate
import { useNavigate } from 'react-router-dom'
// CSS
import '../PProfile/PProfile.css'
import '../PRecords/PRecords.css'
import "../PAdd_Uni/PAdd_U.css"
// Images
import logout from '../../../Pics/logout.png'
import user from '../../../Pics/fileupload.png'
import add_u from '../../../Pics/add_sure_1.png'
import confirm_u from '../../../Pics/add_confirm.png'
// Logout Logic 
import { database } from '../../firebase'
import { signOut } from 'firebase/auth'
import "../PAppointments/PAppoint.css"
// Firebase
import { database1 } from '../../firebase';
import { addDoc, collection, getDocs } from 'firebase/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';
import E_User from "../../../Pics/E_User.png"

export default function PAdd_U_add() {
    // Email Address For Logout Dialog Box
    const [user] = useAuthState(database);
    // ------------- Backend Logic Part -------------
    // Create Box Data 
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [name_1, setName_1] = useState('');
    const [name_2, setName_2] = useState('');
    const [name_3, setName_3] = useState('');
    const [val, setVal] = useState([]);
    const [image, setImage] = useState(null);
    const value = collection(database1, "1 - Add University");
    useEffect(() => {
        const getData = async () => {
            const dbVal = await getDocs(value);
            setVal(dbVal.docs.map(doc => ({ ...doc.data(), id: doc.id })));
        };
        getData();
    }, [value]);
    const handleCreate = async () => {
        await addDoc(value, {
            name1: fname,
            name2: lname,
            name3: name_1,
            name4: name_2,
            name5: name_3,
            MyImage: image // Added MyImage to the Firestore document
        });
        setFname("");
        setLname("");
        setName_1("");
        setName_2("");
        setName_3("");
        setImage(null);
    };
    // File Upload 
    const fileInputRef = useRef(null);
    const handleUploadClick = () => {
        fileInputRef.current.click();
    };
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            setImage(reader.result);
        };
        if (file) {
            reader.readAsDataURL(file);
        }
    };
    // ------------- Backend Logic Part -------------
    // ------ Confirm Add University Logic ------
    // State to manage which box to display
    const [showBox2, setShowBox2] = useState(false);
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [showParent, setShowParent] = useState(false); // Updated to initially hide the parent div
    // Function to handle button click and toggle between boxes
    const handleButtonClick = () => {
        setShowBox2(!showBox2);
    };
    // Function to handle "Add University" button click and toggle visibility of confirmation div
    const handleAddUniversityClick = () => {
        setShowParent(true); // Show the parent div
        setShowConfirmation(true);
    };
    // Function to handle "Don't Add This University" button click and hide the entire parent div
    const handleCancelClick = () => {
        setShowParent(false);
    };
    // ----------------------------
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
                    <div id="PTS_Pre">
                        <div id="sub_PTS_Pre">
                            <div id="PTS_Pre_Box">
                                <h2>Fill New University Information <i class="fa fa-edit"></i></h2>
                            </div>
                        </div>
                    </div>
                    {/* Main Page Code */}
                    {/* 1 - P_U_AU_1 */}
                    <div id="P_U_AU_1">
                        <div id="sub_P_U_AU_1">
                            <div id="P_U_AU_1_box">
                                {/* Part 1 */}
                                <div id="P_U_AU_1_box_P1">
                                    <h5>University Details</h5>
                                    {/* Input Field */}
                                    <div id="P_U_AU_1_box_P1_Input">
                                        <h6>Name</h6>
                                        <input type="text" placeholder='Enter University Name ' value={fname} onChange={(e) => setFname(e.target.value)} />
                                    </div>
                                    {/* Input Field */}
                                    <div id="P_U_AU_1_box_P1_Input">
                                        <h6>Basic Overview</h6>
                                        <input type="" placeholder='Enter University Basic Overview ' value={lname} onChange={(e) => setLname(e.target.value)} />
                                    </div>
                                    {/* Input Field */}
                                    <div id="P_U_AU_1_box_P1_Input">
                                        <h6>Courses Offered</h6>
                                        <input type="text" placeholder='Enter Courses Name Offered ' value={name_1} onChange={(e) => setName_1(e.target.value)} />
                                    </div>
                                    {/* Input Field */}
                                    <div id="P_U_AU_1_box_P1_Input">
                                        <h6>Admission Fee</h6>
                                        <input type="text" placeholder='Enter Admission Fee ' value={name_2} onChange={(e) => setName_2(e.target.value)} />
                                    </div>
                                    {/* Input Field */}
                                    <div id="P_U_AU_1_box_P1_Input">
                                        <h6>Degree Duration</h6>
                                        <input type="text" placeholder='Enter Degree Duration ' value={name_3} onChange={(e) => setName_3(e.target.value)} />
                                    </div>
                                </div>
                                {/* Part 2 */}
                                <div id="P_U_AU_1_box_P2">
                                    <h5>Logo / Picture</h5>
                                    <div id="P_U_AU_1_box_P2_PicBox">
                                        <p>please ensure compliance by uploading a legal picture for the university logo. In the event that no picture is available, kindly leave this portion blank to adhere to applicable regulations.</p>
                                        <div id="P_U_AU_1_box_P2_sub_PicBox">
                                            <div id="P_U_AU_1_box_P2_sub_PicBox_s">
                                                {/* Display Area - Render only when isEditing is true */}
                                                <div id="P_U_AU_1_box_P2_sub_PicBox_s_s">
                                                    {/* Use the state variable for the image source */}
                                                    <img src={image ? image : user} alt="Logo/Picture" />
                                                </div>
                                            </div>
                                            {/* Button */}
                                            <div id="P_U_AU_1_box_P2_sub_PicBox_s_1">
                                                {/* Hidden file input */}
                                                <input
                                                    type="file"
                                                    onChange={handleFileChange}
                                                    style={{ display: 'none' }}
                                                    ref={fileInputRef}
                                                />
                                                <button onClick={handleUploadClick}>Upload</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="P_U_AU_1_button_parent">
                                <button onClick={() => { handleAddUniversityClick(); handleCreate(); }}>Add University</button>
                            </div>
                        </div>
                    </div>
                    {/* ----- Confirm Add University Logic ----- */}
                    <div id='PA_U_ConfirmAdd_Parent' style={{ display: showParent ? 'block' : 'none' }}>
                        {/* Basic Logic */}
                        <div id="sub_PA_U_ConfirmAdd_Parent" style={{ display: showConfirmation ? 'block' : 'none' }}>
                            <div id="PA_U_ConfirmAdd_Parent_Box">
                                {/* Box 1 */}
                                <div id="PA_U_ConfirmAdd_1" style={{ display: showBox2 ? 'none' : 'block' }}>
                                    <div id="PA_U_ConfirmAdd_img">
                                        <img src={add_u} alt="NA" />
                                    </div>
                                    <h3>Are you Sure want to Add ?</h3>
                                    <p>Upon selecting the Confirm Add button, a new university will be added to the system. Conversely, choosing the Cancel button will decline the process.</p>
                                    <button id='PA_U_ConfirmAdd_1_A' onClick={handleButtonClick}>Yes, Confirm Add</button>
                                    {/* Cancel Button */}
                                    <button id='PA_U_ConfirmAdd_1_B' onClick={handleCancelClick}>Cancel</button>
                                </div>
                                {/* Box 2 */}
                                <div id="PA_U_ConfirmAdd_2" style={{ display: showBox2 ? 'block' : 'none' }}>
                                    <div id="PA_U_ConfirmAdd_img">
                                        <img src={confirm_u} alt="NA" />
                                    </div>
                                    <h3>Added Successfully!</h3>
                                    {/* Move To Add University Home Page */}
                                    <button id='PA_U_ConfirmAdd_1_A' onClick={() => navigate('/PAdd_Uni')}>Move To Home Page</button>
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









