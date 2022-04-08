import React from 'react'

function Langue(props) {
  return (
    <li key={props.langues.id} className="flex flex-row my-1" >

      <div className=" grid grid-cols-5 ">
        <div className="col-span-2 flex flex-row" >
        <p >{props.langues.languge}   </p> <p>  {props.langues.fluency}</p>
        </div>
        

        <div></div>


        <div className=" col-span-2 flex flex-col mr-  ">
          <h3 className=""> Niveau : {props.langues.niveau}</h3>
        </div>

      </div>
    </li>
  )
}

export default Langue