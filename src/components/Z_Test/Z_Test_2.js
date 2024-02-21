import React, { useState } from 'react';
import { db } from './firebase'; // Import only 'db' from firebase
import { FieldValue } from 'firebase/firestore'; // Import FieldValue from firestore

function Z_Test_2({ scroll }) {
    const [msg, setMsg] = useState('');

    async function sendMessage(e) {
        e.preventDefault();

        // No authentication conditions here
        const photoURL = ''; // Replace with any default value or logic if needed

        await db.collection('messages').add({
            text: msg,
            photoURL,
            createdAt: FieldValue.serverTimestamp(), // Use FieldValue directly
        });

        setMsg('');
        scroll.current.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <div>
            <form onSubmit={sendMessage}>
                <div className="sendMsg">
                    {/* Input Message */}
                    <input
                        style={{ width: '78%', fontSize: '15px', fontWeight: '550', marginLeft: '5px', marginBottom: '-3px' }}
                        placeholder='Message...'
                        type="text"
                        value={msg}
                        onChange={(e) => setMsg(e.target.value)}
                    />
                    {/* Button */}
                    <button
                        style={{ width: '18%', fontSize: '15px', fontWeight: '550', margin: '4px 5% -13px 5%', maxWidth: '200px' }}
                        type="submit"
                    >
                        Send
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Z_Test_2;
