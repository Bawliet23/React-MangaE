import React from 'react'
import Search from '../Search/Search.js'
import './navbar.css'

import logo from '../../assets/images/MH.png'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

function Navbar() {
    const navigate = useNavigate();
    const go = (id)=>{
    navigate("/manga",{state: {
        id
    }})
    }
    const random =()=>{
        axios.get("http://localhost:3000/manga/random").then(result => {
            console.clear()
            console.log(result)
            go(result.data[0]._id)
        })
    }

  return (
    <nav className="navbar">
    <img className="logo" src={logo}  alt="logo" />  
    <div className="mid">
        <ul className="ulNav">
            <li  className="items"><Link className='rmA' to="/">Home</Link></li>
    
            <li  className="items">Manga</li>
    
            <li  className="items"><Link className='rmA' to="/bookmarks">Bookmark</Link></li>
            <li onClick={random}  className="items">Random</li>
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