
import React from 'react';
import './App.css';
import Signup from './Auth/Signup';
import Login from './Auth/Login';
import AdminDashboard from './Admin/Dashboard';
import Home from './User/Home';
// import Home from './User/Home';

import { BrowserRouter, Route, Routes  } from 'react-router-dom';
function App() {
  return (
   <BrowserRouter>
   <div className = "App">
    <Routes>
      
      {/* <Route path = "/login" element = {<Login />} /> */}
      <Route path = "/signup" element = { <Signup /> } />
      <Route path = "/adminDashboard" element = { <AdminDashboard /> } />
      <Route path = "/home" element = { <Home /> } />
      <Route path = "/" element = { <Login /> } />
      {/* <Route path = "/home" element k= { <Home /> } /> */}

    </Routes>
      
   </div>
   </BrowserRouter>

  );
}

export default App;
