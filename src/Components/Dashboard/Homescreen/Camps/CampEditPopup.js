import React, { useState, useLayoutEffect } from "react";
import PriceList from "./PriceList";
import './Edit.css'
import apiAdress from "../../../Variables";

const CampEditPopup = ({ data, token, update, onClose }) => {
    const [camp, updateCamp] = useState(data)
    let pricing = [...camp.pricing.floating] 
    let discount = camp.pricing.discount
    let discountPrice = camp.pricing.discount_price

    useLayoutEffect(() => {
        // Get original body overflow
      const originalStyle = window.getComputedStyle(document.body).overflow;
        // Prevent scrolling on mount
      document.body.style.overflow = "hidden";
        // Re-enable scrolling when component unmounts
      return () => (document.body.style.overflow = originalStyle);
    }, []); // Empty array ensures effect is only run on mount and unmount

    const handlePricingChange = (newPrices) => {
        pricing = newPrices
    }

    const handleDataSubmit = async () => {
        const onSuccess = () => {
            update(campId, base, floating)
            onClose()
        }
        const onFailure = () => {
            
        }
        const campId = camp.id
        const base = camp.pricing.base
        const floating = pricing
        if (campId && base && floating) {
            const res = await fetch(`${apiAdress}admin/pricing`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-access-token': token
                },
                body: JSON.stringify({
                    camp_id: campId,
                    base: base,
                    floating: floating,
                    discount: Boolean(discount),
                    discount_price: discountPrice
                })
            })
            if (res.ok) {
                onSuccess()
            } else {
                onFailure()
            }
        }
       
        
    }

    const handleDiscountChange = (e) => {
        discount = e.target.value
    }

    return (
        <div className="camp-popup-outer" onClick={onClose}>
            <div className="camp-popup-inner" onClick={(e) => e.stopPropagation()}>               
                <div className="popup-wrapper">                    
                    <div className="camp-popup-prices">
                        <h2 className="mt10 mb10">Ceny</h2>
                        <div  className="price-overflow">
                        <h4 className="mt10 mb0">Záloha</h4>
                        <span><input className="mt10 price-input" type="number" value={camp.pricing.base} onChange={(e) => {
                            if (!isNaN(e.target.value) && e.target.value.length < 6) {
                                updateCamp(Object.assign({}, camp,
                                    {
                                        pricing: Object.assign({}, camp.pricing, { base: e.target.value })
                                    }
                                ))
                            }
                            }} /> Kč</span>
                            {pricing ? <PriceList data={pricing} onChange={handlePricingChange} /> : null}
                            
                            <div className="discount-input-container">
                            <h4 className="price-float-input-label">Sleva :</h4>
                                <select defaultValue={discount} onChange={handleDiscountChange}>
                                    <option value={false}>Ne</option>
                                    <option value={true}>Ano</option>
                                </select>
                                <input className="price-float-input-price" type="number" maxLength="5" defaultValue={discountPrice} onChange={(e) => { discountPrice = e.target.value }} />
                            </div>
                        </div>                        
                    </div>
                </div>
                <div className="admin-save-button" onClick={()=> handleDataSubmit()}>ULOŽIT</div>
            </div>
        </div>
    )
}

export default CampEditPopup