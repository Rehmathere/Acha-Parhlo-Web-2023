import React, { useState, useEffect } from 'react'
import { signOut } from 'firebase/auth'
import { database } from '../Portal/firebase'

export default function PAbout() {
    // ----------------------------------------------------
    // Main Body
    return (
        <div id='PAbout_container'>
            {/* Header Portion */}
            <div id="Header">
                <div id="sub_Header">
                    <div id="Head_1">
                        <p>Acha Parhlo Consultant Portal</p>
                    </div>
                    <div id="Head_2">
                      {/* User Email Address Email  */}
                    </div>
                </div>
            </div>
        </div>
    )
}



