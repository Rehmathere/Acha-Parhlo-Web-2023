import React, { useState, useEffect, useRef } from 'react';
import { db } from './firebase'; // Import only 'db' from firebase

import Z_Test_2 from './Z_Test_2';

function Z_Test() {
    const scroll = useRef();
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        db.collection('messages').orderBy('createdAt').limit(50).onSnapshot((snapshot) => {
            setMessages(snapshot.docs.map((doc) => doc.data()));
        });
    }, []);

    return (
        <div>
            <div className="msgs">
                {messages.map(({ id, text, photoURL, uid }) => (
                    <div key={id} className={`msg received`}>
                        {/* Removed the auth.currentUser.uid condition */}
                        <img src={photoURL} alt="" />
                        <p>{text}</p>
                    </div>
                ))}
            </div>
            <Z_Test_2 scroll={scroll} />
            <div ref={scroll}></div>
        </div>
    );
}

export default Z_Test;
