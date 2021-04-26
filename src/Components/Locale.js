import React from 'react'
import poolPicture from '../Images/bazen.jpg'
import homesPicture from '../Images/dsc_0518.jfif'
import playgroundPicture from '../Images/hriste.jfif'
import jidelna from '../Images/jidelna.jpg'
import waterhome from '../Images/dumzavodou.jfif'
import interior from '../Images/chatkainside.jpg'

import '../index.css'

const Locale = () => {
    return (
        <div id="lokal" className="locale-container">
            <div className="locale">
                <div className="locale-gallery">
                    <img className="locale-image" alt="obrázek z lokality" src={poolPicture}></img>
                    <img className="locale-image" alt="obrázek z lokality" src={homesPicture}></img>
                    <img className="locale-image" alt="obrázek z lokality" src={playgroundPicture}></img>
                    
            </div>
                <h1 className="locale-title">AREÁL SKLÁŘ V OSTRUŽNĚ</h1>
                <p className="locale-paragraph hmtext">
                    Rekreační areál Sklář Ostružno leží na nádherném místě obklopeném hlubokými lesy a romantickými
                    rybníky, nad kterými se tyčí Prachovské skály. Je nejen ideálním místem pro rekreaci rodin s dětmi,
                    ale i vhodným cílem školních výletů či místem pro uspořádání prázdninových táborů. Kolem areálu
                    vedou vyznačené cyklistické stezky, které vás zavedou na nejkrásnější místa Českého ráje, vždyť vstup
                    do Prachovských skal je pouze 3 km od areálu. <br/> <br/>Kouzelnou atmosféru přírodou obklopeného kempu
                    dotváří i přilehlý rybník Jíkavec. Ti aktivnější mohou zkusit své štěstí při rybolovu, ti pohodovější se
                    mohou povalovat u soukromé vodní nádrže a chytat bronz. Okolí kempu, které je tvořeno převážně
                    Českým rájem nabízí množství zajímavých turistických výletů, jak pro pěší, tak pro cyklisty.
                </p>                             
                <div className="locale-gallery">
                    <img className="locale-image" alt="obrázek z lokality" src={waterhome}></img>
                    <img className="locale-image" alt="obrázek z lokality" src={jidelna}></img>
                    <img className="locale-image" alt="obrázek z lokality" src={interior}></img>                  
            </div>
            </div>
        </div>
    )
}

export default Locale

/*
<div className="locale-image" style={{ backgroundImage: `url(${poolPicture})`}}></div>
                    <div className="locale-image" style={{ backgroundImage: `url(${homesPicture})`}}></div>
                    <div className="locale-image" style={{ backgroundImage: `url(${playgroundPicture})`}}></div>
                    */