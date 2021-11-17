import React from 'react';
import Navbar from './Components/Nav/Navbar'
import TitleSection from './Components/TitleSection'
import Camps from './Components/Camps/Camps.js'
import Locale from './Components/Locale/Locale.js'
import Footer from './Components/Footer.js'
import CampPage from './Components/CampPage'
import Contact from './Components/ContactPage/Contact'
import CampRegistration from './Components/RegistrationForm/CampRegistration'
import RegistrationSuccess from './Components/RegistrationSuccess'
import RegistrationError from './Components/RegistrationError';
import DashboardContainer from './Components/Dashboard/DashboardContainer';
import Team from './Components/Team/Team'
import Voucher from './Components/Voucher/Voucher';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './index.css';

const App = () => {  

  return (
    <div className="App">
      <Router>
      
        
          <Switch>
          <Route exact path="/">
            <Navbar />
            <TitleSection />
            <Camps/>           
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
          <Route path="/voucher">
            <Navbar/>
            <Voucher />
            <Footer />
          </Route>
          </Switch>
        
      
      </Router>
    </div>
  )
  
  
}

export default App;


