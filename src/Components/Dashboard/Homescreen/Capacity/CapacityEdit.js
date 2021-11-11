import React, { useState, useEffect } from "react";
import CapacityElement from "./CapacityElement";
import apiAdress from "../../../Variables";
import './Capacity.css'

const CapacityEdit = ({ token }) => {
    const [capacityData, updateCapacityData] = useState()

    const fetchCapacity = async () => {
        const res = await fetch(`${apiAdress}admin/capacity`, {
            method: 'GET',
            headers: {
            'x-access-token': token
            }
        })
        if (res.ok) {
            const data = await res.json()
            data.sort(function(a, b) { 
                return a.id - b.id
              })
            updateCapacityData(data)
        }
    }

    useEffect(fetchCapacity, [])
    

    const getCapacities = () => {
        const capacityList = capacityData.map(capObj => {
            return <CapacityElement key={capObj.id} data={capObj} updateCapacity={updateCapData} token={token}/>
        })
        return capacityList
    }

    const updateCapData = (newCapObj) => {
        const newData = capacityData.map(capObj => {
            if (capObj.id === newCapObj.id) {
                return newCapObj
            } else {
                return capObj
            }
        })
        updateCapacityData(newData)
    }    

    return (
        <div className="capacity-container">
            {capacityData? getCapacities() : null}
        </div>
    )
}

export default CapacityEdit