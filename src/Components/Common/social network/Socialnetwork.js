import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import DoneIcon from '@mui/icons-material/Done';

function Socialnetwork(props) {
  return (
    <div className='p-2'>
        <h2 className=' text-slate-700 font-serif font-bold  '>
        Gagnez du temps en important vos données !
        </h2>
        <div className=' my-3 flex flex-col space-y-4 w-full' >




           <form className='flex flex-row' onSubmit={props.onSubmitHandler}  name="socialNetwork">
               <div className=' mx-4 w-14 h-14 shadow-md' >
               <img src='https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png' alt='linkedin' className='w-14 h-14'/>
               </div>
               <div className=' mx-4 w-80 h-14'>
                   <input className=' w-80 h-14 rounded-md shadow-md' placeholder='Username' name='Username'  onChange={props.onChangeHandler}/>
                   {props.error.Username && (  <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
            {props.error.Username}
        </span>)}
               </div>
               <div className=' mx-4 w-80 h-14'>
                   <input className=' w-80 h-14 rounded-md shadow-md' placeholder='Lien du profil ' name='Link' onChange={props.onChangeHandler}/>
                   {props.error.Link && (  <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
            {props.error.Link}
        </span>)}
               </div>
               <div className='   m-2 rounded-xl bg-green-600  p-2 hover:bg-green-500'> 
            <button  type='submit'className=' h-10 shadow-md text-center text-white'><DoneIcon  fontSize='medium'color='inherit'/></button>
            </div> 
           </form>

           <form className='flex flex-row' onSubmit={props.onSubmitHandler1} >
               <div className=' mx-4 w-14 h-14 shadow-md' >
               <img src='https://cdn2.clc2l.fr/c/thumbnail75webp/t/g/m/gmail-cgKrcq.png' alt='linkedin' className='w-14 h-14'/>
               </div>
               <div className=' mx-4 w-80 h-14'>
                   <input className=' w-80 h-14 rounded-md shadow-md' placeholder='Username' name='Username' onChange={props.onChangeHandler1}/>
                   {props.error1.Username && (  <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
            {props.error1.Username}
        </span>)}
               </div>
               <div className=' mx-4 w-80 h-14'>
                   <input className=' w-80 h-14 rounded-md shadow-md' type ='text'placeholder='Address Email ' name='link' onChange={props.onChangeHandler}/>
                   {props.error1.Link && (  <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
            {props.error1.Link}
        </span>)}
               </div>
               <div className='   m-2 rounded-xl bg-green-600  p-2 hover:bg-green-500'> 
            <button  type='submit'className=' h-10 shadow-md text-center text-white'><DoneIcon  fontSize='medium'color='inherit'/></button>
            </div>
           </form>

           <form className='flex flex-row'onSubmit={props.onSubmitHandler2} >
               <div className=' mx-4 w-14 h-14 shadow-md' >
               <img src='https://cdn-icons-png.flaticon.com/512/25/25231.png' alt='linkedin' className='w-14 h-14'/>
               </div>
               <div className=' mx-4 w-80 h-14'>
                   <input className=' w-80 h-14 rounded-md shadow-md' placeholder='Username' name='Username' onChange={props.onChangeHandler2} />
                   {props.error2.Username && (  <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
            {props.error2.Username}
        </span>)}
               </div>
               <div className=' mx-4 w-80 h-14'>
                   <input className=' w-80 h-14 rounded-md shadow-md' placeholder='Lien du github ' name='Link' onChange={props.onChangeHandler2}/>
                   {props.error2.Link && (  <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
            {props.error2.Link}
        </span>)}
               </div>
               <div className='   m-2 rounded-xl bg-green-600  p-2 hover:bg-green-500'> 
            <button  type='submit'className=' h-10 shadow-md text-center text-white'><DoneIcon  fontSize='medium'color='inherit'/></button>
            </div>
           </form>

    
        </div>
        
    </div>
  )
}

export default Socialnetwork