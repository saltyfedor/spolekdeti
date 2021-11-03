import React, { useState } from 'react'
import HomeScreen from './Homescreen/Homescreen';
import Login from './Login'

const DashboardContainer = () => {
    const [isLogged, updateIsLogged] = useState({is: false, token: ''});   
    
    const handleLogIn = (res) => {
        updateIsLogged({ is: true, token: res.token })
    }
    
    const handleLogOut = () => {
        updateIsLogged({is: false})
    }

    return (
        <div>
            {!isLogged.is ? <Login handleLogIn={handleLogIn} /> : <HomeScreen token={isLogged.token} logOut={handleLogOut}/>}
        </div>
    )
}

export default DashboardContainer