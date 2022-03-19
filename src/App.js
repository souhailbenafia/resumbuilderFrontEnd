import Welcome from './Components/LoginLogout/Chose';

import './App.css';
import { useState, useEffect } from 'react';
import Registerpage from './Pages/RegisterPage';
import LoginPage from './Pages/LoginPage'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import NotFoundPage from './Pages/NotFoundPage';
import NoAccess from './Pages/NoAccess';
import PrivateRouter from './Components/router/PrivateRouter';
import ForceRdirect from './Components/router/ForceRdirect';
import store from './Components/redux/Store';
import { setUser } from './Components/redux/actions/authAction';
import jwt_decode from 'jwt-decode'
import AddDetailPage from './Pages/AddDetailPage'
import SkillsPage from './Pages/SkillsPage';
import CertificationPage from './Pages/CertificationPage';
import EducationPage from './Pages/EducationPage';
import ExperiancePage from './Pages/ExperiancePage';
import InterestPage from './Pages/InterestPage';
import SocialNetwork from './Pages/SocialNetworkPage';
import ProjectPage from './Pages/ProjectPage';
import Languepage from './Pages/Languepage';
import { useSelector } from 'react-redux';
import { setAuth } from './util/setauth';

if(window.localStorage.jwt){
  const decode = jwt_decode(window.localStorage.jwt)
  store.dispatch(setUser(decode))
  setAuth(window.localStorage.jwt)
  const currentDate = Date.now / 1000
}

function App(){

  const auth = useSelector(state => state.auth)
  const user = {
    isConnected: auth.isConnected,
  }
  
  return (
  
    <BrowserRouter>
    <Routes>
          <Route path="/createdetails" element={<AddDetailPage/>}/>
          <Route path="/" element={<PrivateRouter user={user} ><EducationPage></EducationPage></PrivateRouter>} />
          <Route path="/*" element={<NotFoundPage />} />
          <Route path="noaccess" element={<NoAccess />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<Registerpage />} />
          <Route path="/skills"index element={<SkillsPage />} />  
          <Route path="/certification"index element={<CertificationPage />} />  
          <Route path="/education"index element={<EducationPage />} />  
          <Route path="/experiance"index element={<ExperiancePage />} />  
          <Route path="/interest"index element={<InterestPage />} />  
          <Route path="/socialnetwork"index element={<SocialNetwork />} />  
          <Route path="/project"index element={<ProjectPage />} />  
          <Route path="/language"index element={<Languepage />} />  

    </Routes>
  </BrowserRouter>
 
  );
}

export default App;
