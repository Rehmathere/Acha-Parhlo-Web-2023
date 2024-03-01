import React, { useState, useEffect } from 'react';
import "../Portal/MyFeatures/PChat/FinalChat.css";
// Firebase
import { doc, getDoc } from 'firebase/firestore';
import { database1 } from '../Portal/firebase';
// Navigate
import { useNavigate, useParams } from "react-router-dom"
// Image
import user from "../Pics/fileupload.png"

export default function Z_Test_2() {
  // Navigate
  const navigate = useNavigate();
  // ------------- Backend Part Logic -------------
  const { id } = useParams();
  const [U1_universityName, setU1_universityName] = useState("");
  const [U2_campus, setU2_campus] = useState("");
  const [U3_intake, setU3_intake] = useState("");
  const [U4_courseName, setU4_courseName] = useState("");
  // Images Upload File
  const [D1_1_Image_10Cert, setD1_1_Image_10Cert] = useState("");
  const [D1_1_Image_10Mark, setD1_1_Image_10Mark] = useState("");
  const [D2_1_Image_11Mark, setD2_1_Image_11Mark] = useState("");
  const [D2_2_Image_11Cert, setD2_2_Image_11Cert] = useState("");
  const [D3_1_Image_Transcript, setD3_1_Image_Transcript] = useState("");
  const [D3_2_Image_Degree, setD3_2_Image_Degree] = useState("");
  const [D4_1_Image_Front, setD4_1_Image_Front] = useState("");
  const [D4_2_Image_Back, setD4_2_Image_Back] = useState("");
  const [D5_1_Image_IELTS, setD5_1_Image_IELTS] = useState("");
  const [D6_1_Image_Gap, setD6_1_Image_Gap] = useState("");
  const [D7_1_Image_Resume, setD7_1_Image_Resume] = useState("");
  const [D8_1_Image_PassFirst, setD8_1_Image_PassFirst] = useState("");
  const [D8_2_Image_PassSign, setD8_2_Image_PassSign] = useState("");
  // Function
  useEffect(() => {
    const fetchData = async () => {
      const docRef = doc(database1, "4 - Student Records", id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const data = docSnap.data();
        setU1_universityName(data.U1_universityName || "");
        setU2_campus(data.U2_campus || "");
        setU3_intake(data.U3_intake || "");
        setU4_courseName(data.U4_courseName || "");
        // - Image -
        setD1_1_Image_10Cert(data.D1_1_Image_10Cert || "");
        setD1_1_Image_10Mark(data.D1_1_Image_10Mark || "");
        setD2_1_Image_11Mark(data.D2_1_Image_11Mark || "");
        setD2_2_Image_11Cert(data.D2_2_Image_11Cert || "");
        setD3_1_Image_Transcript(data.D3_1_Image_Transcript || "");
        setD3_2_Image_Degree(data.D3_2_Image_Degree || "");
        setD4_1_Image_Front(data.D4_1_Image_Front || "");
        setD4_2_Image_Back(data.D4_2_Image_Back || "");
        setD5_1_Image_IELTS(data.D5_1_Image_IELTS || "");
        setD6_1_Image_Gap(data.D6_1_Image_Gap || "");
        setD7_1_Image_Resume(data.D7_1_Image_Resume || "");
        setD8_1_Image_PassFirst(data.D8_1_Image_PassFirst || "");
        setD8_2_Image_PassSign(data.D8_2_Image_PassSign || "");
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
          <h1>Student Records</h1>
          {/* Detail */}
          <div id="Row">
            <p>1 - University Name</p>
            <p>{U1_universityName}</p>
          </div>
          <div id="Row">
            <p>2 - Campus</p>
            <p>{U2_campus}</p>
          </div>
          <div id="Row">
            <p>3 - Intake</p>
            <p>{U3_intake}</p>
          </div>
          <div id="Row">
            <p>4 - Course Name</p>
            <p>{U4_courseName}</p>
          </div>
          {/* - Image - */}
          <h6>10 Class</h6>
          <div id="Row">
            <img src={D1_1_Image_10Cert || user} alt="NA" />
            <img src={D1_1_Image_10Mark || user} alt="NA" />
          </div>
          {/* - Image - */}
          <h6>11 Class</h6>
          <div id="Row">
            <img src={D2_1_Image_11Mark || user} alt="NA" />
            <img src={D2_2_Image_11Cert || user} alt="NA" />
          </div>
          {/* - Image - */}
          <h6>Transcript</h6>
          <div id="Row">
            <img src={D3_1_Image_Transcript || user} alt="NA" />
            <img src={D3_2_Image_Degree || user} alt="NA" />
          </div>
          {/* - Image - */}
          <h6>ID Card</h6>
          <div id="Row">
            <img src={D4_1_Image_Front || user} alt="NA" />
            <img src={D4_2_Image_Back || user} alt="NA" />
          </div>
          {/* - Image - */}
          <h6>Ielts</h6>
          <div id="Row">
            <img src={D5_1_Image_IELTS || user} alt="NA" />
          </div>
          {/* - Image - */}
          <h6>Gap</h6>
          <div id="Row">
            <img src={D6_1_Image_Gap || user} alt="NA" />
          </div>
          {/* - Image - */}
          <h6>Resume</h6>
          <div id="Row">
            <img src={D7_1_Image_Resume || user} alt="NA" />
          </div>
          {/* - Image - */}
          <h6>Resume</h6>
          <div id="Row">
            <img src={D8_1_Image_PassFirst || user} alt="NA" />
            <img src={D8_2_Image_PassSign || user} alt="NA" />
          </div>
          {/* Back Button */}
          <button id='Btn_C_1' onClick={() => navigate('/')}>Move Back</button>
        </div>
      </div>
    </>
  );
}
