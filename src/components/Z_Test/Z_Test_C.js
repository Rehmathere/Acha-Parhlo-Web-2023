import React, { useEffect, useState, useRef } from 'react';
import { database1 } from '../Portal/firebase';
import { addDoc, collection, getDocs } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import user from '../Pics/user_P.png';
import "../Portal/MyFeatures/PChat/FinalChat.css";

export default function Z_Test_C() {
    // Navigate
    const navigate = useNavigate();
    // ------------- Backend Logic Part -------------
    // Create Box Data 
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [name_1, setName_1] = useState('');
    const [name_2, setName_2] = useState('');
    const [name_3, setName_3] = useState('');
    const [val, setVal] = useState([]);
    const [image, setImage] = useState(null);
    const value = collection(database1, "demo");
    useEffect(() => {
        const getData = async () => {
            const dbVal = await getDocs(value);
            setVal(dbVal.docs.map(doc => ({ ...doc.data(), id: doc.id })));
        };
        getData();
    }, [value]);
    const handleCreate = async () => {
        await addDoc(value, {
            name1: fname,
            name2: lname,
            name3: name_1,
            name4: name_2,
            name5: name_3,
            MyImage: image // Added MyImage to the Firestore document
        });
        setFname("");
        setLname("");
        setName_1("");
        setName_2("");
        setName_3("");
        setImage(null);
    };
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
                    <h1>Enter Box Details</h1>
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
                    <img src={image ? image : user} alt="Logo/Picture" />
                    <input
                        type="file"
                        onChange={handleFileChange}
                        style={{ display: 'none' }}
                        ref={fileInputRef}
                        id='Img_Upload'
                    />
                    <button id='Img_Upload' onClick={handleUploadClick}>Upload</button>
                    <button id='Btn_C_1' onClick={handleCreate}>Create Box</button>
                    <p id="Btn_C_2" onClick={() => navigate('/')}>Move To Home page</p>
                </div>
            </div>
        </>
    );
};
