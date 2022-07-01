import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function () {

    
    const  createImgPath = (serverPath) => {
        return `https://localhost:7154/${serverPath}`;
      }
    const [infos, setinfos] = useState([]);
    const [user, setuser] = useState([]);
    useEffect(() => {

        axios.get(`https://localhost:7154/api/info/getbyuser?id=${localStorage.getItem('userId')}`).then(res => {
            setinfos(res.data)
        })
        axios.get(`https://localhost:7154/api/UserDetails/get?id=${localStorage.getItem('userId')}`).then(res => {
            setuser(res.data)
        })


    }, []);
    return (
        <div className='flex items-center justify-center  '>
            {infos.map((el) => {
                return <div className='w-full h-44 j   flex flex-row' key={el.id}>
                    <img  src={createImgPath(el.imageSource)} className=" mt-5 h-32 rounded-full w-32 border-2 border-gray-300"  />

                    <div className=' ml-5 mt-5 mb-2 flex flex-col '>
                        <h3 className='uppercase font-extrabold italic text-2xl '>
                              {user.firstName} {user.lastName}
                        </h3>
                        <p className=' uppercase text-base  font-bold w-96  '>
                            {el.info}

                        </p>
                    </div>

                </div>
            })
            }


        </div>
    )
}
