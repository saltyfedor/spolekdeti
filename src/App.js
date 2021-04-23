import React, {useState, useEffect} from 'react';
import Navbar from './Components/Navbar'
import TitleSection from './Components/TitleSection'
import Camps from './Components/Camps.js'
import Locale from './Components/Locale.js'
import Footer from './Components/Footer.js'
import CampPage from './Components/CampPage'
import Contact from './Components/Contact'
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
      headers: {
        'Access-Control-Allow-Origin': 'https://spolekdeti.cz'
      }
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
          </Switch>
        
        <Footer />
      </Router>
    </div>
  )
  
  
}

export default App;



/*

if (route === 'home') {
    return (
      <div className="App">
        <Navbar />
        <TitleSection />
        {campData ? <Camps campData={campData} onClickCamp={onClickCamp} /> : null}
        <Locale />
        <Footer />
      </div>
    );
  } else if (route === "camp" && currentCamp) {
    return (
      <div>
        <Navbar />
        <CampPage camp={currentCamp}/>
        <Footer />
      </div>
    )
  }

  */