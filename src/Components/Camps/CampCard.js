import React from 'react'
import fallback from '../../Images/fallbackcamp.jpg'
import apiAdress from '../Variables'
import {    
    Link
} from "react-router-dom";
import './Camps.css'

const CampCard = ({ data }) => {
    const imageLink = `${apiAdress}images/camps/preview/${data.preview_link}`

    const findEarliest = () => {
        let first = data.pricing.floating[0]
        data.pricing.floating.forEach(element => {
            if (element.start < first.start) first = element
                
        });
        return first.price
    }

    const findCurrent = () => {
        const now = (new Date()).toISOString().split('.')[0] + 'Z'
        
        const float = data.pricing.floating.find(element => {           
            if (element.start < now && now < element.end) {                
                return element
            }
        })        

        if (float) return float.price
        else return findEarliest()

       
    }
    
    
    const getPrice = () => {
        if (data?.pricing) {             
            console.log(findCurrent())

            const price = parseInt(data.pricing.base) + parseInt(findCurrent())
            //return price
            if (data.pricing.discount) {
                return (
                    <div className='discount-container'>
                        <h3 className='m0 price-discount'>{data.pricing.discount_price} Kč</h3>
                        <h5 className='m0 price-crossed'>{price} Kč</h5>                        
                    </div>
                )
            }
            else return <h3 className="m0">{`${price} Kč`}</h3>
        } else {
            return ""
        }
    }

    return (
        <div className="camp-card-container">
            <img className="camp-preview-image" src={imageLink} onError={(e) => { e.target.onerror = null; e.target.src = fallback }} alt=""></img>
            <div className="camp-card-container-inner">
                <h2 className="mt0 c-blue">{data.name}</h2>
                <div className="camp-card-links">
                    {getPrice()}
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