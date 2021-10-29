import React from 'react'
import NavDot from '../NavDot'

const CampNav = ({ rowNumber, rowCurrent, handleDotClick }) => {
    
    const dotList = []

    
        let x = 0;
        while (x < rowNumber) {
            if (rowCurrent === x) {
                dotList.push(
                    <NavDot key={x} rowNum={x} active={true}/>
                )
            } else {
                dotList.push(
                    <NavDot key={x} rowNum={x} active={false} handleClick={ handleDotClick}/>
                )
            }
            x++;
        }
    

    return (
        <div className="dot-container">
            {dotList}
        </div>
    )
}

export default CampNav