import  React,{useState} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import DeleteIcon from '@mui/icons-material/Delete';
import EditRoundedIcon from '@mui/icons-material/EditRounded';

import axios from 'axios';
import ModelLangue from './ModelLangue';

export default function ListLangue(props) {

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [updateForm, setUpdateForm] = useState(props.langue);

    const onChangeHandler =(e)=>{
        setUpdateForm
        ({
          ...updateForm,
          [e.target.name] : e.target.value 

          
        })
    }

  
    const UpdateSubmitHandlar =  async(event)=>{
            event.preventDefault();

            await axios.put('https://localhost:7154/api/language/edit', updateForm).then( res => {
                console.log(res.data.message)}

            )
            setTimeout(()=>{
            
            },500000)
            console.log(updateForm)

            props.seti([1])           
          
    }
  return (
    <Card  className =" w-full m-4 shadow-md rounded-md ">
    <CardContent className="flex flex-col ">
        <div>
      <p className ="m-2 text-sm text-gray-500 font-bold font-serif">
        Langue:
        </p>
        <p className ="m-2 ml-6  text-md text-purple-800 font-bold font-serif">{props.langue.languge}</p>
        </div>
        <div>
      <p className ="m-2 text-sm text-gray-500 font-bold font-serif">
        Niveau:
      </p>
      <p className ="m-2 ml-6  text-sm text-purple-800 font-bold font-serif">{ props.langue.niveau}</p>
      </div>
      <div>
      <p className ="m-2 text-sm text-gray-500 font-bold font-serif">
        Fluency:
        
      </p>
      <p className ="m-2 ml-6  text-sm text-purple-800 font-bold font-serif">
      {props.langue.fluency}
      </p>
     </div>
    </CardContent>
    <div className="flex place-content-end">
    <div className='   m-2 pt-3 '> 
            <button  onClick={handleOpen} className='   rounded-xl bg-green-500  p-2 hover:bg-green-600   shadow-md  text-center text-white'><EditRoundedIcon  fontSize='small'color='inherit'/></button>
       </div>
       <div className='  pt-3 m-2 '> 
            <button  onClick={()=>props.OnDelete(props.langue.id)} className=' rounded-xl bg-red-500  p-2 hover:bg-red-400 shadow-md text-center text-white'><DeleteIcon  fontSize='small'color='inherit'/>
            </button>
            </div>
      
    </div>
    <ModelLangue langue={props.langue} open={open}  UpdateSubmitHandlar={UpdateSubmitHandlar}  onChangeHandler={onChangeHandler} handleClose={handleClose}/>
  </Card>
  )
}
