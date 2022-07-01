import React from 'react'
import DoneIcon from '@mui/icons-material/Done';

function Interest(props) {

  return (
    <form className='flex flex-col' onSubmit={props.onSubmitHandler} name='interest'>

      <div className='flex flex-row'>

        <div>
          <div className='    m-2 w-80 '>
            <input onChange={props.onChangeHandler} className='mt-1 shadow-md  rounded-md w-80 h-14' type="text" name='name' placeholder='Exemple : Football' />
          </div>
          {props.errors.Name && (  <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
            {props.errors.Name}
        </span>)}
        </div>
        <div className='  w-10 m-2 pt-4 '>
          <button type="submit" className='rounded-xl bg-green-500  p-2 hover:bg-green-600   shadow-md  text-center text-white'><DoneIcon fontSize='small' color='inherit' /></button>
        </div>
        <div className='   h-14 m-2 w-10'>
          <input value={localStorage.getItem('userId')} onChange={props.onChangeHandler} className=' hidden mt-1 shadow-md w-48 h-14' type="text" name='userId' />
        </div>

        </div>


    </form>
  )
}

export default Interest