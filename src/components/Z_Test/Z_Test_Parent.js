import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Z_Test from './Z_Test';
import Z_Test_2 from './Z_Test_2';

export default function Z_Test_Parent() {
    // Main Body
    return (
        <Router>
            <Routes>
                {/* 1 Home Page */}
                <Route path='/' element={<Z_Test />} />
                {/* 2 Update Page */}
                <Route path='/Z_Test_2' element={<Z_Test_2 />} />
            </Routes>
        </Router>
    );
}