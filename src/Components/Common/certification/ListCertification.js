import  React,{useState} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import DeleteIcon from '@mui/icons-material/Delete';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import Modelcertification from './ModelCertification';
import axios from 'axios';


const Listcertification = (props) => {

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [updateForm, setUpdateForm] = useState(props.certif);

    const onChangeHandler =(e)=>{
        setUpdateForm
        ({
          ...updateForm,
          [e.target.name] : e.target.value 

          
        })
    }

  
    const UpdateSubmitHandlar =  async(event)=>{
            event.preventDefault();

            await axios.put('https://localhost:7154/api/certification/edit', updateForm).then( res => {
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
       certificat name:
        </p>
        <p className ="m-2 ml-6  text-md text-purple-800 font-bold font-serif">{props.certif.name}</p>
        </div>
        <div>
      <p className ="m-2 text-sm text-gray-500 font-bold font-serif">
        Accusation date:
      </p>
      <p className ="m-2 ml-6  text-sm text-purple-800 font-bold font-serif">{ props.certif.aquisationDate}</p>
      </div>
      <div>
      <p className ="m-2 text-sm text-gray-500 font-bold font-serif">
        Source:
        
      </p>
      <p className ="m-2 ml-6  text-sm text-purple-800 font-bold font-serif">
      {props.certif.source}
      </p>
     </div>
    </CardContent>
    <div className="flex place-content-end">
    <div className='   m-2 pt-3 '> 
            <button  onClick={handleOpen} className='   rounded-xl bg-green-500  p-2 hover:bg-green-600   shadow-md  text-center text-white'><EditRoundedIcon  fontSize='small'color='inherit'/></button>
       </div>
       <div className='  pt-3 m-2 '> 
            <button  onClick={()=>props.OnDelete(props.certif.id)} className=' rounded-xl bg-red-500  p-2 hover:bg-red-400 shadow-md text-center text-white'><DeleteIcon  fontSize='small'color='inherit'/>
            </button>
            </div>
      
    </div>
    <Modelcertification certif={props.certif} open={open}  UpdateSubmitHandlar={UpdateSubmitHandlar}  onChangeHandler={onChangeHandler} handleClose={handleClose}/>
  </Card>
    );
}

export default Listcertification;
