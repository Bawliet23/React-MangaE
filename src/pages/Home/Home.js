import React from 'react'
import Banner from '../../components/Banner/Banner'
import Card from '../../components/Card/Card'
import MangaList from '../../components/MangaList/MangaList'
import TopTen from '../../components/TopTen/TopTen'
import './home.css'
function Home() {
    let manga = {
        name:"Solo leveling",
        cover:"https://m.media-amazon.com/images/I/51Hv4zSmWTL._AC_SY780_.jpg"
    }
    let mangas = [{
        name:"Solo leveling",
        cover:"https://m.media-amazon.com/images/I/51Hv4zSmWTL._AC_SY780_.jpg"
    },{
        name:"Solo leveling",
        cover:"https://m.media-amazon.com/images/I/51Hv4zSmWTL._AC_SY780_.jpg"
    },{
        name:"Solo leveling",
        cover:"https://m.media-amazon.com/images/I/51Hv4zSmWTL._AC_SY780_.jpg"
    },{
        name:"Solo leveling",
        cover:"https://m.media-amazon.com/images/I/51Hv4zSmWTL._AC_SY780_.jpg"
    },{
        name:"Solo leveling",
        cover:"https://m.media-amazon.com/images/I/51Hv4zSmWTL._AC_SY780_.jpg"
    }]
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
                    { mangas.map((manga)=> <Card manga={manga} />)

                    }
                
            </div>
        </div>
        <div className="mid_top">
        <h3 className="ti" >Latest Update</h3>
        </div>
    <div className="body1">
   
        { mangas.map((manga)=>  <MangaList manga={manga}  />)

}
    </div>
        
    </div>
    <div className="flPN">
        <span   className="bn btnD">
            Previous
        </span>
        <span className="bn">
            Next
        </span>
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