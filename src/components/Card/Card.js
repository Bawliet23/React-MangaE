import React from 'react'
import { useNavigate } from 'react-router-dom';
import './card.css'
function Card(props) {
    const navigate = useNavigate();
const go = ()=>{
navigate("/manga",{state: {
    id:props.manga._id
}})
}

  return (
    <div onClick={go} className="card">
    <div className="post">
        <img className="cover" src={"http://localhost:3000/images/manga/"+props.manga.cover} alt={props.manga.title} />
    </div>
    <div className="info">
        <div className="titre" >
            <span className="ti" >
               {props.manga.title}
            </span>
        </div>
        <div className="cn">
            <span className="titi" >Last Chapiter : </span>
            <span className="chapiter2" >{props.manga.chapters.length}</span>
        </div>
    </div>
  

</div>     
  )
}

export default Card