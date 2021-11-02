import React from 'react'
import fallback from '../../Images/fallbackcamp.jpg'
import apiAdress from '../Variables'
import {    
    Link
} from "react-router-dom";
import './Camps.css'

const CampCard = ({ data }) => {
    const imageLink = `${apiAdress}images/camps/preview/${data.preview_link}`
    
    const getPrice = () => {
        if (data?.pricing) {            
            const price = parseInt(data.pricing.base) + data.pricing.floating.rate_1.price
            return price
        } else {
            return ""
        }
    }

    return (
        <div className="camp-card-container">
            <img className="camp-preview-image" src={imageLink} onError={(e) => { e.target.onerror = null; e.target.src = fallback }}></img>
            <div className="camp-card-container-inner">
                <h2 className="mt0 c-blue">{data.name}</h2>
                <div className="camp-card-links">
                    <h3 className="m0">{`Od ${getPrice()} Kč`}</h3>
                    <Link to={`/Camp/${data.id}`} style={{ textDecoration: 'none', color: 'inherit'}}>
                    <div className="camp-button">
                        Zobrazit detail
                    </div>
                    </Link>
                </div>
            </div>            
        </div>
    )
}

export default CampCard