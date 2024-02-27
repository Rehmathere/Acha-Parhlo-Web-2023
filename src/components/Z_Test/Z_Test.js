import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../Portal/MyFeatures/PChat/FinalChat.css";
// Firebase
import { doc, getDocs, deleteDoc, collection } from 'firebase/firestore';
import { database1 } from '../Portal/firebase';

export default function Z_Test() {
  // Navigate
  const navigate = useNavigate();
  // Main Body
  return (
    <>
      <div id="Z_Create">
        <div id="Z_Create_Part_1">
          <h4>Chat Feature</h4>
        </div>
      </div>
      <div className='container'>
        <div id='Z_T_1_Box'>
          <h4>Want To Chat Us ?</h4>
          <button onClick={() => navigate("/Z_Test_2")}>Yes , Chat Now</button>
        </div>
      </div>
    </>
  );
}
