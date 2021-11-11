import React, { useState, useEffect } from "react";
import CampElement from "./CampElement";
import apiAdress from "../../../Variables";

const CampEdit = ({token}) => {
    const [campData, updateCampData] = useState()
    

    const fetchCamps = async () => {
        const res = await fetch(`${apiAdress}camps`)
        if (res.ok) {
            const data = await res.json()
            updateCampData(data)
        }
    }

    const getCamps = () => {
        const campList = campData.map(camp => {
            return (
              
                <CampElement key={camp.id} data={camp} token={token} updatePricing={updateCampPricing}/>
                  
            )
        })
        return campList
    }

    useEffect(() => { fetchCamps() }, [])
    
    const updateCampPricing = (id, base, floating) => {
        const newData = campData.map(camp => {
            if (camp.id === id) {
                const newPricing = Object.assign(camp.pricing, {
                    base: base,
                    floating: floating
                })
                return Object.assign({}, camp, { pricing: newPricing })
            } else { return camp }
        })
        updateCampData(newData)
    }

    if (campData) {
        return (
            <div className="camp-edit-container">
                {getCamps()}
            </div>)
    } else {
        return(<div>Načítám...</div>)
    }
}

export default CampEdit