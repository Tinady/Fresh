import React from "react";
import { useState } from "react";
import data from './data'
 
const  Accordian = ( ) =>{

    const [selected, setSelected]= useState(null)
    return(
    <div className="container">
        <div className="accordian"> 
          {
            data && data.length ? data.map((dataItem)=>(
                <div className="item">
                    <div className="title">
                        <h3>{dataItem.question}</h3>
                        <span>+</span>
                </div>
                    
                     </div>
            )) : <div> There is no Data Avialable </div>
          }
        </div>
 
    </div> )
}

export default Accordian