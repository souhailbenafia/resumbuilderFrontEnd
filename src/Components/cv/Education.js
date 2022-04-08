import React,{useState,useEffect} from 'react'


function Education(props) {
  
   
  return (
   
      <li key={props.education.id} className="flex flex-row" >
          <div> </div>
        <div className=" flex flex-row h-10 mr-20">
          <p className="">{props.education.start} </p><p className=""> / {props.education.end}</p>
        </div>
        <div className="flex flex-col">
          <h3 className="">{props.education.university}</h3>
          <p className="">{props.education.diploma}</p>
        </div>
      </li>
    
  
  )
}

export default Education