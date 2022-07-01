import React from 'react'
import LensIcon from '@mui/icons-material/Lens';

function Project(props) {
  return (
   
  

  <li key={props.project.id} className="grid grid-cols-5" >
    <div className='flex '>
    <LensIcon fontSize='small' className='mx-1 mt-[2px]'/>
       <h3 className="text-lg text-black font-semibold">{props.project.name}</h3>
       </div>
          
          
          <div className='flex col-span-4'>
         
            
            <div className="ml-4 flex flex-col px-8">
            
            <p className="">{props.project.link}</p>
          
          <div>{props.project.description} </div>
          </div>
          </div>
          
          
        </li>

  )
}

export default Project