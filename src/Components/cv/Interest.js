import React from 'react'

function Interest(props) {
  return (
    <div>
      
      <div  key ={props.intersets.id} className=" mt-2 rounded-2xl bg-purple-800 text-center text-white flex flex-row  p-2  w-fit  space-x-4 ">
               <div className='pt-1'>{props.intersets.name }
               </div>
               </div>   
           </div>
  )
}

export default Interest