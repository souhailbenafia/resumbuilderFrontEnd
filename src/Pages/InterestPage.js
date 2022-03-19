import React from 'react'
import Interest from '../Components/Common/Interset/Interest'
import NavBar from '../Components/Common/navBar/NavBar'
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import { Link } from 'react-router-dom';

function InterestPage() {
  return (
    <div className='bg-gray-50 flex flex-row h-full'>

    <div className=' hidden sm:block w-1/3 min-h-screen 
      bg-gradient-to-b from-purple-300 to-purple-400
      ' >
    
      <img className='h-full bg-scroll w-full' src="https://process.filestackapi.com/resize=width:1000/MFcDeCdsQPakzIKL8ccJ">
     
      </img>
    </div>
    
    <div className='w-3/4 min-h-screen overflow-y-auto  flex flex-row'>

        <div className='grid grid-cols-1  place-items-center h-full w-1/12'>
        <Link to={'/education'} className=' grid grid-cols-1  place-items-center p-2 h-14 w-14 rounded-full bg-rose-500'>
           <ArrowBackIosNewRoundedIcon className='text-white'/>
           </Link>
        </div>



        <div className='w-5/6'>

          

            <NavBar/>

            <p className='mt-10 ml-5 text-gray-500 font-bold font-serif text-6xl'>5/7</p>

            <h3 className=' mt-10 ml-5 text-2xl text-gray-500 font-bold font-serif'>Vos préférences</h3>

            <hr className= ' mt-6 w-2/3 border mx-auto font-bold '/>


              

           <Interest/>

        </div>



        <div className=' grid grid-cols-1  place-items-center  h-full w-1/12'>
           <Link to={'/Interest'} className='   grid grid-cols-1  place-items-center p-2 h-14 w-14 rounded-full bg-rose-500'>
           <ArrowForwardIosRoundedIcon className='text-white'/>
           </Link> 
        </div>

        </div>
        </div>
  )
}

export default InterestPage