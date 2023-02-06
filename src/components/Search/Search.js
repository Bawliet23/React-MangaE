import React from 'react'
import './search.css'
import SearchIcon from '@mui/icons-material/Search';
function Search() {

   let res = [];

  return (
        <div  className="bigger">
      <div className="med">
    <div className='bigInput'>
        <div className='divIcon'>
        {/* <span  ><SearchIcon /></span> */}
        </div>
        <input   className='searchInp' type="text" placeholder='Search Manga' />
    </div>
    </div>
    <div   className="aff">
        {res.map(manga => 
        <div className="pos2" >
              <img src={manga.cover} alt={manga.name} className="cv" />
            <div className="info">
              <h2 className="title">{manga.name}</h2>
              <p className="genres"><span className="gn">Genres : </span>Action, Adventure, Fantasy, Magic, Returner, Shounen</p>
            </div>
      </div>
        )}
         
    </div>
    </div>
  )
}

export default Search