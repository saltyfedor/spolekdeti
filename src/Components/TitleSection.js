import React from 'react'
import heroImage from '../Images/hero-image.jpg'

const TitleSection = () => {
    
    return (
        <div className="title-section">
            
            <div className="title-image-container" style={{
                backgroundImage: `url(${heroImage})`
            }}>               
                    <div className="hero-title-container">
                        <div className="hero-square">
                            <h1 className="hero-title">AGENTURA SPOLEK DĚTÍ</h1>
                            <h2 className="hero-sub-title">Léto plné zábavy</h2>
                        </div>
                    </div>               
            </div>
            <div className="hero-paragraph">
                <p className="hmtext">
                Jsme malá organizace s velikým srdcem pro práci s dětmi, naše začátky sahají do roku 2001
                kdy jsem byl 10letý zlobivý kluk a rodiče mě odložily na dětský tábor, kam si někam
                k adršpašským skalám.               
                Pak jsme na tábory začali jezdit ve skupinách přátel, když nám pak odbylo osmnáct řekli jsme
                si, že půjdeme dělat vedoucí. Několik let jsme jezdili a trávili čas s dětmi, pak jsme si řekli že
                proč nemít své vlastní, no a dnes jsme to právě my kdo stvořil Agenturu Spolek dětí.               
                Jsme třicetičlenná parta lidí, kteří mají zkušenosti ze zdravotnictví nebo studují anebo tuto
                práci dělají celý život.
                Lektoři, Vedoucí, instruktoři ale i známé osobnosti se na Vás těší v roce 2022
                </p>
            </div>
        </div>
    )

 }

export default TitleSection