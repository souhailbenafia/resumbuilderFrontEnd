import { Box, Slider } from "@mui/material";
import React from "react";
import DoneIcon from '@mui/icons-material/Done';


export default function info(props) {
  const  createImgPath = (serverPath) => {
    return `https://localhost:7154/${serverPath}`;
  }
  return (
 

<form className="flex flex-col  justify-center" onSubmit={props.onSubmitHandler}> 

<h2 className=" text-slate-700 font-serif font-bold  ">
Number of years of corporate experience as a developer
      </h2>
      <div className=" m-4">
        <Box width={700}>
          <Slider
            size="medium"
            defaultValue={5}
            aria-label="Small"
            valueLabelDisplay="auto"
            color="secondary"
            step={1}
            max={20}
            onChange={props.onChangeHandler} 
            name ="yearOfExpirence"
          />
        </Box>
        {props.errors.eearOfExpirence && (  <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
            {props.errors.yearOfExpirence}
        </span>)}
      </div>
<div className=" flex flex-row  space-x-10    ">
  <div className="w-60 h-24">
    <label className="m-2 ">Adress</label>
    <input
    placeholder="Exemple : Rue de Paris"
      type="text"
      name="address"
      className="w-60 h-14 p-1 rounded-sm shadow-md"
      onChange={props.onChangeHandler} 
    ></input>
     {props.errors.address && (  <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
            {props.errors.address}
        </span>)}
  </div>

 
  <div className="w-60 h-24 ">
    <label className="m-2">Description</label>
    <input
    placeholder="Lien du project"
      type="text"
      name="info"
      className="w-60 h-14 rounded-sm shadow-md"
      onChange={props.onChangeHandler} 
    ></input>
     {props.errors.info && (  <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
            {props.errors.info}
        </span>)}
  </div>
</div>

<div className="h-40 w-[520px] ">
  <label>Biographie</label>
  <textarea
    onChange={props.onChangeHandler} 
    type="text"
    name="description"
    placeholder="Describe your self "
    className="w-[520px] h-32 rounded-sm  p-1 shadow-md"
  ></textarea>
   {props.errors.description && (  <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
            {props.errors.description}
        </span>)}
</div>
<div className="flex mt-8 w-[520px] bg-white">
    <div className="rounded-lg shadow-xl w-[520px] ">
        <div className="m-4">
            <label className="inline-block mb-2 text-gray-500">Upload
                Image(jpg,png,svg,jpeg)</label>
            <div className="flex items-center justify-center w-full">
                <label className="flex flex-col w-full h-32 border-4 border-dashed hover:bg-gray-100 hover:border-gray-300">
                    <div className="flex flex-col items-center justify-center pt-1">
                       {/* { <svg xmlns="http://www.w3.org/2000/svg"
                            className="w-12 h-12 text-gray-400 group-hover:text-gray-600" viewBox="0 0 20 20"
                            fill="currentColor">
                            <path fillRule="evenodd"
                                d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                                clipRule="evenodd" />
                        </svg>} */}
                        <img className="w-40 h-24 text-gray-400 group-hover:text-gray-600 "src={createImgPath(props.src)}/>
                        <p className="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                            Select a photo</p>
                    </div>
                    <input type="file" className="opacity-0" onChange={props.changeImg}/>
                </label>
            </div>
        </div>
        {/* <div class="flex p-2 space-x-4">
            <button class="px-4 py-2 text-white bg-red-500 rounded shadow-xl">Cannel</button>
            <button class="px-4 py-2 text-white bg-green-500 rounded shadow-xl" onClick={props.submitForm} >Create</button>
        </div> */}
    </div>
</div>

<div  className=" flex flex-row justify-end ">


<div className='   m-2 rounded-xl bg-green-600  p-2 hover:bg-green-500'> 
    <button  onClick={props.handleSubmit}className=' h-10 shadow-md text-center text-white'><DoneIcon  fontSize='medium'color='inherit'/></button>
    </div>
</div>

</form>
  )
}
