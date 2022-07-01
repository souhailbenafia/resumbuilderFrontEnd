
import React  from 'react'
import Card from '../Components/Common/card/Card'
import CardEducation from '../Components/Common/card/CardEducation'
import CardProjet from '../Components/Common/card/CardProjet'
import CardCertification from '../Components/Common/card/CardCertification'
import CardInterest from '../Components/Common/card/cardInterest'

import ResponsiveAppBar from '../Components/nav/nav'
import CardLanguage from '../Components/Common/card/CardLanguage'
import CardSocial from '../Components/Common/card/CardSocial'
import CardSkill from '../Components/Common/card/CardSkill'
import CardExperiance from '../Components/Common/card/CardExperiance'
import ImgProfile from '../Components/Common/card/ImgProfile'

export default function Home() {

    
  return (
    <div className='flex  flex-col bg-slate-100  w-full min-h-screen  bg-gradient-to-b from-purple-700 via-zinc-300 to-zinc-100'>
        <ResponsiveAppBar />
       
        <div className='flex flex-row  pl-64  '> 
        
        <ImgProfile/>
        </div>
<div className=' flex flex-wrap flex-auto justify-center items-center min-h-screen

'>
<Card  ></Card>
<CardProjet />
<CardEducation/>
<CardCertification />
<CardInterest />
<CardLanguage />
<CardSocial />
<CardSkill />
<CardExperiance/>

</div>
    
    </div>
  )
}
