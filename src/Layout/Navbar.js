import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



function Navbar() {
  return (
    <div className='root-nav'>
      
      <nav className='navbar'>
        
      <ul className='nav-items'>
        <li>
        <h1 className='heading'>Sports<span>_Blend</span></h1>
        </li>
        <li>
          <Link className='nav-link' to="/home">Home</Link>
        </li>
        <li>
          <Link className='nav-link' to="/about">About</Link>
        </li>
        <li>
          <Link className='nav-link' to="/product">Products</Link>
        </li>
        <li>
          <Link className='nav-link' to="/contact">Contact</Link>
        </li>
        <li className='search-bar'>
        <input type="text" placeholder="Search..." />
        <button className='btn'>
          <FontAwesomeIcon icon={faSearch} />
          </button>
        </li>
        <li>
              <Link className='nav-icons'> <FontAwesomeIcon icon={faShoppingCart} /></Link>
        </li>
        <li>
              <Link className='nav-icons'> <FontAwesomeIcon icon={faUser} /></Link>
        </li>
      </ul>
    </nav>
    </div>
  )
}

export default Navbar
