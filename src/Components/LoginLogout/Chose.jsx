import React from 'react';


const Welcome = () => {
    return (
        <div className=" flex "
        
        >
            <button className=" h-screen w-1/2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105"  
            style={{ 
      backgroundImage: `url("https://process.filestackapi.com/auto_image/compress/KLD4JhCQTi7u5GImLYCg")` 
    }} 
            >
                <div className=" grid grid-rows-2 transition duration-150 ease-out hover:ease-in backdrop-contrast-50 bg-white/40 h-screen">

                
                <div className="" >
                    logo
                </div>
                <div>
                <div className=" text-5xl text-white font-mono font-black mb-8 -skew-y-6">
                  <p>
                      CREATE A RECRUITER <br/> ACCOUNT
                  </p>
              </div>
              

             <div className=" m-auto w-1/3 hover:-translate-y-1 ">
                <div className=" rounded-lg  -skew-y-6 bg-yellow-500 p-2" > 
                   <h4 className=" center  font-mono font-black text-3xl text-center text-blue-600"> Meet Companies</h4>
                   </div>
             </div>
                </div>
                </div>


            </button>
            <button className="h-screen w-1/2 " 
             style={{ 
      backgroundImage: ` url("https://process.filestackapi.com/auto_image/compress/VPvVyWktRI2ttYaqaX9J")`}}
       >
              <div className=" grid grid-rows-2 transition duration-150 ease-out hover:ease-in backdrop-contrast-50 bg-purple-800/40 h-screen">

           <div>
           <div className="flex justify-end mt-5 mr-10">
                        <p className="flex items-end   mr-4 mb-4 text-white font-bold">
                           Already have an account? 
                        </p>
                        <button className="text-white border-4 hover:text-pink-600 hover:bg-white  h rounded-3xl p-3 font-bold">LOGIN NOW</button>
            </div>
           </div>
            <div><div className="font-mono font-black text-5xl text-white mb-8 -skew-y-6">
                  <p>
                      CREATE A DEVELOPER <br/> ACCOUNT
                  </p>
              </div>
                <div className=" m-auto w-1/3">

                <div className=" rounded-lg -skew-y-6 bg-pink-600 p-2"> 
                <h4 className="center  font-mono font-black text-3xl text-center text-white"> Meet Developers</h4></div>
                
            
           
           </div></div>
           </div>
               
           

            </button>
        </div>
    );
}

export default Welcome;
