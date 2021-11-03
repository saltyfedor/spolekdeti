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
              
                    <CampElement data={camp} token={token}/>
                  
            )
        })
        return campList
    }

    useEffect(() => {fetchCamps()},[])
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