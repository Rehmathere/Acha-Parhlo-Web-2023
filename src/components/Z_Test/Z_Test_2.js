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
  const [value_1, setValue_1] = useState("");
  const [value_2, setValue_2] = useState("");
  const [value_3, setValue_3] = useState("");
  const [TimeSlot, setTimeSlot] = useState("");
  const [gender, setGender] = useState("");
  const [Date, setDate] = useState("");
  const [status, setStatus] = useState("Processing");
  // -- Extra Time --
  const [showExtraTime, setShowExtraTime] = useState(false);
  const [showExtraTimeText, setShowExtraTimeText] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const docRef = doc(database1, "3 - Appointment", id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const data = docSnap.data();
        setValue_1(data.value_1 || "");
        setValue_2(data.value_2 || "");
        setValue_3(data.value_3 || "");
        setTimeSlot(data.Date || "");
        setGender(data.gender || "");
        setDate(data.TimeSlot || "");
        setStatus(data.status || "Processing");
        setShowExtraTimeText(data.showExtraTimeText || "No Time Alloted");
      }
    };
    fetchData();
  }, [id]);

  //  -- Extra Time Text Logic --
  const handle_TimeUpdate = async (showExtraTimeText) => {
    const updateData = doc(database1, "3 - Appointment", id);
    await updateDoc(updateData, { showExtraTimeText });
    setShowExtraTimeText(showExtraTimeText);
  }

  // Status Logic
  const handleStatusUpdate = async (status) => {
    const updateData = doc(database1, "3 - Appointment", id);
    await updateDoc(updateData, { status });
    setStatus(status);
  }

  const getStatusColor = () => {
    switch (status) {
      case "Accepted":
        return "green";
      case "Rejected":
        return "red";
      case "Delayed":
        return "blue";
      default:
        return "black";
    }
  };
  // ------------- Backend Part Logic -------------
  // Main Body
  return (
    <>
      <div className='container'>
        <div id="Z_T_C_Box">
          {/* Heading */}
          <h1>Appointment Detail</h1>
          {/* Detail */}
          <h6>1 - Name</h6>
          <h5>{value_1}</h5>
          <h6>2 - Email</h6>
          <h5>{value_2}</h5>
          <h6>3 - Phone Number</h6>
          <h5>{value_3}</h5>
          <h6>4 - Time Slot</h6>
          <h5>{TimeSlot}</h5>
          <h6>5 - Gender</h6>
          <h5>{gender}</h5>
          <h6>6 - Date</h6>
          <h5>{Date}</h5>
          {/* Status with color-coded styling */}
          <h6>Status</h6>
          <h5 style={{ color: getStatusColor() }}>{status}</h5>
          {/* Status Div */}
          <div id="Status_Parent">
            {/* Button 1 */}
            <button id='A_Btn_1' style={{ backgroundColor: "darkgreen" }} onClick={() => handleStatusUpdate('Accepted')}>Accept</button>
            {/* Button 2 */}
            <button id='A_Btn_2' style={{ backgroundColor: "red" }} onClick={() => handleStatusUpdate('Rejected')}>Reject</button>
            {/* Button 3 */}
            <button id='A_Btn_3' style={{ backgroundColor: "black" }} onClick={() => handleStatusUpdate('Delayed')}>Delay</button>
          </div>
          {/* ----- Input Time ----- */}
          <button onClick={() => setShowExtraTime(!showExtraTime)}>Extra Time</button>
          {showExtraTime && (
            <div id="E_Extra_Time_Parent">
              <div id="sub_E_Extra_Time_Parent">
                <h1>Reschedule Time Slot</h1>
                <h5 style={{ color: getStatusColor() }}>{showExtraTimeText}</h5>
                <div id="E_Extra_Time_Parent_Box">
                  <button onClick={() => handle_TimeUpdate('12:00 - 1:30 AM')}>12:00 - 1:30 AM</button>
                  <button onClick={() => handle_TimeUpdate('1:30 - 3:00 AM')}>1:30 - 3:00 AM</button>
                  <button onClick={() => handle_TimeUpdate('3:00 - 4:30 AM')}>3:00 - 4:30 AM</button>
                  <button onClick={() => handle_TimeUpdate('4:30 - 6:00 AM')}>4:30 - 6:00 AM</button>
                </div>
              </div>
            </div>
          )}
          {/* ---------------------- */}
          {/* Back Button */}
          <button id='Btn_C_1' onClick={() => navigate('/')}>Move Back</button>
        </div>
      </div>
    </>
  );
}
