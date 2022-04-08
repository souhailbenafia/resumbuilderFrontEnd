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
            name ="yearsOfExperiance"
          />
        </Box>
      </div>

      <div className="flex flex-col ">
        <div className=" flex flex-row  space-x-10    ">
          <div className="w-60 h-24">
            <label className="m-2 ">Nom de l'entreprise</label>
            <input
            placeholder="Exemple : SouhailDev (facultatif)"
              type="text"
              name="company"
              className="w-60 h-14 p-1 rounded-sm shadow-md"
              onChange={props.onChangeHandler} 
            ></input>
          </div>
          <div className="w-60 h-24 ">
            <label className="m-2">Intitulé du poste</label>
            <input
            placeholder="Saisissez l'intitulé du poste pour cette entreprise"
              type="text"
              name="position"
              className="w-60 h-14 rounded-sm shadow-md"
              onChange={props.onChangeHandler} 
            ></input>
          </div>
        </div>

        <div className="w-60 h-10 space-y-0 mb-4 ">
          <label className="m-2">Ville</label>
          <input
            type="text"
            name="Location"
            className="w-60 h-14 rounded-sm shadow-md"
            onChange={props.onChangeHandler} 
          ></input>
        </div>

        <div className=" flex flex-row mt-10  h-24 space-x-10  ">
          <div className="w-60 h-24">
            <label className="m-2 ">Debut</label>
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
          </div>
          <div className="w-60 h-40">
            <label className="m-2">Fin du poste</label>
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
          </div>
        </div>

        <div className="h-40 w-80 ">
          <label>Description du poste</label>
          <textarea
            type="text"
            name="description"
            placeholder="Vos compétences et technologies utilisées pour ce poste"
            className="w-80 h-32 rounded-sm  p-1 shadow-md"
            onChange={props.onChangeHandler}
          ></textarea>
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
