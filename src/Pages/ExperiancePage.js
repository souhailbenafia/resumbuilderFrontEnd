import React ,{ useState, useEffect }from 'react'
import Certification from '../Components/Common/certification/certification '
import NavBar from '../Components/Common/navBar/NavBar'
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import { Link } from 'react-router-dom';
import Experiance from '../Components/Common/experiance/Experiance';
import axios from 'axios';
import Listexperiance from '../Components/Common/experiance/ListExperiance';

function ExperiancePage() {

  const [expeiances, setExpeiances] = useState([]);
  const [form, setform] = useState({ "UserId": localStorage.getItem('userId') })
  const [i, seti] = useState(1)

  const onChangeHandler = (e) => {
    setform(
      {
        ...form,
        [e.target.name]: e.target.value
      }
    )

  }
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    e.target.reset();
    console.log(form)
    await axios.post('https://localhost:7154/api/experiance/add', form)
      .then(
        res => {
          console.log(res.data.message)
          setform({ "UserId": localStorage.getItem('userId') })
        }
      )
    setTimeout(() => {

    }, 500000)

    seti({ ...i, i: i })

  }

  const OnDelete = async (id) => {
    await axios.delete(`https://localhost:7154/api/experiance/delete?id=${id}`)
      .then(res => {

      }
      )
    seti({ ...i, i: 1 })
  }

  useEffect(async () => {
    await axios.get(`https://localhost:7154/api/experiance/getbyuser?id=${localStorage.getItem('userId')}`).then(res => {
      setExpeiances(res.data)



    })


  }, [i]);

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
            <ArrowBackIosNewRoundedIcon className='text-white' />
          </Link>
        </div>



        <div className='w-5/6'>



          <NavBar />

          <p className='mt-10 ml-5 text-gray-500 font-bold font-serif text-6xl'>1/6</p>

          <h3 className=' mt-10 ml-5 text-2xl text-gray-500 font-bold font-serif'>Vos certifications</h3>

          <hr className=' mt-6 w-2/3 border mx-auto font-bold ' />




          <Experiance form={form} setform={setform} onChangeHandler={onChangeHandler} onSubmitHandler={onSubmitHandler} />

          <div className='mx-auto  w-5/6 grid grid-cols-2 '>

            {expeiances.map((list) => (
              <div key={list.id} className="flex place-items-center">
                <Listexperiance experiance={list} seti={seti} key={list.id} OnDelete={OnDelete} />
              </div>
            ))}


          </div>

        </div>



        <div className=' grid grid-cols-1  place-items-center  h-full w-1/12'>
          <Link to={'/Interest'} className='   grid grid-cols-1  place-items-center p-2 h-14 w-14 rounded-full bg-rose-500'>
            <ArrowForwardIosRoundedIcon className='text-white' />
          </Link>
        </div>

      </div>
    </div>
  )
}

export default ExperiancePage