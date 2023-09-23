import React from 'react'
import Navbar from '../Layout/Navbar';
import './home.css';
import { Link } from "react-router-dom";
import Footer from '../Layout/Footer'
import { useState } from 'react';


function Home() {
  const [colorChange, setColorchange] = useState("");
  const changeNavbarColor = () => {
      if (window.scrollY >= 0) {
          setColorchange(" rgb(0,0,0)");
      }
      else {
          setColorchange("");
      }
  };
  window.addEventListener('scroll', changeNavbarColor);
  // return (
  //     <div className='mpBG'>
  //         <Navbar bgcolor={colorChange} />
  return (
    <div>
    <Navbar bgcolor={colorChange} />
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
