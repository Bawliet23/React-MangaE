import React from 'react'
import './mangalist.css'


function MangaList({manga}) {
  return (
    <div className="list1">
    <img src={manga.cover} alt={manga.name} className="cv" />
<div className="info1">
    <h2 className="title1"> {
    manga.name}</h2>
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