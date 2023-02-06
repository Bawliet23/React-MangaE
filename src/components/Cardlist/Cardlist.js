import React from 'react'
import './cardlist.css'
function Cardlist({manga , index}) {
  return (
    <div className="list">
    <div className="poss1">
        <div className="num">{index}
        </div>
    </div>
    <div className="poss" >
            <img src={manga.cover} alt={manga.name} className="cv" />
        <div className="info">
            <h2 className="title">{manga.name}</h2>
            <p className="genres"><span className="gn">Genres : </span>Action, Adventure, Fantasy, Magic, Returner, Shounen</p>
        </div>
    </div>
</div>
  )
}

export default Cardlist