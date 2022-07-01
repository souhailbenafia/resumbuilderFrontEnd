import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import DoneIcon from '@mui/icons-material/Done';
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import DatePicker from "@mui/lab/DatePicker";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { FormControl } from '@mui/material';

function Project(props) {
    const [value, setValue] = React.useState(new Date());
  return (
    <form className="flex flex-col " onSubmit={props.onSubmitHandler}> 
        <div className=" flex flex-row  space-x-10    ">
          <div className="w-60 h-24">
            <label className="m-2 ">Name</label>
            <input
            placeholder="Exemple : Todo list"
              type="text"
              name="name"
              className="w-60 h-14 p-1 rounded-sm shadow-md"
              onChange={props.onChangeHandler} 
            ></input>
             {props.errors.Name && (  <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
            {props.errors.Name}
        </span>)}
          </div>
          <div className="w-60 h-24 ">
            <label className="m-2">Link</label>
            <input
            placeholder="Lien du project"
              type="text"
              name="link"
              className="w-60 h-14 rounded-sm shadow-md"
              onChange={props.onChangeHandler} 
            ></input>
             {props.errors.link && (  <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
            {props.errors.link}
        </span>)}
          </div>
        </div>
        
        <div className="h-40 w-80 ">
          <label>Description </label>
          <textarea
            onChange={props.onChangeHandler} 
            type="text"
            name="description"
            placeholder="Vos compétences et technologies utilisées pour ce poste"
            className="w-80 h-32 rounded-sm  p-1 shadow-md"
          ></textarea>
           {props.errors.Description && (  <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
            {props.errors.Description}
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

export default Project