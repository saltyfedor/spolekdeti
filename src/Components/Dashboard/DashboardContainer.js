import React, { useState } from 'react'
import HomeScreen from './Homescreen/Homescreen';
import { useDispatch, useSelector } from 'react-redux'
import { setToken } from './dashSlice';
import Login from './Login'

const DashboardContainer = () => {
    const [isLogged, updateIsLogged] = useState({ is: false, token: '' });
    const dispatch = useDispatch()   
    
    const handleLogIn = (res) => {
        updateIsLogged({ is: true, token: res.token })
        dispatch(setToken(res.token))
    }
    
    const handleLogOut = () => {
        updateIsLogged({is: false})
    }

    return (
        <div>
            {!isLogged.is ? <Login handleLogIn={handleLogIn} /> : <HomeScreen token={isLogged.token} onLogout={handleLogOut}/>}
        </div>
    )
}

export default DashboardContainer