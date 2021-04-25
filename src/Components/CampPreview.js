import React from 'react'
import '../index.css'
import {    
    Link
  } from "react-router-dom";

import apiAdress from './Variables.js'

const CampPreview = ({ camp, shortName }) => {
    const backgroundImage = `${apiAdress}images/${camp.image_links[0]}`
    return (
        <Link to={`/Camp/${camp.id}`} style={{ textDecoration: 'none' }}>
            <div className="camp-preview-element">
                <div className="camp-preview-image" style={{backgroundImage: `url(${backgroundImage})`}}></div>          
                <div className="camp-preview-title-container">
                    <h3 className="camp-preview-title">{camp.name}</h3>            
                </div>
            </div>
        </Link>
    )
 }

export default CampPreview