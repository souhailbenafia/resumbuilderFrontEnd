import React from 'react'
import ApartmentIcon from '@mui/icons-material/Apartment';
import LensIcon from '@mui/icons-material/Lens';
import { format } from 'date-fns';

export default function ExperienceContent(props) {
  return (
    <div className='flex flex-col m-2'>
    <h2 className='m-4 text-3xl  font-extrabold text-indigo-800'>Experiences</h2>
    {
        props.expeiances.map((el) => {
            return <div key={el.id}>
                <div className='flex flex-row '>
                    < LensIcon color="action" fontSize='small' className='pt-1 m-2 w-4' />
                    <h2 className='m-2 text-base  font-extrabold text-indigo-800'>{el.position}</h2>
                </div>
                <p className='mx-2 text-sm  font-serif '>
                {format( new Date(el.start),"yyyy")} / {format( new Date(el.end)," yyyy")}
                </p>
                <div className='flex flex-row '>
                    <ApartmentIcon color="action" fontSize='small' className='  pb-1 m-2 w-4' ></ApartmentIcon>
                    <h2>{el.company}</h2>
                </div>

                <p className='m-2 text-sm  font-serif '>
                            {el.description}
                        </p>

                <hr className='   rounded-lg   bg-gray-500 border-2  border-gray-500 mx-auto w-2/3 my-3 font-black '></hr>
            </div>
        })
    }
</div>
  )
}
