import React, {useState, useEffect} from 'react';
import Navbar from './Components/Navbar'
import TitleSection from './Components/TitleSection'
import Camps from './Components/Camps.js'
import Locale from './Components/Locale.js'
import Footer from './Components/Footer.js'
import CampPage from './Components/CampPage'
import Contact from './Components/Contact'
import CampRegistration from './Components/CampRegistration'
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
      <Navbar />
        
          <Switch>
          <Route exact path="/">
              <TitleSection />
              {campData ? <Camps campData={campData}/> : null}
              <Locale />
          </Route>
          <Route path="/Camp/:id">
              <CampPage />
          </Route>
          <Route path="/Kontakt">
              <Contact />
          </Route>
          <Route path="/rezervace">
             <CampRegistration />
          </Route>
          </Switch>
        
        <Footer />
      </Router>
    </div>
  )
  
  
}

export default App;


