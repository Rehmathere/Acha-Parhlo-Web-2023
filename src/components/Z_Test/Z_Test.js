import React, { useEffect, useState } from 'react';
import { database1 } from '../Portal/firebase';
import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
// CSS
import "../Portal/MyFeatures/PChat/FinalChat.css";

export default function Z_Test() {
  // Navigate
  const navigate = useNavigate();
  // ------------- Backend Logic Part -------------
  // Some List Shown, Edit ( Data Passing ) & Delete JS Logic
  const [val, setVal] = useState([]);
  const value = collection(database1, "demo");
  const getData = async () => {
    const dbVal = await getDocs(value);
    setVal(dbVal.docs.map(doc => ({ ...doc.data(), id: doc.id })));
  }
  useEffect(() => {
    getData();
  }, []);
  const handleDelete = async (id) => {
    const deleteVal = doc(database1, "demo", id);
    await deleteDoc(deleteVal);
    getData();
  }
  const handleEdit = (id, name1, name2, name3, name4, name5, MyImage) => {
    navigate(`/Z_Test_2/${id}/${name1}/${name2}/${name3}/${name4}/${name5}/${encodeURIComponent(MyImage)}`);
  }
  // ------------- Backend Logic Part -------------
  // Main Body
  return (
    <>
      <div id="Z_Create">
        <div id="Z_Create_Part_1">
          <h4>Want To Add University ?</h4>
        </div>
        <div id="Z_Create_Part_2">
          <button onClick={() => navigate('Z_Test_C')}>Add</button>
        </div>
      </div>
      <div className='container'>
        {val.map(values =>
          <div id='Z_T_1_Box' key={values.id}>
            <h4>1 - {values.name1}</h4>
            <h4>2 - {values.name2}</h4>
            <img id="Img_Upload" src={values.MyImage} alt="NA" />
            <button onClick={() => handleDelete(values.id)}>Delete</button>
            <button onClick={() => handleEdit(values.id, values.name1, values.name2, values.name3, values.name4, values.name5, values.MyImage)}>Edit</button>
          </div>)
        }
      </div>
    </>
  );
}
