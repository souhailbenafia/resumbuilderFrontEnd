import React from 'react'
import ContactMailIcon from '@mui/icons-material/ContactMail';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function SocialNetwork(props) {

  const src = ()=>{
    if (props.reseaux.network ==='Linkdin')return <LinkedInIcon className='h-6 w-6'/>
    if (props.reseaux.network ==='Gmail')return <ContactMailIcon className='h-6 w-6'/>
    if (props.reseaux.network ==='GitHub')return <GitHubIcon className='h-6 w-6'/>
  }


  return (
    <div> 

<li className='flex flex-row my-2' >
               <div className='  w-6 h-6 shadow-md' >
               {src()}
               </div>
               <div><p className='text-gray-400 text-sm mx-2 py-1'>{props.reseaux.username}</p></div>
               
           </li>
   

    </div>
  )
}

export default SocialNetwork