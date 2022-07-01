import React from 'react'

function Rating(props) {

  return (
    <div className='grid grid-flow-col space-x-1  '>
      {props.level.map(() => (
        <div className='bg-slate-400 h-4 w-4 rounded-full  '></div>
      ))}
      {props.nop.map(() => (
        <div className='border border-slate-400 h-4 w-4 rounded-full '></div>
      ))}
    </div>
  )

}

export default function Skill(props) {
  return (
    <li key={props.skills.id} className="flex flex-row my-1  " >
      <div className=" grid grid-cols-4 ">
        <p className="col-span-2">{props.skills.name} </p>

        <div className='col-span-2 py-1 ml-4 justify-content-end'> 
        {props.skills.level === "Beginner" && <Rating level={[1]} nop={[1, 1, 1, 1]} />}
        {props.skills.level === "Intermediate" && <Rating level={[1, 1]} nop={[1, 1, 1]} />}
        {props.skills.level === "Advanced" && <Rating level={[1, 1, 1, 1]} nop={[1]} />}
        {props.skills.level === "Expert" && <Rating level={[1, 1, 1, 1, 1]} nop={[]} />}
        </div>
        
        
      </div>
    </li>
  )
}
