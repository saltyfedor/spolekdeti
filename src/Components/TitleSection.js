import React from 'react'
import heroImage from '../Images/hero-image.jpg'
import FacebookFeed from './Social/FacebookFeed'
import './Social/Social.css'

const TitleSection = () => {
    
    return (
       
        <div className="title-section">
            
            <div className="title-image-container" style={{
                backgroundImage: `url(${heroImage})`
            }}>               
                    <div className="hero-title-container">
                        
                    </div>               
            </div>   
               
                <div className="social-text-container">
                    
                    <div className="hero-paragraph">
                    <h1 className="home-page-title c-blue mb0">O NÁS</h1>
                        <p id="tabory">
                            Jsme malá organizace s velikým srdcem pro práci s dětmi, naše začátky sahají do roku 2001 kdy jsem byl 10 letý zlobivý kluk a rodiče mě odložili na dětský tábor,
                            k Adršpašským skalám. Pak jsme na tábory začali jezdit ve skupinách přátel. Když nám pak odbylo osmnáct, řekli jsme si, že půjdeme dělat vedoucí.
                            Několik let jsme jezdili a trávili čas s dětmi, pak jsme si řekli, proč nemít své vlastní tábory a dnes jsme to právě my, kdo stvořil agenturu Spolek dětí.
                            Jsme třicetičlenná parta lidí, kteří mají zkušenosti ze zdravotnictví nebo studují anebo tuto práci dělají celý život.
                            Lektoři, vedoucí a instruktoři, ale i známé osobnosti se na Vás těší v roce 2022.
                        </p>               
                    </div>
                    <FacebookFeed/>
                </div>           
        </div>           
       
    )

 }

export default TitleSection