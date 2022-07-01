import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function CardInterest() {
  const [hover, sethover] = useState(true)

  const leaveHandler=()=>{
      sethover(false)

  }
  const leaveLeave=()=>{
      sethover(true)

  }
  const [intersets, setintersets] = useState([]);
  useEffect(async () => {
     
    await axios.get(`https://localhost:7154/api/interest/getbyuser?id=${localStorage.getItem('userId')}`).then(res => {
      setintersets(res.data)
  }) 
  }, []);
  return (
    <div className=' scrollbar-thin scrollbar-thumb-pink-800 scrollbar-track-pink-300  overflow-y-scroll rounded-lg shadow-2xl bg-pink-600 text-white hover:bg-white hover:text-pink-600  my-8 mx-5 h-[400px] w-[380px]' onMouseEnter={leaveHandler} onMouseLeave={leaveLeave}>
       

       {hover 
        ?  <div className=' flex flex-col p-2 ' >

        <h2 className=' m-auto text-2xl my-5 font-extrabold text-white'> 
        Interested by:
        </h2>

        {intersets.map((el)=>{
          return <h3 className=' mx-6 text-xl  font-extrabold text-white'>{el.name}</h3>
        })}


      </div>
       
        : <div className=' flex flex-col p-2 ' >

        <h2 className='  m-auto text-2xl my-5 font-extrabold text-pink-500'> 
        Interested by:
        </h2>

        {intersets.map((el)=>{
         return <h3 className=' mx-6 text-xl  font-extrabold text-pink-500'>{el.name}</h3>
        })}


      </div>
}
       

        
        
    </div>
  )
}
