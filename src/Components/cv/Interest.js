import React from 'react'

function Interest(props) {
  return (
    
      
      <div  key ={props.intersets.id} className=" mt-2 rounded-2xl  mx-1 bg-zinc-500 text-center text-white w-fit p-2">
               {props.intersets.name }
               
               </div>   
           
  )
}

export default Interest