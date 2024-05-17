import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { collection, query, getDocs } from "firebase/firestore";
import { database1 } from "../Portal/firebase"; // Import your Firebase database configuration
// CSS
import '../Portal/MyFeatures/PProfile/PProfile.css'
import '../Portal/MyFeatures/PRecords/PRecords.css'
import "../Portal/MyFeatures/PChat/PChat.css"

export default function Z_Test() {
  const [documents, setDocuments] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDocuments = async () => {
      try {
        const userCollectionRef = collection(database1, "2 - Chat");
        const querySnapshot = await getDocs(userCollectionRef);
        const documentsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setDocuments(documentsData);
      } catch (error) {
        console.error("Error fetching documents:", error);
      }
    };

    fetchDocuments();
  }, []);

  useEffect(() => {
    console.log(documents); // Log the documents array to see its structure and available fields
  }, [documents]);

  return (
    <>
      {documents.map((doc) => (
        <div key={doc.id}>
          <div
            id="PChat_Box_Messages"
            onClick={() => navigate(`/Z_Test_2/${doc.id}`)}
            style={{ cursor: "pointer" }}
          >
            {/* Display the document ID name */}
            <div id="PChat_Box_Messages_Part_2" style={{ color: "white" }}>{doc.id}</div>
          </div>
        </div>
      ))}
    </>
  );
}
