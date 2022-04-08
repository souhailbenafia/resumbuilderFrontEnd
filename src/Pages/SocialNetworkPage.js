import React , { useState, useEffect }from 'react'
import Certification from '../Components/Common/certification/certification '
import NavBar from '../Components/Common/navBar/NavBar'
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import { Link } from 'react-router-dom';
import Socialnetwork from '../Components/Common/social network/Socialnetwork';
import axios from 'axios';
import ListSocialNetwork from '../Components/Common/social network/ListSocialNetwork';



function SocialNetwork() {
  const initialValues = { Username: "" ,Link:""};
  const [error,setError]=useState(initialValues)
  const [error1,setError1]=useState(initialValues)
  const [error2,setError2]=useState(initialValues)
  const [socialnetworks, setsocialnetworks] = useState([]);
  const [form, setform] = useState({ "UserId": localStorage.getItem('userId')   , "Network": "Linkdin"})
  const [form1, setform1] = useState({ "UserId": localStorage.getItem('userId') , "Network": "Gmail"})
  const [form2, setform2] = useState({ "UserId": localStorage.getItem('userId') , "Network": "GitHub"})
  const [i,seti] = useState(1)


  const onChangeHandler = (e) => {
    setform(
      {
        ...form,
        [e.target.name]: e.target.value
      }
    )
    setTimeout(()=>{
        
    },500000)
    console.log(form)

  }

  const onChangeHandler1 = (e) => {
    setform1(
      {
        ...form1,
        [e.target.name]: e.target.value
      }
    )

  }

  const onChangeHandler2 = (e) => {
    setform2(
      {
        ...form2,
        [e.target.name]: e.target.value
      }
    )

  }
 
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    e.target.reset();
   await  axios.post('https://localhost:7154/api/SocialNetwork/add', form)
      .then(
        res => {
          setError(initialValues);
          setform({ "UserId": localStorage.getItem('userId') })
        
        }
      ).catch(err=>{

        setError(err.response.data.errors);
     })
     setTimeout(()=>{
        
      },500000)
      
      seti({...i , i:i})

  }
  const onSubmitHandler1 = async (e) => {
    e.preventDefault();
    e.target.reset();
   await  axios.post('https://localhost:7154/api/SocialNetwork/add', form1)
      .then(
        res => {
          setError1(initialValues);
          setform({ "UserId": localStorage.getItem('userId') })
        
        }
      ).catch(err=>{

        setError1(err.response.data.errors);
     })
     setTimeout(()=>{
        
      },500000)
      
      seti({...i , i:i})

  }
  const onSubmitHandler2 = async (e) => {
    e.preventDefault();
    e.target.reset();
   await  axios.post('https://localhost:7154/api/SocialNetwork/add', form2)
      .then(
        res => {
          setError2(initialValues);
          setform({ "UserId": localStorage.getItem('userId') })
        
        }
      ).catch(err=>{

        setError2(err.response.data.errors);
     })
     setTimeout(()=>{
        
      },500000)
      
      seti({...i , i:i})

  }
  const OnDelete = async (id)=>{
    await axios.delete(`https://localhost:7154/api/SocialNetwork/delete?id=${id}`)
    .then(res=>{
      
     
    
   }
    )
    seti({...i , i:1})
   }

   useEffect(async () => {
    await axios.get(`https://localhost:7154/api/SocialNetwork/getbyuser?id=${localStorage.getItem('userId')}`).then(res => {
    setsocialnetworks(res.data)

   

  })


},[i]);

  return (
    <div className='bg-gray-50 flex flex-row h-full'>

    <div className=' hidden sm:block w-1/3 min-h-screen 
      bg-gradient-to-b from-purple-300 to-purple-400
      ' >
    
      <img className='h-full bg-scroll w-full' src="https://process.filestackapi.com/resize=width:1000/MFcDeCdsQPakzIKL8ccJ">
     
      </img>
    </div>
    
    <div className='w-3/4 min-h-screen overflow-y-auto  flex flex-row'>

        <div className='grid grid-cols-1  place-items-center h-full w-1/12'>
        <Link to={'/education'} className=' grid grid-cols-1  place-items-center p-2 h-14 w-14 rounded-full bg-rose-500'>
           <ArrowBackIosNewRoundedIcon className='text-white'/>
           </Link>
        </div>
        <div className='w-5/6'>

            <NavBar/>

            <p className='mt-10 ml-5 text-gray-500 font-bold font-serif text-6xl'>3/6</p>

            <h3 className=' mt-10 ml-5 text-2xl text-gray-500 font-bold font-serif'>Vos Réseau social</h3>

            <hr className= ' mt-6 w-2/3 border mx-auto font-bold '/> 

            <Socialnetwork 
             onChangeHandler={onChangeHandler} 
             onChangeHandler1={onChangeHandler1}
             onChangeHandler2={onChangeHandler2}
             onSubmitHandler={onSubmitHandler}
             onSubmitHandler1={onSubmitHandler1}
             onSubmitHandler2={onSubmitHandler2}
             error={error}
             error1={error1}
             error2={error2}/> 
         

            <div className='mx-auto  w-5/6 grid grid-cols-2 '>

{socialnetworks.map((list) => (
  <div key={list.id} className ="flex place-items-center">
    <ListSocialNetwork social={list} seti={seti} key={list.id} OnDelete={OnDelete}  />
  </div>
))}


</div>

        </div>
        <div className=' grid grid-cols-1  place-items-center  h-full w-1/12'>
           <Link to={'/Interest'} className='   grid grid-cols-1  place-items-center p-2 h-14 w-14 rounded-full bg-rose-500'>
           <ArrowForwardIosRoundedIcon className='text-white'/>
           </Link> 
        </div>

        </div>
        </div>

       
  )
}

export default SocialNetwork