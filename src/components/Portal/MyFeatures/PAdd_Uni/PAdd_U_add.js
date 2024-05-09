import React, { useEffect, useState, useRef } from "react";
import PSidebar from "../PSidebar";
import { useNavigate } from "react-router-dom";
import "../PProfile/PProfile.css";
import "../PRecords/PRecords.css";
import "../PAdd_Uni/PAdd_U.css";
import "../PTracking/PT.css";
import logout from "../../../Pics/logout.png";
import P_user from "../../../Pics/fileupload.png";
import add_u from "../../../Pics/add_sure_1.png";
import confirm_u from "../../../Pics/add_confirm.png";
import { database } from "../../firebase";
import { signOut } from "firebase/auth";
import "../PAppointments/PAppoint.css";
import { database1 } from "../../firebase";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import E_User from "../../../Pics/E_User.png";
import E_Alert from "../../../Pics/E_Alert.png";

export default function PAdd_U_add() {
  // ----- Any Field , Image Missing Modal -----
  const [E_showBox2, E_setShowBox2] = useState(false);
  const [E_showConfirmation, E_setShowConfirmation] = useState(false);
  const [E_showParent, E_setShowParent] = useState(false);
  const E_handleAddUniversityClick = () => {
    E_setShowParent(true);
    E_setShowConfirmation(true);
    E_setShowBox2(true); // Set showBox2 to true directly
    setTimeout(() => {
      E_setShowParent(false);
    }, 2000);
  };
  // ----- Any Field , Image Missing Modal -----
  const [user] = useAuthState(database);
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [name_1, setName_1] = useState("");
  const [name_2, setName_2] = useState("");
  const [name_3, setName_3] = useState("");
  const [val, setVal] = useState([]);
  const [image, setImage] = useState(null);
  const value = collection(database1, "1 - Add University");
  useEffect(() => {
    const getData = async () => {
      const dbVal = await getDocs(value);
      setVal(dbVal.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getData();
  }, [value]);
  const handleCreate = async () => {
    if (!fname || !lname || !name_1 || !name_2 || !name_3 || !image) {
      console.log("Any Field Or Image Is Missing");
      // ----- Field Missing Modal -----
      E_setShowParent(true);
      E_setShowConfirmation(true);
      E_setShowBox2(true); // Set showBox2 to true directly
      setTimeout(() => {
        E_setShowParent(false);
      }, 2500);
      // ----- Field Missing Modal -----
      return;
    }
    // Add Univeristy Modal
    setShowParent(true);
    setShowConfirmation(true);
    // Add Univeristy Modal
    console.log("Everything Is Filled & Image Is Uploaded");
    await addDoc(value, {
      name1: fname,
      name2: lname,
      name3: name_1,
      name4: name_2,
      name5: name_3,
      MyImage: image,
    });
    setFname("");
    setLname("");
    setName_1("");
    setName_2("");
    setName_3("");
    setImage(null);
  };
  const fileInputRef = useRef(null);
  const handleUploadClick = () => {
    fileInputRef.current.click();
  };
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };
  const [showBox2, setShowBox2] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showParent, setShowParent] = useState(false);
  const handleButtonClick = () => {
    setShowBox2(!showBox2);
  };
  const handleAddUniversityClick = () => {
    setShowParent(true);
    setShowConfirmation(true);
  };
  const handleCancelClick = () => {
    setShowParent(false);
  };
  const navigate = useNavigate();
  const [isLogoutBoxVisible, setLogoutBoxVisibility] = useState(false);
  const toggleLogoutBox = () => {
    setLogoutBoxVisibility(!isLogoutBoxVisible);
  };
  const handleClick = () => {
    signOut(database).then((val) => {
      console.log(val, "val");
      navigate("/PLogin");
    });
  };
  // Main Body
  return (
    <div>
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
      <PSidebar>
        <>
          <div id="PTS_Pre">
            <div id="sub_PTS_Pre">
              <div id="PTS_Pre_Box">
                <h2>
                  Fill New University Information <i class="fa fa-edit"></i>
                </h2>
              </div>
            </div>
          </div>
          <div id="P_U_AU_1">
            <div id="sub_P_U_AU_1">
              <div id="P_U_AU_1_box">
                <div id="P_U_AU_1_box_P1">
                  <h5>University Details</h5>
                  <div id="P_U_AU_1_box_P1_Input">
                    <h6>Name</h6>
                    <input
                      type="text"
                      placeholder="Enter University Name "
                      value={fname}
                      onChange={(e) => setFname(e.target.value)}
                    />
                  </div>
                  <div id="P_U_AU_1_box_P1_Input">
                    <h6>Basic Overview</h6>
                    <input
                      type="text"
                      placeholder="Enter University Basic Overview "
                      value={lname}
                      onChange={(e) => setLname(e.target.value)}
                    />
                  </div>
                  <div id="P_U_AU_1_box_P1_Input">
                    <h6>Course Offered</h6>
                    <input
                      type="text"
                      placeholder="Enter Course Name Offered "
                      value={name_1}
                      onChange={(e) => setName_1(e.target.value)}
                    />
                  </div>
                  <div id="P_U_AU_1_box_P1_Input">
                    <h6>Semester Fee</h6>
                    <input
                      type="text"
                      placeholder="Enter Semester Fee "
                      value={name_2}
                      onChange={(e) => setName_2(e.target.value)}
                    />
                  </div>
                  <div id="P_U_AU_1_box_P1_Input">
                    <h6>Degree Duration</h6>
                    <input
                      type="text"
                      placeholder="Enter Degree Duration "
                      value={name_3}
                      onChange={(e) => setName_3(e.target.value)}
                    />
                  </div>
                </div>
                <div id="P_U_AU_1_box_P2">
                  <h5>Logo / Picture</h5>
                  <div id="P_U_AU_1_box_P2_PicBox">
                    <p>
                      please ensure compliance by uploading a legal picture for
                      the university logo. In the event that no picture is
                      available, kindly leave this portion blank to adhere to
                      applicable regulations.
                    </p>
                    <div id="P_U_AU_1_box_P2_sub_PicBox">
                      <div id="P_U_AU_1_box_P2_sub_PicBox_s">
                        <div id="P_U_AU_1_box_P2_sub_PicBox_s_s">
                          <img
                            src={image ? image : P_user}
                            alt="Logo/Picture"
                          />
                        </div>
                      </div>
                      <div id="P_U_AU_1_box_P2_sub_PicBox_s_1">
                        <input
                          type="file"
                          onChange={handleFileChange}
                          style={{ display: "none" }}
                          ref={fileInputRef}
                        />
                        <button onClick={handleUploadClick}>Upload</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="P_U_AU_1_button_parent">
                <button onClick={handleCreate}>Add University</button>
              </div>
            </div>
          </div>
          <div
            id="PA_U_ConfirmAdd_Parent"
            style={{ display: showParent ? "block" : "none" }}
          >
            <div
              id="sub_PA_U_ConfirmAdd_Parent"
              style={{ display: showConfirmation ? "block" : "none" }}
            >
              <div id="PA_U_ConfirmAdd_Parent_Box">
                <div
                  id="PA_U_ConfirmAdd_1"
                  style={{ display: showBox2 ? "none" : "block" }}
                >
                  <div id="PA_U_ConfirmAdd_img">
                    <img src={add_u} alt="NA" />
                  </div>
                  <h3>Are you Sure want to Add ?</h3>
                  <p>
                    Upon selecting the Confirm Add button, a new university will
                    be added to the system. Conversely, choosing the Cancel
                    button will decline the process.
                  </p>
                  <button id="PA_U_ConfirmAdd_1_A" onClick={handleButtonClick}>
                    Yes, Confirm Add
                  </button>
                  <button id="PA_U_ConfirmAdd_1_B" onClick={handleCancelClick}>
                    Cancel
                  </button>
                </div>
                <div
                  id="PA_U_ConfirmAdd_2"
                  style={{ display: showBox2 ? "block" : "none" }}
                >
                  <div id="PA_U_ConfirmAdd_img">
                    <img src={confirm_u} alt="NA" />
                  </div>
                  <h3>Added Successfully!</h3>
                  <button
                    id="PA_U_ConfirmAdd_1_A"
                    onClick={() => navigate("/PAdd_Uni")}
                  >
                    Move To Home Page
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* ------ Any Field , Image Missing Modal ------ */}
          <div
            id="PA_U_ConfirmAdd_Parent"
            style={{ display: E_showParent ? "block" : "none" }}
          >
            {/* Basic Logic */}
            <div
              id="sub_PA_U_ConfirmAdd_Parent"
              style={{ display: E_showConfirmation ? "block" : "none" }}
            >
              <div id="PA_U_ConfirmAdd_Parent_Box">
                {/* Box 2 */}
                <div
                  id="PA_U_ConfirmAdd_2"
                  style={{ display: E_showBox2 ? "block" : "none" }}
                >
                  <div id="PA_U_ConfirmAdd_img">
                    <img src={E_Alert} alt="NA" />
                  </div>
                  <h3>Error Adding University !</h3>
                </div>
              </div>
            </div>
          </div>
          {/* ------ Any Field , Image Missing Modal ------ */}
          {isLogoutBoxVisible && (
            <div id="Logout_Box">
              <div id="sub_Logout_Box_Fir">
                <img src={E_User} alt="NA" />
                <span>{user.email}</span>
              </div>
              <div id="sub_Logout_Box">
                <div id="Logout_Box_1">You Want To Logout ?</div>
                <div id="Logout_Box_2">
                  <button onClick={handleClick}>Yes, Logout</button>
                </div>
              </div>
            </div>
          )}
        </>
      </PSidebar>
    </div>
  );
}
