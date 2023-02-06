import React from 'react'
import './banner.css'
import ImageB from '../../assets/images/banner2.jpg'
function Banner() {
    
  return (
    <div className="banner">
    <div className="small" >
    <div className="bannerImg">
        <img className="imgBanner" src={ImageB} alt="banner" /> 
    </div>
    <div className="bannercontent">
        <div className="left" >
            <h1 className="titleB">Martial God Asura</h1>
        </div>
        <div className="right" >
            <button className="btn" >Read Me</button>
        </div>
    </div>
</div>
</div>

  )
}

export default Banner