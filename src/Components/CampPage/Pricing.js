import React from "react";
import moment from "moment";
import './Pricing.css'

const Pricing = ({ data }) => {
    const now = moment().utc()
    const getCurrent = () => {
        const pricePeriods  = data[0].floating
        for (var priceFloat in pricePeriods) {            
            if (now.isBetween(pricePeriods[priceFloat].start, pricePeriods[priceFloat].end)) {
                return(pricePeriods[priceFloat])
           }
        }
    }     
  
    const currentPrice = getCurrent()    
    
    return (
        <div className="pricing-container">
            <h2 className="tc c-green mb0 pricing-text mt0">{`Aktuálně nabízíme tábor za zvýhodněnou cenu ${parseInt(data[0].base) + currentPrice.price} Kč*`}</h2>
            <h4 className="tc c-green mt0 mb0 pricing-text">{`*Nabídka platí do ${moment(currentPrice.end).format('DD.MM.YYYY')}`}</h4>
        </div>
    )
    
}

export default Pricing