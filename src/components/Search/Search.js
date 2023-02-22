import React , {useState , useEffect} from 'react'
import './search.css'
import { BsSearch } from "react-icons/bs";
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
function Search() {

  const [name, setName] = useState('');
  const [search , setSearch ] = useState([])
  const [show , setShow ] = useState(false)
  useEffect(() => {
      axios.get('http://localhost:3000/manga/search/'+name)
.then(function (response) { 
  setSearch(response.data);
})
.catch(function (error) {
  console.log(error);
})
    },[name]);
   


   function handleChange(event) {
    event.preventDefault();
    setShow(true) ;
    setName(event.target.value);
    if(event.target.value.length === 0){
      setSearch([])
    }
  }
  function dispear(){
    setName("")
    
   setShow(false) ;
  }

  const navigate = useNavigate();
  const go = (id)=>{
  navigate("/manga",{state: {
      id
  }})
  }

  return (
        <div  onBlur={dispear} className="bigger">
      <div className="med">
    <div className='bigInput'>
        {/* <div className='divIconS'>
        <BsSearch />
        </div> */}
        <input   className='searchInp' type="text"  value={name} onChange={handleChange} placeholder='Search Manga' />
    </div>
    </div>
    <div    className="affS">
        {show && search.map(manga => 
        <div  onMouseDown={()=>go(manga._id)} className="pos2" >
              <img src={"http://localhost:3000/images/manga/"+manga.cover} alt={manga.name} className="cv" />
            <div className="info">
              <h2 className="titleS">{manga.title}</h2>
              <p className="genresS"><span className="gn">Genres : </span>Action, Adventure, Fantasy, Magic, Returner, Shounen</p>
            </div>
      </div>
        )}
         
    </div>
    </div>
  )
}

export default Search