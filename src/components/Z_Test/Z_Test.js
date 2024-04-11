import React, { useLayoutEffect, useState } from 'react';
// Navigation
import { useNavigate } from 'react-router-dom';
// Firebase
import { database1 } from '../Portal/firebase';
import { collection, getDocs } from 'firebase/firestore';

export default function Z_Test() {
    // Navigate
    const navigate = useNavigate();
    // ------------- Backend Part Logic -------------
    // --- Dashboard Counting Feature File Numbers ---
    const [fileCounts, setFileCounts] = useState({
        addUniversity: 0,
        appointment: 0,
        trackingRecords: 0
    });
    useLayoutEffect(() => {
        async function fetchData() {
            const value1 = collection(database1, "1 - Add University");
            const value2 = collection(database1, "3 - Appointment");
            const value3 = collection(database1, "4 - Student Records");
            // Functions 
            const [data1, data2, data3] = await Promise.all([
                getDocs(value1),
                getDocs(value2),
                getDocs(value3)
            ]);
            setFileCounts({
                addUniversity: data1.size,
                appointment: data2.size,
                trackingRecords: data3.size
            });
        }
        fetchData();
    }, []);
    // --- Dashboard Counting Feature File Numbers ---
    // Main Body
    return (
        <>
            {/* Heading */}
            <div id="Z_Create">
                <div id="Z_Create_Part_1">
                    <h4>Appointment App Feature</h4>
                </div>
            </div>
            {/* Box 1 : Add University */}
            <div className='container'>
                <div id='Z_T_1_Box'>
                    <h4>No Of Add University : </h4>
                    <h4>{fileCounts.addUniversity}</h4> {/* Display the file count */}
                </div>
            </div>
            {/* Box 2 : Appointment */}
            <div className='container'>
                <div id='Z_T_1_Box'>
                    <h4>No Of Appointment : </h4>
                    <h4>{fileCounts.appointment}</h4> {/* Display the file count */}
                </div>
            </div>
            {/* Box 3 : Application Tracking & Student Records */}
            <div className='container'>
                <div id='Z_T_1_Box'>
                    <h4>No Of Tracking , Records : </h4>
                    <h4>{fileCounts.trackingRecords}</h4> {/* Display the file count */}
                </div>
            </div>
        </>
    );
}
