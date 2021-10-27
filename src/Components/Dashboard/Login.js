import React, { useState } from 'react'
import apiAdress from '../Variables';
import './Dashboard.css'

const Login = ({handleLogIn}) => {
    const [username, updateUser] = useState('')
    const [displayError, updateDisplayError] = useState({
        error: false,
        errorText: ''
    })
    const [pass, updatePass] = useState('')    
    
    const handleLoginClick = async () => {
        if(username.length > 0 && pass.length > 0){
            const res = await fetch(`${apiAdress}login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(
                    {login: username, password: pass}
                )
            }).then(res => res.json())
            if (res.success) {
                handleLogIn(res)
            }
            else {
                updateDisplayError({
                    error: true,
                    errorText: "Špatné přihlašovací údaje"
                })
            }
        } else {
            updateDisplayError({
                error: true,
                errorText: "Prosím zadej všechny údaje"
            })
        }
    }

    return (
        <div className="login-container">
            <h1 className="hero-sub-title tc">Přihlášení</h1>                
            <input className="login-input mt20" placeholder="Zadej login" onChange={(e)=>{updateUser(e.target.value)}} />               
            <input className="login-input mt20" placeholder="Zadej heslo" type="password" onChange={(e) => { updatePass(e.target.value) }} />
            {displayError.error ? <p className="login-error">{displayError.errorText}</p>: null}
            <div className="sign-up-button tc mt10" onClick={handleLoginClick}>Přihlásit se</div>
        </div>
    )
}

export default Login