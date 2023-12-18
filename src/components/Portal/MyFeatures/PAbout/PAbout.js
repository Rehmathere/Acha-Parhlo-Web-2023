import React, { useState, useEffect } from 'react'
import PSidebar from '../PSidebar'
// Firebase
import { signOut } from 'firebase/auth'
import { database } from '../../firebase'
// useNavigate
import { useNavigate, useLocation } from 'react-router-dom'
// CSS
import '../PAbout/PAbout.css'
// Images
import PAbout1 from '../../../Pics/PAbout1.png'

export default function PAbout() {
    // useNavigate 
    const navigate = useNavigate();
    const location = useLocation();
    // Logout Function
    const handleClick = () => {
        signOut(database).then(val => {
            console.log(val, 'val');
            navigate('/');
        })
    }
    const { userEmail } = location.state || { userEmail: 'user@example.com' };
    // Date
    const [currentDateTime, setCurrentDateTime] = useState(new Date());
    // Function to update currentDateTime every second
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentDateTime(new Date());
        }, 1000);
        // Cleanup interval on component unmount
        return () => clearInterval(intervalId);
    }, []);
    // Main Body
    return (
        <div id='PAbout_container'>
            <PSidebar>
                {/* PAbout First */}
                <div id="PAbout_First">
                    {/* 1 */}
                    <div id="PAbout_First_1">
                        <div id="PAbout_First_1_Box">
                            <div id="PAbout_First_1_Box_1">
                                {/* Displaying Date */}
                                <p id='PAbout_First_1_Box_1_P1'>{currentDateTime.toDateString()}</p>
                                {/* Displaying User Email */}
                                <h3>Welcome Back, {userEmail.slice(0, 10)} !</h3>
                                <p id='PAbout_First_1_Box_1_P2'>Hello Consultant, Let's make today count.</p>
                            </div>
                            <div id="PAbout_First_1_Box_2">
                                <div id="PAbout_First_1_Box_2_ImgParent">
                                    <div id="sub_PAbout_First_1_Box_2_ImgParent">
                                        <img src={PAbout1} alt="NA" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* 2 */}
                    <div id="PAbout_First_2">
                        <div id="PAbout_First_2_Box">
                            {/* Start */}
                        </div>
                    </div>
                </div>
                <br /><br />
                <h1>Portal Dashboard</h1>
                {/* Logout Button */}
                <br />
                <button onClick={handleClick}>Logout</button>
                <br /><br />
                {/* USename Display */}
                <h1>Hello, {userEmail.slice(0, 10)}</h1>
                <p>Current Time: {currentDateTime.toLocaleTimeString()}</p>
                <p>Current Date: {currentDateTime.toDateString()}</p>
            </PSidebar>
        </div>
    )
}



