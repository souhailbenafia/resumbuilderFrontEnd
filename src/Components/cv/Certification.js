import React from 'react'
import { format } from 'date-fns'
function Certification(props) {
  return (
  

  <li key={props.certification.id} className="grid grid-cols-5" >
          
          <div className=" flex flex-row h-10 ">
          <p className=""> {format( new Date(props.certification.aquisationDate),"MMMM  yyyy")} </p>
          </div>
          <div className='flex col-span-4'>
          <div className='border border-slate-400 h-4 w-4 rounded-full mt-1 mr-[2px] '></div>
            <div className="ml-4 flex flex-col">
            <h3 className="text-lg text-black font-semibold">{props.certification.name}</h3>
            <p className="text-sm">{props.certification.source}</p>
          </div>
         
          </div>
          
          
        </li>

    
  )
}

export default Certification