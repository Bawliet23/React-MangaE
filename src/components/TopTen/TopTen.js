import React from 'react'
import Cardlist from '../Cardlist/Cardlist'
import './topten.css'
function TopTen() {
    let manga = [{
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

    <div class="topfive">
       <TopFIve mangas={manga} />
          
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