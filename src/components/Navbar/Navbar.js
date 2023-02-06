import React from 'react'
import Search from '../Search/Search.js'
import './navbar.css'
import logo from '../../assets/images/MH.png'
function Navbar() {
  return (
    <nav className="navbar">
    <img className="logo" src={logo}  alt="logo" />  
    <div className="mid">
        <ul className="ulNav">
            <li  className="items">Home</li>
    
            <li  className="items">Manga</li>
    
            <li  className="items">BookMarks</li>
            <li  className="items">Random</li>
        </ul>
    </div>
    <Search />
    
    
    <div className="register">
        <div className="right" >
            <button className="btn" >Sign Up</button>
        </div> 
        <div className="right" >
            <button className="btn" >Sign In</button>
        </div> 
    </div>
    </nav>
  )
}

export default Navbar