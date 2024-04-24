import React, { useState, useEffect } from "react";
import { doc, getDoc, updateDoc, collection, getDocs } from "firebase/firestore";
import { database1 } from "../Portal/firebase";
import { useNavigate, useParams } from "react-router-dom";

function Z_Test_2() {
  // Navigate
  const navigate = useNavigate();
  const { id } = useParams();

  // Backend Part Logic
  // Firestore Logic
  const [value_1, setValue_1] = useState("");
  const [value_2, setValue_2] = useState("");
  const [value_3, setValue_3] = useState("");
  const [TimeSlot, setTimeSlot] = useState("");
  const [gender, setGender] = useState("");
  const [appointmentDate, setAppointmentDate] = useState("");
  const [status, setStatus] = useState("Processing");
  const [showExtraTime, setShowExtraTime] = useState(false);
  const [showExtraTimeText, setShowExtraTimeText] = useState("");
  const [existingAppointments, setExistingAppointments] = useState([]);
  const [extraTimeSlots, setExtraTimeSlots] = useState([]);

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
        setAppointmentDate(data.Date || "");
        setStatus(data.status || "Processing");
        setShowExtraTimeText(data.showExtraTimeText || "No Time Allotted");
        // Use the appointmentDate from Firebase data to set existing appointments
        if (data.Date) {
          const appointments = [{ Date: data.Date }];
          setExistingAppointments(appointments);
        }
      }
    };
    fetchData();
  }, [id]);

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
            extraSlots.push({ Date: data.Date, showExtraTimeText: data.showExtraTimeText });
          }
        }
      });
      setExistingAppointments(appointments);
      setExtraTimeSlots(extraSlots);
    };
    fetchAppointments();
  }, []);

  const handleTimeUpdate = async (showExtraTimeText) => {
    const updateData = doc(database1, "3 - Appointment", id);
    await updateDoc(updateData, { showExtraTimeText });
    setShowExtraTimeText(showExtraTimeText);
  };

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

  const isDateBooked = (date) => {
    const hasExtraTimeSlot = extraTimeSlots.some(slot => slot.Date === date);
    return existingAppointments.some((appointment) => appointment.Date === date) || hasExtraTimeSlot;
  };

  const getSlotColor = (date, timeSlot) => {
    if (date === appointmentDate && timeSlot === showExtraTimeText) {
      return "red";
    } else if (extraTimeSlots.some(slot => slot.Date === date && slot.showExtraTimeText === timeSlot)) {
      return "blue";
    } else {
      return "orange";
    }
  };

  const isSlotDisabled = (date, timeSlot) => {
    return extraTimeSlots.some(slot => slot.Date === date && slot.showExtraTimeText === timeSlot);
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

  // Main Body
  return (
    <>
      <div className="container">
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
          <h5>{appointmentDate}</h5>
          {/* Status with color-coded styling */}
          <h6>Status</h6>
          <h5 style={{ color: getStatusColor() }}>{status}</h5>
          {/* Status Div */}
          <div id="Status_Parent">
            {/* Button 1 */}
            <button
              id="A_Btn_1"
              style={{ backgroundColor: "darkgreen" }}
              onClick={() => handleStatusUpdate("Accepted")}
            >
              Accept
            </button>
            {/* Button 2 */}
            <button
              id="A_Btn_2"
              style={{ backgroundColor: "red" }}
              onClick={() => handleStatusUpdate("Rejected")}
            >
              Reject
            </button>
            {/* Button 3 */}
            <button
              id="A_Btn_3"
              style={{ backgroundColor: "black" }}
              onClick={() => handleStatusUpdate("Delayed")}
            >
              Delay
            </button>
          </div>
          {/* ----- Input Time ----- */}
          <button onClick={() => setShowExtraTime(!showExtraTime)}>
            Extra Time
          </button>
          {/* --- Delayed Time Schedule --- */}
          {showExtraTime && (
            <div id="E_Extra_Time_Parent">
              <div id="sub_E_Extra_Time_Parent">
                <h1>Reschedule Time Slot</h1>
                <h5 style={{ color: getStatusColor() }}>{showExtraTimeText}</h5>
                <div id="E_Extra_Time_Parent_Box">
                  <button
                    disabled={isSlotDisabled(appointmentDate, "2:00 - 3:00 PM")}
                    style={{ backgroundColor: getSlotColor(appointmentDate, "2:00 - 3:00 PM") }}
                    onClick={() => handleTimeUpdate("2:00 - 3:00 PM")}
                  >
                    2:00 - 3:00 PM
                  </button>
                  <button
                    disabled={isSlotDisabled(appointmentDate, "3:00 - 4:00 PM")}
                    style={{ backgroundColor: getSlotColor(appointmentDate, "3:00 - 4:00 PM") }}
                    onClick={() => handleTimeUpdate("3:00 - 4:00 PM")}
                  >
                    3:00 - 4:00 PM
                  </button>
                  <button
                    disabled={isSlotDisabled(appointmentDate, "4:00 - 5:00 PM")}
                    style={{ backgroundColor: getSlotColor(appointmentDate, "4:00 - 5:00 PM") }}
                    onClick={() => handleTimeUpdate("4:00 - 5:00 PM")}
                  >
                    4:00 - 5:00 PM
                  </button>
                  <button
                    disabled={isSlotDisabled(appointmentDate, "5:00 - 6:00 PM")}
                    style={{ backgroundColor: getSlotColor(appointmentDate, "5:00 - 6:00 PM") }}
                    onClick={() => handleTimeUpdate("5:00 - 6:00 PM")}
                  >
                    5:00 - 6:00 PM
                  </button>
                </div>
                {/* Extra Date */}
                <div id="Date_Parent_Box">
                  {/* Flatlist For Day */}
                  <div id="Date_Sub_Parent_Box">
                    {Array.from({ length: getDays(new Date().getMonth() + 1) }, (_, i) => i + 1).map((day, index) => (
                      <div className="Date_Sub_Child_Box" key={day}>
                        <button
                          style={{
                            borderRadius: 5,
                            justifyContent: "center",
                            alignItems: "center",
                            backgroundColor:
                              appointmentDate === day
                                ? "orangered"
                                : isDateBooked(day)
                                ? "green"
                                : "white",
                            borderColor:
                              appointmentDate === day
                                ? "orangered"
                                : isDateBooked(day)
                                ? "green"
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
                              ? "white"
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
              </div>
            </div>
          )}
          {/* --- Delayed Time Schedule --- */}
          {/* Back Button */}
          <button id="Btn_C_1" onClick={() => navigate("/")}>
            Move Back
          </button>
        </div>
      </div>
    </>
  );
}

export default Z_Test_2;
