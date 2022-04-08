import React, { useState } from 'react'

import DoneIcon from '@mui/icons-material/Done'

function Certification (props) {

 





  return (
  
        <form className='flex flex-row m-24 ml-14 mt-10 w-full content-center  ' onSubmit={props.onSubmitHandler} name='certification'>
      

        <div className='    m-2 h-14 w-60 l'>
            <input   onChange={props.onChangeHandler} className='mt-1 shadow-md w-60 h-14' placeholder='Nom du certif....' type ="text" name='name'  />
            </div>

            <div className='    m-2 w-60 h-14'>
            <input onChange={props.onChangeHandler}  className='pl-6 shadow-md mt-1 w-60 h-14' type="date"  name="AquisationDate" placeholder='date Daquisation'/>
            </div>

            <div className='   h-14 m-2 w-60 '>
            <input onChange={props.onChangeHandler}   className='mt-1 shadow-md w-60 h-14' type ="text" name='Source' placeholder='Source'/>
            </div>

            

            <div className='  w-10 m-2 pt-4 '> 
            <button  type="submit" className='rounded-xl bg-green-500  p-2 hover:bg-green-600   shadow-md  text-center text-white'><DoneIcon  fontSize='small'color='inherit'/></button>
           </div>
           <div className='   h-14 m-2 w-10'>
            <input value={localStorage.getItem('userId')} onChange={props.onChangeHandler} className=' hidden mt-1 shadow-md w-48 h-14' type ="text" name='userId' />
            </div>
     
           </form>

      
    
  )
}

export default Certification 