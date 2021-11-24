import React from 'react'
import Footer from './Footer'
import { Link } from "react-router-dom";

const RegistrationSuccess = () => {

    return (
        <div className="r-footer-container">
        <div className="registration-outer">
            <div className="registration-inner">
                <div className="success-message-container">
                    <h2 className="camp-section-title mb20 mt0 tc">Úspěšné přihlášení!</h2>
                        <p className="tc mv20">Potvrzení, podrobné informace o platbě, dokumenty k vytsiknutí a jiné instrukce zašleme na váš email.</p>
                        <div className="sign-up-button db back-button mt20"><Link to={`/`} style={{ textDecoration: 'none', display: "inline-block" , color: "#FFFFFF"}}>Zpět na hlavní</Link></div>
                </div>
               
            </div>
           
            </div>
            <Footer/>
        </div>
    )
 }

export default RegistrationSuccess