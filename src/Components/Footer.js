import React from 'react'
import apiAdress from './Variables'


const Footer = () => {    

    return (
        <div className="footer-container">
            <div className="footer">
                <h3 className="footer-copy">©2021 AGENTURA SPOLEK DĚTÍ</h3>
                <div className="contact-text">
                    <h3 id="kontakt" className="footer-copy">KONTAKT</h3>
                    <p className="contact-line">spoldeti, s.r.o.</p>
                    <p className="contact-line">Email: spolekdeti@seznam.cz</p>
                    <p className="contact-line">Telefon: +420 608 159 466</p>
                    <p className="contact-line">IČO: 11931451</p>
                    <p className="contact-line">Sídlo společnosti: Praha 10 - Korunní 2569/108 PSČ: 10100</p>
                    <p className="contact-line">Číslo účtu: 5949212002/5500</p>
                </div>               
            </div>
        
        </div>
    )
}

export default Footer

