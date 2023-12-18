import React from 'react'
import BlogPage from '../BlogPage'
import BlogUniDetails from '../BlogUniDetails'
// Navigation
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import BlogPage2_H from '../BlogPage2_H'
import BlogPage3_V from '../BlogPage3_V'
import BlogPage4_D from '../BlogPage4_D'
import BlogPage5_E from '../BlogPage5_E'

export default function Temp_Parent() {
    // ---------------------------------------------------------
    // This Is Temp Parent Of Blog Page , We Have To Merge It Into Its Whole Web Parent Page
    // ---------------------------------------------------------
    // Main Body
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    {/* 1 */}
                    <Route path='/' element={<BlogPage />} />
                    {/* 2 */}
                    <Route path='/blogUniDetails/:blogId' element={<BlogUniDetails />} />
                    {/* 3 */}
                    <Route path='/blogPage2_H' element={<BlogPage2_H />} />
                    {/* 4 */}
                    <Route path='/BlogPage3_V' element={<BlogPage3_V />} />
                    {/* 5 */}
                    <Route path='/BlogPage4_D' element={<BlogPage4_D />} />
                    {/* 6 */}
                    <Route path='/BlogPage5_E' element={<BlogPage5_E />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

