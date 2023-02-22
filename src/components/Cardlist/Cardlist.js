import React from 'react'
import { useNavigate } from 'react-router-dom';
import './cardlist.css'
function Cardlist({manga , index}) {
  const navigate = useNavigate();
  const go = ()=>{
  navigate("/manga",{state: {
      id:manga._id
  }})
  }
  return (
    <div onClick={go} className="list">
    <div className="poss1">
        <div className="num">{index}
        </div>
    </div>
    <div className="poss" >
            <img src={"http://localhost:3000/images/manga/"+manga.cover} alt={manga.title} className="cv" />
        <div className="info">
            <h2 className="titleC">{manga.title}</h2>
            <p className="genres"><span className="gn">Genres : </span>Action, Adventure, Fantasy, Magic, Returner, Shounen</p>
        </div>
    </div>
</div>
  )
}

export default Cardlist