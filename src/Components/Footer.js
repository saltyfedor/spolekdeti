import React from 'react'
import image1 from '../Images/partners/bktour.png'
import image2 from '../Images/partners/pecka.png'
import image3 from '../Images/partners/jicin.png'


const Footer = () => {    

    return (
        <div className="footer-container">
            <div className="footer">
                <div>
                    <h3 className="footer-copy">©2021 AGENTURA SPOLEK DĚTÍ</h3>
                    <h4 className="footer-copy">Partneři :</h4>
                    <div className="footer-logos">
                        <img className="footer-logo" src={image1}></img>
                        <img className="footer-logo" src={image2}></img>
                        <img className="footer-logo" src={image3}></img>
                    </div>
                </div>
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

