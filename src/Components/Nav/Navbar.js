import React from 'react'
import '../../index.css'
import './Nav.css'
import contact from '../../Images/icons/contact-round.svg'
import fb from '../../Images/icons/facebook-round.svg'
import ig from '../../Images/icons/instagram-round.svg'
import {Link} from 'react-router-dom'
import logo from '../../Images/logo_small.png'

const Navbar = () => {

    return (
        <div className="navbar-container">
            <Link to={`/`} style={{ textDecoration: 'none' }}>
                <img src={logo} alt='logo' className="logo-top"></img>
            </Link>            
            <div className="navbar-links">
                <a href='https://www.facebook.com/agenturaspolekdeti/'><img className="nav-icon mr15" src={fb} alt=""></img></a>
                <a href='https://www.instagram.com/spolekdeti/'><img className="nav-icon mr15" src={ig} alt=""></img></a>
                <Link to={`/kontakt`}><img className="nav-icon mr15" src={contact} alt=""></img></Link>
            </div>
        </div>
    )

}

export default Navbar

