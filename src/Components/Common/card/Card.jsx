import axios from 'axios'
import React, { useEffect, useState } from 'react'
import InfoCard from './InfoCard'



export default function Card() {

    const [hover, sethover] = useState(true)

    const leaveHandler=()=>{
        sethover(false)

    }
    const leaveLeave=()=>{
        sethover(true)

    }
    const [infos, setinfos] = useState([]);
    useEffect(() => {
       
        axios.get(`https://localhost:7154/api/info/getbyuser?id=${localStorage.getItem('userId')}`).then(res => {
            setinfos(res.data)
        })
        
    }, []);
  return (
    <div className=' scrollbar-thin scrollbar-thumb-indigo-800 scrollbar-track-indigo-300  overflow-y-scroll rounded-lg shadow-2xl bg-indigo-800  my-8 mx-5 h-[400px] w-[380px]' onMouseEnter={leaveHandler} onMouseLeave={leaveLeave}>
        {hover 
        ? <div 
        className='  mt-16 m-auto p-2 h-48 w-48'> 
        <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" class="container-0-5-100 container-d90-0-5-1518 logo-0-5-95 logo-d78-0-5-1515"><g transform="scale(1.6667)">
        <path d="M23.707,11.293l-11-11c-0.391-0.39-1.023-0.39-1.414,0l-11,11c-0.39,0.391-0.39,1.024,0,1.414C0.481,12.895,0.735,13,1,13 h1.25c0.138,0,0.25,0.112,0.25,0.25V23c0,0.552,0.448,1,1,1h5.75c0.138,0,0.25-0.112,0.25-0.25V19c0-1.381,1.119-2.5,2.5-2.5 s2.5,1.119,2.5,2.5v4.75c0,0.138,0.112,0.25,0.25,0.25h5.75c0.552,0,1-0.448,1-1v-9.75c0-0.138,0.112-0.25,0.25-0.25H23 c0.552,0,1-0.448,1-1C24,11.735,23.894,11.48,23.707,11.293z M12,12c-1.381,0-2.5-1.119-2.5-2.5S10.619,7,12,7s2.5,1.119,2.5,2.5 S13.381,12,12,12z" fill="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="0">
        </path>
        </g></svg></div>
        : <InfoCard infos={infos}/>}
        
    </div>


  )
}
