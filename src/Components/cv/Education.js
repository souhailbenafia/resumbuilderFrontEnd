import { format } from 'date-fns'
import React,{useState,useEffect} from 'react'


function Education(props) {
  
   
  return (
   
      <li key={props.education.id} className="grid grid-cols-10" >


          <div className='flex col-span-2'> 
         

          <p className="">{format( new Date(props.education.start),"yyyy")} </p><p className=""> / {format( new Date(props.education.end),"yyyy")}</p>
          </div>
        
        <div className='flex col-span-8'>
      
          <div className="ml-4 flex flex-col">
          <h3 className="text-lg text-black font-semibold">{props.education.university}</h3>
          <span className="text-sm">{props.education.diploma}</span>
        </div>
       
        </div>
        
        
      </li>
    
  
  )
}

export default Education