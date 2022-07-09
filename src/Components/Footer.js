import React from 'react'
import logo from '../Images/diecezni_charita_hradec-kralove_BARVA_rgb.jpg'


const Footer = () => {    

    return (
        <div className="footer-container">
            <div className="footer">               
                <h3 className="footer-copy">©2021 AGENTURA SPOLEK DĚTÍ</h3>
                <div className='footer-partner-container'>
                    <img src={logo} className="footer-partner-image footer-partner-href" width="88" height="31" alt="some-logo"/>
                    <a className='footer-partner-href' href="http://detske-tabory.info/" title="Letní, podzimní, zimní i jarní dětské tábory - akce pro děti na prázdniny">
                        <img src="http://detske-tabory.info/zvyhodneni/organizace?size=88x31&amp;ic=11931451" alt="Letní, podzimní, zimní i jarní dětské tábory - akce pro děti na prázdniny" width="88" height="31" />
                    </a>
                    <a href="http://www.taboreni.cz/?zdroj=7900" title="Dětský tábor">
                        <img className="footer-partner-image"src="http://icon.taboreni.cz/1/7900/234x60-d-t.png" alt="Dětský tábor"/>                        
                    </a> 
                </div>
            </div>        
        </div>
    )
}

export default Footer

