import React from 'react'
import pecka1 from '../Images/pecka1.jpg'
import pecka2 from '../Images/pecka2.jpg'
import pecka3 from '../Images/pecka3.jpg'

import '../index.css'

const Locale = () => {
    return (
        <div id="lokal" className="locale-container">
            <div className="locale">                
                <h1 className="locale-title">REKREAČNÍ AREÁL PECKA</h1>
                <p className="locale-paragraph hmtext">
                    Rekreační areál Pecka je oblíbeným areálem, který leží v nádherné a členité krajině nedaleko městečka Pecka, kterému dominuje zřícenina stejnojmenného hradu.
                    Areál se rozprostírá na velmi prostorném pozemku a je obklopen bohatými lesy. 300 m od areálu se nachází velice pěkné koupaliště. Areál je vhodný pro rekreaci rodin s dětmi,
                    ale je i vhodným cílem školních výletů, škol v přírodě, sportovních i prázdninových pobytů.
                </p>                             
                <div className="locale-gallery">
                    <img className="locale-image" alt="obrázek z lokality" src={pecka1}></img>
                    <img className="locale-image" alt="obrázek z lokality" src={pecka2}></img>
                    <img className="locale-image" alt="obrázek z lokality" src={pecka3}></img>                  
                </div>                
            </div>
        </div>
    )
}

export default Locale

