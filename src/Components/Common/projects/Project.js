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
    const [value, setValue] = React.useState(null);
  return (
    <form className="flex flex-col ">
        <div className=" flex flex-row  space-x-10    ">
          <div className="w-60 h-24">
            <label className="m-2 ">Nom du projet</label>
            <input
            placeholder="Exemple : Todo list"
              type="text"
              name="name"
              className="w-60 h-14 p-1 rounded-sm shadow-md"
            ></input>
          </div>
          <div className="w-60 h-24 ">
            <label className="m-2">Lien du projet</label>
            <input
            placeholder="Lien du project"
              type="text"
              name="link"
              className="w-60 h-14 rounded-sm shadow-md"
            ></input>
          </div>
        </div>

     

        <div className=" w-60 h-24    ">

          
            <label className="m-2 ">Date de creation</label>
            <FormControl className='bg-white'>
            <LocalizationProvider dateAdapter={AdapterDateFns} className="bg-white">
              <DatePicker
              name="date"
              color="'#fff"
               views={['year', 'month']}
                value={value}
                onChange={(newValue) => {
                  setValue(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
            </FormControl>
          </div>

        <div className="h-40 w-80 ">
          <label>Description du projet</label>
          <textarea
            
            type="text"
            name="descroption"
            placeholder="Vos compétences et technologies utilisées pour ce poste"
            className="w-80 h-32 rounded-sm  p-1 shadow-md"
          ></textarea>
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