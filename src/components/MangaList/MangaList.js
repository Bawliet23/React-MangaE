import React from 'react'
import { useNavigate } from 'react-router-dom'
import './mangalist.css'


function MangaList({manga}) {
    const navigate = useNavigate();
const go = ()=>{
navigate("/manga",{state: {
    id:manga._id
}})
}

  return (
    <div onClick={go} className="list1">
    <img src={"http://localhost:3000/images/manga/"+manga.cover} alt={manga.name} className="cv" />
<div className="info1">
    <h2 className="title1"> {
    manga.title}</h2>
    <p className="genres"><span className="gn">Genres : </span>Action, Adventure, Fantasy, Magic, Returner, Shounen</p>
   <ul className="ul_chap">
    <li className="ch">
        <span className="ch1">Chapter 3</span>
        <span className="ch2">July 21, 2022</span>
    </li>
    <li className="ch">
        <span className="ch1">Chapter 2</span>
        <span className="ch2">July 21, 2022</span>
    </li>
    <li className="ch">
        <span className="ch1">Chapter 1</span>
        <span className="ch2">July 21, 2022</span>
    </li>
</ul>
</div>

</div>
  )
}

export default MangaList