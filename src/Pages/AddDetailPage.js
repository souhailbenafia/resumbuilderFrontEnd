import React, { useEffect, useState } from 'react'
import Formation from '../Components/Common/formation/formation' 
import Fab from '@mui/material/Fab';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { grey } from '@mui/material/colors';
import DoneIcon from '@mui/icons-material/Done';
import Socialnetwork from '../Components/Common/social network/Socialnetwork'
import Experiance from '../Components/Common/experiance/Experiance'; 
import Langue from '../Components/Common/Language/Langue';
import NavBar from '../Components/Common/navBar/NavBar';
import Certification from '../Components/Common/certification/certification ';
import Interest from '../Components/Common/Interset/Interest';
import Project from '../Components/Common/projects/Project';
import Skills from '../Components/Common/Skills/skills';




function AddDetailPage() {
  let index = 0
    const [education, setEducationList] = useState([{education: "" }])
    const OnChangeHandler = (e,index)=>{
      setEducationList({...education
    ,[e.target.name] : [e.target.value]})
      }

      
      

      const handleEducationAdd = () => {
        setEducationList([...education, {education: {}}]);
      };

      const handleSubmit = (event) => {
        event.preventDefault();
        console.log(education);
        
      };
     
     
  return (
      
      <div className='bg-gray-50 flex flex-row h-full'>

<div className=' hidden sm:block w-1/3 min-h-screen transition duration-150 ease-out hover:ease-in backdrop-contrast-50 
  bg-gradient-to-b from-purple-300 to-purple-400
  ' >

  <img className='h-full bg-scroll w-full' src="https://process.filestackapi.com/resize=width:1000/MFcDeCdsQPakzIKL8ccJ">
 
  </img>
</div>

<div className='w-3/4 h-screen overflow-y-auto sm:block'>
<NavBar></NavBar>

<Skills/>

<Project/>

<Certification/>
  
  
    <Interest/>
        <Langue/>
        <Socialnetwork/>
        <Experiance/>    
       <div key={index} >
       <Formation OnChangeHandler={OnChangeHandler}  handleSubmit={handleSubmit}/>     
       </div>
       <div>
       { education.length - 1 === index && education.length < 4 &&  (
               <Formation OnChangeHandler={OnChangeHandler}  handleSubmit={handleSubmit}/>     
           )}
       </div>
       <div className='mt-4'>

      
       <Fab onClick={handleEducationAdd}variant="extended" color='inherit'>
        <AddCircleIcon color={grey[200]} sx={{ mr: 1 }} />
        <h5 className='font-bold text-gray-700'> Ajouter</h5>
        
      </Fab>
      </div >
      <div className=' w-28 shadow-2xl  m-2 rounded-xl bg-green-600  p-3 hover:bg-green-500'> 
            <button  onClick={handleSubmit}className=' shadow-2xl text-center text-white'><DoneIcon  fontSize='medium'color='inherit'/>Valider</button>
            </div>
    
      </div>

      </div>
    
  )
}

export default AddDetailPage