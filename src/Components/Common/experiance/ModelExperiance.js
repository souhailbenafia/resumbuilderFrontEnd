import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import DoneIcon from "@mui/icons-material/Done";
import DatePicker from "@mui/lab/DatePicker";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";


const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    height: 600,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    borderRadius: 5,
    padding: "50px",
  };
const Modelexperiance = (props) => {

  const [value, setValue] = React.useState(new Date());
  const [endValue, setEndValue] = React.useState(new Date());



    return (
        <div>
                <Modal
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form className="flex flex-col place-items-center p-8" onSubmit={props.UpdateSubmitHandlar}>


          <div className="flex flex-col ">
        <div className=" flex flex-row  space-x-10    ">
          <div className="w-60 h-24">
            <label className="m-2 ">Nom de l'entreprise</label>
            <input
            placeholder="Exemple : SouhailDev (facultatif)"
              type="text"
              name="company"
              className="w-60 h-14 p-1 rounded-sm shadow-md"
              defaultValue={props.experiance.company}
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
              defaultValue={props.experiance.position}
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
            defaultValue={props.experiance.Location}
            
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
               defaultValue={props.experiance.Start}
                value={value}
                 onChange={(newValue) => {
                  setValue(newValue)
                  props.setUpdateForm(
                    {
                      ...props.updateForm,
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
               defaultValue={props.experiance.End}
                value={endValue}
                onChange={(newValue) => {
                 setEndValue(newValue)
                 props.setUpdateForm(
                    {
                      ...props.updateForm,
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
          defaultValue={props.experiance.description}
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
        </Box>
      </Modal>
            
        </div>
    );
}

export default Modelexperiance;
