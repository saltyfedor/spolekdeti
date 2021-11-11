import React, {useState} from "react";
import CapacityPopup from "./CapacityPopup";
import apiAdress from "../../../Variables";
import moment from "moment";

const CapacityElement = ({ data, updateCapacity, token }) => {
    const [displayPopup, updateDisplayPopup] = useState(false)

    const newData = Object.assign({}, data)
    
    const closePopup = () => { updateDisplayPopup(false) }
    const showPopup = () => { updateDisplayPopup(true) }
    
    const handleDataChange = (newProperty) => {
        Object.assign(newData, newProperty)
    }
    
    const handleDataSubmit = async () => {        
        const res = await fetch(`${apiAdress}admin/capacity`, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            'x-access-token': token
            },
            body: JSON.stringify({
                id: newData.id,
                cap: newData.capacity,
                start: newData.start,
                end: newData.end
            })
        })
        if(res.ok){
            updateCapacity(newData)
            updateDisplayPopup(false)
        }
       
    }

    return (
        <div className="capacity-element-container">
            <h4 className="mv10">{`Od : ${moment(data.start).format('DD.MM.YYYY')} do : ${moment(data.end).format('DD.MM.YYYY')}, kapacita : ${data.capacity}`}</h4>
            <div className="camp-edit-button tc" onClick={showPopup}>Upravit</div>
            {displayPopup ? <CapacityPopup data={data} onChange={handleDataChange} onClose={closePopup} onSave={handleDataSubmit}/> : null}
        </div>
    )
}

export default CapacityElement