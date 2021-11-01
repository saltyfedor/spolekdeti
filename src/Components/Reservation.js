import React, { useState, useEffect } from 'react'
import DateMenu from './DateMenu'
import apiAdress from './Variables.js'
import { Link } from "react-router-dom";


const Reservation = ({ campId, price }) => {    
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
                data.sort(function(a, b) {
                    return (a.start < b.start) ? -1 : ((a.start > b.start) ? 1 : 0);
                });                
                updateReservationData(data)
            })
    }

    useEffect(fetchData, [])
    console.log(window.location.origin)
    
    if (window.location.origin === 'https://spolekdeti.cz') {
        return(
            <div className="reservation-container-outer">
                    <div className="reservation-container-inner br-blue-2">
                        <h2 className="c-blue tc">Online přihlašení se připravuje</h2>
                    </div>
                        
            </div>
            )
    } else {
        return (
            <div className="reservation-container-outer">
                <div className="reservation-container-inner">
                    <h2 className="mt0">Přihlásit se</h2>
                    {reservationData ? <div className="date-menu">
                        <DateMenu data={reservationData} price={price} updateDateId={(id) => { updateDateId(id) }} />
                        {dateId ? <Link to={{
                            pathname: '/rezervace',
                            state: {
                                campId: campId,
                                dateId: dateId
                            }
                        }} style={{ textDecoration: 'none' }}><div className="sign-up-button">Příhlásit se</div></Link> :
                            <div className="sign-up-button-inactive">Příhlásit se</div>
                        }
                    </div> : null}
                </div>
            </div>
        )
        
    }
}

export default Reservation