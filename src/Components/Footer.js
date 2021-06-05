import React from 'react'
import apiAdress from './Variables'


const Footer = () => {

    const sendMail = () => {
        fetch(`${apiAdress}sendmail`, {
            method: 'GET',     
          })
        .then(res => res.json())
            
    }

    return (
        <div className="footer-container">
            <div className="footer">
                <h3 className="footer-copy">©2021 AGENTURA SPOLEK DĚTÍ</h3>
                <div className="contact-text">
                    <h3 id="kontakt" className="footer-copy">KONTAKT</h3>
                    <p className="contact-line">Agentura spolek děti</p>
                    <p className="contact-line">Email: spolekdeti@seznam.cz</p>
                    <p className="contact-line">Telefon: +420 608 159 466</p>
                    <p className="contact-line">Adresa: Raisová 613, Jičín, 50601</p>
                    <p className="contact-line">Číslo účtu: 3042393053/0800</p>
                </div>
                <button onClick={sendMail}>Test</button>
            </div>
        
        </div>
    )
}

export default Footer

