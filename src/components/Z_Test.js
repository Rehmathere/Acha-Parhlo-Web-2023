// ChangePassword.js
import React, { useState } from 'react';
import { database } from './Portal/firebase'
import 'firebase/auth';

export default function Z_Test() {
  const [newPassword, setNewPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChangePassword = async () => {
    try {
      const user = database.auth().currentUser;

      if (user) {
        await user.updatePassword(newPassword);
        setErrorMessage('');
      } else {
        setErrorMessage('User not found. Please log in again.');
      }
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <div>
      <h2>Change Password</h2>
      <div>
        <label>New Password:</label>
        <input
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
      </div>
      <button onClick={handleChangePassword}>Change Password</button>

      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
    </div>
  );
};

