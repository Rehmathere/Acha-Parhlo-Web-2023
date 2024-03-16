import React, { useState, useEffect } from 'react';
import "../Portal/MyFeatures/PChat/FinalChat.css";
// Firebase
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { database1 } from '../Portal/firebase';
// Navigate
import { useNavigate, useParams } from "react-router-dom"

export default function Z_Test_2() {
  // Navigate
  const navigate = useNavigate();
  // ------------- Backend Part Logic -------------
  const { id } = useParams();
  const [U1_universityName, setU1_universityName] = useState("");
  const [U2_campus, setU2_campus] = useState("");
  const [U3_intake, setU3_intake] = useState("");
  const [U4_courseName, setU4_courseName] = useState("");
  const [U_Extra_Uni_Image, setU_Extra_Uni_Image] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      const docRef = doc(database1, "New Practice App", id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const data = docSnap.data();
        setU1_universityName(data.U1_universityName || "");
        setU2_campus(data.U2_campus || "");
        setU3_intake(data.U3_intake || "");
        setU4_courseName(data.U4_courseName || "");
        setU_Extra_Uni_Image(data.U_Extra_Uni_Image || "");
      }
    };
    fetchData();
  }, [id]);
  // ------------- Backend Part Logic -------------
  // Main Body
  return (
    <>
      <div className='container'>
        <div id="Z_T_C_Box">
          {/* Heading */}
          <h1>User Full Detail</h1>
          {/* Detail */}
          <h6>1 - University Name</h6>
          <h5>{U1_universityName}</h5>
          <h6>2 - Campus</h6>
          <h5>{U2_campus}</h5>
          <h6>3 - Intake</h6>
          <h5>{U3_intake}</h5>
          <h6>4 - Course Name</h6>
          <h5>{U4_courseName}</h5>
          {/* Image Area */}
          <h6>5 - University LOGO ( Show )</h6>
          <img src={U_Extra_Uni_Image} alt="NA" />
          {/* Image Area */}
          {/* ---------------------- */}
          {/* Back Button */}
          <button id='Btn_C_1' onClick={() => navigate('/')}>Move Back</button>
        </div>
      </div>
    </>
  );
}
