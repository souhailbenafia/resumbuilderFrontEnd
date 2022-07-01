import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ContactMailIcon from '@mui/icons-material/ContactMail';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function CardSocial() {
    const [links, setLinks] = useState([]);

    const src = (el)=>{
        if (el.network ==='Linkdin')return <LinkedInIcon  color='primary'className='h-6 w-6'/>
        if (el.network ==='Gmail')return <ContactMailIcon color='info'className='h-6 w-6'/>
        if (el.network ==='GitHub')return <GitHubIcon className='h-6 w-6'/>
      }
    useEffect(() => {
       
        axios.get(`https://localhost:7154/api/SocialNetwork/getbyuser?id=${localStorage.getItem('userId')}`).then(res => {
            setLinks(res.data)
        })
        
    }, []);
  return (
    <div className=' scrollbar-thin scrollbar-thumb-indigo-800 scrollbar-track-indigo-300  overflow-y-scroll rounded-lg shadow-2xl bg-white  my-8 mx-5 h-[400px] w-[380px]' >
   <div 
    className='  flex flex-col w-[380px] h-80   '>
        <img src='https://www.salonedimpresa.it/wp-content/uploads/social.png' className='h-28' />
        
        {links.map((el) => {
         return (
          <li className='flex flex-row my-2 mx-4' >
         <div className=' w-6 h-6 shadow-md' >
         {src(el)}
         </div>
         <div><p className='text-indigo-700 font-bold text-xl mx-2 '>{el.username}</p></div>
         
     </li>
         )
                
               
            
        })}
         </div>
   
   
    
</div>
  )
}
