import React from 'react'

const NavDot = ({ active, rowNum, handleClick }) => {
    if (active) {
        return (
            <div className="active-dot"></div>
        )
    } else {
        return (
            <div className="passive-dot" onClick={() => { handleClick(rowNum) }}></div>
        )
    }    
}

export default NavDot