import React, { useState, useEffect } from 'react'
import Certification from '../Components/cv/Certification'
import Education from '../Components/cv/Education'
import Experiance from '../Components/cv/Experiance'
import Info from '../Components/cv/Info'
import Interest from '../Components/cv/Interest'
import Langue from '../Components/cv/Langue'
import Project from '../Components/cv/Project'
import Skill from '../Components/cv/skill'
import SocialNetwork from '../Components/cv/SocialNetwork'
import axios from 'axios';



export default function CvPage(props) {
    const [educations, seteducations] = useState([]);
    const [expeiances, setExpeiances] = useState([]);
    const [certifications, setCertifications] = useState([]);
    const [projects, setprojects] = useState([]);
    const [skills, setSkills] = useState([]);
    const [langues, setLangues] = useState([]);
    const [intersets, setintersets] = useState([]);

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
    }, []);

    return (
        <div className='h-full w-full flex  '>
            <div className='  min-h-screen overflow-auto flex flex-col bg-blue-900 w-1/4 p-5 h-auto'  >
                <div>
                    <Info />
                </div>
                <div>
                    <SocialNetwork />
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
                    <ul className='list-disc ml-5 text-gray-500'>
                        {intersets.map((item) => (
                            <Interest intersets={item}/>
                        ))}
                    </ul>
                    
                </div>
                <div>
                </div>

            </div>
            <div className='w-3/4 min-h-screen  overflow-auto flex flex-col ' >
                <div>
                    <Info />
                </div>
                <div>
                    <h2 className='text-gray-600 font-semibold mt-3'>Educations</h2>
                    <ul className='list-disc ml-5 text-gray-500'>
                        {educations.map((item) => (
                            <Education education={item} />

                        ))}
                    </ul>
                </div>
                <div>

                    <h2 className='text-gray-600 font-semibold mt-3'>Expriance</h2>
                    <ul className='list-disc ml-5 text-gray-500'>
                        {expeiances.map((item) => (
                            <Experiance experiance={item} />
                        ))}
                    </ul>

                </div>
                <div>
                    <h2 className='text-gray-600 font-semibold mt-3'>Certification</h2>
                    <ul className='list-disc ml-5 text-gray-500'>
                        {certifications.map((item) => (
                            <Certification certification={item} />
                        ))}
                    </ul>
                    
                </div>
                <div>
                    <h2 className='text-gray-600 font-semibold mt-3'>Certification</h2>
                    <ul className='list-disc ml-5 text-gray-500'>
                        {projects.map((item) => (
                            <Project project={item} />
                        ))}
                    </ul>
                </div>


            </div>



        </div>
    )
}
