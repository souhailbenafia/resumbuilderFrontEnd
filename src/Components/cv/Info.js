import { format } from 'date-fns'
import React from 'react'
import EventIcon from '@mui/icons-material/Event';

function Info(props) {
  const  createImgPath = (serverPath) => {
    return `https://localhost:7154/${serverPath}`;
  }
  return (
    <div key={props.info.id}>

    <div className=''>
    
    <img src={createImgPath(props.info.imageSource)}/>

       <h3 className='text-white text-2xl font-bold'>{props.first} {props.last}</h3> 

       <h5>{props.info.info}</h5>

       <div className='flex flex-row my-2' >
               <div className='  w-6 h-6 shadow-md' >
               <EventIcon className='w-6 h-6'/>
               </div>
               <div><p className='text-gray-400 text-sm mx-2 py-1'>{props.birthDate}</p></div>
               
           </div>

       <h5></h5>

       
    </div>

    <div>


    </div>
		

   


      
    
         </div>
  )
}

export default Info