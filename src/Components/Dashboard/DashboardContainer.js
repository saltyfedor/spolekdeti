import React, { useState, useEffect } from 'react'

import Login from './Login'

const DashboardContainer = () => {
    const [isLogged, updateIsLogged] = useState({is: false, token: ''});   
    
    const handleLogIn = (res) => {
        updateIsLogged({ is: true, token: res.token })
    }

    const handleLogOut = () => {
        updateIsLogged(false)
    }

    return (
        <div>
            {!isLogged.is ? <Login handleLogIn={handleLogIn} /> : <div>Vítej</div>}
        </div>
    )
}

export default DashboardContainer