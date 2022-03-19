import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import DeleteIcon from "@mui/icons-material/Done";
import { FormControl, MenuItem, Select } from "@mui/material";

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

export default function ModelSkill(props) {
  return (
    <div>
      <Modal
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Quelles sont vos technos favorites?*
          </Typography>
          <form className="flex flex-col place-items-center">
            <div className="   m-2  ">
              <input
                className="mt-1   rounded-md w-80 h-14"
                type="text"
                name="skill"
                placeholder="Exemple : Anglais"
                onChange={props.handleChangeSkill}
              />
            </div>
            <div className="m-2">
              <FormControl className="shadow-md  m-2 w-80">
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={props.level}
                  name="level"
                  onChange={props.handleChangelevel}
                >
                  <MenuItem value="Beginner">Beginner </MenuItem>
                  <MenuItem value="Intermediate"> Intermediate </MenuItem>
                  <MenuItem value="Advanced"> Advanced </MenuItem>
                  <MenuItem value="Expert">Expert</MenuItem>
                </Select>
              </FormControl>
            </div>

            <div className=" flex  place-items-end   m-2 rounded-xl bg-green-600  p-2 hover:bg-green-500">
              <button 
                onClick={props.skillSubmitHandlar}
                type="submit"
                className="  h-10 shadow-md  text-center text-white"
              >
                <DeleteIcon fontSize="medium" color="inherit" />
              </button>
            </div>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
