import React from "react";
import PriceInput from "./PriceInput";

const PriceList = ({ data, onChange }) => {
    
    const newData = [...data]

    const handleInputChange = (inputObj) => {
        const newInputData = []
        newData.forEach(priceFloat => {
            if (priceFloat.id === inputObj.id) newInputData.push(inputObj)
            else newInputData.push(priceFloat)
        });
        onChange(newInputData)
    }

    const inputList = data.map(priceFloat => {
        return <PriceInput data={priceFloat} onChange={handleInputChange}/>
    })

    return (
        <div>
            {inputList}
        </div>
    )
}

export default PriceList