import React from 'react'
import '../../index.css'
import './Nav.css'
import {Link} from 'react-router-dom'
import logo from '../../Images/logo_small.png'

const Navbar = () => {

    return (
        <div className="navbar-container">
            <Link to={`/`} style={{ textDecoration: 'none' }}>
                <img src={logo} alt='logo' className="logo-top"></img>
            </Link>            
            <div className="navbar-links">                
                <a href="kontakt" className="nav-link"><h4 style={{margin:0}}>KONTAKT</h4></a>
            </div>
        </div>
    )

}

export default Navbar

