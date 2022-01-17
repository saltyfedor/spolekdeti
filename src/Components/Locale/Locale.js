import React from 'react'
import '../../Images/locale.jpeg'
import '../../index.css'
import './LocaleGallery.css'

const Locale = () => {
    return (
        <div id="lokal" className="locale-container">
            <div className="locale">                
                <h1 className="home-page-title c-blue">STŘEDISKO HRACHOV</h1>
                <p className="locale-paragraph hmtext">
                    Areál rekreačního střediska je umístěn v přírodě, na kraji lesa. Vzdálenost od vesnice je cca 1 km. U příjezdové cesty se nachází <strong>zděná budova a za ní 17 dřevěných chat, hřiště a sociální zařízení pro chaty.</strong> 
                </p>
                <h3 className="locale-heading hmtext">ZDĚNÁ BUDOVA</h3>
                <p className="locale-paragraph hmtext">
                Budova disponuje celkem 29 čtyřlůžkovými pokoji pro děti (bez paland). V hlavní budově se nachází jídelna s kapacitou 100 míst a čtyři učebny (klubovny).
                </p>
                <h3 className="locale-heading hmtext">CHATKY</h3>
                <p className="locale-paragraph hmtext">
                Ve středisku se nachází <strong>17 dřevěných chat (6 chat čtyřlůžkových a jedenáct chat osmilůžkových)</strong>.Chatky jsou vybaveny postelemi, skříněmi a dalšími úložnými prostory. Je zde zavedena elektřina a v případě potřeby jsou vytápěny radiátory. Sociální zařízení pro klienty ubytované ve chatkách se nachází vedle chat.
                </p>
                <h3 className="locale-heading hmtext">SPOLEČENSKÉ MÍSTNOSTI</h3>
                <p className="locale-paragraph hmtext">
                Ve středisku jsou k dispozici <strong>4 klubovny</strong>, které jsou vybaveny lavicemi, tabulemi na popisovače / křídy. Každá skupina tak může mít dostatek soukromí pro své aktivity.
                </p>
                <h3 className="locale-heading hmtext">VYBAVENÍ STŘEDISKA</h3>
                <p className="locale-paragraph hmtext">Středisko nabízí široké možnosti sportovního vyžití pro děti i dospělé. K dispozici jsou <strong>2 udržovaná hřiště</strong>, stoly na stolní tenis či travnatá louka vhodná pro softbal, frisbee aj. Areál disponuje i velikým bazeném se skluzavkou. Milovníci táboráků uvítají udržované <strong>ohniště</strong>.</p>
                <h3 className="locale-heading hmtext">STRAVOVÁNÍ</h3>
                <p className="locale-paragraph hmtext">Stravování probíhá přímo ve středisku v prostorné jídelně. V ceně jsou samozřejmě snídaně, oběd, večeře, svačiny a neustále přísun pitného režimu.</p>
            </div>
        </div>
    )
}

export default Locale

