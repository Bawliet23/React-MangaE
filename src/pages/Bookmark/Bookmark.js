import axios from 'axios';
import React, { useState ,useEffect, useRef} from 'react'
import MangaList from '../../components/MangaList/MangaList'
import './bookmark.css'

import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';

function Bookmark() {

    const mangas = useRef([]);
    const [bookList,setBookList] = useState(JSON.parse(localStorage.getItem("bookmark")))
    
    const [isLoading, setIsLoading] = useState(true);
    useEffect( () => {
      setBookList(JSON.parse(localStorage.getItem("bookmark")))
      setIsLoading(false)
   
       
    
    },[])
    


  return (<>{ isLoading ? <LoadingSpinner /> :
    <div className="bigmainB" >
   
    <div className="med">

<div className="mid_top">
<h3 className="ti" >Latest Update</h3>
</div>
<div className="body1">

{ bookList.map((manga)=>  <MangaList  manga={manga}  />)

}
</div>
<div className="flPN">
<span   className="Hbn HbtnD">
    Previous
</span>
<span className="Hbn">
    Next
</span>
</div>
</div>
</div>
}
</>
  )
}

export default Bookmark