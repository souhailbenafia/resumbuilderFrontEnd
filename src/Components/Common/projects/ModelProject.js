import React from 'react'
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import DoneIcon from "@mui/icons-material/Done";
import DatePicker from "@mui/lab/DatePicker";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { FormControl } from '@mui/material';


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
export default function ModelProject(props) {
    const [value, setValue] = React.useState(new Date());


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
                        <div className=" flex flex-row  space-x-10    ">
                            <div className="w-60 h-24">
                                <label className="m-2 ">Nom du projet</label>
                                <input
                                    placeholder="Exemple : Todo list"
                                    type="text"
                                    name="name"
                                    className="w-60 h-14 p-1 rounded-sm shadow-md"
                                    defaultValue={props.project.name}
                                ></input>
                            </div>
                            <div className="w-60 h-24 ">
                                <label className="m-2">Lien du projet</label>
                                <input
                                    placeholder="Lien du project"
                                    type="text"
                                    name="link"
                                    className="w-60 h-14 rounded-sm shadow-md"
                                    defaultValue={props.project.link}
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
                                        defaultValue={props.project.date}
                                        onChange={(newValue) => {
                                            setValue(newValue);
                                            props.setUpdateForm(
                                                {
                                                  ...props.updateForm,
                                                    "Date": newValue
                                                }
                                            )
                                        }}
                                        renderInput={(params) => <TextField {...params} />}
                                    />
                                </LocalizationProvider>
                            </FormControl>
                        </div>

                        <div className="h-40 w-80 ">
                            <label>Description du projet</label>
                            <textarea
                               defaultValue={props.project.description}
                                type="text"
                                name="description"
                                placeholder="Vos compétences et technologies utilisées pour ce poste"
                                className="w-80 h-32 rounded-sm  p-1 shadow-md"
                            ></textarea>
                        </div>

                        <div className=" flex flex-row justify-end ">


                        <div className='  w-10 m-2 pt-4 '> 
            <button  type="submit" className='rounded-xl bg-green-500  p-2 hover:bg-green-600   shadow-md  text-center text-white'><DoneIcon  fontSize='small'color='inherit'/></button>
           </div>
        
                        </div>

                    </form>
                </Box>
            </Modal>

        </div>
    )
}
