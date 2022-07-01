import React from 'react'
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import DoneIcon from "@mui/icons-material/Done";
import DatePicker from "@mui/lab/DatePicker";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { FormControl, Slider } from '@mui/material';


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

export default function ModelInfo(props) {
  return (
    <div>
    <Modal
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
    >
        <Box sx={style}>
            <form className="flex flex-col " onSubmit={props.UpdateSubmitHandlar}>
            <h2 className=" text-slate-700 font-serif font-bold  ">
            Number of years of corporate experience as a developer
      </h2>
      <div className=" m-4">
        <Box width={500}>
          <Slider
            size="medium"
            defaultValue={props.info.yearOfExpirence}
            aria-label="Small"
            valueLabelDisplay="auto"
            color="secondary"
            step={1}
            max={20}
            onChange={props.onChangeHandler} 
            name ="yearOfExpirence"
          />
        </Box>
      </div>
<div className=" flex flex-row  space-x-10    ">
  <div className="w-60 h-24">
    <label className="m-2 ">Address</label>
    <input
    placeholder="Exemple : Rue de Paris"
    defaultValue={props.info.address}
      type="text"
      name="address"
      className="w-60 h-14 p-1 rounded-sm shadow-md"
      onChange={props.onChangeHandler} 
    ></input>
  </div>
  <div className="w-60 h-24 ">
    <label className="m-2">Description</label>
    <input
    defaultValue={props.info.info}
    placeholder="Lien du project"
      type="text"
      name="info"
      className="w-60 h-14 rounded-sm shadow-md"
      onChange={props.onChangeHandler} 
    ></input>
  </div>
</div>

<div className="h-40 w-80 ">
  <label>Biographie</label>
  <textarea
  defaultValue={props.info.description}
    onChange={props.onChangeHandler} 
    type="text"
    name="description"
    placeholder="Describe your self "
    className="w-80 h-32 rounded-sm  p-1 shadow-md"
  ></textarea>
</div>

<div  className=" flex flex-row justify-end ">


<div className='   m-2 rounded-xl bg-green-600  p-2 hover:bg-green-500'> 
    <button  onClick={props.handleSubmit}className=' h-10 shadow-md text-center text-white'><DoneIcon  fontSize='medium'color='inherit'/></button>
    </div>
</div>

            </form>
        </Box>
    </Modal>

</div>
  )
}
