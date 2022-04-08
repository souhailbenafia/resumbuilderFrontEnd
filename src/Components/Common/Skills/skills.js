import {React,  useState}from 'react'
import Button from "@mui/material/Button";
import ModelSkill from './ModelSkill';
import { Fab } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { grey } from '@mui/material/colors';
import RemoveCircleRoundedIcon from '@mui/icons-material/RemoveCircleRounded';
import { LineStyle } from '@mui/icons-material';

const lists =["Angular","Reat","Asp Dotnet Core"]

function Skills(props) {
  const [skillForm,setSkillForm]= useState()
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div> 
    <div>


<ModelSkill error={props.errors} open={open}  onSubmitHandler={props.onSubmitHandler}  onChangeHandler={props.onChangeHandler} seti={props.seti} handleClose={handleClose}/>


</div>
<div className='grid grid-cols-4 p-4  '> 


{props.skills.map((list) => (
 <div  key ={list.id} className=" mt-2 rounded-2xl bg-purple-800 text-center text-white flex flex-row  p-2  w-fit  space-x-4 ">
          <div className='pt-1'>{list.name }
          </div>
         <div>
         <button>
          <RemoveCircleRoundedIcon onClick={()=>props.OnDelete(list.id)}/>
          </button>
         </div>
          </div>   
      ))}
     
  
</div>

<div className='m-2 mt-5  grid grid-row-1  place-items-end'>
<Fab onClick={handleOpen} variant="extended" color='inherit'>
<AddCircleIcon color={grey[200]} sx={{ mr: 1 }} />
<h5 className='font-bold text-gray-700'> Ajouter</h5>
</Fab>
</div>

</div>
  )
  
}


export default Skills