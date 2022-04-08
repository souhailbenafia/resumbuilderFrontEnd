import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import DoneIcon from "@mui/icons-material/Done";
import { FormControl, MenuItem, Select } from "@mui/material";
const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    height: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    borderRadius: 5,
    padding: "50px",
  };

export default function ModelLangue(props) {
  return (
    <div>
         <Modal
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form className="flex flex-col place-items-center  space-y-4 p-8" onSubmit={props.UpdateSubmitHandlar}>
          <div className='    m-2 h-14 w-full l'>
            <input   defaultValue={props.langue.languge} onChange={props.onChangeHandler} className='mt-1 shadow-md w-full h-14' placeholder='Nom du certif....' type ="text" name='name'  />
            </div>

            <FormControl className="shadow-md w-full bg-white m-2  ">
                <Select
                  defaultValue={ props.langue.niveau}
                  name="Niveau"
                  onChange={props.onChangeHandler}
                  placeholder="Choisir votre Niveau"
                >
                  <MenuItem value="A1">A1 </MenuItem>
                  <MenuItem value="A2"> A2 </MenuItem>
                  <MenuItem value="B1"> B1 </MenuItem>
                  <MenuItem value="B2">B2</MenuItem>
                  <MenuItem value="c">c </MenuItem>
                  <MenuItem value="c1"> c1 </MenuItem>
                </Select>
              </FormControl>

              
              <FormControl className="shadow-md  w-full bg-white  m-2 ">
                <Select
                defaultValue={props.langue.fluency}
                  name="Fluency"
                  onChange={props.onChangeHandler}
                  placeholder="Choisir votre Niveau"
                >
                  <MenuItem value="Beginner">Beginner </MenuItem>
                  <MenuItem value="Intermediate"> Intermediate </MenuItem>
                  <MenuItem value="Advanced"> Advanced </MenuItem>
                  <MenuItem value="Expert">Expert</MenuItem>
                </Select>
              </FormControl>
              
            <div className='  flex place-content-end  m-2 pt-3 '> 
            <button  type="submit" className='rounded-xl bg-green-500  p-2 hover:bg-green-600   shadow-md  text-center text-white'><DoneIcon  fontSize='small'color='inherit'/></button>
       </div>
          </form>

       
        </Box>
      </Modal>
    </div>
  )
}
