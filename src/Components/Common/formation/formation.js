
import React, { useState } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import DoneIcon from '@mui/icons-material/Done';


function Formation(props) {
    

  return (
    <form  className=' flex flex-row '>
      

        <div className='   m-2 w-48 l'>
            <input  onChange={props.OnChangeHandler} className='mt-1 shadow-md w-48 h-14' placeholder='Unv école ..' type ="text" name='University' />
            </div>

            <div className='   m-2 w-24 '>
            <input onChange={props.OnChangeHandler}  className='pl-6 mt-1 w-24 h-14' type="number"  name="Start" placeholder='Debut'/>
            </div>

            <div className=' m-2   w-24 rounded-xl'>
            <input onChange={props.OnChangeHandler}  className=' pl-6 mt-1 w-24 h-14' type="number" placeholder='Fin' name="End"/>
            </div>

            <div className='   m-2 w-48 '>
            <input onChange={props.OnChangeHandler}  className='mt-1  w-48 h-14' type ="text" name='Diploma' placeholder='Diplôme : License en informatique, Doctorat...'/>
            </div>

            <div className='   m-2 rounded-xl bg-red-600  p-2 hover:bg-red-500'> 
            <button className=' shadow-md  text-center text-white'><DeleteIcon  fontSize='medium'color='inherit'/></button>
       </div>

       <div className='   m-2 rounded-xl bg-green-600  p-2 hover:bg-green-500'> 
            <button  onClick={props.handleSubmit}className=' shadow-md text-center text-white'><DoneIcon  fontSize='medium'color='inherit'/></button>
            </div>
           

      
    </form>
  )
}

export default Formation