import React, { useState, useEffect } from 'react';
import { getDocs, collection } from 'firebase/firestore';
import { database1, storage } from '../Portal/firebase';
import { getDownloadURL, ref } from 'firebase/storage';
// Navigate
import { useNavigate } from "react-router-dom"
import "../Portal/MyFeatures/PChat/FinalChat.css";

export default function Z_Test_C() {
  // Navigate
  const navigate = useNavigate();
  // ------------- Backend Part Logic -------------  
  const [imageBase64List, setImageBase64List] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const collectionRef = collection(database1, '4 - Student Records');
        const querySnapshot = await getDocs(collectionRef);

        if (!querySnapshot.empty) {
          const data = querySnapshot.docs[0].data();
          const imagePaths = [
            data.D3_1_Image_Transcript,
            data.D3_2_Image_Degree,
          ];

          const imageBase64Array = await Promise.all(
            imagePaths.map(async (imagePath) => {
              const storageRef = ref(storage, imagePath);
              const imageUrl = await getDownloadURL(storageRef);

              // Log the imageUrl to check if it's valid
              console.log('imageUrl:', imageUrl);

              const response = await fetch(imageUrl);
              const blob = await response.blob();

              return new Promise((resolve) => {
                const reader = new FileReader();
                reader.onloadend = () => {
                  const base64data = reader.result;
                  resolve(base64data);
                };
                reader.readAsDataURL(blob);
              });
            })
          );

          setImageBase64List(imageBase64Array);
        } else {
          console.error('No documents found in the collection.');
          // Handle the case where there are no documents in the collection
        }
      } catch (error) {
        console.error('Error fetching data from Firestore:', error);
        // Handle the error appropriately, e.g., show an error message to the user
      }
    };

    fetchData();
  }, []);

  return (
    <div className='container'>
      <div id='Z_T_C_Box'>
        <h1>Images From Storage , Firebase</h1>
        {/* Display Images */}
        {imageBase64List.length > 0 && (
          <>
            <h6>Images from Firestore, Firebase</h6>
            {imageBase64List.map((base64, index) => (
              <div key={index}>
                <img src={base64} alt={`Firestore Image ${index + 1}`} />
              </div>
            ))}
          </>
        )}
      {/* Back Button */}
      <button id='Btn_C_1' onClick={() => navigate('/')}>Move Back</button>
      </div>
    </div>
  );
}
