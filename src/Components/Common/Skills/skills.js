import {React,  useState}from 'react'
import Button from "@mui/material/Button";
import ModelSkill from './ModelSkill';
import { Fab } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { grey } from '@mui/material/colors';
import RemoveCircleRoundedIcon from '@mui/icons-material/RemoveCircleRounded';

const lists =["Angular","Reat","Asp Dotnet Core"]

function Skills(props) {
  const [skillForm,setSkillForm]= useState()
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [level, setLevel] = useState('Beginner');

  const handleChangelevel = (e) => {
    setLevel(e.target.value);
    setSkillForm
    ({
      ...skillForm,
      [e.target.name] : e.target.value
    })
  }

   const  handleChangeSkill=(e)=> {
      setSkillForm
      ({
        ...skillForm,
        [e.target.name] : e.target.value
      })
    }



    const skillSubmitHandlar=(event)=> {

      event.preventDefault();
      console.log(skillForm)
    }
 
  return (
    <div> 
    <div>
<Fab onClick={handleOpen} variant="extended" color='inherit'>
<AddCircleIcon color={grey[200]} sx={{ mr: 1 }} />
<h5 className='font-bold text-gray-700'> Ajouter</h5>
</Fab>

<ModelSkill open={open}  skillSubmitHandlar={skillSubmitHandlar}  handleChangeSkill={handleChangeSkill} handleChangelevel={handleChangelevel} handleClose={handleClose}/>


</div>
<div className='flex  space-x-4 '> 


{lists.map((list) => (
 <div className=" rounded-2xl bg-purple-800 text-center text-white flex flex-row  p-2  w-fit  space-x-4 ">
          <div className='pt-1'>{list}
          </div>
         <div>
         <button>
          <RemoveCircleRoundedIcon/>
          </button>
         </div>
          </div>   
      ))}
     
  
</div>
</div>
  )
}


export default Skills