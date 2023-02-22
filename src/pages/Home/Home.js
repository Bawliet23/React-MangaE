import React, { useState ,useEffect ,useRef } from 'react'
import Banner from '../../components/Banner/Banner'
import Card from '../../components/Card/Card'
import MangaList from '../../components/MangaList/MangaList'
import TopTen from '../../components/TopTen/TopTen'
import axios from 'axios'
import './home.css'
function Home() {
    const [mangas, setMangas] = useState([]);
    const [page , setPage ] = useState(1)
    const [totalPage , setTotalPage ] = useState(1)
    let top5 = useRef(new Array(5));

    useEffect(() => {
        axios.get('http://localhost:3000/manga/?page=1&limit=8')
  .then(function (response) {
    // console.clear()
    console.log(response.data)
    
    setMangas(response.data.mangas)
    setTotalPage(response.data.totalPages)
    // for (let i=0 ; i<5;i++) {
    //   top5.current.push(mangas[i])
    // }
    console.log("***********************")
    top5.current = response.data.mangas.slice(0,5)
    console.log(response.data.mangas.slice(0,2))
    
    // console.log(response.data.mangas.splice(3))
    // return response.data.mangas;
  })
  .catch(function (error) {
    console.log(error);
  })
      },[]);

      const next =()=>{
        
        if(page<totalPage){
            axios.get('http://localhost:3000/manga/?limit=8&page='+(page+1))
            .then(function (response) {
              console.log(response.data)
              
              setMangas(response.data.mangas)
              setPage(page+1)
              console.log(mangas);
            })
        }
      
      }
      const prev =()=>{
        
        if(page>1){
            axios.get('http://localhost:3000/manga/?limit=8&page='+(page-1))
            .then(function (response) {
              console.log(response.data)
              
              setMangas(response.data.mangas)
              setPage(page-1)
              console.log(mangas);
            })
        }
      
      }
   
  return (
    <>
      <Banner />


    
        <div className="main" >
    
            <div className="bigmain" >
   
            <div className="med">
        <div  className="top5">
            <div className="mid_top">
                <h3 className="ti" >Popular Today</h3>
            </div>
            <div  className="fiveCon">
                    {top5.current.map((manga)=> <Card manga={manga} />)  }
                
            </div>
        </div>
        <div className="mid_top">
        <h3 className="ti" >Latest Update</h3>
        </div>
    <div className="body1">
   
        { mangas.map((manga)=>  <MangaList  manga={manga}  />)

}
    </div>
    <div onClick={prev} className="flPN">
        <span className={(page>1) ? 'Hbn' : 'Hbn HbtnD'} >
            Previous
        </span>
        <span onClick={next} className={(page<totalPage) ? 'Hbn' : 'Hbn HbtnD'}>
            Next
        </span>
    </div>
    </div>
    
            </div>
    <div className="side">
        <TopTen />
    </div>
 
</div>
    </>
  )
}

export default Home