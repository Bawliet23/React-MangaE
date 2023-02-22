import React, { useState,useEffect } from 'react'
import Topten from '../../components/TopTen/TopTen'
import { BsBookmark ,BsFillBookmarkCheckFill} from "react-icons/bs";
import axios from 'axios'
import './mangaDetails.css'
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import { ManageAccounts } from '@mui/icons-material';
function MangaDetails() {
    const {state} = useLocation();
    const {id}= state
    const [isLoading, setIsLoading] = useState(true);
    const [bookmarked, setBookmarked] = useState(false);
    const [manga, setManga] = useState({});
    let bookList = [];
    useEffect(() => {
        axios.get('http://localhost:3000/manga/'+id).then(function (response) {

    setIsLoading(false)
    setManga(response.data)
    console.log(manga)
    
  })
  .catch(function (error) {
    console.log(error);
  })
      },[id]);
 
   useEffect(()=>{
    bookmark();
   })

  const navigate = useNavigate();
  const go = (id)=>{
  navigate("/reader",{state: {
      id
  }})
  }

 const bookmark = ()=>{
    bookList=JSON.parse(localStorage.getItem("bookmark"))
    if(bookList==null)
    bookList=[]
    var result=  bookList.find(man=>man._id===manga._id)
    if(result===undefined)
    {
        setBookmarked(false)
    }else{
        setBookmarked(true)
    }
 }
 const addBookMark =()=>{
    bookList=JSON.parse(localStorage.getItem("bookmark"))
    if(bookList==null)
    bookList=[]
    if(!bookmarked){
        setBookmarked(true)
        bookList.push(manga);

    }else{
       bookList = bookList.filter(man=>man._id!==manga._id)
       setBookmarked(false)
       
    }
    localStorage.setItem("bookmark",JSON.stringify(bookList))

 }


  
  return (<>{ isLoading ? <LoadingSpinner /> : <div className="main1" >
    <div className="info">
<div className="manga-details-main">
  <div className="manga-details">
    <div className="left-big-info">
        <div className="cover-container">
        <img className="cover" src={"http://localhost:3000/images/manga/"+manga.cover} alt={manga.title} />
    </div>
    <div onClick={addBookMark} className="bookmark">
        <span className={bookmarked ? 'btnD selected' : 'btnD'}>
           {bookmarked ?  <BsFillBookmarkCheckFill /> : <BsBookmark /> }bookmark</span>
    </div>
    <div className="viewsD">
        <span className="v1" >Views :</span>
        <span className="v2" >{manga.views}</span>
    </div>
    <div className="viewsD">
        <span className="v1" >Status :</span>
        <span className="v2" >Ongoing</span>
    </div>
    </div>
    <div className="right-big-info">
        <h1 className="titleD" >{manga.title}</h1>
        <div className="info">
            <span className="ti">Alternative Titles</span>
            <span className="ob">Return of the Blossoming Blade</span>
        </div>
        <div className="info">
            <span className="ti">Synopsis {manga.title}</span>
            <span className="ob">{manga.description}</span>
        </div>
        <div className="info2">
            <div className="info">
                <span className="ti">Released</span>
                <span className="ob">mangahero.com</span>
            </div>
            <div className="info">
                <span className="ti">Author</span>
                <span className="ob">Bhajy</span>
            </div>
        </div>
        <div className="info2">
            <div className="info">
                <span className="ti">Released</span>
                <span className="ob">mangahero.com</span>
            </div>
            <div className="info">
                <span className="ti">Posted By</span>
                <span className="ob">Bawliet</span>
            </div>
        </div>
        <div className="info2">
            <div className="info">
                <span className="ti">Posted On</span>
                <span className="ob">{ manga.addedAt }</span>
            </div>
            <div className="info">
                <span className="ti">Posted By</span>
                <span className="ob">Bawliet</span>
            </div>
        </div>
        <div className="info">
            <span className="ti">Genres</span>
            <div className='info_sub'>
            <span className="gr">Adventure</span>
            <span className="gr">Comedy</span>
            <span className="gr">Fantasy</span>
            <span className="gr">Martial Arts</span>
            <span className="gr">Shounen</span>
            </div>
        </div>
    </div>
  </div>

</div>
<div   className="chapters">
   <div className="upper" >
    <h2>Chapter {manga.name}</h2>
   </div>
   <div className="flchap">
    <div onClick={()=>go(manga.chapters[0]._id)}   className="con">
        <span className="con1">First Chapter</span>
        <span className="con2">Chapter {manga.chapters[0].number}</span>
    </div>
    <div onClick={()=>go(manga.chapters[manga.chapters.length-1]._id)}   className="con">
        <span className="con1">Lastest Chapter</span>
        <span className="con2">Chapter {manga.chapters[manga.chapters.length-1].number}</span>
    </div>
   </div>
  <div className="search1">
    <input  className='searchInp' type="text" placeholder='Find Chapter by number' />
  </div>
  <div className="chap">
   <ul className="chap-list"  >
   {
    manga.chapters.map(chapter=>( <li onClick={()=>go(chapter._id)}  >
    <span className="chapternum">Chapter {chapter.number} </span>
    <span className="chapterdate">{chapter.addedAt }</span>
</li>
))

   }
             
    </ul>
  </div>
</div>
</div>
<div className="tp">
    <Topten  />
</div>
</div> }
</>
  )
}

export default MangaDetails;