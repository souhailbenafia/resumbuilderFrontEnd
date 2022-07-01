import React, { useEffect, useState } from 'react'
import axios from 'axios'
import InfoCard from './InfoCard'
import EducationContent from './EducationContent';

export default function CardEducation() {
    const [educations, seteducations] = useState([]);
    const [hover, sethover] = useState(true)

    const leaveHandler=()=>{
        sethover(false)

    }
    const leaveLeave=()=>{
        sethover(true)



    }
    useEffect(() => {
        axios.get(`https://localhost:7154/api/education/getbyuser?id=${localStorage.getItem('userId')}`).then(res => {
            seteducations(res.data)
        })
    }, []);
  return (
    <div className=' scrollbar-thin scrollbar-thumb-indigo-800 scrollbar-track-indigo-300  overflow-y-scroll rounded-lg shadow-2xl bg-white my-8 mx-5 h-[400px] w-[380px]' onMouseEnter={leaveHandler} onMouseLeave={leaveLeave}>
        {hover 
        ? <div className="container-0-5-53 container-d18-0-5-1180 container-0-5-117">
        <img className=' mt-12 m-auto p-2 h-48 w-48'src='https://www.svgrepo.com/show/15351/school.svg'/>
        <h2 className="  my-10   text-3xl font-extrabold h-20 text-indigo-700 text-center">I graduated from </h2></div>
        : <EducationContent  educations={educations} />}
        
    </div>
  )
}
