import React from 'react'
import CampPreview from './CampPreview'

const Camps = ({ campData, onClickCamp }) => {
  
    const campList = campData.map(camp => {
        let shortName = camp.name.substring(0, camp.name.indexOf(':'));
        if (shortName === '') {shortName= camp.name }
        return <CampPreview key={camp.id} camp={camp} onClickCamp={onClickCamp} shortName={ shortName }/>
    });   

    return (
        <div className="camp-section-container">
            <h1 className="camp-section-title">TÁBORY</h1>
            <div className="camp-section">
                {campList}
            </div>
        </div>
    )
 }

export default Camps