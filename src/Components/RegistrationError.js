import React from 'react'
import Footer from './Footer'
import { Link } from "react-router-dom";

const RegistrationError = () => {
    return (
        <div className="r-footer-container">
        <div className="registration-outer">
            <div className="registration-inner">
                <div className="success-message-container">
                    <h2 className="camp-section-title mb20 mt0 tc">Bohužel došlo k chybě!</h2>
                        <p className="tc mv20">Kontaktujte nás prosím pomocí emailu nebo telefonu.</p>
                        <div className="sign-up-button db back-button mt20"><Link to={`/`} style={{ textDecoration: 'none', display: "inline-block" , color: "#FFFFFF"}}>Zpět na hlavní</Link></div>
                </div>
               
            </div>
           
            </div>
            <Footer/>
        </div>
    )
 }

export default RegistrationError