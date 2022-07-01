import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Languagecontent from './Languagecontent'

export default function CardLanguage() {
   
    const [hover, sethover] = useState(true)

    const leaveHandler=()=>{
        sethover(false)

    }
    const leaveLeave=()=>{
        sethover(true)

    }
    const [langues, setLangues] = useState([]);
    useEffect(() => {
       
        axios.get(`https://localhost:7154/api/language/getbyuser?id=${localStorage.getItem('userId')}`).then(res => {
            setLangues(res.data)
        })
        
    }, []);
  return (
    <div className=' scrollbar-thin scrollbar-thumb-indigo-800 scrollbar-track-indigo-300  overflow-y-scroll rounded-lg shadow-2xl bg-indigo-800  my-8 mx-5 h-[400px] w-[380px]' onMouseEnter={leaveHandler} onMouseLeave={leaveLeave}>
    {hover 
    ? <div 
    className=' text-center mt-20 m-auto p-2 h-48 w-48'> 

    <h2 className='text-center font-extrabold text-3xl text-white'>I speak languages</h2> 
    </div>
    : <Languagecontent langues={langues}/>}
    
    </div>
  )
}
