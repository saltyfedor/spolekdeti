import React, {useState} from 'react'

const Login = ({handleLogIn}) => {
    const [username, updateUser] = useState('')
    const [pass, updatePass] = useState('')    
    
    const handleLoginClick = () => {
        //fetch login

    }

    return (
        <div>
            <div>
                <h2>Login</h2>
                <input onChange={(e)=>{updateUser(e.target.value)}} />
            </div>
            <div>
                <h2>Heslo</h2>
                <input onChange={(e)=>{updatePass(e.target.value)}} />
            </div>
            <button onClick={handleLoginClick}>Přihlásit se</button>
        </div>
    )
}

export default Login