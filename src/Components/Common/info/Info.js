import { Box, Slider } from "@mui/material";
import React from "react";
import DoneIcon from '@mui/icons-material/Done';


export default function info(props) {
  return (
 

<form className="flex flex-col " onSubmit={props.onSubmitHandler}> 

<h2 className=" text-slate-700 font-serif font-bold  ">
        Nombre d'années d'expérience en entreprise en tant que développeur
      </h2>
      <div className=" m-4">
        <Box width={700}>
          <Slider
            size="medium"
            defaultValue={5}
            aria-label="Small"
            valueLabelDisplay="auto"
            color="secondary"
            step={1}
            max={20}
            onChange={props.onChangeHandler} 
            name ="yearOfExpirence"
          />
        </Box>
        {props.errors.eearOfExpirence && (  <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
            {props.errors.yearOfExpirence}
        </span>)}
      </div>
<div className=" flex flex-row  space-x-10    ">
  <div className="w-60 h-24">
    <label className="m-2 ">Address</label>
    <input
    placeholder="Exemple : Rue de Paris"
      type="text"
      name="address"
      className="w-60 h-14 p-1 rounded-sm shadow-md"
      onChange={props.onChangeHandler} 
    ></input>
     {props.errors.address && (  <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
            {props.errors.address}
        </span>)}
  </div>
  <div className="w-60 h-24 ">
    <label className="m-2">Description</label>
    <input
    placeholder="Lien du project"
      type="text"
      name="info"
      className="w-60 h-14 rounded-sm shadow-md"
      onChange={props.onChangeHandler} 
    ></input>
     {props.errors.info && (  <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
            {props.errors.info}
        </span>)}
  </div>
</div>

<div className="h-40 w-80 ">
  <label>Biographie</label>
  <textarea
    onChange={props.onChangeHandler} 
    type="text"
    name="description"
    placeholder="Describe your self "
    className="w-80 h-32 rounded-sm  p-1 shadow-md"
  ></textarea>
   {props.errors.description && (  <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
            {props.errors.description}
        </span>)}
</div>

<div  className=" flex flex-row justify-end ">


<div className='   m-2 rounded-xl bg-green-600  p-2 hover:bg-green-500'> 
    <button  onClick={props.handleSubmit}className=' h-10 shadow-md text-center text-white'><DoneIcon  fontSize='medium'color='inherit'/></button>
    </div>
</div>

</form>
  )
}
