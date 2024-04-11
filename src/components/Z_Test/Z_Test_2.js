import React, { useState, useEffect } from 'react';
import '../Portal/MyFeatures/PProfile/PProfile.css';
import "../Portal/MyFeatures/PRecords/PRecords.css";
import "../Portal/MyFeatures/PTracking/PT.css";
import "../Portal/MyFeatures/PAppointments/PAppoint.css";
import appoint_img from '../Pics/appoint_2.png';
import { useParams } from "react-router-dom";
import { database1 } from '../Portal/firebase';
import { doc, getDoc, updateDoc } from 'firebase/firestore';

export default function Z_Test_2() {
  const { id } = useParams();
  const [value_1, setValue_1] = useState("");
  const [value_2, setValue_2] = useState("");
  const [value_3, setValue_3] = useState("");
  const [TimeSlot, setTimeSlot] = useState("");
  const [gender, setGender] = useState("");
  const [Date, setDate] = useState("");
  const [status, setStatus] = useState("Processing");
  const [showExtraTime, setShowExtraTime] = useState(false);
  const [showExtraTimeText, setShowExtraTimeText] = useState("");
  const [pastDatesData, setPastDatesData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const docRef = doc(database1, "3 - Appointment", id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const data = docSnap.data();
        setValue_1(data.value_1 || "");
        setValue_2(data.value_2 || "");
        setValue_3(data.value_3 || "");
        setTimeSlot(data.TimeSlot || "");
        setGender(data.gender || "");
        setDate(data.Date || "");
        setStatus(data.status || "Processing");
        setShowExtraTimeText(data.showExtraTimeText || "");
        setShowExtraTime(data.showExtraTime || false); // Set showExtraTime based on Firestore data
      }
    };
    fetchData();
  }, [id]);

  useEffect(() => {
    const fetchPastDatesData = async () => {
      // Assuming 'past_dates' is the collection where past dates data is stored
      const pastDatesRef = doc(database1, "3 - Appointment", id);
      const pastDatesSnap = await getDoc(pastDatesRef);
      if (pastDatesSnap.exists()) {
        setPastDatesData(pastDatesSnap.data());
      }
    };
    fetchPastDatesData();
  }, [id]);

  const handleStatusUpdate = async (status) => {
    const updateData = doc(database1, "3 - Appointment", id);
    await updateDoc(updateData, { status });
    setStatus(status);
  }

  const handle_TimeUpdate = async (showExtraTimeText) => {
    const updateData = doc(database1, "3 - Appointment", id);
    await updateDoc(updateData, { showExtraTimeText });
    setShowExtraTimeText(showExtraTimeText);
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

  const isPastDateAndText = (date, text) => {
    const appointmentDateTime = new Date(date + ' ' + text.split(' ')[0]);

    return (Date.now() > appointmentDateTime);
  };

  return (
    <div>
      <div id="PAD_first">
        <div id="sub_PAD_first">
          <div id="PAD_first_Box">
            <div id="PAD_first_B_1">
              <div id="PAD_first_B_1_Box">
                <img src={appoint_img} alt="NA" />
              </div>
              <div id="PAD_first_B_1_Box_2">
                <p> Status :  <span style={{ color: getStatusColor() }}>{status}</span> </p>
              </div>
            </div>
            <div id="PAD_first_B_2">
              <div id="PAD_first_B_2_P1">
                <div id="PAD_first_B_2_P_InputBox">
                  <div id="PAD_first_B_2_P_InputBox_P1">
                    Name
                  </div>
                  <div id="PAD_first_B_2_P_InputBox_P2">
                    {value_1}
                  </div>
                </div>
                <div id="PAD_first_B_2_P_InputBox">
                  <div id="PAD_first_B_2_P_InputBox_P1">
                    Gender
                  </div>
                  <div id="PAD_first_B_2_P_InputBox_P2">
                    {gender}
                  </div>
                </div>
              </div>
              <div id="PAD_first_B_2_P2">
                <div id="PAD_first_B_2_P_InputBox">
                  <div id="PAD_first_B_2_P_InputBox_P1">
                    Date
                  </div>
                  <div id="PAD_first_B_2_P_InputBox_P2">
                    {Date}
                  </div>
                </div>
                <div id="PAD_first_B_2_P_InputBox">
                  <div id="PAD_first_B_2_P_InputBox_P1">
                    Time Slot
                  </div>
                  <div id="PAD_first_B_2_P_InputBox_P2">
                    {TimeSlot}
                  </div>
                </div>
              </div>
              <div id="PAD_first_B_2_P2">
                <div id="PAD_first_B_2_P_InputBox">
                  <div id="PAD_first_B_2_P_InputBox_P1">
                    Email
                  </div>
                  <div id="PAD_first_B_2_P_InputBox_P2">
                    {value_2}
                  </div>
                </div>
                <div id="PAD_first_B_2_P_InputBox">
                  <div id="PAD_first_B_2_P_InputBox_P1">
                    Contact No
                  </div>
                  <div id="PAD_first_B_2_P_InputBox_P2">
                    {value_3}
                  </div>
                </div>
              </div>
            </div>
            <div id="PAD_first_B_3">
              <div id="PAD_first_B_3_Box">
                <button id="PAD_first_B_3_Box_Btn1" onClick={() => { handleStatusUpdate('Accepted'); handle_TimeUpdate(''); }}>Accept</button>
              </div>
              <div id="PAD_first_B_3_Box">
                <button id="PAD_first_B_3_Box_Btn2" onClick={() => { handleStatusUpdate('Rejected'); handle_TimeUpdate(''); }}>Reject</button>
              </div>
              <div id="PAD_first_B_3_Box">
                <button id="PAD_first_B_3_Box_Btn3" onClick={() => { handleStatusUpdate('Delayed'); setShowExtraTime(!showExtraTime); }}>Delay</button>
              </div>
            </div>
          </div>
        </div>
        {showExtraTime && (
          <div id="S_Extra_Time_Parent">
            <div id="sub_S_Extra_Time_Parent">
              <h3>Reschedule Delayed Time Slot <i className="fa fa-history"></i></h3>
              <p> New Time Slot :  <span>{showExtraTimeText}</span> </p>
              <div id="S_Extra_Time_Parent_Box">
                {showExtraTimeText && (
                  <>
                    <button
                      onClick={() => {
                        handle_TimeUpdate('2:00 - 3:00 PM');
                      }}
                      style={{
                        backgroundColor: pastDatesData[{Date}] && showExtraTime && isPastDateAndText({Date}, '2:00 - 3:00 PM') ? 'red' : 'orange'
                      }}
                    >
                      2:00 - 3:00 PM
                    </button>
                    <button
                      onClick={() => {
                        handle_TimeUpdate('3:00 - 4:00 PM');
                      }}
                      style={{
                        backgroundColor: pastDatesData[{Date}] && showExtraTime && isPastDateAndText({Date}, '3:00 - 4:00 PM') ? 'red' : 'orange'
                      }}
                    >
                      3:00 - 4:00 PM
                    </button>
                    <button
                      onClick={() => {
                        handle_TimeUpdate('4:00 - 5:00 PM');
                      }}
                      style={{
                        backgroundColor: pastDatesData[Date] && showExtraTime && isPastDateAndText(Date, '4:00 - 5:00 PM') ? 'red' : 'orange'
                      }}
                    >
                      4:00 - 5:00 PM
                    </button>
                    <button
                      onClick={() => {
                        handle_TimeUpdate('5:00 - 6:00 PM');
                      }}
                      style={{
                        backgroundColor: pastDatesData[Date] && showExtraTime && isPastDateAndText(Date, '5:00 - 6:00 PM') ? 'red' : 'orange'
                      }}
                    >
                      5:00 - 6:00 PM
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

