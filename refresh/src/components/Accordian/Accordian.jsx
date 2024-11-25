import React from "react";
import { useState } from "react";
import data from './data'
 
const  Accordian = ( ) =>{

    const [selected, setSelected]= useState(null)

     function handleSingleSelection(getCurrentId){
       setSelected(getCurrentId)


     }


    return(
    <div className="container">
        <div className="accordian"> 
          {
            data && data.length ? data.map((dataItem)=>(
                <div className="item">
                    <div onClick={()=>handleSingleSelection(dataItem.id)} className="title">
                        <h3>{dataItem.question}</h3>
                        <span>+</span>

                   

                </div>
                {selected===dataItem.id?<div className='answer'>{dataItem.answer} </div>:null}
                    
                     </div>

                   
            )) : <div> There is no Data Avialable </div>
          }
         
        </div>
 
    </div> )
}

export default Accordian