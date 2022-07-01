import React from 'react'

function Rating(props) {

    return (
      <div className='grid grid-flow-col space-x-1  '>
        {props.level.map(() => (
          <div className='bg-white h-4 w-4 rounded-full  '></div>
        ))}
        {props.nop.map(() => (
          <div className='border border-white h-4 w-4 rounded-full '></div>
        ))}
      </div>
    )
  
  }
  

export default function SkillContent(props) {
  return (
    <div className='flex flex-col m-2'>
    <h2 className='m-4 text-3xl  font-extrabold text-white'>Skills</h2>
    {
    props.skills.map((el) => {
  return(  <div key={el.id} className="flex flex-row my-1  " >
    <div className=" flex flex-wrap mx-auto pt-4">
      <h4 className="  text-sm font-extrabold text-white w-40" >{el.name} </h4>
      <div className='py-1 ml-4 justify-content-end'> 
      {el.level === "Beginner" && <Rating level={[1]} nop={[1, 1, 1, 1]} />}
      {el.level === "Intermediate" && <Rating level={[1, 1]} nop={[1, 1, 1]} />}
      {el.level === "Advanced" && <Rating level={[1, 1, 1, 1]} nop={[1]} />}
      {el.level === "Expert" && <Rating level={[1, 1, 1, 1, 1]} nop={[]} />}
      </div>
      </div>
      
      </div>)
       
})
}
    </div>

  )
}
