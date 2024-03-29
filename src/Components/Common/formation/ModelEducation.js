import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import DoneIcon from "@mui/icons-material/Done";

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

const Modeleducation = (props) => {
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
                        <div className="m-2 h-14 w-full ">
                            <input defaultValue={props.education.university}  onChange={props.onChangeHandler} className='mt-1 shadow-md w-full  h-14' placeholder='Unv college ..' type="text" name='University' />
                        </div>
                        <div className='  m-2 h-14 w-full  '>
                            <input defaultValue={props.education.start} onChange={props.onChangeHandler} className='pl-6 mt-1 w-full  h-14' type="date" name="Start" placeholder='end' />
                        </div>

                        <div className=' m-2 h-14 w-full '>
                            <input defaultValue={props.education.end} onChange={props.onChangeHandler} className=' pl-6 mt-1 w-full  h-14' type="date" placeholder='End' name="End" />
                        </div>

                        <div className='   m-2 h-14 w-full  '>
                            <input defaultValue={props.education.diploma} onChange={props.onChangeHandler} className='mt-1  w-full  h-14' type="text" name='Diploma' placeholder='Diplôme : Bachelors degree in computer science, PhD...' />
                        </div>

                        <div className='  hidden h-14 m-2 w-full '>
                            <input value={localStorage.getItem('userId')} onChange={props.onChangeHandler} className=' hidden mt-1 shadow-md w-full h-14' type="text" name='userId' />
                        </div>

                        <div className='  flex place-content-end  m-2 pt-3 '>
                            <button type="submit" className='rounded-xl bg-green-500  p-2 hover:bg-green-600   shadow-md  text-center text-white'><DoneIcon fontSize='small' color='inherit' /></button>
                        </div>
                    </form>
                </Box>
            </Modal>

        </div>
    );
}

export default Modeleducation;
