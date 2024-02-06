import React, { useState, useEffect } from 'react';
import { database1 } from '../Portal/firebase';
import { collection, getDocs } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import "../Portal/MyFeatures/PChat/FinalChat.css";

export default function Z_Test_2() {
  // useState
  const [button1Color, setButton1Color] = useState('white');
  const [button2Color, setButton2Color] = useState('white');
  const [button3Color, setButton3Color] = useState('white');
  const [button4Color, setButton4Color] = useState('white');
  const [button5Color, setButton5Color] = useState('white');
  const [button6Color, setButton6Color] = useState('white');
  const [button7Color, setButton7Color] = useState('white');
  const [button8Color, setButton8Color] = useState('white');
  // ------------- Backend Logic -------------
  const [name1, setName1] = useState('');
  const navigate = useNavigate();
  // Only Fetching Firebase
  useEffect(() => {
    const fetchData = async () => {
      const value = collection(database1, "Practice");
      const querySnapshot = await getDocs(value);
      querySnapshot.forEach(doc => {
        setName1(doc.data().name1);
      });
    };
    fetchData();
  }, []);
  // Matchig Name1 value to change Backgorund Color ( For Tracking )
  useEffect(() => {
    if (name1 === "Process 1") {
      setButton1Color("#FFC300");
    }
    else if (name1 === "Process 2") {
      setButton2Color('#FFC300');
      setButton1Color('#FBD1A5');
    }
    else if (name1 === "Process 3") {
      setButton3Color('#FFC300');
      setButton2Color('#FBD1A5');
      setButton1Color('#FBD1A5');
    }
    else if (name1 === "Process 4") {
      setButton4Color('#FFC300');
      setButton3Color('#FBD1A5');
      setButton2Color('#FBD1A5');
      setButton1Color('#FBD1A5');
    }
    else if (name1 === "Process 5") {
      setButton5Color('#FFC300');
      setButton4Color('#FBD1A5');
      setButton3Color('#FBD1A5');
      setButton2Color('#FBD1A5');
      setButton1Color('#FBD1A5');
    }
    else if (name1 === "Process 6") {
      setButton6Color('#FFC300');
      setButton5Color('#FBD1A5');
      setButton4Color('#FBD1A5');
      setButton3Color('#FBD1A5');
      setButton2Color('#FBD1A5');
      setButton1Color('#FBD1A5');
    }
    else if (name1 === "Process 7") {
      setButton7Color('#FFC300');
      setButton6Color('#FBD1A5');
      setButton5Color('#FBD1A5');
      setButton4Color('#FBD1A5');
      setButton3Color('#FBD1A5');
      setButton2Color('#FBD1A5');
      setButton1Color('#FBD1A5');
    }
    else if (name1 === "Process 8") {
      setButton8Color('#FFC300');
      setButton7Color('#FBD1A5');
      setButton6Color('#FBD1A5');
      setButton5Color('#FBD1A5');
      setButton4Color('#FBD1A5');
      setButton3Color('#FBD1A5');
      setButton2Color('#FBD1A5');
      setButton1Color('#FBD1A5');
    }
    else {
      setButton1Color("transparent");
      setButton2Color("transparent");
      setButton3Color("transparent");
      setButton4Color("transparent");
      setButton5Color("transparent");
      setButton6Color("transparent");
      setButton7Color("transparent");
      setButton8Color("transparent");
    }
  }, [name1]);
  // ------------- Backend Logic -------------
  // Main Body
  return (
    <>
      {/* First */}
      <div id="Z_Create">
        <div id="Z_Create_Part_2">
          <button onClick={() => navigate('/')}>Move To Page 1</button>
        </div>
      </div>
      {/* Value Fetch */}
      <h5>Value Fetch Were :</h5>
      <h1>{name1}</h1>
      {/* Boxes Portion */}
      <div id="ParentBox">
        {/* - Color Box - */}
        <div id="Box" style={{ backgroundColor: button1Color }}>
          <h5>Box 1</h5>
        </div>
        {/* - Color Box - */}
        <div id="Box" style={{ backgroundColor: button2Color }}>
          <h5>Box 2</h5>
        </div>
        {/* - Color Box - */}
        <div id="Box" style={{ backgroundColor: button3Color }}>
          <h5>Box 3</h5>
        </div>
        {/* - Color Box - */}
        <div id="Box" style={{ backgroundColor: button4Color }}>
          <h5>Box 4</h5>
        </div>
        {/* - Color Box - */}
        <div id="Box" style={{ backgroundColor: button5Color }}>
          <h5>Box 5</h5>
        </div>
        {/* - Color Box - */}
        <div id="Box" style={{ backgroundColor: button6Color }}>
          <h5>Box 6</h5>
        </div>
        {/* - Color Box - */}
        <div id="Box" style={{ backgroundColor: button7Color }}>
          <h5>Box 7</h5>
        </div>
        {/* - Color Box - */}
        <div id="Box" style={{ backgroundColor: button8Color }}>
          <h5>Box 8</h5>
        </div>
      </div>
    </>
  );
}
