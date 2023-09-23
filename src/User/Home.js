import React from 'react'
import Navbar from '../Layout/Navbar';
import './home.css';
import { Link } from "react-router-dom";
import Footer from '../Layout/Footer';
// import SearchPopup from './SearchPopup';


function Home() {
  return (
    <div>
    <Navbar/>
   <div className="background-container">
    
   <div className='home-root'>
   <h5>Custom SportsWear</h5>
   <h1>Pic one</h1>
   <h1>Sports<span>Wear</span></h1>
   <button type="submit"><Link className='linkButton' to="/login">Logout</Link></button>
    </div>
   </div>
   
   <Footer/>
    </div>
  )
}

export default Home
