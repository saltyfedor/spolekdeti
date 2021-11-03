import React, { useState } from "react";
import CampEditPopup from "./CampEditPopup";

const CampElement = ({ data, token }) => {
    const [displayPopup, updatePopup] = useState(false)
    
    const closePopup = () => {updatePopup(false)}

    return (
        <div key={data.id} className="camp-edit-element">
            <h3 className="tc">{data.name}</h3>
            <div className="camp-edit-button tc" onClick={() => {updatePopup(true)}}>Upravit</div>
            {displayPopup ? <CampEditPopup data={data} token={token} onClose={closePopup}/>: null}
        </div>
    )
}

export default CampElement