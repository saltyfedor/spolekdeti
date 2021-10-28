import React, {useState, useEffect} from 'react';
import Navbar from './Components/Navbar'
import TitleSection from './Components/TitleSection'
import Camps from './Components/Camps.js'
import CampsLoading from './Components/CampsLoading'
import Locale from './Components/Locale.js'
import Footer from './Components/Footer.js'
import CampPage from './Components/CampPage'
import Contact from './Components/Contact'
import CampRegistration from './Components/RegistrationForm/CampRegistration'
import RegistrationSuccess from './Components/RegistrationSuccess'
import RegistrationError from './Components/RegistrationError';
import DashboardContainer from './Components/Dashboard/DashboardContainer';
import Team from './Components/Team/Team'
import apiAdress from './Components/Variables'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './index.css';

const App = () => {
  
  const [campData, updateCampData] = useState()   

  const fetchCamps = () => {
    fetch(`${apiAdress}camps`, {
      method: 'GET',     
    })
      .then(res => res.json())
      .then(data => {       
        updateCampData(data)
      })
  }

  useEffect(fetchCamps, [])  

  return (
    <div className="App">
      <Router>
      
        
          <Switch>
          <Route exact path="/">
            <Navbar />
              <TitleSection />
            {campData ? <Camps campData={campData} /> : <CampsLoading />}  
           
            <Team/>
            <Locale />            
            <Footer />
          </Route>
          <Route path="/Camp/:id">
            <Navbar />
            <CampPage />
            <Footer />
          </Route>
          <Route path="/Kontakt">
            <Navbar />
            <Contact />
            <Footer />
          </Route>
          <Route path="/rezervace">
            <Navbar />
            <CampRegistration />
            <Footer />
          </Route>
          <Route path="/success">
            <Navbar />
             <RegistrationSuccess />
          </Route>
          <Route path="/error">
            <Navbar />
            <RegistrationError />
          </Route>
          <Route path="/login">
             <DashboardContainer />
          </Route>
          </Switch>
        
      
      </Router>
    </div>
  )
  
  
}

export default App;


