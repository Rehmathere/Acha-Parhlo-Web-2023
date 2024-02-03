import React, { useState, useRef, useEffect } from 'react';
import { database1 } from '../Portal/firebase';
import { collection, doc, updateDoc } from 'firebase/firestore';
import { useParams, useNavigate } from 'react-router-dom';
import "../Portal/MyFeatures/PChat/FinalChat.css";

export default function Z_Test_2() {
  // ------------- Backend Logic Part -------------
  // Update Specific Box Data Logic
  const { id, name1, name2, name3, name4, name5, MyImage } = useParams();
  const navigate = useNavigate();
  const [fname, setFname] = useState(name1);
  const [lname, setLname] = useState(name2);
  const [name_1, setName_1] = useState(name3);
  const [name_2, setName_2] = useState(name4);
  const [name_3, setName_3] = useState(name5);
  const [image, setImage] = useState("");
  useEffect(() => {
    // Set the image when the component mounts
    setImage(decodeURIComponent(MyImage));
  }, [MyImage]);
  const handleUpdate = async () => {
    const value = collection(database1, "demo");
    const updateData = doc(database1, "demo", id);
    await updateDoc(updateData, { name1: fname, name2: lname, name3: name_1, name4: name_2, name5: name_3, MyImage: image });
    navigate('/');
  }
  // File Upload
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
  // ------------- Backend Logic Part -------------
  // Main Body
  return (
    <>
      <div className='container'>
        <div id="Z_T_C_Box">
          <h6>1 - Enter University Name</h6>
          <input value={fname} onChange={(e) => setFname(e.target.value)} placeholder=' Enter University Name ' />
          <h6>2 - Enter Basic Overview</h6>
          <input value={lname} onChange={(e) => setLname(e.target.value)} placeholder=' Enter Basic Overview ' />
          <h6>3 - Enter Courses Name</h6>
          <input value={name_1} onChange={(e) => setName_1(e.target.value)} placeholder=' Enter Courses Name ' />
          <h6>4 - Enter Fees</h6>
          <input value={name_2} onChange={(e) => setName_2(e.target.value)} placeholder=' Enter Fees ' />
          <h6>5 - Enter Degree Duration</h6>
          <input value={name_3} onChange={(e) => setName_3(e.target.value)} placeholder=' Enter Degree Duration ' />
          <h6>6 - Enter Logo / Picture</h6>
          <img src={image} alt="Logo/Picture" />
          <input
            type="file"
            onChange={handleFileChange}
            style={{ display: 'none' }}
            ref={fileInputRef}
            id='Img_Upload'
          />
          <button id='Img_Upload' onClick={handleUploadClick}>Upload</button>
          {/* Button */}
          <button id='Btn_C_1' onClick={handleUpdate}>Update Values</button>
        </div>
      </div>
    </>
  );
}
