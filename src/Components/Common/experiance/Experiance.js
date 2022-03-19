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
  const [value, setValue] = React.useState(null);
  const [endValue, setEndValue] = React.useState(null);
  return (
    <form className="m-4 ">
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
          />
        </Box>
      </div>

      <div className="flex flex-col ">
        <div className=" flex flex-row  space-x-10    ">
          <div className="w-60 h-24">
            <label className="m-2 ">Nom de l'entreprise</label>
            <input
            placeholder="Exemple : WeLoveDevs.com (facultatif)"
              type="text"
              name="company"
              className="w-60 h-14 p-1 rounded-sm shadow-md"
            ></input>
          </div>
          <div className="w-60 h-24 ">
            <label className="m-2">Intitulé du poste</label>
            <input
            placeholder="Saisissez l'intitulé du poste pour cette entreprise"
              type="text"
              name="position"
              className="w-60 h-14 rounded-sm shadow-md"
            ></input>
          </div>
        </div>

        <div className="w-60 h-10 space-y-0 mb-4 ">
          <label className="m-2">Ville</label>
          <input
            type="text"
            name="location"
            className="w-60 h-14 rounded-sm shadow-md"
          ></input>
        </div>

        <div className=" flex flex-row mt-10  h-24 space-x-10  ">
          <div className="w-60 h-24">
            <label className="m-2 ">Debut</label>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
              color="'#fff"
               views={['year', 'month']}
                value={value}
                onChange={(newValue) => {
                  setValue(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
          </div>
          <div className="w-60 h-40">
            <label className="m-2">Fin du poste</label>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
              color='inherit'
               views={['year', 'month']}
                value={endValue}
                onChange={(endValue) => {
                  setEndValue(endValue);
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
          </div>
        </div>

        <div className="h-40 w-80 ">
          <label>Description du poste</label>
          <textarea
            
            type="text"
            name="descroption"
            placeholder="Vos compétences et technologies utilisées pour ce poste"
            className="w-80 h-32 rounded-sm  p-1 shadow-md"
          ></textarea>
        </div>

        <div  className=" flex flex-row justify-end ">
        <div className='   m-2 rounded-xl bg-red-600  p-2 hover:bg-red-500'> 
            <button className=' h-10 shadow-md  text-center text-white'><DeleteIcon  fontSize='medium'color='inherit'/></button>
       </div>

       <div className='   m-2 rounded-xl bg-green-600  p-2 hover:bg-green-500'> 
            <button  onClick={props.handleSubmit}className=' h-10 shadow-md text-center text-white'><DoneIcon  fontSize='medium'color='inherit'/></button>
            </div>
        </div>
        
      </div>
    </form>
  );
}

export default Experiance;
