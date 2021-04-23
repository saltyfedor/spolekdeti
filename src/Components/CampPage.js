import React, {useState, useEffect} from 'react'
import apiAdress from './Variables.js'
import {    
    useParams
  } from "react-router-dom";
  
import '../index.css'

const CampPage = () => {
    const [currentCamp, updateCurrentCamp] = useState()
    const { id } = useParams();
    const fetchCamp = () => {
       
        fetch(`${apiAdress}camp/${id}`)
            .then(res => res.json())
            .then(data => {
                const camp = data[0]
                Object.assign(camp, {
                    backgroundImage: `${apiAdress}images/${camp.image_links[0]}`
                })
                updateCurrentCamp(camp)
            })
    }

    useEffect(fetchCamp, [id])

    if (currentCamp) {
        return (
            <div className="camp-page-container">
            
                <div style={{ backgroundImage: `url(${currentCamp.backgroundImage})` }} className="camp-page">
                    <div className="black-opaque">
                        <div className="camp-title-container">
                            <h1 className="camp-title">{currentCamp.name_long}</h1>
                        </div>
                    </div>
                </div>
                {currentCamp.age_restriction ? <div className="age-restriction" dangerouslySetInnerHTML={{ __html: currentCamp.age_restriction }}></div> : null}
                {currentCamp.description ?
                    <div className="camp-description-container">
                        <h2 className="camp-description">Popis</h2>
                        <div className="camp-description" dangerouslySetInnerHTML={{ __html: currentCamp.description }}></div>
                    </div>
                    : null}
                <div className="camp-gallery-container">
                    <h1 className="camp-gallery-title">Galerie</h1>
                    <p className="camp-gallery-text">Připravujeme fotografie...</p>
                </div>
            </div>

        )
    } else {
        return (
            <div></div>
        )
    }
}

export default CampPage


/*

 
*/