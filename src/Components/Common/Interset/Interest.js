import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import DoneIcon from '@mui/icons-material/Done';

function Interest(props) {
  return (
    <form className='flex flex-col'>

    <div className='flex flex-row'>
        
        <div>
        <div className='  shadow-md  m-2 w-80 '>
        <input  className='mt-1   rounded-md w-80 h-14' type ="text" name='name' placeholder='Exemple : Anglais'/>
        </div>
        </div>
        <div className='   m-2 rounded-xl bg-red-600  p-2 hover:bg-red-500'> 
        <button className=' h-10 shadow-md  text-center text-white'><DeleteIcon  fontSize='medium'color='inherit'/></button>
   </div>

   <div className='   m-2 rounded-xl bg-green-600  p-2 hover:bg-green-500'> 
        <button  onClick={props.handleSubmit}className=' h-10 shadow-md text-center text-white'><DoneIcon  fontSize='medium'color='inherit'/></button>
        </div>
    </div>  

    
</form>
  )
}

export default Interest