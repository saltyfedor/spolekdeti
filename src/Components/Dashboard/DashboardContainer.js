import React, { useState, useEffect } from 'react'
import Login from './Login'

const DashboardContainer = () => {
    const [isLogged, updateIsLogged] = useState(false);
    
    const handleLogIn = () => {
        updateIsLogged(true)
    }

    const handleLogOut = () => {
        updateIsLogged(false)
    }

    return (
        <div>
            {!isLogged ? <Login handleLogIn={handleLogIn} /> : <div></div>}
        </div>
    )
}

export default DashboardContainer