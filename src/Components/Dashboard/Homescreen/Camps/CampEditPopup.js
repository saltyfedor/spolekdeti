import React,{useState, useEffect} from "react";

const CampEditPopup = ({ data, token, onClose }) => {
    const [camp, updateCamp] = useState(data)

    const checkNUmber = (string) => {
        console.log(typeof string)
    }

    return (
        <div className="camp-popup-outer" onClick={onClose}>
            <div className="camp-popup-inner" onClick={(e) => e.stopPropagation()}>
                <h2  className="mt10 mb10">Tábor</h2>
                <h4 className="mt10 mb0">Název</h4>
                <input className="mt10" value={camp.name} onChange={(e) => { updateCamp(Object.assign({}, camp, {name:e.target.value})) }}/>
                <h4 className="mt10 mb0">Dlouhý název</h4>
                <input className="mt10" value={camp.name_long} onChange={(e) => { updateCamp(Object.assign({}, camp, { name_long: e.target.value })) }} />
                <div>
                    <h2 className="mt10 mb10">Ceny</h2>
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
                </div>
                <div onClick={()=> console.log(camp)}>ULOŽIT</div>
            </div>
        </div>
    )
}

export default CampEditPopup