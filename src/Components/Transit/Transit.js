import React from "react";

const Transit = () => {
    return (
        <div className="locale mh-auto transit">
            <h1 className="home-page-title mtres">Autobusová doprava</h1>
            <h3 className="transit-heading">Pokyny</h3>
            <ul>
                <li className="locale-paragraph">Hlavní stanoviště odjezdu je <b>Praha Černý most parkoviště HORNBACH v 10:30 hodin. (Chlumecká 2398, 19300 Praha 20 - Horní Počernice)</b></li>
                <li className="locale-paragraph">Další zastávka je <b>Hradec králové</b> parkoviště <b>OBI v 11:00 hodin. (Akademika Bedrny 532/10 b, 50003 Hradec Králové – Věkoše)</b></li>
                <li className="locale-paragraph">Další zastávky se postupně budou přidávat podle počtu dětí a jejich bydliště.</li>
                <li className="locale-paragraph">Platí pro všechny turnusy.</li>
            </ul>
            <h3 className="transit-heading">Doporučujeme ale zvolit dopravu vlastní, a to z několika důvodů.</h3>
            <ol>
                <li className="locale-paragraph">Je lepší navázat s námi první kontakt osobně</li>
                <li className="locale-paragraph">Sami se přesvědčíte, že Vaše dítě bude v tom nejlepším prostředí.</li>
            </ol>
            <h3 className="transit-heading">Autobusová doprava</h3>
            <p className="locale-paragraph">
            Na každém stanovisku budou dva vedoucí, kteří
            Vaše dítě přeberou s příslušnou dokumentací viz. Předešlý Email,
            který jste obdrželi. Návrat je obdobný, o čase příjezdu budete
            informováni, autobus tedy přijede na to samé místo.
            </p>
            <h3 className="transit-heading">Vlastní doprava</h3>
            <p className="locale-paragraph">
            Naši vedoucí Vás ubytují a pomůžou se zavazadly,
poté se rozloučíte a je nutno opustit areál. Pro své dítě si můžete
přijet po dohodě s hlavním vedoucím, tak aby o tom mohli vědět
vedoucí daného dítěte.
            </p>
        </div>
    )
}

export default Transit