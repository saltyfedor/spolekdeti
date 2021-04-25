import React from 'react'
import CampPreview from './CampPreview'
import leftArrow from '../Images/icons/left-arrow.svg'
import rightArrow from '../Images/icons/right-arrow.svg'


const CampRow = ({ contentData, current, handleArrowClick }) => { 

    const displayList = contentData[current].map((previewEl, i) => {
        return <CampPreview key={i} camp={previewEl}/>
    })

    return (
        <div className="camp-row">
            <img className="arrow-img" src={leftArrow} alt="left arrow" onClick={() => { handleArrowClick(-1, contentData.length) }}></img>
            {displayList}
            <img className="arrow-img"src={rightArrow} alt="right arrow" onClick={() => { handleArrowClick(1, contentData.length) }}></img>
        </div>
    )

}

export default CampRow