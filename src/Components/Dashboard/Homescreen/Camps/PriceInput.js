import React from "react";
import moment from "moment";

const PriceInput = ({ data, onChange }) => {
    const newData = Object.assign({}, data)

    const handleDateChange = (date, type) => {       
        const dateIso = moment(date).utc().format()
        if (type === 'start') Object.assign(newData, { start: dateIso })
        else Object.assign(newData, { end: dateIso })
        onChange(newData)
    }

    const handlePriceChange = (price) => {
        Object.assign(newData, { price: parseInt(price) })
        onChange(newData)
    }

    return (
        <div className="price-float-input-container">
            <span className="price-float-input-wrapper">
                <h4 className="price-float-input-label">Od :</h4>
                <input className="price-float-input" type="date" defaultValue={moment(data.start).format('YYYY-MM-DD')} onChange={(e) => { handleDateChange(e.target.value, 'start') }} />
            </span>
            <span className="price-float-input-wrapper">
                <h4 className="price-float-input-label">Do :</h4>
                <input className="price-float-input" type="date" defaultValue={moment(data.end).format('YYYY-MM-DD')} onChange={ (e) => { handleDateChange(e.target.value, 'end')} }/>
            </span>
            <span className="price-float-input-wrapper">
            <h4 className="price-float-input-label">Cena :</h4>
                <input className="price-float-input-price" type="number" maxLength="5" defaultValue={data.price} onChange={ (e) => { handlePriceChange(e.target.value)} }/>
            </span>
        </div>
    )
}

export default PriceInput