import React from 'react'
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import LensIcon from '@mui/icons-material/Lens';

export default function ProjectContent(props) {
    return (
        <div className='flex flex-col m-2'>
            <h2 className='m-4 text-lg  font-extrabold text-indigo-800'>Project</h2>
            {
                props.projects.map((el) => {
                    return <div key={el.id}>
                        <div className='flex flex-row '>
                            <LensIcon color="action" fontSize='small' className='pt-1 m-2 w-4' ></LensIcon>
                            <h2 className='m-2 text-base  font-extrabold text-indigo-800'>{el.name}</h2>
                        </div>

                        <p className='m-2 text-sm  font-serif '>
                            {el.description}
                        </p>
                        <div className='flex flex-row '>
                            <InsertLinkIcon color="action" fontSize='small' className=' m-2 w-4' ></InsertLinkIcon>
                            <h2>{el.link}</h2>
                        </div>

                        <hr className='   rounded-lg   bg-gray-500 border-2  border-gray-500 mx-auto w-2/3 my-3 font-black '></hr>
                    </div>
                })
            }
        </div>

    )
}
