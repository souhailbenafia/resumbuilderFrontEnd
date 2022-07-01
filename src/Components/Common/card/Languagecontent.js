import React from 'react'

export default function Languagecontent(props) {

    const diag = (el)=>{
      if (el.niveau ==='A1')return <div className=' flex flex-col-reverse rounded-xl h-32 w-12 bg-slate-400'><div className=' rounded-xl  w-12 h-4 bg-white'></div></div>
      if (el.niveau ==='A2')return < div className=' flex flex-col-reverse rounded-xl h-32 w-12 bg-slate-400'><div className='rounded-xl  w-12 h-8 bg-white'></div></div>
      if (el.niveau ==='B1')return < div className=' flex flex-col-reverse rounded-xl h-32 w-12 bg-slate-400'><div className='rounded-xl  w-12 h-12 bg-white'></div></div>
      if (el.niveau ==='B2')return <div  className=' flex flex-col-reverse rounded-xl h-32 w-12 bg-slate-400'><div className='rounded-xl  w-12 h-16 bg-white'></div></div>
      if (el.niveau ==='c')return < div className=' flex flex-col-reverse rounded-xl h-32 w-12 bg-slate-400'><div className=' rounded-xl  w-12 h-20 bg-white'></div></div>
      if (el.niveau ==='c1')return < div className=' flex flex-col-reverse rounded-xl h-32 w-12 bg-slate-400'><div className=' rounded-xl  w-12 h-28 bg-white'></div></div>
    }
  
  return (
    <div className=' m-2'>
    <h2 className='m-4 text-lg  font-extrabold text-white'>certifications</h2>
   <div className='grid grid-flow-col-dense h-48  justify-center space-x-0'>
   {
        props.langues.map((el) => {
            return <div key={el.id} className='mx-4 my-4 flex flex-col-reverse'>{diag(el)} 
                <h4 className='text-sm font-bold text-white mb-5'>{el.languge}</h4></div>
                
               
            
        })
    }

   </div>
    
   </div>
  )
}
