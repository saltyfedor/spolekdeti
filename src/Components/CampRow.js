import React from 'react'
import CampPreview from './CampPreview'
import leftArrow from '../Images/icons/left-arrow.svg'
import rightArrow from '../Images/icons/right-arrow.svg'


const CampRow = ({ contentData, current, handleArrowClick, showNav }) => { 
  

    const displayList = contentData[current].map((previewEl, i) => {
        let singleElement = false
        if (contentData[0].length === 1) {
            singleElement = true
        }

        if (previewEl) {
            return <CampPreview key={i} camp={previewEl} single={singleElement} />
        }
    })
    
    return (
        <div className="camp-row">
            {showNav? <img className="arrow-img" src={leftArrow} alt="left arrow" onClick={() => { handleArrowClick(-1, contentData.length) }}></img> : null}
            {displayList}
            {showNav? <img className="arrow-img" src={rightArrow} alt="right arrow" onClick={() => { handleArrowClick(1, contentData.length) }}></img> : null}
        </div>
    )

}

export default CampRow