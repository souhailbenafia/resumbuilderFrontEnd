
import React, { useState } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import DoneIcon from '@mui/icons-material/Done';


function Formation(props) {
    

  return (
    <form  className=' flex flex-row mt-10 w-full'  onSubmit={props.handleSubmit} name='certification'>
      

        <div className='   m-2 w-48 l'>
            <input  onChange={props.onChangeHandler} className='mt-1 shadow-md w-48 h-14' placeholder='Unv école ..' type ="text" name='University' />
            </div>

            <div className='   m-2 w-36 '>
            <input onChange={props.onChangeHandler} className='pl-6 mt-1 w-36 h-14' type="date"  name="Start" placeholder='Debut'/>
            </div>

            <div className=' m-2   w-36 rounded-xl'>
            <input onChange={props.onChangeHandler}  className=' pl-6 mt-1 w-36 h-14' type="date" placeholder='Fin' name="End"/>
            </div>

            <div className='   m-2 w-48 '>
            <input onChange={props.onChangeHandler}  className='mt-1  w-48 h-14' type ="text" name='Diploma' placeholder='Diplôme : License en informatique, Doctorat...'/>
            </div>

            <div className='  w-10 m-2 mt-4 '> 
            <button  type="submit" className='rounded-xl bg-green-500  p-2 hover:bg-green-600   shadow-md  text-center text-white'><DoneIcon  fontSize='small'color='inherit'/></button>
           </div>

           
           

      
    </form>
  )
}

export default Formation