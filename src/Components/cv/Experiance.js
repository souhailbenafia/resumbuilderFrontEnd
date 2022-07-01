import { format } from 'date-fns'
import React from 'react'

function Experiance(props) {
  return (        
  <li key={props.experiance.id} className="grid grid-cols-5 mt-2" >
          
          <div className=" flex-col  h-10 ">
          <p className="">{format( new Date(props.experiance.start),"MMMM  yyyy")} </p><p className=""> {format( new Date(props.experiance.end),"MMMM  yyyy")}</p>
          </div>
          <div className='flex col-span-4'>
            <div className="ml-4 flex flex-col">
            <h3 className=" text-lg text-black font-semibold">{props.experiance.position}</h3>
            <p className="text-sm">{props.experiance.company}</p>
            <p className="">{props.experiance.description}</p>
          </div>
         
          </div>
          
          
        </li>



  )
}

export default Experiance