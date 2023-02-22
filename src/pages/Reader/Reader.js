import React ,{useState ,useEffect} from 'react'
import axios from 'axios'
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import './reader.css'
import { useLocation, useNavigate } from 'react-router-dom';
import { BsArrowLeft ,BsArrowRight } from "react-icons/bs";



function    Reader() {
    const navigate = useNavigate();
    const {state} = useLocation();
    const {id}= state
    const [chapterId , setChapterId]=useState(id)
    const [isLoading, setIsLoading] = useState(true);
    const [manga, setManga] = useState({});
    const [chapter, setChapter] = useState({});
    useEffect(() => {
        console.clear()
        axios.get('http://localhost:3000/chapter/'+chapterId).then(function (response) {
            setChapter(response.data)
    console.log(chapter)
    return response.data
  }).then(res=>{
    console.log(res)
    axios.get('http://localhost:3000/manga/'+res.manga).then(res=>{
        setManga(res.data)
        console.log(res.data)
        setIsLoading(false)
    })
  })
  .catch(function (error) {
    console.log(error);
  })
},[chapterId]);


  const go = (id)=>{
  navigate("/reader",{state: {
      id
  }})
  }
function next(){
    if(manga.chapters[manga.chapters.length-1].number !== chapter.number){
        const chap = manga.chapters.filter(ch=>ch.number===chapter.number+1)[0]
        setChapterId(chap._id)
    }
  
}
function prev(){
    if(manga.chapters[0].number !== chapter.number){
        const chap = manga.chapters.filter(ch=>ch.number===chapter.number-1)[0]
        setChapterId(chap._id)
    }
  
}

  const handleChange = event => {
    setChapterId(event.target.value);
  };

  return (
    <>{ isLoading ? <LoadingSpinner /> :
    <div className="biggerR">
    <div className="contreadR">
        <h1 className="titleR">{manga.title} Chapter {chapter.number}</h1>
        <div className="drR">
            <div className="selectR">
                <select onChange={handleChange} name="format" id="format">
                    <option selected disabled>Select Chapiter</option>
                    {
                        manga.chapters.map( item =>  <option  value={item._id}>{item.number} {item.name}</option> )
                        
                    }
                 </select>
            </div>
            <div className="btnsR">
                <div onClick={prev} className={manga.chapters[0].number === chapter.number ? "btnR btnDR" : "btnR"}>
                    <span className="material-icons">
                        <BsArrowLeft />
                        </span>
                        {/* <span>prev</span> */}
                </div>
                <div onClick={next} className={manga.chapters[manga.chapters.length-1].number === chapter.number ? "btnR btnDR" : "btnR"} >
                        {/* <span>next</span> */}
                        <span className="material-icons">
                            <BsArrowRight />
                            </span>
                </div>
            </div>
        </div>
        <div className="mangachapR">
             {
                chapter.images.map(item =>  <img src={"http://localhost:3000/images/chapters/"+item} alt={manga.title} />)
             }
               
        </div>
        <div className="drR">
            <div className="selectR">
                <select onChange={handleChange} name="format" id="format">
                    <option selected disabled>Select Chapiter</option>
                    {
                        manga.chapters.map( item =>  <option  value={item.id}>{item.number} {item.name}</option> )
                        
                    }
                 </select>
            </div>
            <div className="btnsR">
                <div onClick={prev} className={manga.chapters[0].number === chapter.number ? "btnR btnDR" : "btnR"}>
                    <span className="material-icons">
                    <BsArrowLeft />
                        </span>
                        {/* <span>prev</span> */}
                </div>
                <div  onClick={next} className={manga.chapters[manga.chapters.length-1].number === chapter.number ? "btnR btnDR" : "btnR"}>
                        {/* <span>next</span> */}
                        <span className="material-icons">
                        <BsArrowRight />
                            </span>
                </div>
            </div>
        </div>
    
    </div>
    </div>
 } </>
  )
}

export default Reader