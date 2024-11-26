import React from "react";
import { useState } from "react";
import data from "./data";
import "./style.css";

const Accordian = () => {
  const [selected, setSelected] = useState(null);
  const [multipleSelection, setMultipleSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  function handleSingleSelection(getCurrentId) {
    setSelected(selected === getCurrentId ? null : getCurrentId);
  }

  function handleMultipleSelection(getCurrentId) {
       const Multiple= [...multiple]
       const findIndexOfCurrentId= Multiple.indexOf(getCurrentId)
  
      
  if(findIndexOfCurrentId=== -1)
    Multiple.push(getCurrentId)
  else Multiple.splice(findIndexOfCurrentId, 1)
      setMultiple(Multiple)

      console.log(multiple)
    }


  return (
    <div className="container">
      <button
        onClick={() => setMultipleSelection(!multipleSelection)}
        className="btn"
      >
       
        Enable multiple selection
      </button>
      <div className="accordian">
        {data && data.length ? (
          data.map((dataItem) => (
            <div className="item">
              <div
                onClick={multipleSelection? ()=>handleMultipleSelection(dataItem.id): ()=> handleSingleSelection(dataItem.id) }
                className="title"
              >
                <h3>{dataItem.question}</h3>
                <span>+</span>
               </div>
              {selected === dataItem.id || multiple.indexOf(dataItem.id) != -1 ? (
                <div className="answer">{dataItem.answer} </div>
              ) : null}
            </div>
          ))
        ) : (
          <div> There is no Data Avialable </div>
        )}
      </div>
    </div>
  );
};

export default Accordian;
