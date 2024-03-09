import React, { useEffect, useState } from 'react';
// Navigation
import { useNavigate } from 'react-router-dom';
// CSS
import "../Portal/MyFeatures/PChat/FinalChat.css";
// Firebase
import { database1 } from '../Portal/firebase';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';

export default function Z_Test() {
    // Navigate
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
        navigate(`/Z_Test_2/${id}`);
    }
    // Delete logic
    const handleDelete = async (id) => {
        await deleteDoc(doc(database1, "3 - Appointment", id));
        getData(); // Refresh data after delete
    }
    // ------------- Backend Part Logic -------------
    // Main Body
    return (
        <>
            {/* Heading */}
            <div id="Z_Create">
                <div id="Z_Create_Part_1">
                    <h4>Appointment App Feature</h4>
                </div>
            </div>
            {/* Box */}
            <div className='container'>
                {val.map(values =>
                    <div id='Z_T_1_Box' key={values.id}>
                        <h4>1 - {values.value_1}</h4>
                        <h4>2 - {values.value_2}</h4>
                        <h4>3 - {values.value_3}</h4>
                        <h4>4 - {values.TimeSlot}</h4>
                        <h4>5 - {values.gender}</h4>
                        <h4>6 - {values.Date}</h4>
                        <button onClick={() => handleEdit(values.id)}>Appointment Detail</button>
                        {/* Delete Btn */}
                        <button onClick={() => handleDelete(values.id)}>Delete</button>
                    </div>
                )}
            </div>
        </>
    );
}