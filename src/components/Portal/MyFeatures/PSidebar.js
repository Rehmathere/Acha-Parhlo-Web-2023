import React, { useState } from 'react'
// Menu Icons
import {
    FaBars,
    FaUserAlt,
    FaCalendarAlt,
    FaCommentAlt,
    FaFileAlt,
    FaMapMarkerAlt,
    FaUniversity,
    FaTh
} from "react-icons/fa";
// Navigation
import { NavLink } from 'react-router-dom';
// CSS
import './MyFeatures.css'

export default function PSidebar({children}) {
    // 1 - useState
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    // 2 - Array Menu Items
    const menuItem = [
        {
            path: "/PAbout",
            name: "Dashboard",
            icon: <FaTh />
        },
        {
            path: "/PProfile",
            name: "Profile",
            icon: <FaUserAlt />
        },
        {
            path: "/PAppointments",
            name: "Appointment",
            icon: <FaCalendarAlt />
        },
        {
            path: "/PTracking",
            name: "Tracking",
            icon: <FaMapMarkerAlt />
        },
        {
            path: "/PRecords",
            name: "Records",
            icon: <FaFileAlt />
        },
        {
            path: "/PChat",
            name: "Chat",
            icon: <FaCommentAlt />
        },
        {
            path: "/PAdd_Uni",
            name: "Universities",
            icon: <FaUniversity />
        },
    ]
    // Main Body
    return (
        <div className="mycontainer">
            <div style={{ width: isOpen ? "200px" : "48px" }} className="sidebar">
                <div className="top_section">
                    <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">Logo</h1>
                    <div style={{ marginLeft: isOpen ? "70px" : "0px" }} className="bars">
                        <FaBars onClick={toggle} />
                    </div>
                </div>
                {
                    menuItem.map((item, index) => (
                        <NavLink to={item.path} key={index} className="link" activeclassName="active" style={{ marginLeft: isOpen ? "7px" : "0px", marginRight: isOpen ? "7px" : "0px" }}>
                            <div className="icon">{item.icon}</div>
                            <div style={{ display: isOpen ? "block" : "none" }} className="link_text">{item.name}</div>
                        </NavLink>
                    ))
                }
            </div>
            <main>{children}</main>
        </div>
    )
}



