import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { database1 } from '../Portal/firebase';

export default function Z_Test_2() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [U1_UniversityName, setU1_UniversityName] = useState('');
  const [U2_Campus, setU2_Campus] = useState('');
  const [U3_intake, setU3_intake] = useState('');
  const [U4_courseName, setU4_courseName] = useState('');
  const [buttonValue, setbuttonValue] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const docRef = doc(database1, '4 - Student Records', id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const data = docSnap.data();
          setU1_UniversityName(data.U1_universityName || '');
          setU2_Campus(data.U2_campus || '');
          setU3_intake(data.U3_intake || '');
          setU4_courseName(data.U4_courseName || '');
          setbuttonValue(data.buttonValue || '');
        } else {
          console.error('Document not found.');
        }
      } catch (error) {
        console.error('Error fetching data from Firestore:', error);
      }
    };
    fetchData();
  }, [id]);

  const updateFirestoreWithValue = async (value) => {
    try {
      const docRef = doc(database1, '4 - Student Records', id);
      await updateDoc(docRef, { buttonValue: value });
      console.log('Document successfully updated!');
    } catch (error) {
      console.error('Error updating document:', error);
    }
  };

  return (
    <>
      <div className='container'>
        <div id='Z_T_C_Box'>
          {/* --- Fill Information --- */}
          <h6>1 - Fill Information</h6>
          {/* ------- 1 - University Detail ------- */}
          <h1>University Detail ( 1 )</h1>
          {/* Data */}
          <div id='Z_StudentsRecordBox'>
            <span>1 - University Name</span>
            <span id='Z_Span_2'>{U1_UniversityName}</span>
          </div>
          {/* Data */}
          <div id='Z_StudentsRecordBox'>
            <span>2 - Campus</span>
            <span id='Z_Span_2'>{U2_Campus}</span>
          </div>
          {/* Data */}
          <div id='Z_StudentsRecordBox'>
            <span>3 - Intake</span>
            <span id='Z_Span_2'>{U3_intake}</span>
          </div>
          {/* Data */}
          <div id='Z_StudentsRecordBox'>
            <span>4 - Course Name</span>
            <span id='Z_Span_2'>{U4_courseName}</span>
          </div>
          {/* --- Status --- */}
          {/* Button Portion */}
          <div id="ParentButton">
            {/* Button */}
            <div>
              <button id='AT_1' onClick={() => updateFirestoreWithValue("Process 1")}>Process 1</button>
            </div>
            {/* Button */}
            <div>
              <button id='AT_1' onClick={() => updateFirestoreWithValue("Process 2")}>Process 2</button>
            </div>
            {/* Button */}
            <div>
              <button id='AT_1' onClick={() => updateFirestoreWithValue("Process 3")}>Process 3</button>
            </div>
          </div>
          {/* Show Status */}
          <h1>{buttonValue}</h1>
          {/* Back Button */}
          <button id='Btn_C_1' onClick={() => navigate('/')}>
            Move Back
          </button>
        </div>
      </div>
    </>
  );
}
