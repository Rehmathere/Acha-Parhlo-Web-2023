import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../Portal/MyFeatures/PChat/FinalChat.css";
// Firebase
import { doc, getDocs, collection } from 'firebase/firestore';
import { database1 } from '../Portal/firebase';

export default function Z_Test() {
  // Navigate
  const navigate = useNavigate();
  // --------- Backend Part Logic ---------  
  const [val, setVal] = useState([]);
  const value = collection(database1, "4 - Student Records");
  const getData = async () => {
    try {
      const dbVal = await getDocs(value);
      setVal(dbVal.docs.map(doc => ({ ...doc.data(), id: doc.id })));
    } catch (error) {
      console.error("Error fetching data from Firestore:", error);
    }
  }
  useEffect(() => {
    getData();
  }, []);
  const handleEdit = (id, values) => {
    navigate(`/Z_Test_2/${id}`, { state: { values } });
  }
  // --------- Backend Part Logic ---------  
  // Main Body
  return (
    <>
      <div id="Z_Create">
        <div id="Z_Create_Part_1">
          <h4>Student Records App Feature</h4>
        </div>
      </div>
      <div className='container'>
        {val.map(values => (
          <div id='Z_T_1_Box' key={values.id}>
            <h4>1 - {values.U1_universityName}</h4>
            <h4>2 - {values.U2_campus}</h4>
            <button onClick={() => handleEdit(values.id)}>Student Detail</button>
          </div>
        ))}
      </div>
    </>
  );
}
