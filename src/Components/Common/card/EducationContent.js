import { format } from 'date-fns'
import React from 'react'
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import LensIcon from '@mui/icons-material/Lens';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';

export default function EducationContent(props) {
  return (
    <div className='flex flex-col m-2'>
            <h2 className='m-4 text-lg  font-extrabold text-indigo-800'>Educations</h2>
            {
                props.educations.map((el) => {
                    return <div key={el.id}>
                        <div className='flex flex-row '>
                            < LensIcon color="action" fontSize='small' className='pt-1 m-2 w-4' />
                            <h2 className='m-2 text-base  font-extrabold text-indigo-800'>{el.diploma}</h2>
                        </div>

                        <p className='m-2 text-sm  font-serif '>
                        {format( new Date(el.start),"yyyy")} / {format( new Date(el.end)," yyyy")}
                        </p>
                        <div className='flex flex-row '>
                            <AccountBalanceIcon color="action" fontSize='small' className='  pb-1 m-2 w-4' ></AccountBalanceIcon>
                            <h2>{el.university}</h2>
                        </div>

                        <hr className='   rounded-lg   bg-gray-500 border-2  border-gray-500 mx-auto w-2/3 my-3 font-black '></hr>
                    </div>
                })
            }
        </div>
  )
}
 