import React, { useState, useEffect } from 'react'
import DateMenu from './DateMenu'
import apiAdress from './Variables.js'
import { Link } from "react-router-dom";


const Reservation = ({ campId }) => {    
    const [reservationData, updateReservationData] = useState()
    const [dateId, updateDateId] = useState()

    const fetchData = () => {
        fetch(`${apiAdress}date/${campId}`)
            .then(res => res.json())
            .then(data => {
                data.forEach(date => {
                    const freeSlots = date.capacity - date.occupied
                    Object.assign(date,{freeSlots : freeSlots})
                });                
                updateReservationData(data)
            })
    }

    useEffect(fetchData, [])
    
    return (
        <div className="reservation-container-outer">
            <div className="reservation-container-inner">
                <h2>Přihlásit se</h2>
                {reservationData? <div className="date-menu">
                    <DateMenu data={reservationData} updateDateId={(id) => {updateDateId(id)}}/>
                    <Link to={{
                        pathname: '/rezervace',
                        state: {
                            campId: campId,
                            dateId: dateId
                        }
                    }} style={{ textDecoration: 'none' }}><div className="sign-up-button">Příhlásit se</div></Link>
                </div> : null}               
            </div>
        </div>
    )
}

export default Reservation