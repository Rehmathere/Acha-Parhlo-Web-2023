import React, { useState, useEffect, useRef } from 'react';
import { onSnapshot, collection, query, orderBy, addDoc } from 'firebase/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { auth, database } from './firebase';
import "./FinalChat.css";
import { useNavigate } from 'react-router-dom'
// ---- Firebase ( Old File For Only Logout Logic )
import { database as E_Database } from '../../firebase';
// ------------------------------------------------
import { signOut } from 'firebase/auth'
// Images
import logout from '../../../Pics/logout.png'
import PSidebar from '../PSidebar'
import chat_d_1 from '../../../Pics/chat_d_1.png'
import line from '../../../Pics/line.png'
import chat_d_2 from '../../../Pics/chat_d_2.png'
import E_User from "../../../Pics/E_User.png"

function FinalChat() {
    // Email Address For Logout Dialog Box
    const [E_user] = useAuthState(E_Database);
    // ------------- Backend Part Logic ------------- 
    const [user] = useAuthState(auth);
    const messagesRef = collection(database, '2 - Chat');
    const queryRef = query(messagesRef, orderBy('createdAt', 'desc'));
    const [messages] = useCollectionData(queryRef, { idField: '_id' });
    const [newMessage, setNewMessage] = useState('');
    const messagesEndRef = useRef(null);
    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };
    const getFormattedDate = (timestamp) => {
        const currentDate = new Date();
        const messageDate = timestamp.toDate();
        if (
            currentDate.getDate() === messageDate.getDate() &&
            currentDate.getMonth() === messageDate.getMonth() &&
            currentDate.getFullYear() === messageDate.getFullYear()
        ) {
            return 'Today';
        } else if (
            currentDate.getDate() - messageDate.getDate() === 1 &&
            currentDate.getMonth() === messageDate.getMonth() &&
            currentDate.getFullYear() === messageDate.getFullYear()
        ) {
            return 'Yesterday';
        } else {
            const options = { month: 'short', day: 'numeric', year: 'numeric' };
            return messageDate.toLocaleDateString('en-US', options);
        }
    };
    const formatTimestamp = (timestamp) => {
        const date = timestamp.toDate();
        const options = { hour: '2-digit', minute: '2-digit' };
        return date.toLocaleTimeString('en-US', options);
    };
    const sendMessage = async () => {
        if (newMessage.trim() !== '') {
            await addDoc(messagesRef, {
                createdAt: new Date(),
                text: newMessage,
                user: {
                    _id: user.email,
                    avatar: 'https://cdn.pixabay.com/photo/2016/11/08/15/21/user-1808597_640.png',
                },
            });
            setNewMessage('');
        }
    };
    useEffect(() => {
        const unsubscribe = onSnapshot(queryRef, (querySnapshot) => {
            const updatedMessages = querySnapshot.docs.map((doc) => ({
                _id: doc.id,
                createdAt: doc.data().createdAt.toDate(),
                text: doc.data().text,
                user: doc.data().user,
            }));
            scrollToBottom();
        });
        return unsubscribe;
    }, [queryRef]);
    useEffect(() => {
        scrollToBottom();
    }, []);
    // ------------- Backend Part Logic -------------
    // Logout
    const navigate = useNavigate();
    const handleClick = () => {
        signOut(E_Database).then(val => {
            console.log(val, 'val');
            navigate('/PLogin');
        });
    };
    const [isLogoutBoxVisible, setLogoutBoxVisibility] = useState(false);
    const toggleLogoutBox = () => {
        setLogoutBoxVisibility(!isLogoutBoxVisible);
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
                <div id="Final_Chat_Parent">
                    <div id='Sub_FinalChat_Parent_1'>
                        <div id="Sub_FinalChat_P1_1">
                            <h1>Start A Conversation ...</h1>
                        </div>
                        <div id="Sub_FinalChat_P1_2">
                            <div id="Sub_FinalChat_P1_2_1">
                                <div id="S_FC_P1_2_1_Part_1">
                                    <img src={chat_d_1} alt="NA" />
                                </div>
                                <div id="S_FC_P1_2_1_Part_2">
                                    <img src={line} alt="NA" />
                                </div>
                                <div id="S_FC_P1_2_1_Part_3">
                                    Sender Message
                                </div>
                            </div>
                            <div id="Sub_FinalChat_P1_2_1">
                                <div id="S_FC_P1_2_1_Part_1">
                                    <img src={chat_d_2} alt="NA" />
                                </div>
                                <div id="S_FC_P1_2_1_Part_2">
                                    <img src={line} alt="NA" />
                                </div>
                                <div id="S_FC_P1_2_1_Part_3">
                                    Receiver Message
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id='Sub_FinalChat_Parent_2'>
                        <div style={{ flex: 1, overflowY: 'auto', padding: '10px' }}>
                            {messages &&
                                messages.slice().reverse().map((message, index, array) => (
                                    <div key={message._id}>
                                        {index === 0 ||
                                            getFormattedDate(message.createdAt) !==
                                            getFormattedDate(array[index - 1].createdAt) ? (
                                            <div
                                                style={{
                                                    textAlign: 'center',
                                                    color: '#777',
                                                    fontSize: '0.9em',
                                                    margin: '10px 0',
                                                }}
                                            >
                                                {getFormattedDate(message.createdAt)}
                                            </div>
                                        ) : null}
                                        <div
                                            style={{
                                                textAlign: message.user._id === user.email ? 'right' : 'left',
                                                marginLeft: message.user._id !== user.email ? '10px' : 'auto',
                                                backgroundColor:
                                                    message.user._id === user.email ? '#001400' : 'orange',
                                                color:
                                                    message.user._id === user.email ? 'white' : 'black',
                                                padding: '10px 15px',
                                                margin: '5px',
                                                borderRadius: '10px',
                                                fontFamily: 'inherit',
                                                maxWidth: 'fit-content',
                                                alignSelf: message.user._id === user.email ? 'flex-end' : 'flex-start',
                                                display: 'flex',
                                                flexDirection: 'column',
                                                letterSpacing: '1px',
                                            }}
                                            id="My_Message"
                                        >
                                            {message.user._id !== user.email && (
                                                <div style={{ fontSize: '0.7em', color: 'black', marginBottom: '5px' }}>
                                                    {message.user._id}
                                                </div>
                                            )}
                                            {message.user._id !== user.email && (
                                                <img
                                                    src={message.user.avatar}
                                                    alt="Avatar"
                                                    style={{ width: '30px', height: '30px', borderRadius: '50%', marginRight: '5px' }}
                                                />
                                            )}
                                            <div style={{ paddingTop: '6px' }}>
                                                {message.text}
                                            </div>
                                            <span style={{ fontSize: '0.7em', marginTop: '5px', alignSelf: 'flex-end' }}>
                                                {formatTimestamp(message.createdAt)}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            <div ref={messagesEndRef} />
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', padding: '10px' }}>
                            <input
                                id='FinalChat_Input'
                                type="text"
                                value={newMessage}
                                onChange={(e) => setNewMessage(e.target.value)}
                                placeholder=" Type Your Message Please ..."
                            />
                            <button
                                onClick={sendMessage}
                                id="FinalChat_Input_Btn"
                            >
                                Send
                            </button>
                        </div>
                    </div>
                </div>
                {isLogoutBoxVisible && (
                    <div id="Logout_Box">
                        {/* Above */}
                        <div id="sub_Logout_Box_Fir">
                            <img src={E_User} alt="NA" />
                            <span>{user.email}</span>
                        </div>
                        {/* Below */}
                        <div id="sub_Logout_Box">
                            <div id="Logout_Box_1">
                                You Want To Logout ?
                            </div>
                            <div id="Logout_Box_2">
                                <button onClick={handleClick}>Yes, Logout</button>
                            </div>
                        </div>
                    </div>
                )}
            </PSidebar>
        </div>
    );
}

export default FinalChat;
