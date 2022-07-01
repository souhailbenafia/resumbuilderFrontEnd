import React, { useEffect, useState } from 'react'
import { forwardRef } from 'react';
import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import MaterialTable from 'material-table';
import axios from 'axios';
import NavBar from '../Components/Common/navBar/NavBar';
import { Chip } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { set } from 'date-fns';



export default function RecruterHome() {
  let navigate = useNavigate();
  const [id, setid] = useState()
  



  const [data, setdata] = useState()

  const columns = [
   
    { title: 'id',  hidden: true, field: 'Id' },
    { title: 'Nom', field: 'firstName' },
    { title: 'Prenom', field: 'lastName' },
    { title: 'Email', field: 'email' },
    { title: 'Numero telephonique', field: 'phoneNumber', type: 'numeric' },
    { title: "Experience", field: "info.yearOfExpirence" },
    { title: "poste", field: "info.info"},
    { title: "Competence", field: "skills",with:"50px" ,render: rowData => <> {rowData.skills.map((x)=> x.name )} </>}
    

    
  ];

  useEffect(() => {
    axios.get(`https://localhost:7154/api/UserDetails/getAllUsers`).then(res => {
      setdata(res.data)
  })
   
  }, [])
  return (
   
    <div className='bg-gray-50 flex flex-row h-full'>

    <div className=' hidden sm:block w-1/3 min-h-screen 
      bg-gradient-to-b from-purple-300 to-purple-400
      ' >
    
      <img className='h-full bg-scroll w-full' src="https://process.filestackapi.com/resize=width:1000/aloLdo1SOyTgE86Ep9ow">
     
      </img>
    </div>
    
    <div className='w-3/4 min-h-screen overflow-y-auto  flex flex-row justify-center'>

        <div className='w-full'>      
            <MaterialTable className="w-full"
  
  title="Liste de développeur "
      columns={columns}
      data={data}
      actions={[
        {
          icon: 'save',
          tooltip: 'Save User',
          onClick: (event, rowData) => 
          {
            setid(rowData.Id)
            navigate("",{ id: id },{ replace: true })
         }
      }]}
      
      options={{
        sorting:true,
        search:true,
        filtering:true,
        rowStyle: {
          backgroundColor: '#EEE',
        }
        
        
      }}
/>

</div>

        </div>
       

        </div>
       






  )
}
