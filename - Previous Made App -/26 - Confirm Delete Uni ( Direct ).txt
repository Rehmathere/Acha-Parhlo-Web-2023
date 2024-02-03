import React, { useState } from 'react';
import add_u from './Pics/del_aa.gif';
import confirm_u from './Pics/del_a.png';
import "./Portal/MyFeatures/PAdd_Uni/PAdd_U.css";

export default function Free() {
    const [showBox2, setShowBox2] = useState(false);
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [showParent, setShowParent] = useState(false);

    const handleAddUniversityClick = () => {
        setShowParent(true);
        setShowConfirmation(true);
        setShowBox2(true); // Set showBox2 to true directly
        setTimeout(() => {
            setShowParent(false);
        }, 2000);
    };

    return (
        <>
            <div>
                <button onClick={handleAddUniversityClick}>Cancel</button>
                {/* ----- Confirm Add University Logic ----- */}
                <div id='PA_U_ConfirmAdd_Parent' style={{ display: showParent ? 'block' : 'none' }}>
                    {/* Basic Logic */}
                    <div id="sub_PA_U_ConfirmAdd_Parent" style={{ display: showConfirmation ? 'block' : 'none' }}>
                        <div id="PA_U_ConfirmAdd_Parent_Box">
                            {/* Box 2 */}
                            <div id="PA_U_ConfirmAdd_2" style={{ display: showBox2 ? 'block' : 'none' }}>
                                <div id="PA_U_ConfirmAdd_img">
                                    <img src={confirm_u} alt="NA" />
                                </div>
                                <h3>Deleted Successfully !</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
