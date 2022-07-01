import React, { useState, useEffect, useRef } from 'react'
import Certification from '../Components/cv/Certification'
import Education from '../Components/cv/Education'
import Experiance from '../Components/cv/Experiance'
import Info from '../Components/cv/Info'
import Interest from '../Components/cv/Interest'
import Langue from '../Components/cv/Langue'
import Project from '../Components/cv/Project'
import Skill from '../Components/cv/skill'
import SocialNetwork from '../Components/cv/SocialNetwork'
import HomeIcon from '@mui/icons-material/Home';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PersonIcon from '@mui/icons-material/Person';
import AppsIcon from '@mui/icons-material/Apps';
import axios from 'axios';
import { PDFExport, savePDF } from '@progress/kendo-react-pdf';


export default function CvPage(props) {
    const [educations, seteducations] = useState([]);
    const [expeiances, setExpeiances] = useState([]);
    const [certifications, setCertifications] = useState([]);
    const [projects, setprojects] = useState([]);
    const [skills, setSkills] = useState([]);
    const [langues, setLangues] = useState([]);
    const [intersets, setintersets] = useState([]);
    const [infos, setinfos] = useState([]);
    const [reseaux, setReseaux] = useState([]);
    const [user, setUser] = useState([]);
    const pdfExportComponent = useRef(null);

    const exportPDFWithComponent = () => {
        if (pdfExportComponent.current) {
          pdfExportComponent.current.save();
        }
      };


    const exportPDFWithMethod = () => {
        let element = document.querySelector('.cv') || document.body;
        savePDF(element, {
        paperSize: 'A4'
        });
    };
    

    useEffect(() => {
        axios.get(`https://localhost:7154/api/education/getbyuser?id=${localStorage.getItem('userId')}`).then(res => {
            seteducations(res.data)
        })
        axios.get(`https://localhost:7154/api/experiance/getbyuser?id=${localStorage.getItem('userId')}`).then(res => {
            setExpeiances(res.data)
        })
        axios.get(`https://localhost:7154/api/certification/getbyuser?id=${localStorage.getItem('userId')}`).then(res => {
            setCertifications(res.data)
        })
        axios.get(`https://localhost:7154/api/project/getbyuser?id=${localStorage.getItem('userId')}`).then(res => {
            setprojects(res.data)
        })
        axios.get(`https://localhost:7154/api/skill/getbyuser?id=${localStorage.getItem('userId')}`).then(res => {
            setSkills(res.data)
        })
        axios.get(`https://localhost:7154/api/language/getbyuser?id=${localStorage.getItem('userId')}`).then(res => {
            setLangues(res.data)
        })
        axios.get(`https://localhost:7154/api/interest/getbyuser?id=${localStorage.getItem('userId')}`).then(res => {
            setintersets(res.data)

        })
        axios.get(`https://localhost:7154/api/info/getbyuser?id=${localStorage.getItem('userId')}`).then(res => {
            setinfos(res.data)
        })
        axios.get(`https://localhost:7154/api/SocialNetwork/getbyuser?id=${localStorage.getItem('userId')}`).then(res => {
            setReseaux(res.data)
        })
        axios.get(`https://localhost:7154/api/UserDetails/get?id=${localStorage.getItem('userId')}`).then(res => {
            setUser(res.data)
        })
    }, []);
    


    return (
        <div className='h-full w-full flex py-5 bg-zinc-100 '>
           
         
           
           <div className='w-2/3 p-1 rounded overflow-hidden shadow-2xl bg-white  mx-20' id='cv' >
           <PDFExport ref={pdfExportComponent} paperSize="A1">
               <div className='flex'>
                   
           <div className='  min-h-screen overflow-auto flex flex-col bg-neutral-800 w-1/3 p-5 h-auto'  >
                <div>
                 
                   
                    <ul className='list-disc ml-5 text-gray-500'>
                    {infos.map((item) => (
                            <Info info={item} first={user.firstName} last={user.lastName} birthDate={user.birthDate}  />

                        ))}

                    


                    </ul>
                </div>
                <div>
                
                    <h2 className='text-gray-400 font-semibold mt-3'>Contact</h2>
                    <ul className='list-disc ml-5 text-gray-500'>
                        {reseaux.map((item) => (
                            <SocialNetwork reseaux={item} />

                        ))}
                        {infos.map((item) => (
                        < li className='flex flex-row my-2' >
                            <div className='  w-6 h-6 shadow-md' >
                            <HomeIcon className='  w-6 h-6'/>
                            </div>
                            <div><p className='text-gray-400 text-sm mx-2 py-1 '>{item.address} </p></div>
                        </li>
                         ))}
                        < li className='flex flex-row my-2' >
                            <div className='  w-6 h-6 shadow-md' >
                            <LocalPhoneIcon  className='  w-6 h-6'/>
                            </div>
                            <div><p className='text-gray-400 text-sm mx-2 py-1'>+216 {user.phoneNumber}</p></div>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className='text-gray-400 font-semibold  mt-3'>Skills Proficiency</h2>
                    <ul className='list-disc ml-5 text-gray-500 '>
                        {skills.map((item) => (
                            <Skill skills={item} />
                        ))}
                    </ul>
                </div>
                <div>

                    <h2 className='text-gray-400 font-semibold mt-3'>Languages</h2>
                    <ul className='list-disc ml-5 text-gray-500 my-1'>
                        {langues.map((item) => (
                            <Langue langues={item} />
                        ))}
                    </ul>
                </div>
                <div>
                    <h2 className='text-gray-400 font-semibold  mt-3'>Hobies et Interests</h2>
                    <ul className='list-disc ml-5 flex flex-wrap  text-gray-500'>
                        {intersets.map((item) => (
                            <Interest intersets={item} />
                        ))}
                    </ul>

                </div>
                <div>
                </div>

            </div>
            <div className='w-3/4 min-h-screen  overflow-auto flex flex-col p-10 ' >
                <div>
                <div className='flex flex-row my-2' >
               <div className=' mt-3' >
               <PersonIcon fontSize="large"/>
               </div>
               <h2 className='text-black font-serif  text-3xl my-3'>About Me</h2>
               
           </div>
                
                    
                    {infos.map((item) => (
                          
                        <h6>{item.yearOfExpirence} annee d'experiance</h6>
                      
                      
                     

                        ))}
                    <ul className='list-disc ml-5 text-gray-500'>
                        {infos.map((item) => (
                       
                      
                       <p>{item.description}</p> 
                       

                        ))}
                    </ul>
                </div>
                <div>
                   

                <div className='flex flex-row my-2' >
               <div className=' mt-3' >
               <SchoolIcon fontSize="large"/>
               </div>
               <h2 className='text-black font-serif  text-3xl my-3'>Educations</h2>
               
           </div>
                    <ul className='list-disc ml-5 text-gray-500'>
                        {educations.map((item) => (
                            <Education education={item} />

                        ))}
                    </ul>
                </div>
                <div>
                
                <div className='flex flex-row my-2' >
               <div className=' mt-3' >
               <WorkIcon fontSize="large"/>
               </div>
               <h2 className='text-black font-serif  text-3xl my-3'>Experience</h2>
           </div>

                   
                    <ul className='list-disc ml-5 text-gray-500'>
                        {expeiances.map((item) => (
                            <Experiance experiance={item} />
                        ))}
                    </ul>

                </div>
                <div>
                <div className='flex flex-row my-2' >
               <div className=' mt-3' >
               <ListAltIcon fontSize="large"/>
               </div>
               <h2 className='text-black font-serif  text-3xl my-3'>Certification</h2>
               
           </div>
                    
                    <ul className='list-disc ml-5 text-gray-500'>
                        {certifications.map((item) => (
                            <Certification certification={item} />
                        ))}
                    </ul>

                </div>
                <div>
                <div className='flex flex-row my-2' >
               <div className=' mt-3' >
               <AppsIcon fontSize="large"/>
               </div>
               <h2 className='text-black font-serif  text-3xl my-3'>Projet</h2>
               
           </div>
                 
                    
                    <ul className='list-disc ml-5 text-gray-500'>
                        {projects.map((item) => (
                            <Project project={item} />
                        ))}
                    </ul>
                </div>


            </div>
            
            </div>
            </PDFExport>    
            </div>
           
            <div className='w-1/3 flex justify-center items-center h-screen '>
            <button onClick={exportPDFWithComponent} className=" rounded-lg  bg-pink-600  hover:bg-pink-400 text-white font-bold py-2 px-4  inline-flex items-center">
  <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
  <span>Download</span>
</button>
               
            </div>



            



        </div>
    )
}
