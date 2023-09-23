
import React from 'react';
import './Auth/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from './Auth/Signup';
import Login from './Auth/Login';
import AdminDashboard from './Admin/Dashboard';
import Home from './User/Home';
import CategoryHome from './Admin/Categories/CategoryHome';
import Create from './Admin/Categories/CategoryCreate';
import CategoryUpdate from './Admin/Categories/CategoryUpdate';
import ProductHome from './Admin/Products/ProductHome';
import ProductUpdate from './Admin/Products/ProductUpdate';
import ProductCreate from './Admin/Products/ProductCreate';


import { BrowserRouter, Route, Routes  } from 'react-router-dom';
function App() {
  return (
   <BrowserRouter>
   <div className = "App">
    <Routes>
  
      <Route path = "/login" element = {<Login />} />
      <Route path = "/signup" element = { <Signup /> } />
      <Route path = "/home" element = { <Home /> } />
      <Route path = "/" element = { <Login /> } />
      
      
      <Route path = "/adminDashboard" element = { <AdminDashboard /> } />
      <Route path = "/categoryHome" element = { <CategoryHome /> } />
      <Route path='/categoryCreate' element = { <Create /> } />
      <Route path='/categoryUpdate/:id' element = { <CategoryUpdate /> } />
      
      <Route path='productHome' element = { <ProductHome /> } />
      <Route path='productCreate' element = { <ProductCreate/> } />
      <Route path='productUpdate/:id' element = { <ProductUpdate /> } />


    </Routes>
      
   </div>
   </BrowserRouter>

  );
}

export default App;
