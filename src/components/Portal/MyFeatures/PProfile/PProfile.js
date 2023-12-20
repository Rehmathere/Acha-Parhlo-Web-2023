import React, { useState } from 'react';
import PSidebar from '../PSidebar'
import '../PProfile/PProfile.css'
import logout from '../../../Pics/logout.png'
// Images
import user from '../../../Pics/user_P.png'

export default function PProfile() {
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
        borderBottomWidth: buttonClicked ? '2px' : '0px',
        borderBottomColor: buttonClicked ? 'orangered' : 'black',
        backgroundColor: buttonClicked ? '#F3F1F0' : 'transparent',
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
                {/* Profile Heading */}
                <div id="Prof_Heading">
                    <h1>My Profile <i className="fa fa-user-circle-o" ></i></h1>
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
                                                    <div id="ProfileBox_2_Part_1_1_P1_ImgP">
                                                        <img src={user} alt="Na" />
                                                    </div>
                                                </div>
                                                <div id="ProfileBox_2_Part_1_1_P2">
                                                    <p>Rehmat Qazi</p>
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
                                                <div id="ProfileBox_2_Input_Box_3">
                                                    Rehmat Qazi
                                                </div>
                                            </div>
                                            {/* Input Name White 1 */}
                                            <div id="ProfileBox_2_Input_Box">
                                                <div id="ProfileBox_2_Input_Box_1_W">
                                                    Age
                                                </div>
                                                <div id="ProfileBox_2_Input_Box_2_W">
                                                    :
                                                </div>
                                                <div id="ProfileBox_2_Input_Box_3_W">
                                                    20
                                                </div>
                                            </div>
                                            {/* Input Name 2 */}
                                            <div id="ProfileBox_2_Input_Box">
                                                <div id="ProfileBox_2_Input_Box_1">
                                                    Email
                                                </div>
                                                <div id="ProfileBox_2_Input_Box_2">
                                                    :
                                                </div>
                                                <div id="ProfileBox_2_Input_Box_3_E">
                                                    Rehmat.qazi000
                                                </div>
                                            </div>
                                            {/* Input Name White 2 */}
                                            <div id="ProfileBox_2_Input_Box">
                                                <div id="ProfileBox_2_Input_Box_1_W">
                                                    Phone
                                                </div>
                                                <div id="ProfileBox_2_Input_Box_2_W">
                                                    :
                                                </div>
                                                <div id="ProfileBox_2_Input_Box_3_W">
                                                    +92 3335448744
                                                </div>
                                            </div>
                                            {/* Input Name 1 */}
                                            <div id="ProfileBox_2_Input_Box">
                                                <div id="ProfileBox_2_Input_Box_1">
                                                    Country
                                                </div>
                                                <div id="ProfileBox_2_Input_Box_2">
                                                    :
                                                </div>
                                                <div id="ProfileBox_2_Input_Box_3">
                                                    Pakistan
                                                </div>
                                            </div>
                                            {/* Input Name White 1 */}
                                            <div id="ProfileBox_2_Input_Box">
                                                <div id="ProfileBox_2_Input_Box_1_W">
                                                    Status
                                                </div>
                                                <div id="ProfileBox_2_Input_Box_2_W">
                                                    :
                                                </div>
                                                <div id="ProfileBox_2_Input_Box_3_W">
                                                    Student
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Edit Profile */}
                                <div id="ProfileBox_2_Part_2" style={profileBox2Part2Style}>
                                    <h1>Edit Profile</h1>
                                </div>
                                {/* Reset Password */}
                                <div id="ProfileBox_2_Part_3" style={profileBox2Part3Style}>
                                    <h1>Reset Password</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </PSidebar>
        </div>
    )
}
