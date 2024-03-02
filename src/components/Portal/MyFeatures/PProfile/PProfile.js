import React, { useState, useRef } from 'react';
import PSidebar from '../PSidebar'
// CSS
import '../PProfile/PProfile.css'
import '../PRecords/PRecords.css'
// Images
import logout from '../../../Pics/logout.png'
import user from '../../../Pics/user_P.png'
import Str_P from "../../../Pics/Str_P.png"
import add_u from '../../../Pics/PassChanged.png'
import E_Edit from '../../../Pics/E_Edited.png'
// Reset Password 
import { useAuthState } from 'react-firebase-hooks/auth';
import E_User from "../../../Pics/E_User.png"
import { database } from '../../firebase'
import { updatePassword } from 'firebase/auth'
// Logout Logic 
import { useNavigate } from 'react-router-dom'
import { signOut } from 'firebase/auth'
import "../PAppointments/PAppoint.css"

export default function PProfile() {
    // Email Address For Logout Dialog Box
    const [user] = useAuthState(database);
    // ------ Confirm Submit Button Logic ------
    const [E_showBox2, E_setShowBox2] = useState(false);
    const [E_showConfirmation, E_setShowConfirmation] = useState(false);
    const [E_showParent, E_setShowParent] = useState(false);
    const E_handleAddUniversityClick = () => {
        E_setShowParent(true);
        E_setShowConfirmation(true);
        E_setShowBox2(true); // Set showBox2 to true directly
        setTimeout(() => {
            E_setShowParent(false);
            // ---
        }, 5000);
    };
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
    // ------------------------------------------------------
    const [newPassword, setNewPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleChangePassword = async () => {
        try {
            const user = database.currentUser;

            if (user) {
                await updatePassword(user, newPassword);
                setErrorMessage('');
            } else {
                setErrorMessage('User not found. Please log in again.');
            }
        } catch (error) {
            setErrorMessage(error.message);
        }
    };
    // Edit Profile useSatte
    const [image, setImage] = useState(null);
    const [isEditing, setIsEditing] = useState(true);
    // 6 Input Field
    const [name, setName] = useState('');
    const [name2, setName2] = useState('');
    const [name3, setName3] = useState('');
    const [name4, setName4] = useState('');
    const [name5, setName5] = useState('');
    const [name6, setName6] = useState('');
    // 6 input Field Function
    const handleNameChange = (e) => {
        setName(e.target.value);
    };
    const handleNameChange2 = (e) => {
        setName2(e.target.value);
    };
    const handleNameChange3 = (e) => {
        setName3(e.target.value);
    };
    const handleNameChange4 = (e) => {
        setName4(e.target.value);
    };
    const handleNameChange5 = (e) => {
        setName5(e.target.value);
    };
    const handleNameChange6 = (e) => {
        setName6(e.target.value);
    };
    // Upload Image Of Edit Profile Logic
    const fileInputRef = useRef(null);
    const handleUploadClick = () => {
        // Trigger the hidden file input
        fileInputRef.current.click();
    };
    // Function to handle file input change
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        // Use FileReader to convert the selected file to a data URL
        const reader = new FileReader();
        reader.onloadend = () => {
            setImage(reader.result);
        };
        if (file) {
            reader.readAsDataURL(file);
        }
    };

    // Profile Logic
    const [isPart1Visible, setPart1Visible] = useState(true);
    const [isPart2Visible, setPart2Visible] = useState(false);
    const [isPart3Visible, setPart3Visible] = useState(false);

    // State for each option button
    const [isProfileButtonClicked, setProfileButtonClicked] = useState(false);
    const [isEditProfileButtonClicked, setEditProfileButtonClicked] = useState(false);
    const [isResetPasswordButtonClicked, setResetPasswordButtonClicked] = useState(false);

    const toggleVisibility = (partNumber) => {
        setPart1Visible(partNumber === 1);
        setPart2Visible(partNumber === 2);
        setPart3Visible(partNumber === 3);

        // Update state for each option button
        setProfileButtonClicked(partNumber === 1);
        setEditProfileButtonClicked(partNumber === 2);
        setResetPasswordButtonClicked(partNumber === 3);
    };

    // Functions
    const getButtonStyle = (buttonClicked) => ({
        borderBottomWidth: buttonClicked ? '2.5px' : '0px',
        borderBottomColor: buttonClicked ? 'orangered' : 'black',
        backgroundColor: buttonClicked ? '#dfe6e9' : 'transparent',
    });
    // Functions
    const profileBox2Part1Style = {
        display: isPart1Visible ? 'block' : 'none',
    };
    const profileBox2Part2Style = {
        display: isPart2Visible ? 'block' : 'none',
    };
    const profileBox2Part3Style = {
        display: isPart3Visible ? 'block' : 'none',
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
                {/* Profile Heading */}
                {/* <div id="Prof_Heading">
                    <h1>My Profile <i className="fa fa-user-circle-o" ></i></h1>
                </div> */}
                {/* Profile Heading New */}
                <div id="PTr_first">
                    <div id="sub_PTr_first">
                        <div id="PTr_first_1">
                            <h1>My Profile</h1>
                        </div>
                        <div id="PTr_first_2">
                            <img src={Str_P} alt="Na" />
                        </div>
                    </div>
                </div>
                {/* Main Profile Body */}
                <div id="MainProfile">
                    <div id="subMainProfile">
                        <div id="MainProfileBox">
                            {/* 1 */}
                            <div id="ProfileBox_1">
                                <div id="subProfileBox_1">
                                    {/* Option 1 */}
                                    <div id="ProfileBox_1_O_1_B1"
                                        onClick={() => toggleVisibility(1)}
                                        style={getButtonStyle(isProfileButtonClicked)}
                                    >
                                        <div id="ProfileBox_1_O_1_P">
                                            <i className="fa fa-user"></i>Profile
                                        </div>
                                    </div>
                                    {/* Option 2 */}
                                    <div
                                        id="ProfileBox_1_O_1_B2"
                                        onClick={() => toggleVisibility(2)}
                                        style={getButtonStyle(isEditProfileButtonClicked)}
                                    >
                                        <div id="ProfileBox_1_O_1_P">
                                            <i className="fa fa-edit"></i>Edit Profile
                                        </div>
                                    </div>
                                    {/* Option 3 */}
                                    <div
                                        id="ProfileBox_1_O_1_B3"
                                        onClick={() => toggleVisibility(3)}
                                        style={getButtonStyle(isResetPasswordButtonClicked)}
                                    >
                                        <div id="ProfileBox_1_O_1_P">
                                            <i className="fa fa-gears"></i>Reset Password
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* 2 */}
                            <div id="ProfileBox_2">
                                {/* Profile */}
                                <div id="ProfileBox_2_Part_1" style={profileBox2Part1Style}>
                                    <div id="sub_ProfileBox_2_Part_1">
                                        <div id="ProfileBox_2_Part_1_1">
                                            <div id="sub_ProfileBox_2_Part_1_1">
                                                <div id="ProfileBox_2_Part_1_1_P1">
                                                    {isEditing && (
                                                        <div id="ProfileBox_2_Part_1_1_P1_ImgP">
                                                            {/* Use the state variable for the image source */}
                                                            <img src={image ? image : user} alt="Na" />
                                                        </div>
                                                    )}
                                                </div>
                                                <div id="ProfileBox_2_Part_1_1_P2">
                                                    {isEditing && <p>{name || " ----- "}</p>
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                        <div id="ProfileBox_2_Part_1_2">
                                            {/* Input Name 1 */}
                                            <div id="ProfileBox_2_Input_Box">
                                                <div id="ProfileBox_2_Input_Box_1">
                                                    Name
                                                </div>
                                                <div id="ProfileBox_2_Input_Box_2">
                                                    :
                                                </div>
                                                {isEditing && <div id='ProfileBox_2_Input_Box_3'>{name || " ----------- "}</div>
                                                }
                                            </div>
                                            {/* Input Name White 1 */}
                                            <div id="ProfileBox_2_Input_Box">
                                                <div id="ProfileBox_2_Input_Box_1_W">
                                                    Age
                                                </div>
                                                <div id="ProfileBox_2_Input_Box_2_W">
                                                    :
                                                </div>
                                                {isEditing && <div id='ProfileBox_2_Input_Box_3_W'>{name2 || " ----------- "}</div>
                                                }
                                            </div>
                                            {/* Input Name 2 */}
                                            <div id="ProfileBox_2_Input_Box">
                                                <div id="ProfileBox_2_Input_Box_1">
                                                    Email
                                                </div>
                                                <div id="ProfileBox_2_Input_Box_2">
                                                    :
                                                </div>
                                                {isEditing && <div id='ProfileBox_2_Input_Box_3_E'>{name3 || " ----------- "}</div>
                                                }
                                            </div>
                                            {/* Input Name White 2 */}
                                            <div id="ProfileBox_2_Input_Box">
                                                <div id="ProfileBox_2_Input_Box_1_W">
                                                    Phone
                                                </div>
                                                <div id="ProfileBox_2_Input_Box_2_W">
                                                    :
                                                </div>
                                                {isEditing && <div id='ProfileBox_2_Input_Box_3_W'>{name4 || " ----------- "}</div>
                                                }
                                            </div>
                                            {/* Input Name 1 */}
                                            <div id="ProfileBox_2_Input_Box">
                                                <div id="ProfileBox_2_Input_Box_1">
                                                    Country
                                                </div>
                                                <div id="ProfileBox_2_Input_Box_2">
                                                    :
                                                </div>
                                                {isEditing && <div id='ProfileBox_2_Input_Box_3'>{name5 || " ----------- "}</div>
                                                }
                                            </div>
                                            {/* Input Name White 1 */}
                                            <div id="ProfileBox_2_Input_Box">
                                                <div id="ProfileBox_2_Input_Box_1_W">
                                                    Status
                                                </div>
                                                <div id="ProfileBox_2_Input_Box_2_W">
                                                    :
                                                </div>
                                                {isEditing && <div id='ProfileBox_2_Input_Box_3_W'>{name6 || " ----------- "}</div>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Edit Profile */}
                                <div id="ProfileBox_2_Part_2" style={profileBox2Part2Style}>
                                    <div id="sub_ProfileBox_2_Part_2">
                                        {/* 1 */}
                                        <div id="ProfileBox_2_Sec_Part_1">
                                            <div id="ProfileBox_2_Sec_Part_1_P1">
                                                <div id="ProfileBox_2_Sec_Part_1_P1_Box">
                                                    <i class="fa fa-pencil"></i>
                                                </div>
                                            </div>
                                            <div id="ProfileBox_2_Sec_Part_1_P2">
                                                <div id="ProfileBox_2_Sec_Part_1_P2_Box">
                                                    {/* Image */}
                                                    <div id="sub_ProBx_2_Sc_Prt_1_P2_Bx">
                                                        {/* Display Area - Render only when isEditing is true */}
                                                        {isEditing && (
                                                            <div id="PrBx_2_Sec_Part_1_P2_Box">
                                                                {/* Use the state variable for the image source */}
                                                                <img src={image ? image : user} alt="Na" />
                                                            </div>
                                                        )}
                                                    </div>
                                                    {/* Button */}
                                                    <div id="sub_ProBx_2_Sc_Prt_1_P2_Bx">
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
                                        {/* 2 */}
                                        <div id="ProfileBox_2_Sec_Part_2">
                                            {/* Row 1 */}
                                            <div id="ProfileBox_2_Row">
                                                {/* 1 */}
                                                <div id="ProfileBox_2_Row_Part_1">
                                                    <div id="ProfileBox_2_Row_Part_1_P1">
                                                        <span>Name</span>
                                                    </div>
                                                    <div id="ProfileBox_2_Row_Part_1_P1">
                                                        <input type="text" placeholder='Enter Full Name' onChange={handleNameChange} />
                                                    </div>
                                                </div>
                                                {/* 2 */}
                                                <div id="ProfileBox_2_Row_Part_1">
                                                    <div id="ProfileBox_2_Row_Part_1_P1">
                                                        <span>Age</span>
                                                    </div>
                                                    <div id="ProfileBox_2_Row_Part_1_P1">
                                                        <input type="number" placeholder='Enter Your Age' onChange={handleNameChange2} />
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Row 2 */}
                                            <div id="ProfileBox_2_Row">
                                                {/* 1 */}
                                                <div id="ProfileBox_2_Row_Part_1">
                                                    <div id="ProfileBox_2_Row_Part_1_P1">
                                                        <span>Email Address</span>
                                                    </div>
                                                    <div id="ProfileBox_2_Row_Part_1_P1">
                                                        <input type="email" placeholder='Enter Full Email Address' onChange={handleNameChange3} />
                                                    </div>
                                                </div>
                                                {/* 2 */}
                                                <div id="ProfileBox_2_Row_Part_1">
                                                    <div id="ProfileBox_2_Row_Part_1_P1">
                                                        <span>Phone No</span>
                                                    </div>
                                                    <div id="ProfileBox_2_Row_Part_1_P1">
                                                        <input type="tel" placeholder='Enter Your Phone No' onChange={handleNameChange4} />
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Row 3 */}
                                            <div id="ProfileBox_2_Row">
                                                {/* 1 */}
                                                <div id="ProfileBox_2_Row_Part_1">
                                                    <div id="ProfileBox_2_Row_Part_1_P1">
                                                        <span>Country</span>
                                                    </div>
                                                    <div id="ProfileBox_2_Row_Part_1_P1">
                                                        <input type="text" placeholder='Enter Country' onChange={handleNameChange5} />
                                                    </div>
                                                </div>
                                                {/* 2 */}
                                                <div id="ProfileBox_2_Row_Part_1">
                                                    <div id="ProfileBox_2_Row_Part_1_P1">
                                                        <span>Status</span>
                                                    </div>
                                                    <div id="ProfileBox_2_Row_Part_1_P1">
                                                        <input type="text" placeholder='Enter Your Phone No' onChange={handleNameChange6} />
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Row 4 */}
                                            <div id="ProfileBox_2_Row">
                                                {/* Submit Button */}
                                                <button id='ProfileBox_2_Row_Submit_Btn' onClick={() => { E_handleAddUniversityClick(); }}>Edit Profile</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Reset Password */}
                                <div id="ProfileBox_2_Part_3" style={profileBox2Part3Style}>
                                    {/* Reset Password */}
                                    <div id="sub_ProfileBox_2_Part_3">
                                        <h2>Change Password</h2>
                                        <div id='ProfileBox_2_Part_3_Input_Box'>
                                            <label>New Password:</label>
                                            <input
                                                type="password"
                                                value={newPassword}
                                                onChange={(e) => setNewPassword(e.target.value)}
                                            />
                                        </div>
                                        <div id='ProfileBox_2_Part_3_Input_Box_2'>
                                            <button onClick={() => { handleChangePassword(); handleAddUniversityClick(); }}>Change Password</button>
                                        </div>
                                        {/* Errorr Message */}
                                        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
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
                                {/* Box 1 */}
                                <div id="PA_U_ConfirmAdd_1" style={{ display: showBox2 ? 'none' : 'block' }}>
                                    <div id="PA_U_ConfirmAdd_img">
                                        <img src={add_u} alt="NA" />
                                    </div>
                                    <h3>Password Changed</h3>
                                    <p>Your Password Has Been Changed, Now Access This Account With Your New Password.</p>
                                    {/* Close Button */}
                                    <button id='PA_U_ConfirmAdd_1_A' onClick={handleCancelClick}>Ok , Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* ---------------------------------------------------------- */}
                    {/* ---------------       Edit Profile     ------------------ */}
                    {/* ---------------------------------------------------------- */}
                    <div id='PA_U_ConfirmAdd_Parent' style={{ display: E_showParent ? 'block' : 'none' }}>
                        {/* Basic Logic */}
                        <div id="sub_PA_U_ConfirmAdd_Parent" style={{ display: E_showConfirmation ? 'block' : 'none' }}>
                            <div id="PA_U_ConfirmAdd_Parent_Box">
                                {/* Box 2 */}
                                <div id="PA_U_ConfirmAdd_2" style={{ display: E_showBox2 ? 'block' : 'none' }}>
                                    <div id="PA_U_ConfirmAdd_img">
                                        <img src={E_Edit} alt="NA" />
                                    </div>
                                    <h3>Profile Edited !</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* ---------------------------------------------------------- */}
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
                </div>
            </PSidebar>
        </div>
    )
}
