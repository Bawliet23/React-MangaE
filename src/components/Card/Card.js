import React from 'react'
import './card.css'
function Card(props) {
  return (
    <div  className="card">
    <div className="post">
        <img className="cover" src={props.manga.cover} alt={props.manga.name} />
    </div>
    <div className="info">
        <div className="titre" >
            <span className="ti" >
               {props.manga.name}
            </span>
        </div>
        <div className="cn">
            <span className="titi" >Last Chapiter : </span>
            <span className="chapiter2" >{props.manga.numberOfChapiters}</span>
        </div>
    </div>
  

</div>     
  )
}

export default Card