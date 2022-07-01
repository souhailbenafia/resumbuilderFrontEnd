import axios from 'axios'
import React, { useEffect, useState } from 'react'
import SkillContent from './SkillContent'

export default function CardSkill() {
    const [hover, sethover] = useState(true)

    const leaveHandler=()=>{
        sethover(false)

    }
    const leaveLeave=()=>{
        sethover(true)

    }
    const [skills, setSkills] = useState([]);
    useEffect(() => {
       
        axios.get(`https://localhost:7154/api/skill/getbyuser?id=${localStorage.getItem('userId')}`).then(res => {
            setSkills(res.data)
        })
    }, []);
  return (
    <div className=' scrollbar-thin scrollbar-thumb-indigo-800 scrollbar-track-indigo-300  overflow-y-scroll rounded-lg shadow-2xl bg-indigo-800  my-8 mx-5 h-[400px] w-[380px]' onMouseEnter={leaveHandler} onMouseLeave={leaveLeave}>
        {hover 
        ? <div 
        className='  flex flex-col mt-8 m-auto p-2 h-48 w-48'> 
           <img src='https://process.filestackapi.com/output=format:png/negative/modulate=brightness:1000/compress/KKn2Q218TaeF51faVayy'  />
              <h2 className='text-center font-extrabold text-3xl text-white'>I mainly write</h2> 
              </div>:
         <SkillContent skills={skills} />
         
         }
        
    </div>

  )
}
