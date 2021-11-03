import React, { useState } from "react";
import { CSSTransition } from 'react-transition-group'
import moment from "moment";
import './Pricing.css'

const Pricing = ({ data }) => {
    console.log(data)
    const [showDetail, updateShowDetail] = useState(false)

    const now = moment().utc()    

    const getCurrent = () => {
        
        const current = data[0].floating.find(priceFloat => now.isBetween(priceFloat.start, priceFloat.end))
        if (!current) {
            return data[0].floating.find(priceFloat => priceFloat.default === true)
        }
        return current
    }

    const getSortedPriceFloats = (data) => {
        data.sort(function(a, b) {
            return (a.end < b.end) ? -1 : ((a.start > b.end) ? 1 : 0);
        });
        return data
    }

    const getPriceFloatLines = () => {
        const pricePeriods = getSortedPriceFloats(data[0].floating)
        const getText = (float) => {
            if (float.default) return `Do ${moment(float.end).format('DD.MM.YYYY')}`
            else return `Od ${moment(float.start).format('DD.MM.YYYY')} do ${moment(float.end).format('DD.MM.YYYY')}`
        }
        const floatArr = pricePeriods.map(priceFloat => {
            return(<h4 key={priceFloat.start} className="pricing-detail-text">{`${getText(priceFloat)} : ${priceFloat.price} Kč`}</h4>)
        })       
        return floatArr
    }
    
    const getDetail = () => {
        return (
            <div className="pricing-separator">
                <div className="detail-display">
                    <h4 className="pricing-detail-text">{`Záloha : ${data[0].base} Kč`}</h4>
                    <h4 className="pricing-detail-text">{`Doplatek :`}</h4>
                    {getPriceFloatLines()}
                    <h4 className="pricing-link asc mb0 mt5" onClick={() => {updateShowDetail(false)}}>Skrýt</h4>
                </div>
            </div>
        )
    }
  
    const currentPrice = getCurrent()
    
    const handleDetailClick = () => {
        updateShowDetail(true)
    }
    
    
    return (
        <div className="pricing-wrapper">
        <div className="pricing-container">
            
            <h2 className="tc c-green mb0 pricing-text mt0">{`Aktuálně nabízíme tábor za zvýhodněnou cenu ${parseInt(data[0].base) + currentPrice.price} Kč*`}</h2>
            <h4 className="tc c-green mt0 mb0 pricing-text">{`*Nabídka platí do ${moment(currentPrice.end).format('DD.MM.YYYY')}, konečná cena se odvíjí od data platby, `}<span onClick={handleDetailClick} className="pricing-link">podrobnějí</span></h4>
           
            <CSSTransition
                        in={showDetail}
                        timeout={500}
                        classNames="price-detail"
                        unmountOnExit                        
                    >
                   
                        {getDetail()}
                    
            </CSSTransition>
            </div>
        </div>
    )
    
}

export default Pricing