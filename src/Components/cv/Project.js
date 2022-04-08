import React from 'react'

function Project(props) {
  return (
    <li key={props.project.id} className="flex flex-row" >
    
  <div className=" flex flex-row h-10 mr-20">
    
  </div>
  <div className="flex flex-col">
    <h3 className="">{props.project.name}</h3>
    <p className="">{props.project.link}</p>
    
  </div>
  <div>{props.project.description} </div>
</li>
  )
}

export default Project