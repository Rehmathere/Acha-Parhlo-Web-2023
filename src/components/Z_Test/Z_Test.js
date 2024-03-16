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
    const value = collection(database1, "New Practice App");
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
    // ------------- Backend Part Logic -------------
    // Main Body
    return (
        <>
            {/* Heading */}
            <div id="Z_Create">
                <div id="Z_Create_Part_1">
                    <h4>University Logo Showing</h4>
                </div>
            </div>
            {/* Box */}
            <div className='container'>
                {val.map(values =>
                    <div id='Z_T_1_Box' key={values.id}>
                        <h1>1 - {values.U1_universityName}</h1>
                        <h1>2 - {values.U2_campus}</h1>
                        <h1>3 - {values.U3_intake}</h1>
                        <h1>4 - {values.U4_courseName}</h1>
                        <img src={values.U_Extra_Uni_Image} alt="NA" />
                        <button onClick={() => handleEdit(values.id)}>See User Full Detail</button>
                    </div>
                )}
            </div>
        </>
    );
}