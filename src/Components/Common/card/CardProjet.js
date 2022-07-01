
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import InfoCard from './InfoCard'
import ProjectContent from './ProjectContent'

export default function CardProjet() {
    const [hover, sethover] = useState(true)

    const leaveHandler=()=>{
        sethover(false)

    }
    const leaveLeave=()=>{
        sethover(true)

    }
    const [projects, setprojects] = useState([]);
    useEffect(() => {
       
        axios.get(`https://localhost:7154/api/project/getbyuser?id=${localStorage.getItem('userId')}`).then(res => {
            setprojects(res.data)
        })
        
    }, []);
  return (
    <div className=' scrollbar-thin scrollbar-thumb-indigo-800 scrollbar-track-indigo-300  overflow-y-scroll rounded-lg shadow-2xl bg-white  my-8 mx-5 h-[400px] w-[380px]' onMouseEnter={leaveHandler} onMouseLeave={leaveLeave}>
        {hover 
        ? <div 
        className='  flex flex-col  w-[380px] h-80   '>
            <img src='https://espresso-jobs.com/conseils-carriere/wp-content/uploads/2019/04/une-20.jpg'  />
            
            <h2 className=" mx-auto my-10 flex   text-3xl font-extrabold h-20 text-indigo-700">My  <span className='mx-1' ><img alt="♥️"  src="http://twemoji.maxcdn.com/2/svg/2665.svg" className='w-5 h-5 mx-0 my-2'/></span>  project : </h2>
             </div>
       
        : <ProjectContent projects={projects}/>}
        
    </div>
  )
}
