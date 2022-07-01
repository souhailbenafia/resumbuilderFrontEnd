import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import DoneIcon from '@mui/icons-material/Done';
import { FormControl, MenuItem, Select } from '@mui/material';

function Langue(props) {
  return (
    <form className='flex flex-col items-center'onSubmit={props.onSubmitHandler}>
            <div className='   m-2 w-80 ' >
            <input  onChange={props.onChangeHandler} name='Languge' className='mt-1  shadow-md  rounded-md w-80 h-14' type ="text"  placeholder='Exemple : Anglais'/>
            {props.errors.Languge && (  <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
            {props.errors.Languge}
        </span>)}
            </div>
           
 
        <div className=' m-2 space-y-4 '>
              <FormControl className="shadow-md bg-white m-2 w-80 ">
                <Select
                  defaultValue={"A1"}
                  name="Niveau"
                  onChange={props.onChangeHandler}
                  placeholder="Choose your Level"
                >
                  <MenuItem value="A1">A1 </MenuItem>
                  <MenuItem value="A2"> A2 </MenuItem>
                  <MenuItem value="B1"> B1 </MenuItem>
                  <MenuItem value="B2">B2</MenuItem>
                  <MenuItem value="c">c </MenuItem>
                  <MenuItem value="c1"> c1 </MenuItem>
                </Select>
              </FormControl>
              {props.errors.Niveau && (  <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
            {props.errors.Niveau}
        </span>)}

              <div>
              <FormControl className="shadow-md bg-white  m-2 w-80">
                <Select
                defaultValue={"Beginner"}
                 
                  name="Fluency"
                  onChange={props.onChangeHandler}
                  placeholder="Choose your Level"
                >
                  <MenuItem value="Beginner">Beginner </MenuItem>
                  <MenuItem value="Intermediate"> Intermediate </MenuItem>
                  <MenuItem value="Advanced"> Advanced </MenuItem>
                  <MenuItem value="Expert">Expert</MenuItem>
                </Select>
              </FormControl>
              {props.errors.Fluency && (  <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
            {props.errors.Fluency}
        </span>)}
            </div>
            <div  className=" flex flex-row justify-end ">
        
            <div className='  w-10 m-2 pt-4 '> 
            <button  type="submit" className='rounded-xl bg-green-500  p-2 hover:bg-green-600   shadow-md  text-center text-white'><DoneIcon  fontSize='small'color='inherit'/></button>
           </div>
        </div>
        
      </div>
            

        
    </form>
  )
}

export default Langue