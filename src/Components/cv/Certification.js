import React from 'react'

function Certification(props) {
  return (
    <li key={props.certification.id} className="flex flex-row" >
    <div> </div>
  <div className=" flex flex-row h-10 mr-20">
    <p className="">{props.certification.aquisationDate} </p>
  </div>
  <div className="flex flex-col">
    <h3 className="">{props.certification.name}</h3>
    <p className="">{props.certification.source}</p>
    
  </div>
</li>
    
  )
}

export default Certification