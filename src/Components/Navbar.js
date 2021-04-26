import React from 'react'
import '../index.css'
import {Link} from 'react-router-dom'
import logo from '../Images/logo_small.png'

const Navbar = () => {

    return (
        <div className="navbar-container">
            <Link to={`/`} style={{ textDecoration: 'none' }}>
                <img src={logo} alt='logo' className="logo-top"></img>
            </Link>            
            <div className="navbar-links">                
                <Link to={`/Kontakt`} style={{ textDecoration: 'none' }} className="nav-link">KONTAKT</Link>
            </div>
        </div>
    )

}

export default Navbar