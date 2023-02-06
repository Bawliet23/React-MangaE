import React from 'react'

function Reader({chapter}) {
  return (
    <>
    <div className="bigger">
    <div className="contread">
        <h1 className="title">{chapter.manga.name} Chapter {chapter.number}</h1>
        <div className="dr">
            <div className="select">
                <select  name="format" id="format">
                    <option selected disabled>Select Chapiter</option>
                    {
                        chapter.manga.chapiters.map( item =>  <option  value={item.id}>{item.number} {item.name}</option> )
                        
                    }
                 </select>
            </div>
            <div className="btns">
                <div className="btn btnD">
                    <span className="material-icons">
                        keyboard_arrow_left
                        </span>
                        <span>prev</span>
                </div>
                <div  className="btn btnD" >
                        <span>next</span>
                        <span className="material-icons">
                            keyboard_arrow_right
                            </span>
                </div>
            </div>
        </div>
        <div className="mangachap">
             {
                chapter.manga.map(item =>  <img src={item} alt={chapter.manga.name} />)
             }
               
        </div>
        <div className="dr">
            <div className="select">
                <select name="format" id="format">
                    <option selected disabled>Select Chapiter</option>
                    <option selected disabled>Select Chapiter</option>
                    {
                        chapter.manga.chapiters.map( item =>  <option  value={item.id}>{item.number} {item.name}</option> )
                        
                    }
                 </select>
            </div>
            <div className="btns">
                <div  className="btn btnD">
                    <span className="material-icons">
                        keyboard_arrow_left
                        </span>
                        <span>prev</span>
                </div>
                <div  className="btn btnD">
                        <span>next</span>
                        <span className="material-icons">
                            keyboard_arrow_right
                            </span>
                </div>
            </div>
        </div>
    
    </div>
    </div>
    </>
  )
}

export default Reader