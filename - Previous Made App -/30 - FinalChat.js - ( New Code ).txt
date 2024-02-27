import React, { useState, useEffect, useRef } from 'react';
import { onSnapshot, collection, query, orderBy, addDoc } from 'firebase/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { auth, database } from './firebase';
import "./FinalChat.css";

function FinalChat() {
    const [user] = useAuthState(auth);
    const messagesRef = collection(database, '2 - Chat');
    const queryRef = query(messagesRef, orderBy('createdAt', 'desc'));
    const [messages] = useCollectionData(queryRef, { idField: '_id' });
    const [newMessage, setNewMessage] = useState('');
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
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
                    avatar: 'https://i.pravatar.cc/300',
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

    return (
        <div id="Final_Chat_Parent">
            <div id='Sub_FinalChat_Parent'>
                <div style={{ flex: 1, overflowY: 'auto', padding: '10px' }}>
                    {messages &&
                        messages.map((message) => (
                            <div
                                key={message._id}
                                style={{
                                    textAlign: message.user._id === user.email ? 'right' : 'left',
                                    marginLeft: message.user._id !== user.email ? '10px' : 'auto',
                                    backgroundColor:
                                        message.user._id === user.email ? '#001400' : 'orange',
                                    color:
                                        message.user._id === user.email ? 'white' : 'black',
                                    fontSize: '0.9em',
                                    padding: '8px 15px',
                                    margin: '5px',
                                    borderRadius: '10px',
                                    fontFamily: 'inherit',
                                    maxWidth: 'fit-content',
                                    alignSelf: message.user._id === user.email ? 'flex-end' : 'flex-start',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    letterSpacing: '1px',
                                }}
                            >
                                {message.user._id !== user.email && (
                                    <img
                                        src={message.user.avatar}
                                        alt="Avatar"
                                        style={{ width: '30px', height: '30px', borderRadius: '50%', marginRight: '5px' }}
                                    />
                                )}
                                {message.text}
                                <span style={{ fontSize: '0.7em', marginTop: '5px', alignSelf: 'flex-end' }}>
                                    {formatTimestamp(message.createdAt)}
                                </span>
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
                        style={{
                            backgroundColor: 'blue',
                            padding: '0.55em 1.1em',
                            color: 'white',
                            borderRadius: '5px',
                            border: 'none',
                            cursor: 'pointer',
                            marginLeft: '5px',
                            letterSpacing: '1px',
                        }}
                    >
                        Send
                    </button>
                </div>
            </div>
        </div>
    );
}

export default FinalChat;
