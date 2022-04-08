import React from 'react'

function Experiance(props) {
  return (
    <li key={props.experiance.id} className="flex flex-row" >
    <div> </div>
  <div className=" flex flex-row h-10 mr-20">
    <p className="">{props.experiance.start} </p><p className=""> / {props.experiance.end}</p>
  </div>
  <div className="flex flex-col">
    <h3 className="">{props.experiance.position}</h3>
    <p className="">{props.experiance.company}</p>
    <p className="">{props.experiance.description}</p>
  </div>
</li>
  )
}

export default Experiance