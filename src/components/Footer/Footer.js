import React from 'react'
import './footer.css'
import logo from '../../assets/images/MH.png'
function Footer() {
  return (
    <footer className="footer">
    <div className="top" >
        <div className="contop">
        <p className="gt5">Privacy Policy</p>    
        <p className="gt5">Digital Millennium Copyright Act</p>
        <p className="gt5">Terms of Service</p>
    </div>
    </div>
    <div className="bottom" >
        <img className="logo" src={logo}  alt="logo" />  
        <div className="contact">
            <span className="txt" >Any business-related queries or advertising, please contact us at<b> EmsiG5@gmail.com</b></span>
        </div>
    </div>
</footer>
  )
}

export default Footer