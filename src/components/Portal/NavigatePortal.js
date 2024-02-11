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
import PR_List from './MyFeatures/PRecords/PR_List'
import PAppoint_Detail from './MyFeatures/PAppointments/PAppoint_Detail'
import PAdd_U_add from './MyFeatures/PAdd_Uni/PAdd_U_add'
import PAdd_Uni_Update from './MyFeatures/PAdd_Uni/PAdd_Uni_Update'

export default function NavigatePortal() {
    // Main Body
    return (
        // Navigation Part
        <BrowserRouter>
            <Routes>
                {/* 1 Login Page */}
                <Route path='/' element={<PLogin />} />
                {/*2 Sidebar */}
                <Route path='/PSideBar' element={<PSidebar />} />
                {/*3 Signup Page */}
                <Route path='/PSignUp' element={<PSignUp />} />
                {/* 4 forget Password Page */}
                <Route path='/PForgetPass' element={<PForgetPass />} />
                {/* 5 Dashboard */}
                <Route path='/PAbout' element={<PAbout />} />
                {/* 6 Profile */}
                <Route path='/PProfile' element={<PProfile />} />
                {/* 7 Student Appointment */}
                <Route path='/PAppointments' element={<PAppointments />} />
                {/* 7 Student Appointment Detail */}
                <Route path='/PAppointDetail/:id' element={<PAppoint_Detail />} />
                {/* 8 Application Tracking */}
                <Route path='/PTracking' element={<PTracking />} />
                {/* 8 - Application Status */}
                <Route path='/PTStatus' element={<PTStatus />} />
                {/* 9  Student Records */}
                <Route path='/PRecords' element={<PRecords />} />
                {/* 9 - Student Records List */}
                <Route path='/PR_List' element={<PR_List />} />
                {/* 10 Chat */}
                <Route path='/PChat' element={<PChat />} />
                {/* 11 Add Uni */}
                <Route path='/PAdd_Uni' element={<PAdd_Uni />} />
                {/* 12 Add Uni Form Filling */}
                <Route path='/PAdd_U_add' element={<PAdd_U_add />} />
                {/* 13 Update File */}
                <Route path='/PAdd_Uni_Update/:id' element={<PAdd_Uni_Update />} />
            </Routes>
        </BrowserRouter>
    )
}

