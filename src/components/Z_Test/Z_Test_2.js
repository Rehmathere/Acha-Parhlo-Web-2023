import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import { onSnapshot, collection, query, addDoc } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, database } from "../Portal/MyFeatures/PChat/firebase";
import { useParams } from "react-router-dom";
import "../Portal/MyFeatures/PChat/FinalChat.css";

function Z_Test_2() {
  const [E_user] = useAuthState(database);
  const [user] = useAuthState(auth);
  const [messages, setMessages] = useState([]);
  const { id } = useParams();

  useLayoutEffect(() => {
    const chatCollectionRef = collection(database, `2 - Chat/${id}/Chatting`);
    const unsubscribe = onSnapshot(
      query(chatCollectionRef),
      (querySnapshot) => {
        const sortedMessages = querySnapshot.docs
          .map((doc) => ({
            _id: doc.id,
            createdAt: doc.data().createdAt.toDate(),
            text: doc.data().text,
            user: doc.data().user,
          }))
          .sort((a, b) => b.createdAt - a.createdAt);
        setMessages(sortedMessages);
      }
    );
    return unsubscribe;
  }, [id]);

  const sendMessage = async () => {
    if (newMessage.trim() !== "") {
      const message = {
        _id: Date.now().toString(),
        createdAt: new Date(),
        text: newMessage,
        user: {
          _id: user.email,
          avatar:
            "https://cdn.pixabay.com/photo/2016/11/08/15/21/user-1808597_640.png",
        },
      };
      setMessages((previousMessages) => [...previousMessages, message]);
      const chatCollectionRef = collection(database, `2 - Chat/${id}/Chatting`);
      await addDoc(chatCollectionRef, message);
      setNewMessage("");
    }
  };

  const formatTimestamp = (timestamp) => {
    const date = timestamp.toDate();
    const options = { hour: "2-digit", minute: "2-digit" };
    return date.toLocaleTimeString("en-US", options);
  };

  const [newMessage, setNewMessage] = useState("");
  const messagesEndRef = useRef(null);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div>
      <div id="Final_Chat_Parent">
        <div id="Sub_FinalChat_Parent_2">
          <div style={{ flex: 1, overflowY: "auto", padding: "10px" }}>
            {messages &&
              messages
                .slice()
                .reverse()
                .map((message, index, array) => (
                  <div key={message._id}>
                    <div
                      style={{
                        textAlign:
                          user.email === message.user._id ? "right" : "left",
                        marginLeft:
                          user.email !== message.user._id ? "10px" : "auto",
                        backgroundColor:
                          user.email === message.user._id
                            ? "#001400"
                            : "orange",
                        color:
                          user.email === message.user._id ? "white" : "black",
                        padding: "10px 15px",
                        margin: "5px",
                        borderRadius: "10px",
                        fontFamily: "inherit",
                        maxWidth: "fit-content",
                        alignSelf:
                          user.email === message.user._id
                            ? "flex-end"
                            : "flex-start",
                        display: "flex",
                        flexDirection: "column",
                        letterSpacing: "1px",
                      }}
                      id="My_Message"
                    >
                      {user.email !== message.user._id && (
                        <div
                          style={{
                            fontSize: "0.7em",
                            color: "black",
                            marginBottom: "5px",
                          }}
                        >
                          {message.user._id}
                        </div>
                      )}
                      {user.email !== message.user._id && (
                        <img
                          src={message.user.avatar}
                          alt="Avatar"
                          style={{
                            width: "30px",
                            height: "30px",
                            borderRadius: "50%",
                            marginRight: "5px",
                          }}
                        />
                      )}
                      <div style={{ paddingTop: "6px" }}>{message.text}</div>
                      <span
                        style={{
                          fontSize: "0.7em",
                          marginTop: "5px",
                          alignSelf: "flex-end",
                        }}
                      >
                        {formatTimestamp(message.createdAt)}
                      </span>
                    </div>
                  </div>
                ))}
            <div ref={messagesEndRef} />
          </div>
          <div
            style={{ display: "flex", alignItems: "center", padding: "10px" }}
          >
            <input
              id="FinalChat_Input"
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder=" Type Your Message Please ..."
            />
            <button onClick={sendMessage} id="FinalChat_Input_Btn">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Z_Test_2;
