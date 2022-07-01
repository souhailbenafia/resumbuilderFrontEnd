
import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import WorkIcon from '@mui/icons-material/Work';
import AccountBoxIcon from '@mui/icons-material/AccountBox';



export default function InfoCard(props) {
 
  return (
    <div className='flex flex-col overflow-hidden' >
    <h2 className='m-4 text-lg  font-extrabold text-white'>Who?</h2>
    <div className='flex flex-row '>
        <AccountBoxIcon color="action"  fontSize='small' className=' m-2 w-4' ></AccountBoxIcon>
        <h4 className='m-2 text-white font-mono'>{props.infos[0].info}</h4>
    </div>
    <div className='flex flex-row '>
        <WorkIcon  color="action"  fontSize='small' className=' m-2 w-4' ></WorkIcon>
        <h4 className='m-2 text-white font-mono'>Developper with {props.infos[0].yearOfExpirence} years of experiance</h4>
    </div>

    <div className='flex flex-row '>
        <HomeIcon color="action"  fontSize='small' className=' m-2 w-4' ></HomeIcon>
        <h4 className='m-2 text-white font-mono'>{props.infos[0].address}</h4>
    </div>

 

    <div className='flex flex-row '>
        <h4 className='m-4 text-white text-lg font-bold'>Biographie</h4>
    </div>
    <h4 className='mx-4 text-white font-mono'>{props.infos[0].description}</h4>
    
 
    


   


    </div>
  )
}


