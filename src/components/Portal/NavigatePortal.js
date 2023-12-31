import React from 'react'
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom'
import PLogin from './PLogin'
import PSignUp from './PSignUp'
import PForgetPass from './PForgetPass'
import PSidebar from './MyFeatures/PSidebar'
import PAbout from './MyFeatures/PAbout/PAbout'
import PAppointments from './MyFeatures/PAppointments/PAppointments'
import PTracking from './MyFeatures/PTracking/PTracking'
import PTStatus from './MyFeatures/PTracking/PTStatus'
import PRecords from './MyFeatures/PRecords/PRecords'
import PChat from './MyFeatures/PChat/PChat'
import PAdd_Uni from './MyFeatures/PAdd_Uni/PAdd_Uni'
import PProfile from './MyFeatures/PProfile/PProfile'

export default function NavigatePortal() {
    // Main Body
    return (
        // Navigation Part
        <BrowserRouter>
            <Routes>
                {/* 1 */}
                <Route path='/' element={<PLogin />} />
                {/*2 */}
                <Route path='/PSideBar' element={<PSidebar />} />
                {/*3 */}
                <Route path='/PSignUp' element={<PSignUp />} />
                {/* 4 */}
                <Route path='/PForgetPass' element={<PForgetPass />} />
                {/* 5 */}
                <Route path='/PAbout' element={<PAbout />} />
                {/* 6 */}
                <Route path='/PProfile' element={<PProfile />} />
                {/* 7 */}
                <Route path='/PAppointments' element={<PAppointments />} />
                {/* 8 */}
                <Route path='/PTracking' element={<PTracking />} />
                {/* 8 - Sub File */}
                <Route path='/PTStatus' element={<PTStatus />} />
                {/* 9 */}
                <Route path='/PRecords' element={<PRecords />} />
                {/* 10 */}
                <Route path='/PChat' element={<PChat />} />
                {/* 11 */}
                <Route path='/PAdd_Uni' element={<PAdd_Uni />} />
            </Routes>
        </BrowserRouter>
    )
}

