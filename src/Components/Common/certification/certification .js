import React, { useState } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import DoneIcon from '@mui/icons-material/Done'

function Certification (props) {
  return (
  
        <form className='flex flex-row m-24 ml-14 mt-10 w-full content-center  ' name='certification'>
      

        <div className='    m-2 h-14 w-48 l'>
            <input   onChange={props.onChangeHandler} className='mt-1 shadow-md w-48 h-14' placeholder='Nom du certif....' type ="text" name='name' value={props.Names} />
            </div>

            <div className='    m-2 w-24 h-14'>
            <input onChange={props.onChangeHandler} value={props.date} className='pl-6 shadow-md mt-1 w-24 h-14' type="date"  name="AquisationDate" placeholder='date Daquisation'/>
            </div>

            <div className='   h-14 m-2 w-48 '>
            <input onChange={props.onChangeHandler}  value={props.source} className='mt-1 shadow-md w-48 h-14' type ="text" name='Source' placeholder='Source'/>
            </div>

            <div className='   h-14 m-2 w-48 '>
            <input value={localStorage.getItem('userId')} onChange={props.onChangeHandler} className=' hidden mt-1 shadow-md w-48 h-14' type ="text" name='userId' />
            </div>

            <div className='   m-2 pt-3 '> 
            <button  onClick={props.onSubmitHandler} className='   rounded-xl bg-green-500  p-2 hover:bg-green-600   shadow-md  text-center text-white'><DoneIcon  fontSize='small'color='inherit'/></button>
       </div>
       <div className='  pt-3 m-2 '> 
            <button  onClick={props.onSubmitHandler} className=' rounded-xl bg-red-500  p-2 hover:bg-red-400 shadow-md text-center text-white'><DoneIcon  fontSize='small'color='inherit'/>
            </button>
            </div>
           </form>

      
    
  )
}

export default Certification 