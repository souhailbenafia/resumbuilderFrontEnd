import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import DoneIcon from '@mui/icons-material/Done';

function Socialnetwork(props) {
  return (
    <form className='p-2'>
        <h2 className=' text-slate-700 font-serif font-bold  '>
        Gagnez du temps en important vos données !
        </h2>
        <div className=' my-3 flex flex-col space-y-4 w-full'>
           <div className='flex flex-row'>
               <div className=' mx-4 w-14 h-14 shadow-md' >
               <img src='https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png' alt='linkedin' className='w-14 h-14'/>
               </div>
               <div className=' mx-4 w-80 h-14'>
                   <input className=' w-80 h-14 rounded-md shadow-md' placeholder='Username' name='Username'/>
               </div>
               <div className=' mx-4 w-80 h-14'>
                   <input className=' w-80 h-14 rounded-md shadow-md' placeholder='Lien du profil ' name='Link'/>
               </div>
               <div className=' hidden mx-4 w-80 h-14'>
                   <input className=' w-80 h-14 rounded-md shadow-md' placeholder='Lien du profil ' name='Network' value={"Linkdin"}/>
               </div>
               
               
           </div>
           <div className='flex flex-row'>
               <div className=' mx-4 w-14 h-14 shadow-md' >
               <img src='https://cdn2.clc2l.fr/c/thumbnail75webp/t/g/m/gmail-cgKrcq.png' alt='linkedin' className='w-14 h-14'/>
               </div>
               <div className=' mx-4 w-80 h-14'>
                   <input className=' w-80 h-14 rounded-md shadow-md' placeholder='Username' name='Username' />
               </div>
               <div className=' mx-4 w-80 h-14'>
                   <input className=' w-80 h-14 rounded-md shadow-md' placeholder='Adresse Email ' name='Link'/>
               </div>
               <div className=' hidden mx-4 w-80 h-14'>
                   <input className=' w-80 h-14 rounded-md shadow-md' placeholder=' ' name='Network' value={"Gmail"}/>
               </div>
           </div>
           <div className='flex flex-row'>
               <div className=' mx-4 w-14 h-14 shadow-md' >
               <img src='https://cdn-icons-png.flaticon.com/512/25/25231.png' alt='linkedin' className='w-14 h-14'/>
               </div>
               <div className=' mx-4 w-80 h-14'>
                   <input className=' w-80 h-14 rounded-md shadow-md' placeholder='Username' name='Username' />
               </div>
               <div className=' mx-4 w-80 h-14'>
                   <input className=' w-80 h-14 rounded-md shadow-md' placeholder='Lien du github ' name='Link'/>
               </div>
               <div className=' hidden mx-4 w-80 h-14'>
                   <input className=' w-80 h-14 rounded-md shadow-md' placeholder='Adresse Email ' name='Network' value={"Github"}/>
               </div>
               
               
           </div>

           <div className='flex   justify-end'>


       <div className='   m-2 rounded-xl bg-green-600  p-2 hover:bg-green-500'> 
            <button  onClick={props.handleSubmit}className=' h-10 shadow-md text-center text-white'><DoneIcon  fontSize='medium'color='inherit'/></button>
            </div>
        </div>
           </div>
        
    </form>
  )
}

export default Socialnetwork