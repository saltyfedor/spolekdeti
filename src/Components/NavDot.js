import React, { useState } from 'react'

const NavDot = ({ active }) => {
    if (active) {
        return (
            <div className="active-dot"></div>
        )
    } else {
        return (
            <div className="passive-dot"></div>
        )
    }    
}

export default NavDot