import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ExperienceContent from './ExperienceContent'

export default function CardExperiance() {
    const [hover, sethover] = useState(true)
    const [expeiances, setExpeiances] = useState([]);

    const leaveHandler=()=>{
        sethover(false)
  
    }
    const leaveLeave=()=>{
        sethover(true)
  
    }
  
    useEffect(async () => {
       
        axios.get(`https://localhost:7154/api/experiance/getbyuser?id=${localStorage.getItem('userId')}`).then(res => {
            setExpeiances(res.data)
        })
    }, []);
    return (
      <div className=' scrollbar-thin scrollbar-thumb-pink-800 scrollbar-track-pink-300  overflow-y-scroll rounded-lg shadow-2xl bg-pink-600 text-white hover:bg-white hover:text-pink-600  my-8 mx-5 h-[400px] w-[380px]' onMouseEnter={leaveHandler} onMouseLeave={leaveLeave}>
         
  
         {hover 
          ? <div 
          className='  flex flex-col  w-[380px] h-80   '>
              <img src='https://img.freepik.com/free-vector/businessman-laptop-leader-runs-up-books-with-trophy-his-team-business-leadership-managing-skills-leadership-training-plan-concept-pinkish-coral-bluevector-isolated-illustration_335657-1647.jpg?w=2000'  />
              
              <h2 className=" mx-auto my-10 flex   text-3xl font-extrabold h-20 text-white">My Experiences: </h2>
               </div>
         
          : <ExperienceContent expeiances={expeiances}/>
  }
         
  
          
          
      </div>
    )
  }
  