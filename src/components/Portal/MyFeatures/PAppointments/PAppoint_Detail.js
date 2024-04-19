import React, { useState, useEffect } from "react";
import PSidebar from "../PSidebar";
// CSS
import "../PProfile/PProfile.css";
import "../PRecords/PRecords.css";
import "../PTracking/PT.css";
// Images
import logout from "../../../Pics/logout.png";
import appoint_img from "../../../Pics/appoint_2.png";
import confirm_u from "../../../Pics/appoint_sent.gif";
// useNavigate
import { useNavigate, useParams } from "react-router-dom";
// Logout Logic
import { useAuthState } from "react-firebase-hooks/auth";
import E_User from "../../../Pics/E_User.png";
import { database } from "../../firebase";
import { signOut } from "firebase/auth";
import { database1 } from "../../firebase";
import {
  doc,
  getDoc,
  updateDoc,
  collection,
  getDocs,
} from "firebase/firestore";

export default function PAppoint_Detail() {
  // Email Address For Logout Dialog Box
  const [user] = useAuthState(database);
  // useNavigate
  const navigate = useNavigate();
  const { id } = useParams();
  // ------------- Backend Part Logic -------------
  const [value_1, setValue_1] = useState("");
  const [value_2, setValue_2] = useState("");
  const [value_3, setValue_3] = useState("");
  const [TimeSlot, setTimeSlot] = useState("");
  const [gender, setGender] = useState("");
  const [appointmentDate, setAppointmentDate] = useState(""); // Changed from Date to appointmentDate
  const [status, setStatus] = useState("Processing");
  const [showExtraTime, setShowExtraTime] = useState(false);
  const [showExtraTimeText, setShowExtraTimeText] = useState("");
  const [existingAppointments, setExistingAppointments] = useState([]);
  const [extraTimeSlots, setExtraTimeSlots] = useState([]);
  // Function
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
        setAppointmentDate(data.Date || ""); // Changed from Date to appointmentDate
        setStatus(data.status || "Processing");
        setShowExtraTimeText(data.showExtraTimeText || "No Time Alloted");
        // Use the appointmentDate from Firebase data to set existing appointments
        if (data.Date) {
          const appointments = [{ Date: data.Date }];
          setExistingAppointments(appointments);
        }
      }
    };
    fetchData();
  }, [id]);
  // Date useState
  useEffect(() => {
    const fetchAppointments = async () => {
      const appointmentsCollection = collection(database1, "3 - Appointment");
      const snapshot = await getDocs(appointmentsCollection);
      const appointments = [];
      const extraSlots = [];
      snapshot.forEach((doc) => {
        const data = doc.data();
        if (data.Date) {
          appointments.push({ Date: data.Date });
          if (data.showExtraTimeText) {
            extraSlots.push({
              Date: data.Date,
              showExtraTimeText: data.showExtraTimeText,
            });
          }
        }
      });
      setExistingAppointments(appointments);
      setExtraTimeSlots(extraSlots);
    };
    fetchAppointments();
  }, []);
  // Status & Date Logic
  const handleStatusUpdate = async (status) => {
    const updateData = doc(database1, "3 - Appointment", id);
    await updateDoc(updateData, { status });
    setStatus(status);
  };
  const handleDateUpdate = async (selectedDate) => {
    const updateData = doc(database1, "3 - Appointment", id);
    await updateDoc(updateData, { Date: selectedDate });
    setAppointmentDate(selectedDate);
  };
  // Define the status color based on its value
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
  // --- Date Backend Logic ---
  const isDateBooked = (date) => {
    const hasExtraTimeSlot = extraTimeSlots.some((slot) => slot.Date === date);
    return (
      existingAppointments.some((appointment) => appointment.Date === date) ||
      hasExtraTimeSlot
    );
  };
  const isSlotDisabled = (date, timeSlot) => {
    return extraTimeSlots.some(
      (slot) => slot.Date === date && slot.showExtraTimeText === timeSlot
    );
  };
  const getDays = (month) => {
    let days = 0;
    if (
      month === 1 ||
      month === 3 ||
      month === 5 ||
      month === 7 ||
      month === 8 ||
      month === 10 ||
      month === 12
    ) {
      days = 31;
    } else if (month === 4 || month === 6 || month === 9 || month === 11) {
      days = 30;
    } else if (month === 2) {
      days = 28; // Assuming it's not a leap year for simplicity
    }
    return days;
  };
  //  -- Extra Time Text Logic --
  const handle_TimeUpdate = async (showExtraTimeText) => {
    const updateData = doc(database1, "3 - Appointment", id);
    await updateDoc(updateData, { showExtraTimeText });
    setShowExtraTimeText(showExtraTimeText);
  };
  // ------------- Backend Part Logic -------------
  const [showBox2, setShowBox2] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showParent, setShowParent] = useState(false);
  const handleAddUniversityClick = () => {
    setShowParent(true);
    setShowConfirmation(true);
    setShowBox2(true); // Set showBox2 to true directly
    setTimeout(() => {
      setShowParent(false);
      // Naviagte
      navigate("/PAppointments");
    }, 2000);
  };
  // ------ Logout Logic ------
  // Logout Function
  const handleClick = () => {
    signOut(database).then((val) => {
      console.log(val, "val");
      navigate("/PLogin");
    });
  };
  // Use state to manage the visibility of the Logout Box
  const [isLogoutBoxVisible, setLogoutBoxVisibility] = useState(false);
  // Function to toggle the visibility of the Logout Box
  const toggleLogoutBox = () => {
    setLogoutBoxVisibility(!isLogoutBoxVisible);
  };
  // ----------------------------------------------------
  // Main Body
  return (
    <div>
      {/* Header Portion */}
      <div id="Header">
        <div id="sub_Header">
          <div id="Head_1">
            <p>Acha Parhlo Consultant Portal</p>
          </div>
          <div id="Head_2">
            <button id="sub_Head_2" onClick={toggleLogoutBox}>
              <img src={logout} alt="NA" />
            </button>
          </div>
        </div>
      </div>
      {/* ------------- */}
      <PSidebar>
        {/* PR_List */}
        <div id="PTS_Pre">
          <div id="sub_PTS_Pre">
            <div id="PTS_Pre_Box">
              <h2>
                Appointment Detail <i class="fa fa-id-card-o"></i>
              </h2>
            </div>
            {/* Start */}
          </div>
        </div>
        {/* PAD_first */}
        <div id="PAD_first">
          <div id="sub_PAD_first">
            {/* Box */}
            <div id="PAD_first_Box">
              {/* 1 */}
              <div id="PAD_first_B_1">
                <div id="PAD_first_B_1_Box">
                  <img src={appoint_img} alt="NA" />
                </div>
                <div id="PAD_first_B_1_Box_2">
                  <p>
                    {" "}
                    Status :{" "}
                    <span style={{ color: getStatusColor() }}>
                      {status}
                    </span>{" "}
                  </p>
                </div>
              </div>
              {/* 2 */}
              <div id="PAD_first_B_2">
                {/* Part 1 */}
                <div id="PAD_first_B_2_P1">
                  {/* Info 1 */}
                  <div id="PAD_first_B_2_P_InputBox">
                    <div id="PAD_first_B_2_P_InputBox_P1">Name</div>
                    <div id="PAD_first_B_2_P_InputBox_P2">{value_1}</div>
                  </div>
                  {/* Info 2 */}
                  <div id="PAD_first_B_2_P_InputBox">
                    <div id="PAD_first_B_2_P_InputBox_P1">Gender</div>
                    <div id="PAD_first_B_2_P_InputBox_P2">{gender}</div>
                  </div>
                </div>
                {/* Part 2 */}
                <div id="PAD_first_B_2_P2">
                  {/* Info 1 */}
                  <div id="PAD_first_B_2_P_InputBox">
                    <div id="PAD_first_B_2_P_InputBox_P1">Date</div>
                    <div id="PAD_first_B_2_P_InputBox_P2">
                      {appointmentDate}
                    </div>
                  </div>
                  {/* Info 2 */}
                  <div id="PAD_first_B_2_P_InputBox">
                    <div id="PAD_first_B_2_P_InputBox_P1">Time Slot</div>
                    <div id="PAD_first_B_2_P_InputBox_P2">{TimeSlot}</div>
                  </div>
                </div>
                {/* Part 3 */}
                <div id="PAD_first_B_2_P2">
                  {/* Info 1 */}
                  <div id="PAD_first_B_2_P_InputBox">
                    <div id="PAD_first_B_2_P_InputBox_P1">Email</div>
                    <div id="PAD_first_B_2_P_InputBox_P2">{value_2}</div>
                  </div>
                  {/* Info 2 */}
                  <div id="PAD_first_B_2_P_InputBox">
                    <div id="PAD_first_B_2_P_InputBox_P1">Contact No</div>
                    <div id="PAD_first_B_2_P_InputBox_P2">{value_3}</div>
                  </div>
                </div>
              </div>
              {/* 3 */}
              <div id="PAD_first_B_3">
                {/* Button */}
                <div id="PAD_first_B_3_Box">
                  <button
                    id="PAD_first_B_3_Box_Btn1"
                    onClick={() => {
                      handleStatusUpdate("Accepted");
                      handleAddUniversityClick();
                      handle_TimeUpdate("");
                    }}
                  >
                    Accept
                  </button>
                </div>
                {/* Button */}
                <div id="PAD_first_B_3_Box">
                  <button
                    id="PAD_first_B_3_Box_Btn2"
                    onClick={() => {
                      handleStatusUpdate("Rejected");
                      handleAddUniversityClick();
                      handle_TimeUpdate("");
                    }}
                  >
                    Reject
                  </button>
                </div>
                {/* Button */}
                <div id="PAD_first_B_3_Box">
                  <button
                    id="PAD_first_B_3_Box_Btn3"
                    onClick={() => {
                      handleStatusUpdate("Delayed");
                      setShowExtraTime(!showExtraTime);
                    }}
                  >
                    Delay
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {showExtraTime && (
          <div id="S_Extra_Time_Parent">
            {/* ----- Reschedule Date Slot ----- */}
            <div id="sub_S_Extra_Time_Parent">
              <h3>
                Reschedule Date <i class="fa fa-calendar"></i>
              </h3>
              <p>
                {" "}
                Date : <span>{appointmentDate}</span>{" "}
              </p>
              <div id="S_Extra_Date_Parent_Box">
                {Array.from(
                  { length: getDays(new Date().getMonth() + 1) },
                  (_, i) => i + 1
                ).map((day, index) => (
                  <div className="Date_Sub_Child_Box" key={day}>
                    <button
                      style={{
                        borderRadius: 5,
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor:
                          appointmentDate === day
                            ? "#001400"
                            : isDateBooked(day)
                            ? "orange"
                            : "#EAEAEA",
                        borderColor:
                          appointmentDate === day
                            ? "#001400"
                            : isDateBooked(day)
                            ? "orange"
                            : "#D2D2D2",
                        borderWidth: appointmentDate === day ? 0.1 : 0.1,
                      }}
                      onClick={() => {
                        if (day < new Date().getDate()) {
                          // Do nothing for past dates
                        } else {
                          handleDateUpdate(day); // Update Firestore with selected date
                        }
                      }}
                    >
                      <span
                        style={{
                          color:
                            appointmentDate === day
                              ? "white"
                              : isDateBooked(day)
                              ? "black"
                              : "black",
                        }}
                      >
                        {day}
                      </span>
                    </button>
                  </div>
                ))}
              </div>
            </div>
            {/* ----- Reschedule Time Slot ----- */}
            <div id="sub_S_Extra_Time_Parent">
              <h3>
                Reschedule Time Slot <i class="fa fa-history"></i>
              </h3>
              <p>
                {" "}
                New Time Slot : <span>{showExtraTimeText}</span>{" "}
              </p>
              <div id="S_Extra_Time_Parent_Box">
                {/* Button */}
                <button
                  disabled={isSlotDisabled(appointmentDate, "2:00 - 3:00 PM")}
                  style={{
                    backgroundColor: extraTimeSlots.some(
                      (slot) =>
                        slot.Date === appointmentDate &&
                        slot.showExtraTimeText === "2:00 - 3:00 PM"
                    )
                      ? "#001400"
                      : "",
                    color: extraTimeSlots.some(
                      (slot) =>
                        slot.Date === appointmentDate &&
                        slot.showExtraTimeText === "2:00 - 3:00 PM"
                    )
                      ? "white"
                      : "black",
                  }}
                  onClick={() => {
                    handle_TimeUpdate("2:00 - 3:00 PM");
                    handleAddUniversityClick();
                  }}
                >
                  2:00 - 3:00 PM
                </button>
                {/* Button */}
                <button
                  disabled={isSlotDisabled(appointmentDate, "3:00 - 4:00 PM")}
                  style={{
                    backgroundColor: extraTimeSlots.some(
                      (slot) =>
                        slot.Date === appointmentDate &&
                        slot.showExtraTimeText === "3:00 - 4:00 PM"
                    )
                      ? "#001400"
                      : "",
                    color: extraTimeSlots.some(
                      (slot) =>
                        slot.Date === appointmentDate &&
                        slot.showExtraTimeText === "3:00 - 4:00 PM"
                    )
                      ? "white"
                      : "black",
                  }}
                  onClick={() => {
                    handle_TimeUpdate("3:00 - 4:00 PM");
                    handleAddUniversityClick();
                  }}
                >
                  3:00 - 4:00 PM
                </button>
                {/* Button */}
                <button
                  disabled={isSlotDisabled(appointmentDate, "4:00 - 5:00 PM")}
                  style={{
                    backgroundColor: extraTimeSlots.some(
                      (slot) =>
                        slot.Date === appointmentDate &&
                        slot.showExtraTimeText === "4:00 - 5:00 PM"
                    )
                      ? "#001400"
                      : "",
                    color: extraTimeSlots.some(
                      (slot) =>
                        slot.Date === appointmentDate &&
                        slot.showExtraTimeText === "4:00 - 5:00 PM"
                    )
                      ? "white"
                      : "black",
                  }}
                  onClick={() => {
                    handle_TimeUpdate("4:00 - 5:00 PM");
                    handleAddUniversityClick();
                  }}
                >
                  4:00 - 5:00 PM
                </button>
                {/* Button */}
                <button
                  disabled={isSlotDisabled(appointmentDate, "5:00 - 6:00 PM")}
                  style={{
                    backgroundColor: extraTimeSlots.some(
                      (slot) =>
                        slot.Date === appointmentDate &&
                        slot.showExtraTimeText === "5:00 - 6:00 PM"
                    )
                      ? "#001400"
                      : "",
                    color: extraTimeSlots.some(
                      (slot) =>
                        slot.Date === appointmentDate &&
                        slot.showExtraTimeText === "5:00 - 6:00 PM"
                    )
                      ? "white"
                      : "black",
                  }}
                  onClick={() => {
                    handle_TimeUpdate("5:00 - 6:00 PM");
                    handleAddUniversityClick();
                  }}
                >
                  5:00 - 6:00 PM
                </button>
              </div>
            </div>
          </div>
        )}
        {/* ----- Confirm Add University Logic ----- */}
        <div
          id="PA_U_ConfirmAdd_Parent"
          style={{ display: showParent ? "block" : "none" }}
        >
          {/* Basic Logic */}
          <div
            id="sub_PA_U_ConfirmAdd_Parent"
            style={{ display: showConfirmation ? "block" : "none" }}
          >
            <div id="PA_U_ConfirmAdd_Parent_Box">
              {/* Box 2 */}
              <div
                id="PA_U_ConfirmAdd_2"
                style={{ display: showBox2 ? "block" : "none" }}
              >
                <div id="PA_U_ConfirmAdd_img">
                  <img src={confirm_u} alt="NA" />
                </div>
                <h3>Status Sent !</h3>
              </div>
            </div>
          </div>
        </div>
        {/* Start */}
        {/* ---Logout Logic --- */}
        {isLogoutBoxVisible && (
          <div id="Logout_Box">
            {/* Above */}
            <div id="sub_Logout_Box_Fir">
              <img src={E_User} alt="NA" />
              <span>{user.email}</span>
            </div>
            {/* Below */}
            <div id="sub_Logout_Box">
              <div id="Logout_Box_1">You Want To Logout ?</div>
              <div id="Logout_Box_2">
                <button onClick={handleClick}>Yes, Logout</button>
              </div>
            </div>
          </div>
        )}
        {/* ------------------- */}
      </PSidebar>
    </div>
  );
}
