import React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import DatePicker from "@mui/lab/DatePicker";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import DeleteIcon from '@mui/icons-material/Delete';
import DoneIcon from '@mui/icons-material/Done';

function Experiance(props) {
  const [value, setValue] = React.useState(new Date());
  const [endValue, setEndValue] = React.useState(new Date());

  
  return (
    <form className="m-4 "  onSubmit={props.onSubmitHandler} name='experiance'>
     
   
 <div className="flex flex-col ">
        <div className=" flex flex-row  space-x-10    ">
          <div className="w-60 h-24">
            <label className="m-2 ">Entreprise name</label>
            <input
            placeholder="Exemple : SouhailDev (facultatif)"
              type="text"
              name="company"
              className="w-60 h-14 p-1 rounded-sm shadow-md"
              onChange={props.onChangeHandler} 
            ></input>
             {props.errors.Company && (  <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
            {props.errors.Company}
        </span>)}
          </div>
          <div className="w-60 h-24 ">
            <label className="m-2">Job title</label>
            <input
            placeholder="Enter the job title for this company"
              type="text"
              name="position"
              className="w-60 h-14 rounded-sm shadow-md"
              onChange={props.onChangeHandler} 
            ></input>
             {props.errors.Position && (  <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
            {props.errors.Position}
        </span>)}
          </div>
        </div>

        <div className="w-60 h-10 space-y-0 mb-4 ">
          <label className="m-2">City</label>
          <input
            type="text"
            name="Location"
            className="w-60 h-14 rounded-sm shadow-md"
            onChange={props.onChangeHandler} 
          ></input>
           {props.errors.Location && (  <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
            {props.errors.Location}
        </span>)}
        </div>

        <div className=" flex flex-row mt-10  h-24 space-x-10  ">
          <div className="w-60 h-24">
            <label className="m-2 ">Start</label>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
              autoOk 
              variant="inline"
               views={['year', 'month']}
                value={value}
                 onChange={(newValue) => {
                  setValue(newValue)
                  props.setform(
                    {
                      ...props.form,
                      "Start": newValue
                    }
                  )
                }}
        
                renderInput={(params) => <TextField value={value}className="bg-white shadow-md rounded-md" name="Start" onChange={props.onChangeHandler}  {...params} />}
              />
            </LocalizationProvider>
            {props.errors.Start && (  <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
            {props.errors.Start}
        </span>)}
          </div>
          <div className="w-60 h-40">
            <label className="m-2">End</label>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
              variant="inline"
              autoOk 
               views={['year', 'month']}
                value={endValue}
                onChange={(newValue) => {
                 setEndValue(newValue)
                 props.setform(
                    {
                      ...props.form,
                      "End": newValue
                    }
                  )
                }}
                renderInput={(params) => <TextField value={endValue} className="bg-white shadow-md rounded-md" name="End" onChange={props.onChangeHandler} {...params} />}
              />
            </LocalizationProvider>
            {props.errors.End && (  <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
            {props.errors.End}
        </span>)}
          </div>
        </div>

        <div className="h-40 w-80 ">
          <label>Job Description</label>
          <textarea
            type="text"
            name="description"
            placeholder="Vos compétences et technologies utilisées pour ce poste"
            className="w-80 h-32 rounded-sm  p-1 shadow-md"
            onChange={props.onChangeHandler}
          ></textarea>
           {props.errors.Description && (  <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
            {props.errors.Description}
        </span>)}
        </div>

        <div  className=" flex flex-row justify-end ">
        

        <div className='  w-10 m-2 pt-4 '> 
            <button  type="submit" className='rounded-xl bg-green-500  p-2 hover:bg-green-600   shadow-md  text-center text-white'><DoneIcon  fontSize='small'color='inherit'/></button>
           </div>
        </div>
        
      </div>
    </form>
  );
                      
              }

export default Experiance;
