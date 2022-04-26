import React from 'react'



const Footer = () => {    

    return (
        <div className="footer-container">
            <div className="footer">               
                <h3 className="footer-copy">©2021 AGENTURA SPOLEK DĚTÍ</h3>
                <div className='footer-partner-container'>
                    <a className='mr10-r footer-partner-href' href="http://detske-tabory.info/" title="Letní, podzimní, zimní i jarní dětské tábory - akce pro děti na prázdniny">
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

