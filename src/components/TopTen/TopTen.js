import React ,{useState , useEffect}from 'react'
import Cardlist from '../Cardlist/Cardlist'
import axios from 'axios'
import './topten.css'
function TopTen() {
    const [mangas, setMangas] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        axios.get('http://localhost:3000/manga/?limit=10')
  .then(function (response) {
    // console.clear()
    console.log(response.data)
    
    setMangas(response.data.mangas)
    console.log(mangas);
  })
  .catch(function (error) {
    console.log(error);
  })
      },[]);
    let wk=true
    
    let mt=false
    let all=false

  return (
    <div className="bestfive">
    <div className="datetop">
        <div className={`${wk ? "select": "sel"}`} >Weekly</div>
        <div className={`${mt ? "select": "sel"}`} >Monthly</div>
        <div className={`${all ? "select": "sel"}`}>All</div>
    </div>

    <div className="topfive">
       <TopFIve mangas={mangas} />
          
    </div>
</div>

  )
}
function TopFIve({mangas}){
    return  mangas.map((item,index)  =>
    <Cardlist manga={item} index={index+1} /> 
)
}

export default TopTen