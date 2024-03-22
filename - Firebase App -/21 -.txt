import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ProtectedRoute from './ProtectedRoute';

//import { Getcontext } from './component/contextApi';

import Home from './Home';
import About from './About';
import Analysis from './Analysis';
import Header from "./component/Header";
import Login from './Login';
import Signup from './Signup';
import Logout from './Logout';
// import PatientRecord from './component/PatientRecord';
import PatientRecord from './component/PatientRecordNew';
import PatientDetails from './component/singlepage';
// import ServicesHomeThree from './component/ServicesHomeThree';
import HeaderHomeEight from './component/HeaderHomeEight';
import { useAuth } from './AuthContext';
import ResetPassword from './passwordreset';
// import { MessageProvider,useMessage } from './ContextApi/MessageContext';


const App = () => {
  const {userName}=useAuth();
  // const { message } = useMessage();
  // const userName = currentUser ? currentUser.displayName : 'Guest';
  return (
    
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<ProtectedRoute><Home name={userName}/></ProtectedRoute>} />
          <Route path="/about" element={<About/>} />
          <Route path="/analysis" element={<Analysis/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/logout" element={<Logout/>}/>
          <Route path="/reset-password" element={<ResetPassword/>}/>
          <Route 
            path="/patientRecord" 
            element={
              <ProtectedRoute>
                <PatientRecord />
              </ProtectedRoute>
            } 
          />
          
          <Route 
            path="/patient/:id" 
            element={
              
              <ProtectedRoute>
                <PatientDetails/>
              </ProtectedRoute>
              
            } 
          />
          {/* Apply ProtectedRoute to any other routes needing protection */}
        </Routes>
      </BrowserRouter>
   
  );
};

export default App;